"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const industries = [
    {
        id: "agriculture",
        name: "Agriculture & Food Industries",
        title: "Agriculture & Food Industries",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case1.svg",
        brandName: "Farm Tech",
        expertise: ["Supply Chain", "Brand Identity", "Product Design"],
        industry: "Agriculture",
    },
    {
        id: "biotech",
        name: "Biotech Industry",
        title: "Biotech Industry",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case2.svg",
        brandName: "Brand OS",
        expertise: ["AI Solutions", "Brand Identity", "Product Design"],
        industry: "Finance",
    },
    {
        id: "investment",
        name: "Alternative Investment Industry",
        title: "Alternative Investment Industry",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case3.svg",
        brandName: "Invest Plus",
        expertise: ["Portfolio Management", "Brand Identity", "Product Design"],
        industry: "Investment",
    },
    {
        id: "enterprise",
        name: "Business & Enterprise Banking",
        title: "Business & Enterprise Banking",
        title: "Business & Enterprise Banking",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case4.svg",
        brandName: "Enterprise OS",
        expertise: ["Banking Solutions", "Brand Identity", "Product Design"],
        industry: "Banking",
    },
    {
        id: "consumer",
        name: "Consumer Banking",
        title: "Consumer Banking",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case4.svg",
        brandName: "Consumer OS",
        expertise: ["Mobile Banking", "Brand Identity", "Product Design"],
        industry: "Banking",
    },
    {
        id: "agriculture",
        name: "Agriculture & Food Industries",
        title: "Agriculture & Food Industries",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case1.svg",
        brandName: "Farm Tech",
        expertise: ["Supply Chain", "Brand Identity", "Product Design"],
        industry: "Agriculture",
    },
    {
        id: "biotech",
        name: "Biotech Industry",
        title: "Biotech Industry",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case2.svg",
        brandName: "Brand OS",
        expertise: ["AI Solutions", "Brand Identity", "Product Design"],
        industry: "Finance",
    },
    {
        id: "investment",
        name: "Alternative Investment Industry",
        title: "Alternative Investment Industry",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case3.svg",
        brandName: "Invest Plus",
        expertise: ["Portfolio Management", "Brand Identity", "Product Design"],
        industry: "Investment",
    },
    {
        id: "enterprise",
        name: "Business & Enterprise Banking",
        title: "Business & Enterprise Banking",
        title: "Business & Enterprise Banking",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case4.svg",
        brandName: "Enterprise OS",
        expertise: ["Banking Solutions", "Brand Identity", "Product Design"],
        industry: "Banking",
    },
    {
        id: "consumer",
        name: "Consumer Banking",
        title: "Consumer Banking",
        description:
            "At our core is a hybrid operating system that synthesizes every fiber of your brand, from strategy and technical plans.",
        image: "/casestudy/case4.svg",
        brandName: "Consumer OS",
        expertise: ["Mobile Banking", "Brand Identity", "Product Design"],
        industry: "Banking",
    },
]

export default function IndustryShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [emblaRefNav, emblaApiNav] = useEmblaCarousel({
        loop: true,
        dragFree: true,
        containScroll: "keepSnaps",
        align: "start",
    })

    const [emblaRefMain, emblaApiMain] = useEmblaCarousel({
        loop: true,
        draggable: false,
    })

    const scrollPrev = useCallback(() => {
        if (emblaApiMain) emblaApiMain.scrollPrev()
    }, [emblaApiMain])

    const scrollNext = useCallback(() => {
        if (emblaApiMain) emblaApiMain.scrollNext()
    }, [emblaApiMain])

    // Auto-scroll the top navigation
    useEffect(() => {
        if (!emblaApiNav) return

        const interval = setInterval(() => {
            emblaApiNav.scrollNext()
        }, 3000)

        return () => clearInterval(interval)
    }, [emblaApiNav])

    // Sync the main carousel with the current index
    useEffect(() => {
        if (!emblaApiMain) return

        const onSelect = () => {
            setCurrentIndex(emblaApiMain.selectedScrollSnap())
        }

        emblaApiMain.on("select", onSelect)
        return () => {
            emblaApiMain.off("select", onSelect)
        }
    }, [emblaApiMain])

    // Sync the nav carousel with the main carousel
    useEffect(() => {
        if (!emblaApiNav || !emblaApiMain) return

        emblaApiMain.on("select", () => {
            const index = emblaApiMain.selectedScrollSnap()
            emblaApiNav.scrollTo(index)
        })
    }, [emblaApiNav, emblaApiMain])

    return (
        <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto rounded-3xl font-['Archivo'] mb-20 bg-black text-white overflow-hidden">
            {/* Top Navigation Carousel */}
            <div className="overflow-hidden border-[#FFFFFF] border-b" ref={emblaRefNav}>
                <div className="flex">
                    {industries.map((industry, index) => (
                        <button
                            key={industry.id}
                            className={cn(
                                "px-4 2xl:px-10 py-6 whitespace-nowrap text-[17px] transition-colors duration-300",
                                currentIndex === index ? "text-orange-500" : "text-white",
                            )}
                            onClick={() => {
                                if (emblaApiMain) emblaApiMain.scrollTo(index)
                            }}
                        >
                            {industry.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Carousel */}
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRefMain}>
                    <div className="flex max-w-[95%] mx-auto">
                        {industries.map((industry) => (
                            <div key={industry.id} className="flex-[0_0_100%] min-w-0">
                                <div className=" py-8 md:p-12">
                                    <div className="text-[#FF6035] text-[30px] font-semibold mb-6">{industry.name}</div>
                                    <div className="flex flex-col md:flex-row gap-8">
                                        {/* Image Section */}
                                        <div className="md:w-1/2 relative">
                                            <div className="">
                                                <img
                                                    src={industry.image || "/placeholder.svg"}
                                                    alt={industry.title}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="md:w-1/2 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-[28px] text-[#FFFFFF] font-semibold mb-3">{industry.brandName}</h3>
                                                <p className="text-[#989898] max-w-[60%] text-[14.547px] mb-8">{industry.description}</p>
                                            </div>

                                            <div className="flex flex-col md:flex-row justify-between mt-auto">
                                                <div className="flex flex-col">
                                                    <div className="text-[12px] text-[#989898] mb-1">Industry</div>
                                                    <div className="text-white text-[14px]">{industry.industry}</div>
                                                    <div className="mt-6 md:mt-auto">
                                                        <a href="#" className="text-[#FF6035] text-[17px] flex items-center group">
                                                            View Project
                                                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                        </a>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-[11.98px] text-[#989898] text-end mb-1 mt-4 md:mt-0">Deliverables</div>
                                                    <ul>
                                                        {industry.expertise.map((item, i) => (
                                                            <li key={i} className="text-white text-[14.547px] text-end">
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" color="#FFFFFF80" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" color="#FFFFFF80" />
                </button>
            </div>
        </div>
    )
}
