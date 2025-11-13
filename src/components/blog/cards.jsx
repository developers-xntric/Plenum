"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const getAllBlogs = async () => {
      setLoading(true)
      try {
        const res = await axios.get("/api/plenum-blogs");
        const filterData = res.data.blogs.filter(
          (item) => item.blogCategory.toLowerCase() === "plenum"
        );
        setData(filterData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); 
      }
    };
    getAllBlogs();
  }, []);
  
  return (
    <>
      <Head>
        <title>{data.metaTitle || data.title || "Blog | Plenum Tech"}</title>
        <meta
          name="description"
          content={data.metaDescription || data.description || "Explore insightful blogs from Plenum Tech on AI, Cloud, and ERP solutions."}
        />
        <link
          rel="canonical"
          href={`https://www.plenum-tech.com/blog/${data.slug}`}
        />
      </Head>

      <section className="py-20">
        <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto">
           {loading ? (
            <div className="flex justify-center items-center h-[60vh]">
              <div className="w-14 h-14 border-4 border-gray-300 border-t-[#FF6035] rounded-full animate-spin"></div>
            </div>
          ) : data.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No blogs available at the moment.
            </p>
          ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...data].reverse().map((card, index) => {
              // Define the imageSchema per card
              const imageSchema = {
                  "@context": "https://schema.org",
                  "@type": "ImageObject",
                  url: card.imageURL,
                  name: card.title,
                  caption: card.title,
                  contentUrl: card.imageURL,
                  thumbnailUrl: card.thumbnailURL || card.imageURL,
                  description:
                    card.description ||
                    `Image about ${card.title} from Plenum Tech.`,
                  uploadDate: card.uploadDate || "2025-08-04T12:00:00+00:00",
                  author: {
                    "@type": "Organization",
                    name: "Plenum Tech Solutions",
                  },
                };

              return (
                <Link href={`blog/${card.slug}`} key={index}>
                  <div className="relative hover:opacity-75 transition-opacity ease-in duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[20px] opacity-60"></div>
                    <Image
                      src={card.imageURL}
                      width={300}
                      height={300}
                      alt={card.title}
                      className="w-full rounded-[20px]"
                    />
                    <div className="max-w-[80%] absolute bottom-6 left-6">
                      <span className="text-[#D4D4D8] text-[14px]">
                        {card.publishedDate.slice(0, 10)}
                      </span>
                      <p className="text-white text-[16px] line-clamp-2">
                        {card.title}
                      </p>
                    </div>
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cards;
