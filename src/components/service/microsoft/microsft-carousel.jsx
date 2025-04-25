"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function MicrosoftCarousel({MicrosoftCarouselData, title, para}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const totalSlides = MicrosoftCarouselData.length

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, nextSlide])

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden ">
      <div className="container 2xl:max-w-[1440px] w-[90%] mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-5">
          <h2 className="text-[50px] leading-[55px] max-w-[70%] 2xl:max-w-[60%] mx-auto font-['Archivo'] text-secondary font-medium home-section-headings">
            {title}
          </h2>
          <p className="text-secondary font-['Archivo'] opacity-75 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[52%]: mx-auto">
            {para}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {MicrosoftCarouselData.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                    {slide.logos.map((logo,index) => (
                      <div
                        key={logo.name}
                        className="flex items-center justify-center p-4 md:p-6  rounded-lg bg-white h-24 md:h-32"
                      >
                          <Image
                            src={logo.src || "/placeholder.svg"}
                            alt={logo.alt}
                            width={1000}
                            height={1000}
                            className={`${index==0 ? "w-20 " : "w-30 "} obj`}
                          />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {MicrosoftCarouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 mx-1 rounded-full transition-all duration-300",
                  currentSlide === index ? "bg-orange-500 w-4" : "bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
