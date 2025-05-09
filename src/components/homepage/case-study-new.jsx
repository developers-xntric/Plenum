"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const industries = [
    {
        id: "agriculture",
        name: "Retail ERP Transformation Finance & Operations Implementation",
        title: "Retail ERP Transformation Finance & Operations Implementation",
        description: "Modernized a retail group's operations using Microsoft Dynamics 365 F&O for finance, procurement, HR, and POS integration.",
        image: "/casestudy/Group.png",
        brandName: "Farm Tech",
        expertise: ["Microsoft Dynamics 365 F&O", "Power BI", "POS Middleware","HRMS Module"],
        industry: "Finance",
        link: "/retail-erp",
    },
    {
        id: "biotech",
        name: "Unified Retail Experience – ERP-Integrated eCommerce & Mobile App Platform ",
        title: "Biotech Industry",
        description: "Launched an ERP-integrated eCommerce store with inventory sync, customer segmentation, delivery tracking, and loyalty logic. ",
        image: "/casestudy/Group2.png",
        brandName: "Brand OS",
        expertise: ["WooCommerce ", "WordPress", "REST APIs", "Microsoft Dynamics 365 BC", "Flutter Mobile App"],
        industry: "Finance",
        link: "/unified-retail",
    },
    {
        id: "investment",
        name: "Retail ERP Transformation Finance & Operations Implementation",
        title: "Alternative Investment Industry",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        image: "/casestudy/Group3.png",
        brandName: "Invest Plus",
        expertise: ["Portfolio Management", "Brand Identity", "Product Design"],
        industry: "Investment",
        link: "/manufacturing-erp",
    },
    {
        id: "enterprise",
        name: "Virtual Learning",
        title: "Business & Enterprise Banking",
        title: "Business & Enterprise Banking",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        image: "/casestudy/Group4.png",
        brandName: "Enterprise OS",
        expertise: ["Banking Solutions", "Brand Identity", "Product Design"],
        industry: "Banking",
        link: "/virtual-learning",
    },
    {
        id: "consumer",
        name: "AI Driven Property",
        title: "Consumer Banking",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        image: "/casestudy/Group5.png",
        brandName: "Consumer OS",
        expertise: ["Mobile Banking", "Brand Identity", "Product Design"],
        industry: "Banking",
        link: "/ai-driven-property",
    },
    {
        id: "agriculture1",
        name: "Proper Finance Intelligence",
        title: "Agriculture & Food Industries",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        image: "/casestudy/Group6.png",
        brandName: "Farm Tech",
        expertise: ["Supply Chain", "Brand Identity", "Product Design"],
        industry: "Agriculture",
        link: "/proper-finance-intelligence",
    },
    {
        id: "biotech1",
        name: "AI Powered Sentiment",
        title: "Biotech Industry",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        image: "/casestudy/Group7.png",
        brandName: "Brand OS",
        expertise: ["AI Solutions", "Brand Identity", "Product Design"],
        industry: "Finance",
        link: "/ai-powered-sentiment",
    },
    {
        id: "investment1",
        name: "Commision Fraud Detection",
        title: "Alternative Investment Industry",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        image: "/casestudy/Group8.png",
        brandName: "Invest Plus",
        expertise: ["Portfolio Management", "Brand Identity", "Product Design"],
        industry: "Investment",
        link: "/commision-fraud-detection",
    },
   
]

export default function IndustryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const N = industries.length

    return (
        <div className="2xl:max-w-[1440px] md:max-w-[90%] mx-auto md:rounded-3xl font-['Archivo'] md:mb-20 bg-secondary text-white overflow-hidden">
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
                                <div className=" py-8 px-5 md:px-0 md:p-12">
                                    <div className="text-gray-400  md:text-left text-center">Industry</div>
                                    <div className="text-[#FF6035] text-[24px] md:text md:text-[30px] md:text-left text-center leading-[30px] md:leading-[40px] font-semibold mb-6">{industry.industry}</div>
                                    <div className="flex flex-col md:flex-row gap-8  ">
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
                                                <h3 className="text-[18px] md:text-[28px] text-[#FFFFFF] leading-[25px] md:leading-[40px] font-semibold mb-3">{industry.name}</h3>
                                                <p className="text-[#989898] md:max-w-[60%] text-[14.547px] mb-8">{industry.description}</p>
                                            </div>

                                            <div className="flex flex-col md:flex-row justify-between mt-auto">
                                                <div className="flex flex-col">
                                                    <div className="text-[12px] text-[#989898] mb-1">Industry</div>
                                                    <div className="text-white text-[14px]">{industry.industry}</div>
                                                    <div className="mt-6 md:mt-auto">
                                                        <a href={`/case-studies/${industry.link}`} className="text-[#FF6035] text-[17px] flex items-center group">
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
                    {/* Pagination Dots (Mobile Only) */}
                    <div className="flex justify-center gap-2 md:hidden py-6 relative bottom-10">
                        {industries.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApiMain && emblaApiMain.scrollTo(index)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-colors",
                                    currentIndex === index ? "bg-white" : "bg-gray-400"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 md:block hidden"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" color="#FFFFFF80" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 md:block hidden"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" color="#FFFFFF80" />
                </button>
            </div>
        </div>
    )
}
