// src/app/api/plenum-blogs/route.js
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
    try {
        const query = `
       *[_type == "plenum_blogs" && blogCategory == "plenum"]
       | order(publishedDate asc) {
        _id,
        title,
        description,
        metaDescription,
        blogCategory,
        category,
        publishedDate,
        "slug": slug.current,
        "imageURL": image.asset->url,
        "bannerImageURL": bannerImage.asset->url
      }
    `;

        const blogs = await client.fetch(query);

        return NextResponse.json({ blogs }, { status: 200 });
    } catch (error) {
        console.error("Error fetching plenum blogs:", error);
        return NextResponse.json(
            { error: "Failed to fetch plenum blogs" },
            { status: 500 }
        );
    }
}
