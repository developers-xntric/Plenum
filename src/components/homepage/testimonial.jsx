"use client"

import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"
import TestimonialCard from "../common/testimonial-cards"

export default function Testimonials({ testimonials }) {
  const [plugins, setPlugins] = useState([])
  const [emblaApi, setEmblaApi] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  

  // Enable autoplay plugin on small screens
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setPlugins([Autoplay({ delay: 3000, stopOnInteraction: false })])
    }
  }, [])

  // Track current index for dots
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on("select", onSelect)
    onSelect()
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi])

  return (
    <section className="bg-white">
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto py-16 lg:py-20 space-y-8">
        <div className="space-y-5">
          <h2 className="text-[30px] lg:text-[50px] leading-[33px] md:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
            Trusted by Professionals
          </h2>
          <p className="text-secondary font-['Archivo'] font-medium opacity-75 md:max-w-[60%] lg:max-w-[57%] xl:max-w-[40%]">
            As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={plugins}
          setApi={setEmblaApi}
          className="w-full"
        >
          {/* Navigation Buttons */}
          <div className="hidden lg:flex justify-end items-center mb-4">
            <div className="flex absolute gap-4 md:left-[95%] mb-10">
              <div className="flex items-center gap-1">
                <CarouselPrevious className="h-10 w-fit opacity-60 hover:bg-transparent border-none cursor-pointer shadow-none" />
              </div>
              <div className="flex items-center">
                <CarouselNext className="h-10 w-fit hover:bg-transparent border-none cursor-pointer relative left-4 shadow-none" />
              </div>
            </div>
          </div>
          {/* Carousel Slides */}
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  socialLink={testimonial.socialLink}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots (Only show on small screen) */}
          <div className="flex justify-center mt-6 gap-2 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${index === currentIndex ? "bg-secondary w-4" : "bg-gray-400"
                  }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
