import slugify from 'slugify'
import fs from 'fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import crypto from 'node:crypto'
import fetch from 'node-fetch'
import { client } from '@/sanity/lib/client'

const projectId = "6znau6mt"
const dataset = 'production'

const CATEGORY_OPTIONS = [
    'Development', 'Design', 'Marketing', 'Business',
    'Education', 'Lifestyle', 'Artificial Intelligence', 'Branding', 'Article', 'Blog'
]

const BLOG_CATEGORY_OPTIONS = ['xntric ae', 'xntric me', 'xntric ca', 'plenum', 'LPS']

const DEFAULT_CATEGORY = 'Development'
const DEFAULT_BLOG_CATEGORY = 'plenum'

async function loadBlogs() {
    try {
        const mod = await import(pathToFileURL(path.resolve('./blog.js')))
        if (mod?.blogs) return mod.blogs
        if (mod?.default) return mod.default
    } catch (_) { }

    try {
        const raw = await fs.readFile('./blog.js', 'utf8')
        const body = raw
            .replace(/^[\s\S]*?const\s+blogs\s*=\s*/m, '')
            .replace(/;?\s*export\s*{[\s\S]*?}\s*;?\s*$/m, '')
            .replace(/;?\s*module\.exports[\s\S]*$/m, '')
            .trim()

        const arr = Function('"use strict";return (' + (body.endsWith(';') ? body.slice(0, -1) : body) + ');')()
        if (Array.isArray(arr)) return arr
    } catch (_) { }

    try {
        return JSON.parse(await fs.readFile('./blogs.json', 'utf8'))
    } catch (err) {
        console.error('Failed to load blogs from blog.js or blogs.json:', err.message)
        process.exit(1)
    }
}

const toSlug = (title, fallback = 'untitled') =>
    slugify(title || fallback, { lower: true, strict: true }).slice(0, 96)

function pickCategory(val) {
    return typeof val === 'string' && CATEGORY_OPTIONS.includes(val)
        ? val
        : DEFAULT_CATEGORY
}

function pickBlogCategory(val) {
    return typeof val === 'string' && BLOG_CATEGORY_OPTIONS.includes(val)
        ? val
        : DEFAULT_BLOG_CATEGORY
}

async function uploadImageFromUrl(url, altFallback = '') {
    if (!url) return null
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const buf = Buffer.from(await res.arrayBuffer())
        const filename = safeFilenameFromUrl(url)
        const asset = await client.assets.upload('image', buf, { filename })

        return {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
            alt: altFallback || undefined,
        }
    } catch (err) {
        console.warn('Image upload failed:', url, '-', err.message)
        return null
    }
}

function safeFilenameFromUrl(u) {
    try {
        const { pathname } = new URL(u)
        const base = path.basename(pathname) || 'image'
        return base.split('?')[0].split('#')[0]
    } catch {
        return 'image'
    }
}

function mapSubsections(subsections) {
    if (!Array.isArray(subsections)) return []
    return subsections.map(s => ({
        _type: 'object',
        subtitle: s?.subtitle || '',
        subdescription: Array.isArray(s?.subdescription)
            ? s.subdescription.map(x => String(x ?? ''))
            : [],
        lists: Array.isArray(s?.lists)
            ? s.lists.map(lst => ({
                _type: 'object',
                listTitle: lst?.listTitle || '',
                listDescription: lst?.listDescription ? String(lst.listDescription) : '',
                items: Array.isArray(lst?.items)
                    ? lst.items.map(it => ({
                        _type: 'object',
                        title: it?.title || '',
                        description: it?.description ? String(it.description) : '',
                    }))
                    : [],
            }))
            : [],
    }))
}

function mapFaqs(faqs) {
    if (!Array.isArray(faqs)) return []
    return faqs.map(f => ({
        _type: 'object',
        question: f?.question || '',
        answer: f?.answer ? String(f.answer) : ''
    }))
}

function stableIdFor(blog) {
    const legacy = blog?._id || blog?.id || blog?.slug
    if (legacy) return `imported-blog-${String(legacy)}`

    const h = crypto.createHash('sha1')
        .update(JSON.stringify({ t: blog?.title, s: blog?.slug, c: blog?.createdAt }))
        .digest('hex')
        .slice(0, 16)

    return `imported-blog-${h}`
}

function ensureISO(dt) {
    const d = dt ? new Date(dt) : new Date()
    return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString()
}

async function upsertBlog(blog) {
    const _id = stableIdFor(blog)

    const slugCurrent = blog?.slug || toSlug(blog?.title)

    const mainImage = await uploadImageFromUrl(
        blog?.imageURL,
        blog?.imageAlt || blog?.title
    )

    const bannerImage = await uploadImageFromUrl(
        blog?.bannerImageURL,
        blog?.bannerAlt || `${blog?.title || ''} banner`
    )

    const doc = {
        _id,
        _type: 'plenum_blogs',
        title: blog?.title || 'Untitled',
        description: blog?.description ? String(blog.description) : '',
        metaDescription: blog?.metaDescription ? String(blog.metaDescription) : '',
        category: pickCategory(blog?.category),
        blogCategory: pickBlogCategory(blog?.blogCategory),
        image: mainImage || undefined,
        bannerImage: bannerImage || undefined,
        quotes: blog?.quotes ? String(blog.quotes) : '',
        conclusion: blog?.conclusion ? String(blog.conclusion) : '',
        subsections: mapSubsections(blog?.subsections),
        faqs: mapFaqs(blog?.faqs),
        publishedDate: ensureISO(blog?.publishedDate || blog?.createdAt),
        slug: { _type: 'slug', current: String(slugCurrent).slice(0, 96) },
    }

    return client.createOrReplace(doc)
}

export async function run() {
    const blogs = await loadBlogs()

    // 🔥 Only migrate Plenum category blogs
    const plenumBlogs = blogs.filter(
        (b) => String(b.blogCategory).toLowerCase() === 'plenum'
    )

    console.log(
        `Importing ${plenumBlogs.length} Plenum blog(s) → sanity://${projectId}/${dataset}`
    )

    let ok = 0, fail = 0

    for (const b of plenumBlogs) {
        try {
            await upsertBlog(b)
            ok++
            console.log(`✓ ${b.title || b._id || 'Untitled'}`)
        } catch (err) {
            fail++
            console.error(
                `✗ ${b.title || b._id || 'Untitled'} — ${err.message}`
            )
        }
    }

    console.log(`Done. Success: ${ok}, Failed: ${fail}`)
}

// await run().catch((e) => {
//     console.error(e)
//     process.exit(1)
// })
