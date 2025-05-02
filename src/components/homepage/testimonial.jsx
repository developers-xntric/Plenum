"use client" // if you're using Next.js and this is a client component

import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import TestimonialCard from "../common/testimonial-cards"

export default function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="bg-white">
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto py-20 space-y-8">
        <div className='space-y-5'>
          <h2 className="text-[30px] md:text-[50px] leading-[33px] md:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">Trusted by Professionals</h2>
          <p className="text-secondary font-['Archivo'] opacity-75 lg:max-w-[57%] xl:max-w-[40%]">
            As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="hidden lg:flex justify-end items-center mb-4">
            <div className="flex absolute gap-4 md:left-[95%] mb-10">
              <div className="flex items-center gap-1">
                <CarouselPrevious className="h-10 w-fit hover:bg-transparent border-none cursor-pointer shadow-none" />
              </div>
              <div className="flex items-center">
                <CarouselNext className="h-10 w-fit hover:bg-transparent border-none cursor-pointer relative left-4 shadow-none" />
              </div>
            </div>
          </div>

          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2"
                onClick={() => setCurrentIndex(index)} // Update index on item click (you can change this to work better with your carousel logic)
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  socialLink={testimonial.socialLink}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-secondary w-4" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
