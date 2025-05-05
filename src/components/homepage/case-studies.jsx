"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import CaseStudyCard from "../common/home-case-study-card"

export default function CaseStudies({ title, paragraph, caseStudies }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const carouselRef = useRef(null)
    const isMobile = useMediaQuery("(max-width: 768px)")
    const autoPlayRef = useRef(null)

    const scrollToIndex = (index) => {
        if (!carouselRef.current) return

        const newIndex = Math.max(0, Math.min(index, caseStudies.length - 1))
        setActiveIndex(newIndex)

        const cardWidth = carouselRef.current.offsetWidth
        carouselRef.current.scrollTo({
            left: newIndex * cardWidth,
            behavior: "smooth",
        })
    }

    const nextSlide = () => {
        const newIndex = (activeIndex + 1) % caseStudies.length
        scrollToIndex(newIndex)
    }

    const handleMouseDown = (e) => {
        if (!isMobile) return
        setIsDragging(true)
        setStartX(e.pageX - carouselRef.current.offsetLeft)
        setScrollLeft(carouselRef.current.scrollLeft)
    }

    const handleTouchStart = (e) => {
        if (!isMobile) return
        setIsDragging(true)
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
        setScrollLeft(carouselRef.current.scrollLeft)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - carouselRef.current.offsetLeft
        const walk = (x - startX) * 2 // Scroll speed multiplier
        carouselRef.current.scrollLeft = scrollLeft - walk
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft
        const walk = (x - startX) * 2
        carouselRef.current.scrollLeft = scrollLeft - walk
    }

    const handleDragEnd = () => {
        setIsDragging(false)
        if (!carouselRef.current) return

        // Snap to closest card
        const cardWidth = carouselRef.current.offsetWidth
        const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth)
        scrollToIndex(newIndex)
    }

    const handleScroll = () => {
        if (!carouselRef.current || isDragging) return

        const cardWidth = carouselRef.current.offsetWidth
        const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth)
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex)
        }
    }

    // Auto-play functionality
    useEffect(() => {
        if (!isMobile) return

        const startAutoPlay = () => {
            autoPlayRef.current = setInterval(() => {
                nextSlide()
            }, 5000) // Change slide every 5 seconds
        }

        startAutoPlay()

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isMobile, activeIndex])

    // Pause auto-play when dragging
    useEffect(() => {
        if (isDragging && autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
        } else if (!isDragging && isMobile) {
            autoPlayRef.current = setInterval(() => {
                nextSlide()
            }, 5000)
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isDragging, isMobile])

    return (
        <section className="bg-white">
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto pt-12 xl:pt-16">
                <div className="mb-8 space-y-6">
                    <div className="md:max-w-[70%] lg:max-w-[85%] xl:max-w-[70%] 2xl:max-w-[65%]">
                        <h2 className="text-[30px] lg:text-[50px] leading-[34px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
                            {title}
                        </h2>
                    </div>
                    <p className="text-[14px] text-secondary font-['Archivo'] opacity-75 md:max-w-[65%] lg:max-w-[70%] xl:max-w-[55%]">{paragraph}</p>
                </div>

                {/* Mobile Carousel */}
                {isMobile ? (
                    <div className="relative">
                        <div
                            ref={carouselRef}
                            className={cn(
                                "flex overflow-x-hidden snap-x snap-mandatory w-full",
                                isDragging ? "cursor-grabbing" : "cursor-grab",
                            )}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                            onMouseUp={handleDragEnd}
                            onMouseLeave={handleDragEnd}
                            onTouchEnd={handleDragEnd}
                            onScroll={handleScroll}
                        >
                            {caseStudies.map((study, index) => (
                                <div key={index} className="min-w-full snap-center md:px-1">
                                    <CaseStudyCard title={study.title} image={study.image} link={study.link} />
                                </div>
                            ))}
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-10 gap-2">
                            {caseStudies.map((_, index) => (
                                <button
                                    key={index}
                                    className={cn(
                                        "w-[6px] h-[6px] rounded-full transition-all",
                                        activeIndex === index ? "bg-secondary w-4" : "bg-gray-400",
                                    )}
                                    onClick={() => scrollToIndex(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Desktop/Tablet Grid Layout */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7">
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard key={index} title={study.title} image={study.image} link={study.link} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
