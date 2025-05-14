"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TeamTestimonials() {
    const testimonials = [
        {
            id: 1,
            quote:
                "The combination of brilliant colleagues, great work environment, and a purpose-driven mission makes Plenum an incredible place to be working. It's inspiring to know our work will impact in an industry that truly matters.",
            name: "Balasubramanian Rajendran",
            title: "Lead - AI",
            image: "/careers/p1.svg",
        },
        {
            id: 2,
            quote:
                "Working at Plenum has been the highlight of my career. The collaborative culture and innovative approach to solving problems is unmatched.",
            name: "Lavanya",
            title: "Data Scientist",
            image: "/careers/p2.svg",
        },
        {
            id: 3,
            quote:
                "When I joined a very early stage Plenum years ago, I was looking for a dynamic, interesting, and impactful experience. Patch has delivered on all fronts, and I expect it to continue to do so as we work to rebalance the planet.",
            name: "Hayden Pirkle",
            title: "Group CEOr",
            image: "/careers/p3.svg",
        },
      
      
        {
            id: 4,
            quote:
                "The combination of brilliant colleagues, great work environment, and a purpose-driven mission makes Plenum an incredible place to be working. It's inspiring to know our work will impact in an industry that truly matters.",
            name: "Balasubramanian Rajendran",
            title: "Lead - AI",
            image: "/careers/p1.svg",
        },
        {
            id: 5,
            quote:
                "Working at Plenum has been the highlight of my career. The collaborative culture and innovative approach to solving problems is unmatched.",
            name: "Lavanya",
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
        <section className="py-16 px-4 mx-auto overflow-x-hidden font-['Archivo']">
            <div className="text-center mb-12">
                <h2 className="text-[25px] sm:text-[30px] md:max-w-[80%] lg:max-w-[60%] mx-auto md:text-[50px] tracking-tight opacity-80 xl:max-w-[50%] 2xl:max-w-[35%] font-['Archivo'] leading-[50px] font-semibold mb-4">
                    What our team loves about working at Plenum
                </h2>
                <p className="text-secondary font-['Archivo'] md:max-w-[800px] mx-auto text-[15px] 2xl:text-[18px] tracking-tight font-medium opacity-60">
                Hear from our people about the culture, collaboration, and opportunities that make Plenum a place to thrive.
                </p>
            </div>

            {/* Testimonial Carousel */}
            <div
                className="relative overflow-visible py-4 md:py-8 cursor-grab active:cursor-grabbing"
                ref={carouselRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <div className="flex items-center justify-center h-[200px] overflow-visible">
                    {testimonials.map((testimonial, index) => {
                        const position = index - activeIndex

                        return (
                            <motion.div
                                key={testimonial.id}
                                className={`
                                    absolute bg-[#EFEFEF] rounded-lg p-4 md:p-6 md:w-[520px] md:h-[246px]
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
                                <div className="flex flex-col gap-6 md:gap-0 justify-between h-full py-2">
                                    <p className="text-secondary opacity-80 tracking-tight text-[12.657px] md:text-[18px]">"{testimonial.quote}"</p>
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
                                            <p className="font-medium text-[11.507px] md:text-[16px]">{testimonial.name}</p>
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
            <div className="mt-16 md:block hidden mx-auto max-w-6xl">
                <Image
                    src="/careers/careers-group.svg"
                    alt="Team photo collage"
                    width={1500}
                    height={1500}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>
            <div className="mt-10 md:hidden flex flex-col gap-3">
                <Image
                    src="/careers/image.svg"
                    alt="Team photo collage"
                    width={1500}
                    height={1500}
                    className="w-full h-auto object-cover"
                />
                <Image
                    src="/careers/image-1.svg"
                    alt="Team photo collage"
                    width={1500}
                    height={1500}
                    className="w-full h-auto object-cover"
                />
                <Image
                    src="/careers/image-2.svg"
                    alt="Team photo collage"
                    width={1500}
                    height={1500}
                    className="w-full h-auto object-cover"
                />
                <Image
                    src="/careers/image-3.svg"
                    alt="Team photo collage"
                    width={1500}
                    height={1500}
                    className="w-full h-auto object-cover"
                />
                <Image
                    src="/careers/image-4.svg"
                    alt="Team photo collage"
                    width={1500}
                    height={1500}
                    className="w-full h-auto object-cover"
                />
                <Image
                    src="/careers/image-5.svg"
                    alt="Team photo collage"
                    width={1500}
                    height={1500}
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    )
}