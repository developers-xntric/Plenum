"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ArticleSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [articles] = useState([
        {
            id: 1,
            title: "Unlocking AI's Potential in Product Development",
            category: "Technology",
            date: "March 15, 2023",
            image: "/placeholder.svg?height=400&width=600",
            slug: "unlocking-ai-potential",
        },
        {
            id: 2,
            title: "The Role of Artificial Intelligence",
            category: "March 10, 2023",
            date: "March 10, 2023",
            image: "/placeholder.svg?height=400&width=600",
            slug: "role-of-artificial-intelligence",
        },
        {
            id: 3,
            title: "The Role of Artificial Intelligence",
            category: "March 5, 2023",
            date: "March 5, 2023",
            image: "/placeholder.svg?height=400&width=600",
            slug: "gaming-industry-trends",
        },
    ])

    const sliderRef = useRef(null)
    const totalSlides = articles.length

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    // Auto-scroll effect (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="bg-[#121212] text-white py-12 md:py-16 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Discover Our Articles</h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Experience latest articles on insights on design, hacking, and innovation. Stay updated with fresh ideas and
                        trends in the creative world.
                    </p>
                </div>

                <div className="relative">
                    {/* Mobile Navigation (only visible on small screens) */}
                    <div className="flex justify-center gap-2 mb-4 md:hidden">
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 rounded-full border-gray-700 text-gray-400"
                            onClick={prevSlide}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 rounded-full border-gray-700 text-gray-400"
                            onClick={nextSlide}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Slider Container */}
                    <div
                        ref={sliderRef}
                        className="flex flex-col md:flex-row md:items-stretch gap-6 transition-transform duration-500 ease-in-out"
                    >
                        {articles.map((article, index) => {
                            // Calculate the adjusted index for the circular effect
                            const adjustedIndex = (index - currentIndex + totalSlides) % totalSlides

                            // First slide is larger
                            const isFirstSlide = adjustedIndex === 0

                            return (
                                <div
                                    key={article.id}
                                    className={cn(
                                        "transition-all duration-500 ease-in-out flex-shrink-0",
                                        isFirstSlide ? "md:w-[60%] opacity-100 scale-100" : "md:w-[40%] opacity-80 scale-95",
                                        adjustedIndex >= 3 && "hidden md:block",
                                    )}
                                    style={{
                                        display: adjustedIndex < 3 || window.innerWidth >= 768 ? "block" : "none",
                                    }}
                                >
                                    <div className="bg-[#1a1a1a] h-full rounded-lg overflow-hidden">
                                        <div className="relative aspect-[4/3] md:aspect-auto md:h-48 lg:h-64">
                                            <Image
                                                src={article.image || "/placeholder.svg"}
                                                alt={article.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4 md:p-5">
                                            <div className="text-xs text-orange-500 mb-2">{article.category}</div>
                                            <h3
                                                className={cn("font-bold mb-3 line-clamp-2", isFirstSlide ? "text-xl md:text-2xl" : "text-lg")}
                                            >
                                                {article.title}
                                            </h3>
                                            <a
                                                href={`/posts/${article.slug}`}
                                                className="inline-block text-orange-500 text-sm hover:underline"
                                            >
                                                Read More →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Desktop Navigation (hidden on mobile) */}
                    <div className="hidden md:flex md:justify-between md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full md:px-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-10 h-10 rounded-full border-gray-700 text-gray-400 bg-black/50 backdrop-blur-sm -ml-5"
                            onClick={prevSlide}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-10 h-10 rounded-full border-gray-700 text-gray-400 bg-black/50 backdrop-blur-sm -mr-5"
                            onClick={nextSlide}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-6 gap-2">
                        {articles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-orange-500 w-6" : "bg-gray-600"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
