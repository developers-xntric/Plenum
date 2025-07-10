"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";
const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const res = await axios.get("https://xntric-blog-server-production.up.railway.app/api/v2/blogs");
      setData(res.data.blogs);
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
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {data.map((card, index) => (
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
                     {card.publishedDate.slice(0,10)}
                  </span>
                  <p className="text-white text-[16px] line-clamp-2">
                    {card.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Cards;
