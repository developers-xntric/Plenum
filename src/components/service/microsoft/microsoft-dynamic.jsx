'use client'

import React, { useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Button from "@/components/common/button"
import Image from "next/image"
import { useWindowWidth } from '../../service/ERP-Cosultant/hero'

export default function MicrosoftDynamic({
  heading1,
  heading2,
  para,
  services,
  button,
  bgColor = "white",
  className,
  isCenter = false,
  paraClass,
  gridcol,
  oneCardMobile = false,
}) {
  const width = useWindowWidth()
  const isMobile = width < 1024

  // Embla carousel refs
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  // Handle dots
  const dotContainerRef = useRef(null)

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const updateDots = useCallback(() => {
    if (!emblaApi || !dotContainerRef.current) return
    const selectedIndex = emblaApi.selectedScrollSnap()
    Array.from(dotContainerRef.current.children).forEach((dot, index) => {
      dot.classList.toggle('bg-[#FF6035]', index === selectedIndex)
      dot.classList.toggle('bg-gray-400', index !== selectedIndex)
    })
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', updateDots)
    updateDots()
  }, [emblaApi, updateDots])

  return (
    <main className={`flex flex-col items-center font-['Archivo'] justify-center py-16 xl:py-20 ${bgColor === "black" ? "bg-[#282526] text-white" : "bg-[#EFEFEF]"}`}>
      <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto">
        {/* Headings */}
        <div className="text-left md:text-center mb-8 md:mb-12">
          <h1 className={`text-[30px] font-semibold leading-[34px] md:leading-[55px] opacity-85 ${bgColor === "black" ? "text-white mx-auto lg:w-[900px] text-center" : "home-section-headings text-center"} md:text-3xl lg:text-[50px]`}>
            {heading1}
          </h1>
          <h1 className={`text-3xl opacity-85 lg:text-[50px] font-semibold ${bgColor === "black" ? "text-white text-center" : "home-section-headings text-center"} mb-4`}>
            {heading2}
          </h1>
          <p className={`text-sm md:text-base font-normal ${bgColor === "black" ? "text-center" : "text-center"} opacity-60 lg:max-w-[60%] mx-auto ${paraClass}`}>
            {para}
          </p>
        </div>

        {/* Services Grid or Mobile Carousel */}
        {oneCardMobile && isMobile ? (
          <>
            <div className="overflow-hidden mt-20" ref={emblaRef}>
              <div className="flex">
                {services?.map((service, index) => (
                  <div className="min-w-full flex-shrink-0 px-4" key={index}>

                    <div className={`text-center max-w-[30%] mx-auto ${className}`}>
                      <div className="w-12 h-12 mb-5 mx-auto">
                        <Image
                          src={service.icon || "/placeholder.svg"}
                          alt={service.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-[22px] mx-auto lg:text-[28px] font-semibold mb-[18px] lg:leading-8">
                        {service.title}
                      </h3>
                      <p className="text-[15px]  opacity-60 font-medium">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div ref={dotContainerRef} className="flex justify-center gap-2 mt-10">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className="w-[6px] h-[6px] rounded-full bg-gray-400 transition-colors duration-300"
                ></button>
              ))}
            </div>
          </>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 place-items-center gap-x-28 2xl:gap-x-34 ${gridcol}`}>
            {services?.map((service, index) => (
              <div key={index} className={`${className}`}>
                <div className="w-12 h-12 mb-5">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className={`text-[20px] lg:text-[23px] xl:text-[28px] font-semibold mb-[18px] lg:leading-8  ${isCenter && 'mx-auto'} ${bgColor === "black" ? "text-white xl:w-[90%] lg:min-h-18" : `home-section-heading lg:max-w-[85%] ${index === 1 ? "2xl:pb-8" : ""}`}`}>
                  {service.title}
                </h3>
                <p className={`text-xs lg:text-[15px] opacity-60 font-normal ${index === 1 ? "relative 2xl:bottom-8" : ""} ${paraClass}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        {button && (
          <div className="flex justify-center mt-8 md:mt-12">
            <Button
              text={button}
              link="/contact"
              className={`px-6 py-2 border border-gray-300 font-medium rounded text-sm md:text-base ${bgColor === "black" ? "text-white hover:border-[#FF6035] hover:bg-[#FF6035] transition-all duration-700 hover:text-white" : "text-gray-700 hover:bg-[#101010] transition-all duration-700 hover:text-white"}`}
            />
          </div>
        )}
      </div>
    </main>
  )
}
