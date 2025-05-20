"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const IndustryCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-[16px] border border-orange-500/60 w-[280.339px] h-[240.701px] flex-shrink-0">
            <div className="w-[61.832px] h-[61.832px] flex items-center justify-center rounded-full border border-orange-400 mb-5">
                <Image src={icon} alt="" width={1000} height={1000} className="w-1/2 h-1/2" />
            </div>
            <h3 className="text-[18.55px] font-semibold tracking-wide uppercase text-center mb-2">{title}</h3>
            <p className="text-[13.912px] text-center text-secondary leading-snug">{description}</p>
        </div>
    )
}

export default function IndustriesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const industries = [
        {
            icon: "/premium.png",
            title: "RETAIL",
            description: "Deliver exceptional customer experiences with integrated e-commerce and ERP tools.",
        },
        {
            icon: "/premium2.png",
            title: "FINANCE",
            description: "Gain control of multistage financial reporting with Oracle Fusion Cloud.",
        },
        {
            icon: "/premium3.png",
            title: "MANUFACTURE",
            description: "Optimize production and supply chain workflows with Oracle ERP tools.",
        },
        {
            icon: "/premium4.png",
            title: "NON-PROFIT",
            description: "Track donations and operations efficiently to maximize impact.",
        },
    ]

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? industries.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === industries.length - 1 ? 0 : prevIndex + 1))
    }

    // Calculate the translateX value for sliding effect
    const translateX = `-${currentIndex * (280.339 + 24)}px` // Card width + gap

    return (
        <section className="py-20 md:py-10 px-6 bg-white">
            <div className="container mx-auto lg:w-[90%] 2xl:max-w-[1440px]">
                <div className="flex md:flex-row flex-col justify-between items-center mb-8">
                    <h2 className="text-[22px] md:text-[40px] font-bold tracking-tight leading-tight lg:max-w-[800px] font-['Archivo']">
                        INDUSTRIES WE SERVE WITH DYNAMICS 365 BUSINESS CENTRAL
                    </h2>
                    <div className="flex space-x-3 mt-8 ms-auto md:ms-0">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-black text-white hover:bg-black/90 hover:text-white w-8 md:w-12 h-8 md:h-12 flex items-center justify-center cursor-pointer"
                            onClick={handlePrev}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous slide</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-white text-black border border-gray-200 hover:bg-gray-100 w-8 md:w-12 h-8 md:h-12 flex items-center justify-center cursor-pointer"
                            onClick={handleNext}
                        >
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Next slide</span>
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(${translateX})` }}
                    >
                        {industries.map((industry, index) => (
                            <div key={`${industry.title}-${index}`} className="mr-6">
                                <IndustryCard
                                    icon={industry.icon}
                                    title={industry.title}
                                    description={industry.description}
                                />
                            </div>
                        ))}
                        {/* Duplicate industries for seamless looping */}
                        {industries.map((industry, index) => (
                            <div key={`duplicate-${industry.title}-${index}`} className="mr-6">
                                <IndustryCard
                                    icon={industry.icon}
                                    title={industry.title}
                                    description={industry.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}