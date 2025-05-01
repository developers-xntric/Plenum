"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { articles } from "@/data/article"

export default function ArticleSlider({ bg = "black" }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const carouselRef = useRef(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)
    const dragThreshold = 50

    // Auto-slide with timing buffer
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging.current && !isAnimating) {
                const nextIndex = (activeIndex + 1) % articles.length
                goToSlide(nextIndex)
            }
        }, 2000)

        return () => clearInterval(interval)
    }, [activeIndex, articles.length, isAnimating])

    // Smooth slide transition with scrolling
    const goToSlide = (index) => {
        if (isAnimating || index === activeIndex) return

        setIsAnimating(true)
        setActiveIndex(index)

        if (carouselRef.current) {
            const article = carouselRef.current.children[index]
            const scrollPos = article.offsetLeft - 180 // This offset creates the partial visibility effect

            carouselRef.current.scrollTo({ left: scrollPos, behavior: "smooth" })
            setTimeout(() => {
                setIsAnimating(false)
            }, 600) // Match the transition duration
        }
    }

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        if (isAnimating) return
        isDragging.current = true
        startX.current = e.pageX - (carouselRef.current?.offsetLeft || 0)
        scrollLeft.current = carouselRef.current?.scrollLeft || 0
        if (carouselRef.current) {
            carouselRef.current.style.cursor = "grabbing"
        }
    }

    const handleMouseUp = () => {
        if (!isDragging.current) return
        isDragging.current = false

        if (carouselRef.current) {
            carouselRef.current.style.cursor = "grab"
            const currentScroll = carouselRef.current.scrollLeft

            let minDiff = Number.POSITIVE_INFINITY
            let closestIndex = 0

            for (let i = 0; i < articles.length; i++) {
                const article = carouselRef.current.children[i]
                const targetPosition = article.offsetLeft - 100
                const diff = Math.abs(targetPosition - currentScroll)

                if (diff < minDiff) {
                    minDiff = diff
                    closestIndex = i
                }
            }

            goToSlide(closestIndex)
        }
    }

    const handleMouseMove = (e) => {
        if (!isDragging.current || isAnimating) return
        e.preventDefault()

        const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
        const walk = (x - startX.current) * 1.5

        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft.current - walk
        }
    }

    // Touch handlers
    const handleTouchStart = (e) => {
        if (isAnimating) return
        isDragging.current = true
        startX.current = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0)
        scrollLeft.current = carouselRef.current?.scrollLeft || 0
    }

    const handleTouchMove = (e) => {
        if (!isDragging.current || isAnimating) return

        const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0)
        const walk = (x - startX.current) * 1.5

        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft.current - walk
        }
    }

    const handleTouchEnd = () => {
        handleMouseUp()
    }

    useEffect(() => {
        if (carouselRef.current) {
            goToSlide(activeIndex)
        }
    }, [])

    return (
        <div className={`w-full ${bg == "black" ? "bg-[#282526]" : "bg-white"}  text-white py-20 font-['Archivo']`}>
            <div className="w-[95%] ms-auto">
                <div className="max-w-full ms-auto 2xl:max-w-[93%]">
                    <h2 className={` ${bg == "black" ? "text-white" : "text-[#101010]"} text-3xl font-semibold mb-6 text-[50px]`}>Discover Our Articles</h2>
                    <p className={` ${bg == "black" ? "text-[#FFF]" : "text-[#101010]"}  opacity-60 text-[15px] mb-10 max-w-xl`}>
                        Explore our latest posts for insights in design, learning, and innovation. Stay updated with trends and
                        breakthroughs in the creative world.
                    </p>
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
                            {articles.map((article, index) => {
                                const isActive = index === activeIndex
                                const isFirstVisible = index === activeIndex

                                return (
                                    <div
                                        key={article.id}
                                        className={cn(
                                            "flex-shrink-0 transition-all duration-500 ease-out",
                                            isActive ? "w-full md:w-[45%]" : "w-[35%] md:w-[30%]",
                                        )}
                                        style={{
                                            transform: isFirstVisible ? "scale(1) 2xl:scale(2)" : "scale(0.95)",
                                            opacity: isActive ? 1 : 0.8,
                                        }}
                                    >
                                        <div className="flex flex-col h-full">
                                            <div
                                                className={cn(
                                                    "w-full bg-gray-800 overflow-hidden",
                                                    isActive ? "h-[300px] xl:h-[404px] 2xl:h-[480px]" : "h-[200px] xl:h-[300px] 2xl:h-[350px]",
                                                )}
                                            >
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={article.image || "/placeholder.svg"}
                                                        alt={article.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                                        sizes={isActive ? "(max-width: 768px) 50vw, 55vw" : "(max-width: 768px) 30vw, 30vw"}
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-3">
                                                <p className="text-xs text-gray-400 mb-1">{article.date}</p>
                                                <h3 className={cn("font-semibold  mb-1 line-clamp-2 text-xl", bg == "black" ? "text-[#FFF]" : "text-[#101010]")}>
                                                    {article.title}
                                                </h3>
                                                <Link
                                                    href="/"
                                                    className="text-primary inline-flex items-center text-sm hover:underline"
                                                    aria-label={`Read more about ${article.title}`}
                                                >
                                                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex justify-center gap-1 mt-2">
                            {articles.map((_, index) => (
                                <button
                                    key={index}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300",
                                        index === activeIndex ? "bg-white w-4" : "bg-gray-600 opacity-70 hover:opacity-100",
                                    )}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    disabled={isAnimating}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
