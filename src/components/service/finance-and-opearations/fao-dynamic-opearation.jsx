"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function FaoDynamicOperation() {
    const [activeTab, setActiveTab] = useState("Finance")
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [translateX, setTranslateX] = useState(0)

    const autoPlayRef = useRef(null)
    const timeoutRef = useRef(null)
    const sliderRef = useRef(null)

    const tabs = ["Finance", "Supply Chain", "Human Resources", "Manufacturing", "Others"]

    const tabContent = {
        Finance: [
            {
                image: "/service/FAO/FAO-DO.svg",
                caption:
                    "Ensure on-time payments from customers and improve your cash flow cycle with rule-based collection automation",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Track financial performance with real-time analytics and customizable reporting dashboards",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Streamline accounts payable and receivable with automated workflows and approval processes",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Manage budgeting and forecasting with advanced financial planning tools",
            },
        ],
        "Supply Chain": [
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Optimize inventory management with real-time visibility across your entire supply chain",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Improve demand forecasting accuracy with AI-powered predictive analytics",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Streamline procurement processes with automated vendor management",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Enhance logistics operations with route optimization and delivery tracking",
            },
        ],
        "Human Resources": [
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Simplify employee onboarding and management with comprehensive HR tools",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Track performance metrics and employee development with intuitive dashboards",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Manage compensation and benefits administration efficiently",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Streamline recruitment processes with applicant tracking and analytics",
            },
        ],
        Manufacturing: [
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Monitor production efficiency with real-time manufacturing insights",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Optimize resource allocation and reduce production bottlenecks",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Improve quality control with comprehensive testing and reporting tools",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Enhance equipment maintenance scheduling and reduce downtime",
            },
        ],
        Others: [
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Customize modules to fit your specific business requirements",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Integrate with other business systems for seamless data flow",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Access insights from anywhere with mobile-friendly dashboards",
            },
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Scale your solution as your business grows with flexible configuration options",
            },
        ],
    }

    // Reset current slide when tab changes
    useEffect(() => {
        setCurrentSlide(0)
    }, [activeTab])

    // Auto-play functionality
    useEffect(() => {
        const slides = tabContent[activeTab]

        const play = () => {
            timeoutRef.current = setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
            }, 5000) // Change slide every 5 seconds
        }

        autoPlayRef.current = play

        // Only auto-play if not dragging
        if (!isDragging) {
            play()
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [currentSlide, activeTab, isDragging])

    const goToSlide = (index) => {
        setCurrentSlide(index)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        autoPlayRef.current()
    }

    // Drag handlers
    const handleDragStart = (e) => {
        setIsDragging(true)
        setStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX)

        // Clear auto-play while dragging
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const handleDragMove = (e) => {
        if (!isDragging) return

        const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
        const diff = currentX - startX
        setTranslateX(diff)
    }

    const handleDragEnd = () => {
        if (!isDragging) return

        setIsDragging(false)

        // If dragged more than 100px, change slide
        if (Math.abs(translateX) > 100) {
            if (translateX > 0) {
                // Dragged right, go to previous slide
                const slides = tabContent[activeTab]
                setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
            } else {
                // Dragged left, go to next slide
                const slides = tabContent[activeTab]
                setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
            }
        }

        // Reset translation
        setTranslateX(0)

        // Resume auto-play
        autoPlayRef.current()
    }

    return (
        <section className="max-w-5xl mx-auto text-center px-4 py-14 md:pt-20 font-['Archivo']">
            <h1 className="text-[30px] lg:text-[50px] max-w-2xl mx-auto leading-[34px] lg:leading-[55px] font-['Archivo'] text-secondary font-medium home-section-headings mb-4">
                Dynamics 365 Finance and Operations modules
            </h1>

            <p className="text-secondary font-['Archivo'] font-medium opacity-75 max-w-4xl mx-auto mb-8">
                Enhance your business efficiency and adapt quickly to changing market conditions by optimizing your financial
                processes and streamlining your finance operations with real-time insights and analytics that enable informed
                decision-making.
            </p>

            <div className="flex flex-wrap md:justify-center gap-2 md:gap-4 mb-8">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 border  border-[#808080] font-medium font-['Archivo'] rounded-full text-sm  ${activeTab === tab
                            ? "bg-white  text-primary "
                            : "bg-white text-[#101010] hover:border-gray-400"
                            } transition-colors md:block `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div
                className="relative w-full mb-6"
                ref={sliderRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <div className="relative overflow-hidden">
                    {/* Carousel slides */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded">
                        {tabContent[activeTab].map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-500 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                                style={{
                                    transform: index === currentSlide ? `translateX(${translateX}px)` : 'none',
                                }}
                            >
                                <Image
                                    src={slide.image || "/placeholder.svg"}
                                    alt={`${activeTab} dashboard slide ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 1000px"
                                    className="object-cover"
                                    priority={index === currentSlide}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-secondary font-['Archivo'] max-w-2xl font-medium mx-auto">
                {tabContent[activeTab][currentSlide].caption}
            </p>

            <div className="flex justify-center mt-6 space-x-1">
                {tabContent[activeTab].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
