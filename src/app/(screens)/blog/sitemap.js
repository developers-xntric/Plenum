import { client } from "../../../sanity/lib/client";

/**
 * Generates the sitemap for the blog section.
 * This uses Next.js's metadata route convention to automatically create /blog/sitemap.xml.
 * An array of sitemap entries.
 */
export default async function sitemap() {
  // Static URLs – replace with your actual logic if needed
  const staticUrls = [
    {
      url: "https://plenum-tech.com/blog", // Homepage of blog
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://plenum-tech.com/blog/",
      lastModified: new Date("2023-01-01"), // Or fetch from your data source
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic URLs – fetch from Sanity
  const dynamicUrls = await fetchBlogPosts();

  // Combine and return
  return [...staticUrls, ...dynamicUrls];
}

/**
 * Helper function to fetch dynamic blog post URLs from Sanity.
 *
 * @returns {Promise<MetadataRoute.Sitemap>} Promise resolving to an array of sitemap entries.
 */
async function fetchBlogPosts() {
  try {
    // Fetch the list of blogs from Sanity
    const query = `*[_type == "plenum_blogs" && blogCategory match "plenum"] {
      "slug": slug.current,
      "updatedAt": _updatedAt,
      "publishedDate": publishedDate,
      "createdAt": _createdAt
    }`;

    const blogs = await client.fetch(query);

    return blogs.map((blog) => ({
      url: `https://plenum-tech.com/blog/${blog.slug}`,
      lastModified: new Date(
        blog.updatedAt || blog.publishedDate || blog.createdAt || new Date()
      ),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    // Return empty array on error to avoid breaking the sitemap
    return [];
  }
}


// For large sitemaps (>50,000 URLs), optionally implement this to split into multiple files
// export async function generateSitemaps() {
//   const totalUrls = await getTotalUrlCount(); // Your logic
//   const chunks = Math.ceil(totalUrls / 50000);
//   return Array.from({ length: chunks }, (_, i) => ({ id: i }));
// }

// Then modify the default export to accept { id }
// export default async function sitemap({ id }) {
//   const start = id * 50000;
//   const urls = await fetchUrls(start, start + 50000); // Your paginated fetch
//   return urls;
// }
