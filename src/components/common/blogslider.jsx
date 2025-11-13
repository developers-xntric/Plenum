"use client";
import React, { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { usePathname } from "next/navigation";


const BlogSlider = () => {
  const splideRef = useRef(null);
  const splideInstanceRef = useRef(null);
  const [data, setData] = useState([]);
  const location = usePathname();

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      initSlider();
    }
  }, [data]);

  useEffect(() => {
    return () => {
      splideInstanceRef.current?.destroy();
    };
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "/api/plenum-blogs"
      );
      const fileterData = res.data.blogs.filter((item) => item.blogCategory.toLowerCase() === "plenum");
      setData(fileterData);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  const initSlider = () => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      perPage: 3,
      gap: "16px",
      arrows: false,
      drag: "free",
      pagination: false,
      rewind: true,
      autoplay: true,
      breakpoints: {
        768: { perPage: 1 },
        1024: { perPage: 3 },
      },
    });

    splide.mount();
    splideInstanceRef.current = splide;

    createPagination(splide);
  };

  const createPagination = (splide) => {
    const container = splideRef.current.querySelector(".custom-pagination");
    if (!container) return;

    container.innerHTML = "";

    const total = splide.length;
    const groupSize = Math.ceil(total / 3);

    for (let i = 0; i < 3; i++) {
      const btn = document.createElement("button");
      btn.className = "splide__pagination__page";
      btn.type = "button";
      btn.setAttribute("aria-label", `Go to group ${i + 1}`);

      const target = i * groupSize;
      btn.addEventListener("click", () => splide.go(target));
      container.appendChild(btn);
    }

    splide.on("moved", (index) => updateActiveDot(index, groupSize, container));
    splide.emit("moved", splide.index); // Set initial active dot
  };

  const updateActiveDot = (index, groupSize, container) => {
    const active = Math.min(Math.floor(index / groupSize), 2);
    const dots = container.querySelectorAll(".splide__pagination__page");

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === active);
    });
  };

  return (
    <section ref={splideRef} className="splide" aria-label="Blog Slider">
      <div className="splide__track">
        <ul className="splide__list">
          {data.map((card, index) => (
            <Link
              key={index}
              href={`${location.startsWith("/blog") ? "" : "/blog/"}${card.slug}`}
              className="splide__slide hover:opacity-75 transition-opacity ease-in duration-500 relative"
            >
              <div className="absolute top-0 left-0 w-full h-[100%] bg-black rounded-[20px] opacity-60" />
                <Image
                  src={card.imageURL}
                  width={300}
                  height={300}
                  alt="blog"
                  priority
                  className="w-full h-full rounded-[20px]"
                />
              <div className="max-w-[80%] absolute bottom-6 left-6">
                <span className="text-[#D4D4D8] text-[14px]">
                  {card.publishedDate?.slice(0, 10)}
                </span>
                <p className="text-white text-[16px] line-clamp-2">
                  {card.title}
                </p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className="custom-pagination" />
    </section>
  );
};

export default BlogSlider;
