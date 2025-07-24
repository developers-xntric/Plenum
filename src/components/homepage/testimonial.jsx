"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../../components/ui/carousel"
import { useEffect, useState } from "react"
import TestimonialCard from "../common/testimonial-cards"

export default function Testimonials({ testimonials, title , paragraph }) {
  const [plugins, setPlugins] = useState([])
  const [emblaApi, setEmblaApi] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
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
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-[30px] lg:text-[50px] leading-[33px] md:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
            {title || "What Our Clients Say"}
          </h2>
          <p className="text-secondary font-['Archivo'] font-medium opacity-75 md:max-w-[60%] lg:max-w-[57%] xl:max-w-[45%] 2xl:max-w-[40%]">
            {paragraph || "As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation."}
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: false }}
          plugins={plugins}
          setApi={setEmblaApi}
          className="w-full"
        >
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
        </Carousel>
      </div>
    </section>
  )
}
