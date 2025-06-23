"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
// import useWindowWidth from '../../app/hooks/useWindowWidth';

import useWindowWidth from "@/app/hooks/useWindowWidth"

gsap.registerPlugin(ScrollTrigger)

const sections = [
    {
        id: 1,
        title: "SIMPLIFY DAILY OPERATIONS",
        description: "Automate invoicing, inventory tracking, and financial reporting to focus on what matters most—growth.",
        image: "/lp1.webp",
    },
    {
        id: 2,
        title: "IMPROVE PRODUCTIVITY",
        description: "Empower teams with integrated workflows, saving time and boosting collaboration.",
        image: "/lp2.webp",
    },
    {
        id: 3,
        title: "SEAMLESSLY SCALE YOUR BUSINESS",
        description: "Adapt to growth with a modular ERP that evolves with your business size.",
        image: "/lp3.webp",
    },
    {
        id: 4,
        title: "GAIN REAL-TIME INSIGHTS",
        description: "Make informed decisions with comprehensive dashboards and instant access to critical data.",
        image: "/l4.webp",
    },
]

export default function DynamicsSection() {
    const containerRef = useRef(null)
    const timelineRef = useRef(null)
    const [activeSection, setActiveSection] = useState(1)
    const width = useWindowWidth();

    useEffect(() => {
        if (!containerRef.current || !timelineRef.current) return

        let ctx = gsap.context(() => {
            const timelineSteps = gsap.utils.toArray(".timeline-step")

            if (width >= 1024) {
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${window.innerHeight * (sections.length - 2)}`,
                    pin: containerRef.current,
                    pinSpacing: true,
                    scrub: 1,
                })
            } else {
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${window.innerHeight * (sections.length)}`,
                    scrub: 1,
                })
            }

            if (width >= 1024) {
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
            } else {
                timelineSteps.forEach((el, i) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 50%",
                        end: "bottom 20%",
                        onEnter: () => setActiveSection(i + 1),
                        onEnterBack: () => setActiveSection(i + 1),
                        // markers: true,
                    })
                })
            }

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
    }, [width])

    return (
        <section className="2xl:max-w-[1440px] w-full lg:w-[90%] mx-auto overflow-hidden min-h-[80vh] py-0">
            <div className="container mx-auto px-4 max-w-7xl" ref={containerRef}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-16 leading-tight text-secondary font-['Archivo'] tracking-tight">
                    SEE HOW DYNAMICS 365 BUSINESS
                    <br /> CENTRAL EMPOWERS SMES
                </h2>

                <div className="flex lg:flex-row flex-col gap-8 items-start lg:h-[600px]">
                    {/* Left side - Timeline */}
                    <div ref={timelineRef} className="relative w-full lg:w-[40%]">
                        <div
                            className="absolute bg-[#FF6035] h-[76%]"
                            style={{
                                width: "2.5px",
                                top: "6px",
                                bottom: "6px",
                                left: "18px",
                            }}
                        >
                            <div
                                className="progress-bar absolute bg-[#FF6035] transition-all duration-500"
                                style={{
                                    width: "2px",
                                    top: "0",
                                    left: "0",
                                    height: "0%",
                                }}
                            />
                        </div>

                        {sections.map((section) => (
                            <div
                                key={section.id}
                                data-id={section.id}
                                className={`timeline-step pl-9 mb-16 relative ${activeSection === section.id ? "text-black" : "text-gray-400"
                                    }`}
                                style={{ minHeight: "90px" }}
                            >
                                <div
                                    className={`absolute w-[18px] h-[18px] rounded-full border-2 transition-all duration-300 flex justify-center items-center ${activeSection >= section.id
                                        ? "bg-primary border-[#FF6035] shadow-md"
                                        : "bg-white border-[#FF6035]"
                                        }`}
                                    style={{
                                        left: "9px",
                                        top: "6px",
                                    }}
                                ></div>

                                <h3 className="text-lg md:text-[20px] font-semibold tracking-tight mb-2">
                                    {section.title}
                                </h3>
                                <p
                                    className={`text-[16px] leading-relaxed font-normal max-w-[400px] ${activeSection === section.id ? "text-secondary opacity-100" : "text-gray-400 opacity-70"
                                        }`}
                                >
                                    {section.description}
                                </p>

                                {/* Mobile image: shown only below md breakpoint */}
                                <div className="block lg:hidden mt-4">
                                    <Image
                                        src={section.image}
                                        alt={`Dynamics 365 - ${section.title}`}
                                        width={400}
                                        height={200}
                                        className="object-contain rounded-lg w-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Images: hidden below md, shown above md */}
                    <div className="image-container relative h-[200px] lg:h-[600px] overflow-hidden w-full lg:w-[60%] hidden lg:block">
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
