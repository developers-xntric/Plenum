"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const sections = [
    {
        id: 1,
        title: "SIMPLIFY DAILY OPERATIONS",
        description: "Automate invoicing, inventory tracking, and financial reporting to focus on what matters most—growth.",
        image: "/images/dynamics-dashboard-1.png",
    },
    {
        id: 2,
        title: "IMPROVE PRODUCTIVITY",
        description: "Empower teams with integrated workflows, saving time and boosting collaboration.",
        image: "/images/dynamics-dashboard-1.png",
    },
    {
        id: 3,
        title: "SEAMLESSLY SCALE YOUR BUSINESS",
        description: "Adapt to growth with a modular ERP that evolves with your business size.",
        image: "/images/dynamics-dashboard-1.png",
    },
    {
        id: 4,
        title: "GAIN REAL-TIME INSIGHTS",
        description: "Make informed decisions with comprehensive dashboards and instant access to critical data.",
        image: "/images/dynamics-dashboard-1.png",
    },
]

export default function DynamicsSection() {
    const containerRef = useRef(null)
    const timelineRef = useRef(null)
    const [activeSection, setActiveSection] = useState(1)

    useEffect(() => {
        if (!containerRef.current || !timelineRef.current) return

        let ctx = gsap.context(() => {
            const timelineSteps = gsap.utils.toArray(".timeline-step")

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${window.innerHeight * (sections.length)}`,
                pin: containerRef.current,
                pinSpacing: true,
                scrub: 0.5,
            })

            timelineSteps.forEach((el, i) => {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 0%",
                    end: "bottom 20%",
                    onEnter: () => setActiveSection(i + 1),
                    onEnterBack: () => setActiveSection(i + 1),
                    // markers: true,
                })
            })

            gsap.to(".progress-bar", {
                height: () => `${((activeSection - 1) / (sections.length - 1)) * 100}%`,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top top",
                    end: () => "+=" + timelineRef.current?.offsetHeight,
                    scrub: 0.7,
                },
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            className="2xl:max-w-[1440px] w-[90%] mx-auto overflow-hidden min-h-[80vh]"
        >
            <div className="container mx-auto px-4 max-w-7xl"
                ref={containerRef}
            >
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-16 leading-tight text-secondary font-['Archivo'] tracking-tight">
                    SEE HOW DYNAMICS 365 BUSINESS
                    <br /> CENTRAL EMPOWERS SMES
                </h2>

                <div className="flex lg:flex-row flex-col gap-8 items-start md:h-[600px]"
                >
                    {/* Left side - Timeline */}
                    <div ref={timelineRef} className="relative w-full lg:w-[40%]">
                        <div
                            className={`absolute bg-[#808080] `}
                            style={{
                                width: "3px",
                                top: "6px",
                                bottom: "6px",
                                left: "18px",
                            }}
                        >
                            <div
                                className="progress-bar absolute bg-orange-500 transition-all duration-500"
                                style={{
                                    width: "2px",
                                    top: "0",
                                    left: "0",
                                    height: "0%",
                                }}
                            />
                        </div>

                        {sections.map((section, i) => (
                            <div
                                key={section.id}
                                data-id={section.id}
                                className={`timeline-step pl-9 mb-16 relative ${activeSection === section.id ? "text-black" : "text-gray-400"}`}
                                style={{ minHeight: "90px" }}
                            >
                                <div
                                    className={`absolute w-[18px] h-[18px] rounded-full border-2 transition-all duration-300 flex justify-center items-center ${activeSection >= section.id
                                        ? "bg-orange-500 border-orange-500 shadow-md"
                                        : "bg-white border-orange-500"
                                        }`}
                                    style={{
                                        left: "9px",
                                        top: "6px",
                                    }}
                                >

                                </div>

                                <h3 className="text-lg md:text-[20px] font-semibold tracking-tight mb-2">
                                    {section.title}
                                </h3>
                                <p
                                    className={`text-[16px] leading-relaxed font-normal max-w-[400px] ${activeSection === section.id ? "text-secondary opacity-100" : "text-gray-400 opacity-70"}`}
                                >
                                    {section.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Images */}
                    <div className="image-container relative h-[200px] md:h-[600px] overflow-hidden w-full lg:w-[60%]">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeSection === section.id ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            >
                                <Image
                                    src={section.image}
                                    alt={`Dynamics 365 - ${section.title}`}
                                    fill
                                    className="object-contain rounded-lg"
                                    priority={section.id === 1}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}