"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"


export default function ArticleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
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
      category: "AI",
      date: "March 10, 2023",
      image: "/placeholder.svg?height=400&width=600",
      slug: "role-of-artificial-intelligence",
    },
    {
      id: 3,
      title: "The Role of Artificial Intelligence",
      category: "Gaming",
      date: "March 5, 2023",
      image: "/placeholder.svg?height=400&width=600",
      slug: "gaming-industry-trends",
    },
  ])

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % articles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [articles.length])

  return (
    <section className="bg-[#121212] text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Discover Our Articles</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Experience latest articles on insights on design, hacking, and innovation. Stay updated with fresh ideas and
            trends in the creative world.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {articles.map((article, index) => {
              // Calculate visibility and size based on position relative to active slide
              const isActive = index === activeIndex
              const isVisible =
                isActive ||
                index === (activeIndex + 1) % articles.length ||
                index === (activeIndex - 1 + articles.length) % articles.length

              if (!isVisible && articles.length > 3) return null

              return (
                <div
                  key={article.id}
                  className={cn(
                    "transition-all duration-500 ease-in-out",
                    isActive ? "md:col-span-6 opacity-100 scale-100 z-20" : "md:col-span-3 opacity-80 scale-95 z-10",
                  )}
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
                      <h3 className={cn("font-bold mb-3 line-clamp-2", isActive ? "text-xl md:text-2xl" : "text-lg")}>
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

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? "bg-orange-500 w-6" : "bg-gray-600"
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
