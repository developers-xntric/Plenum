"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const buildImageSchema = (card, imageSrc) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: imageSrc,
  name: card.title,
  caption: card.title,
  contentUrl: imageSrc,
  thumbnailUrl: card.thumbnailURL || imageSrc,
  description:
    card.metaDescription ||
    card.description ||
    `Image about ${card.title} from Plenum Tech.`,
  uploadDate: card.publishedDate || card.uploadDate || new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "Plenum Tech Solutions",
  },
});

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const res = await fetch("/api/plenum-blogs");
        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }
        const body = await res.json();
        const blogs = Array.isArray(body?.blogs) ? body.blogs : [];
        const filtered = blogs.filter(
          (item) =>
            item.blogCategory &&
            item.blogCategory.toLowerCase() === "plenum"
        );
        setCards(filtered);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    getAllBlogs();
  }, []);

  return (
    <section className="py-20">
      <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto">
        {loading ? (
          <div className="flex h-[60vh] items-center justify-center">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-[#FF6035]" />
          </div>
        ) : cards.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            No blogs available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[...cards].reverse().map((card) => {
              const imageSrc =
                card.imageURL ||
                card.bannerImageURL ||
                card.imageUrl ||
                card.bannerImageUrl ||
                "";

              if (!imageSrc) {
                console.warn(
                  "Missing image for blog card – falling back to solid background",
                  card.slug
                );
              }

              return (
                <Link href={`/blog/${card.slug}`} key={card._id ?? card.slug}>
                  <div className="relative overflow-hidden rounded-[20px] bg-black transition-opacity duration-500 ease-in hover:opacity-80">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        width={600}
                        height={400}
                        alt={card.title}
                        className="h-full w-full object-cover"
                        priority={false}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute bottom-6 left-6 z-[1] max-w-[80%]">
                      {card.publishedDate && (
                        <span className="text-[14px] text-[#D4D4D8]">
                          {card.publishedDate.slice(0, 10)}
                        </span>
                      )}
                      <p className="line-clamp-2 text-[16px] font-semibold text-white">
                        {card.title}
                      </p>
                    </div>
                    {imageSrc && (
                      <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                          __html: JSON.stringify(
                            buildImageSchema(card, imageSrc)
                          ),
                        }}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
