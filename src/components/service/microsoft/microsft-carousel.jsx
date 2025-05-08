"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function MicrosoftCarousel({ MicrosoftCarouselData, title, para }) {
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
    <section className="w-full pt-16 md:pt-16 lg:pt-20  overflow-hidden">
      <div className="text-center mb-10 md:mb-16 space-y-5">
        <h2 className="text-[30px] lg:text-[50px] leading-[34px] lg:leading-[55px] max-w-[90%] md:max-w-[60%] 2xl:max-w-[40%] mx-auto font-['Archivo'] text-secondary font-semibold home-section-headings">
          {title}
        </h2>
        <p className="text-secondary font-['Archivo'] text-[14px] lg:text-lg font-medium opacity-75 max-w-[90%] lg:max-w-[75%] xl:max-w-[60%] 2xl:max-w-[45%] mx-auto">
          {para}
        </p>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {MicrosoftCarouselData.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">

                {/* Mobile view: One logo per slide */}

                <div className="block md:hidden">
                <div className="grid grid-cols-3 gap-0">
                    {slide.logos.slice(0, 3).map((logo, index) => (
                      <div
                        key={logo.name}
                        className="flex items-center justify-center p-5 bg-white  h-32 border border-gray-100"
                      >
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.alt}
                          width={1000}
                          height={1000}
                          className={`${index === 0 ? "w-14" : "w-20"} object-contain`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tablet and Desktop view: Grid layout with 3-5 logos */}
                
                <div className="hidden md:block">
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-0">
                    {slide.logos.map((logo, index) => (
                      <div
                        key={logo.name}
                        className="flex items-center justify-center p-4 md:p-6 bg-white h-24 md:h-52 border border-gray-100"
                      >
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.alt}
                          width={1000}
                          height={1000}
                          className={`${index === 0 ? "w-20" : "w-28"} object-contain`}
                        />
                      </div>
                    ))}
                  </div>
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
                "w-[6px] h-[6px] lg:md:w-[8px] lg:md:h-[8px] mx-1 rounded-full transition-all duration-300",
                currentSlide === index ? "bg-orange-500 w-2" : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}