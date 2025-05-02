"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TeamTestimonials() {
    const testimonials = [
        {
            id: 1,
            quote:
                "In my early stage Plenum years ago, I was dynamic, interesting, and impactful. It has delivered on all fronts, and I plan to do so as we work to rebalance the planet.",
            name: "Marcus Hagen",
            title: "Product Designer",
            image: "/careers/p1.svg",
        },
        {
            id: 2,
            quote:
                "The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what we do.",
            name: "Marcus Hagen",
            title: "Product Designer",
            image: "/careers/p2.svg",
        },
        {
            id: 3,
            quote:
                "The combination of brilliant colleagues, great work environment, and a purpose-driven mission makes Plenum an incredible place to be working. It's inspiring to know our work will impact in an industry that truly matters.",
            name: "Rachel Larson",
            title: "Software Engineer",
            image: "/careers/p1.svg",
        },
        {
            id: 4,
            quote:
                "Working at Plenum has been the highlight of my career. The collaborative culture and innovative approach to solving problems is unmatched.",
            name: "Alex Chen",
            title: "Data Scientist",
            image: "/careers/p2.svg",
        },
        {
            id: 5,
            quote:
                "In my early stage Plenum years ago, I was dynamic, interesting, and impactful. It has delivered on all fronts, and I plan to do so as we work to rebalance the planet.",
            name: "Marcus Hagen",
            title: "Product Designer",
            image: "/careers/p1.svg",
        },
        {
            id: 6,
            quote:
                "The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what we do.",
            name: "Marcus Hagen",
            title: "Product Designer",
            image: "/careers/p2.svg",
        },
        {
            id: 7,
            quote:
                "The combination of brilliant colleagues, great work environment, and a purpose-driven mission makes Plenum an incredible place to be working. It's inspiring to know our work will impact in an industry that truly matters.",
            name: "Rachel Larson",
            title: "Software Engineer",
            image: "/careers/p1.svg",
        },
        {
            id: 8,
            quote:
                "Working at Plenum has been the highlight of my career. The collaborative culture and innovative approach to solving problems is unmatched.",
            name: "Alex Chen",
            title: "Data Scientist",
            image: "/careers/p2.svg",
        },
    ]

    const [activeIndex, setActiveIndex] = useState(1)
    const carouselRef = useRef(null)
    const [startX, setStartX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const handleDragStart = (e) => {
        setIsDragging(true)
        if ("touches" in e) {
            setStartX(e.touches[0].clientX)
        } else {
            setStartX(e.clientX)
        }
    }

    const handleDragMove = (e) => {
        if (!isDragging) return

        const currentX = "touches" in e ? e.touches[0].clientX : e.clientX
        const diff = startX - currentX

        if (Math.abs(diff) > 30) {
            if (diff > 0 && activeIndex < testimonials.length - 1) {
                setActiveIndex(activeIndex + 1)
            } else if (diff < 0 && activeIndex > 0) {
                setActiveIndex(activeIndex - 1)
            }
            setStartX(currentX)
            setIsDragging(false)
        }
    }

    const handleDragEnd = () => {
        setIsDragging(false)
    }

    return (
        <section className="py-16 px-4 mx-auto overflow-x-hidden">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-[50px] tracking-tight opacity-90 font-['Archivo] font-medium mb-4">
                    What our team loves about
                    <br />
                    working at Plenum
                </h2>
                <p className="text-secondary font-['Archivo'] max-w-[690px] mx-auto text-[15px] tracking-tight font-normal opacity-60">
                    Microchips AI is a unified platform built to automate every stage of the AI lifecycle — from data ingestion to
                    deployment. Designed for enterprise scalability, it helps teams accelerate their processes and productivity.
                </p>
            </div>

            {/* Testimonial Carousel */}
            <div
                className="relative overflow-visible py-8 cursor-grab active:cursor-grabbing"
                ref={carouselRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <div className="flex items-center justify-center h-[220px] overflow-visible">
                    {testimonials.map((testimonial, index) => {
                        const position = index - activeIndex

                        return (
                            <motion.div
                                key={testimonial.id}
                                className={`
                                    absolute bg-[#EFEFEF] rounded-lg p-6 w-[520px] h-[246px]
                                    ${Math.abs(position) > 1 ? "opacity-0 pointer-events-none" : "opacity-100"}
                                `}
                                animate={{
                                    x: position * 540,
                                    opacity: Math.abs(position) > 1 ? 0 : 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    mass: 0.8,
                                }}
                            >
                                <div className="flex flex-col justify-between h-full py-2">
                                    <p className="text-secondary opacity-80 tracking-tight text-[18px]">"{testimonial.quote}"</p>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                                            <Image
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={testimonial.name}
                                                width={40}
                                                height={40}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[16px]">{testimonial.name}</p>
                                            <p className="text-xs text-gray-600">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Team Photos - Single Image */}
            <div className="mt-16 mx-auto max-w-[80%]">
                <Image
                    src="/careers/grid.svg"
                    alt="Team photo collage"
                    width={1500}
                    height={1500}
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    )
}