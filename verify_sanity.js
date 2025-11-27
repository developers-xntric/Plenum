const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

// Load env vars from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            let val = value.trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }
            process.env[key.trim()] = val;
        }
    });
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_TOKEN || process.env.NEXT_PUBLIC_SANITY_API_SECRET; // Try both
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

console.log('Config:', { projectId, dataset, apiVersion, hasToken: !!token });

if (!projectId || !dataset) {
    console.error('Missing Sanity config');
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // We want fresh data for sitemap usually, or maybe true. Sitemap uses fetch with revalidate.
    token,
});

async function run() {
    const query = `*[_type == "plenum_blogs" && blogCategory match "plenum"] {
      "slug": slug.current,
      "updatedAt": _updatedAt,
      "publishedDate": publishedDate,
      "createdAt": _createdAt
    }`;

    try {
        const blogs = await client.fetch(query);
        console.log(`Found ${blogs.length} blogs`);
        if (blogs.length > 0) {
            console.log('Sample blog:', blogs[0]);
        }
    } catch (err) {
        console.error('Fetch failed:', err);
    }
}

run();
