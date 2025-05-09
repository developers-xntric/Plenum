"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export default function MobilitySolutions({
  solutions,
  className,
  card_className,
  isCenter = false,
  heading1,
  heading2,
  para,
}) {
  const isMobile = useMobile()
  const includesFlex = className?.includes("flex")
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)

  // Set up autoplay for the carousel
  useEffect(() => {
    if (!api || !isMobile) return

    const autoplayInterval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(autoplayInterval)
  }, [api, isMobile])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section className="md:pb-12 pb-6 py-12 max-w-[90%] 2xl:max-w-[1440px] font-['Archivo'] mx-auto">
      <div className={`mb-12 md:mb-12 ${isCenter ? "text-center" : "text-center md:text-left"}`}>
        <h2 className="text-2xl lg:text-[50px] font-semibold text-secondary home-section-headings leading-[40px]">
          {heading1 || "Mobility Solutions For"}
        </h2>
        <h2 className="text-2xl lg:text-[50px] font-semibold text-secondary home-section-headings mb-6">
          {heading2 || "Microsoft Dynamics"}
        </h2>
        <p className={cn("text-[15px] text-[#101010] font-medium opacity-60 max-w-[540px]", isCenter && "mx-auto max-w-[690px]")}>
          {para ||
            "Revolutionize your business with turnkey Apps for Dynamics 365, NAV, AX and Business Central provided by Plexian - Certified Microsoft Application Developer."}
        </p>
      </div>

      {isMobile ? (
        // Mobile carousel view
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {solutions.map((solution, index) => (
              <CarouselItem key={index} className="basis-[92%] sm:basis-[300px]">
                <div
                  className={`bg-white px-4 ml-5 py-6 rounded-sm shadow-md border border-gray-100 gap-4 justify-center flex flex-col h-[200px] ${card_className || ""}`}
                >
                  <Image
                    src={solution.icon || "/placeholder.svg"}
                    alt={solution.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <h3 className="text-[20px] font-semibold text-gray-800">{solution.title}</h3>
                  <p className="text-xs 2xl:text-base text-[#4D4D56]">
                    {solution.description || "Solution is easy to use and totally customizable to your business needs."}
                  </p>
                  <p className="text-xs 2xl:text-base text-[#4D4D56]">
                    {solution.para}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            {(() => {
              const maxDots = 5
              const total = solutions.length
              let start = 0

              if (total > maxDots) {
                start = Math.min(Math.max(current - Math.floor(maxDots / 2), 0), total - maxDots)
              }

              const dotsToRender = solutions.slice(start, start + Math.min(maxDots, total))

              return (
                <div className="flex justify-center mt-4">
                  {dotsToRender.map((_, index) => {
                    const actualIndex = start + index
                    return (
                      <span
                        key={actualIndex}
                        className={`h-1.5 rounded-full mx-1 transition-all duration-300 ${current === actualIndex ? "w-1.5 bg-orange-400" : "w-1.5 bg-gray-300"
                          }`}
                      />
                    )
                  })}
                </div>
              )
            })()}

          </div>
        </Carousel>
      ) : (
        // Desktop grid view
        <div className={`${className} gap-5 xl:gap-8 2xl:gap-10 md:mt-14`}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-white px-4 py-6 rounded-sm shadow-sm border border-gray-100 gap-4 justify-center flex flex-col ${includesFlex
                ? "w-full sm:w-[300px] xl:w-[calc(25%-1rem)] 2xl:w-[calc(25%-1.25rem)] h-[200px]"
                : card_className
                }`}
            >
              <Image
                src={solution.icon || "/placeholder.svg"}
                alt={solution.title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-[20px] font-semibold text-gray-800">{solution.title}</h3>
              <p className="text-xs 2xl:text-base text-[#4D4D56]">
                {solution.description || "Solution is easy to use and totally customizable to your business needs."}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
