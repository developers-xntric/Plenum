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
  // Ref to store the Splide instance, ensuring it’s initialized only once
  const splideInstanceRef = useRef(null);
  const [data, setData] = useState([]);
  const location = usePathname();

  // Fetch blog data on component mount
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const res = await axios.get(
          "https://xntric-blog-server-production.up.railway.app/api/v2/blogs"
        );
        setData(res.data.blogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    getAllBlogs();
  }, []);

 useEffect(() => {
  if (data.length > 0 && splideRef.current) {
    const splide = new Splide(splideRef.current, {
      perPage: 3,
      gap: "16px",
      arrows: false,
      drag: "free",
      pagination: false, // Disable default pagination
      rewind: true,
      autoplay: true,
      breakpoints: {
        768: { perPage: 1 },
        1024: { perPage: 3 },
      },
    });

    splide.mount();

    // Create custom pagination with 3 dots
    const paginationContainer = splideRef.current.querySelector('.custom-pagination');
    if (paginationContainer) {
      paginationContainer.innerHTML = ''; // Clear any existing content
      for (let i = 0; i < 3; i++) {
        const button = document.createElement('button');
        button.className = 'splide__pagination__page'; // Use Splide's default dot styling
        button.type = 'button';
        button.setAttribute('aria-label', `Go to group ${i + 1}`);
        button.addEventListener('click', () => {
          const totalSlides = splide.length;
          let targetIndex;
          if (i === 0) {
            targetIndex = 0; // Beginning
          } else if (i === 1) {
            targetIndex = Math.ceil(totalSlides / 3); // Middle group start
          } else {
            targetIndex = Math.ceil(2 * totalSlides / 3); // End group start
          }
          splide.go(targetIndex);
        });
        paginationContainer.appendChild(button);
      }

      // Update active dot when slider moves
      splide.on('moved', (newIndex) => {
        const totalSlides = splide.length;
        const groupSize = Math.ceil(totalSlides / 3);
        let activeDot;
        if (newIndex < groupSize) {
          activeDot = 0;
        } else if (newIndex < 2 * groupSize) {
          activeDot = 1;
        } else {
          activeDot = 2;
        }
        const buttons = paginationContainer.querySelectorAll('.splide__pagination__page');
        buttons.forEach((btn, index) => {
          btn.classList.toggle('is-active', index === activeDot);
        });
      });

      // Set initial active dot
      splide.emit('moved', splide.index);
    }
  }
}, [data]);
  useEffect(() => {
    return () => {
      if (splideInstanceRef.current) {
        splideInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <section ref={splideRef} className="splide" aria-label="Blog Slider">
      <div className="splide__track">
        <ul className="splide__list">
          {data.map((card, index) => (
            <Link
              className="splide__slide hover:opacity-75 transition-opacity ease-in duration-500"
              href={`${location.startsWith("/blog") ? "" : "/blog/"}${
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
                  {card.title}
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