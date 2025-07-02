"use client";
import React, { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { usePathname } from "next/navigation";

const BlogSlider = ({}) => {
  const splideRef = useRef(null);
  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        perPage: 3,
        gap: "16px",
        arrows: false,
        drag: "free",
        pagination: true,
        rewind: true,
        paginationKeyboard: true,
        paginationDirection: "ltr",
        autoplay: true,
        breakpoints: {
          768: {
            perPage: 1,
          },
          1024: {
            perPage: 3,
          },
        },
      });

      splide.mount();
      const paginationContainer =
        splideRef.current.querySelector(".custom-pagination");
      const pagination = splideRef.current.querySelector(".splide__pagination");
      if (pagination && paginationContainer) {
        paginationContainer.appendChild(pagination);
        pagination.style.display = "flex";
      }

      return () => splide.destroy();
    }
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const res = await axios.get(
        "https://xntric-blog-server-production.up.railway.app/api/v2/blogs"
      );
      setData(res.data.blogs);
    };
    getAllBlogs();
  }, []);
  const location = usePathname();
  return (
    <section ref={splideRef} className="splide" aria-label="Blog Slider">
      <div className="splide__track">
        <ul className="splide__list gap-2">
          {data.map((card, index) => (
            <Link
              className="splide__slide hover:opacity-75 transition-opacity ease-in duration-500"
              href={`${location.startsWith === "blog" ? "" : "/blog/"}${
                card.slug
              }`}
              key={index}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[20px] opacity-60"></div>
              <Image
                src={card.imageURL}
                width={300}
                height={300}
                alt="blog 1"
                className="w-full rounded-[20px]"
              />
              <div className="max-w-[80%] absolute bottom-6 left-6">
                <span className="text-[#D4D4D8] text-[14px]">
                  {card?.publishedDate?.slice(0, 10)}
                </span>
                <p className="text-white text-[16px] line-clamp-2">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className="custom-pagination"></div>
    </section>
  );
};

export default BlogSlider;
