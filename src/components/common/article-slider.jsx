'use client';

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import ArticleCard from "../article/articleCard";
import Button from "../common/button"
// import { ArrowUpRight } from "lucide-react";

const articleUrls = [
    'https://thedailyguardian.com/others/the-future-of-manufacturing-with-microsoft-dynamics-365-is-here-are-you-ready/',
    'https://thearabianpost.com/dynamics-365-business-central-overview-everything-you-need-to-know/',
    // Add more URLs as needed
];

export default function ArticleSlider({ bg = "black", title, paragraph, className }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const carouselRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging.current && !isAnimating) {
                const nextIndex = (activeIndex + 1) % articleUrls.length;
                goToSlide(nextIndex);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [activeIndex, articleUrls.length, isAnimating]);

    const goToSlide = (index) => {
        if (isAnimating || index === activeIndex) return;
        setIsAnimating(true);
        setActiveIndex(index);
        if (carouselRef.current) {
            const article = carouselRef.current.children[index];
            const scrollPos = article.offsetLeft - 250;
            carouselRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    const handleMouseDown = (e) => {
        if (isAnimating) return;
        isDragging.current = true;
        startX.current = e.pageX - (carouselRef.current?.offsetLeft || 0);
        scrollLeft.current = carouselRef.current?.scrollLeft || 0;
        carouselRef.current.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        carouselRef.current.style.cursor = "grab";
        const currentScroll = carouselRef.current.scrollLeft;
        let minDiff = Infinity;
        let closestIndex = 0;

        for (let i = 0; i < articleUrls.length; i++) {
            const article = carouselRef.current.children[i];
            const targetPosition = article.offsetLeft - 100;
            const diff = Math.abs(targetPosition - currentScroll);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = i;
            }
        }

        goToSlide(closestIndex);
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current || isAnimating) return;
        e.preventDefault();
        const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX.current) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchStart = (e) => {
        if (isAnimating) return;
        isDragging.current = true;
        startX.current = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
        scrollLeft.current = carouselRef.current?.scrollLeft || 0;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current || isAnimating) return;
        const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX.current) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchEnd = () => {
        handleMouseUp();
    };

    useEffect(() => {
        if (carouselRef.current) {
            goToSlide(activeIndex);
        }
    }, []);

    return (
        <div className={cn(className)}>
            <div className={`w-full ${bg === "black" ? "bg-[#282526]" : "bg-white"} text-white py-14 lg:py-20 font-['Archivo']`}>
                <div className="w-[95%] 2xl:w-[88%] ms-auto">
                    <div className=" lg:flex-row  flex-col flex items-center lg:items-start justify-between">
                        <div>
                            <h2 className={`text-3xl md:text-left text-center font-semibold mb-6 md:mb-2 lg:mb-6 text-[30px] lg:text-[50px] ${bg === "black" ? "text-white" : "text-[#101010]"}`}>
                                {title || "Discover Our Articles"}
                            </h2>
                            <p className={`md:text-left text-center opacity-60 text-[14] md:text-[15px] mb-10 md:w-[70%] lg:w-[60%] xl:w-[80%] 2xl:w-[500px] ${bg === "black" ? "text-[#FFF]" : "text-[#101010]"}`}>
                                {paragraph || "Explore our latest posts for insights in design, learning, and innovation. Stay updated with trends and breakthroughs in the creative world."}
                            </p>
                        </div>
                        <div className="mb-16 lg:mb-0 lg:w-[20%] lg:mt-5">
                            <Button
                                text={"View All Articles"}
                                link="/article"
                                className={
                                    `bg-[#FF6035] cursor-pointer py-[10px] hover:bg-[#101010] hover:text-white  transition-all duration-500 px-5 xl:px-5 text-[#000]`
                                }
                            ></Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            ref={carouselRef}
                            className="flex overflow-x-hidden gap-4 md:gap-6 mb-8 cursor-grab"
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {articleUrls.map((url, index) => {
                                const isActive = index === activeIndex;
                                const isFirstVisible = index === activeIndex;

                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "flex-shrink-0 transition-all duration-500 ease-out",
                                            isActive ? "w-full md:w-[45%]" : "w-[35%] md:w-[30%]"
                                        )}
                                        style={{
                                            transform: isFirstVisible ? "scale(1)" : "scale(0.95)",
                                            opacity: isActive ? 1 : 0.8,
                                        }}
                                    >
                                        <ArticleCard url={url} index={index} slider={true} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center items-center gap-1 mt-2">
                        {[0, 1, 2, 3].map((dotIndex) => {
                            const mappedIndex = Math.round((dotIndex / 3) * (articleUrls.length - 1));
                            return (
                                <button
                                    key={dotIndex}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300",
                                        Math.round((activeIndex / (articleUrls.length - 1)) * 3) === dotIndex
                                            ? `${bg === "white" ? "bg-black" : "bg-white"} w-4`
                                            : "bg-gray-600 opacity-70 hover:opacity-100"
                                    )}
                                    onClick={() => goToSlide(mappedIndex)}
                                    disabled={isAnimating}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
