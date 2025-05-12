'use client'
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonArray, industries2 } from "@/data/indusdries"
import Link from "next/link"

export default function IndustryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [emblaRefMain, emblaApiMain] = useEmblaCarousel({
    loop: true,
    draggable: false,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApiMain) emblaApiMain.scrollPrev()
  }, [emblaApiMain])

  const scrollNext = useCallback(() => {
    if (emblaApiMain) emblaApiMain.scrollNext()
  }, [emblaApiMain])

  // Sync the main carousel with the current index
  useEffect(() => {
    if (!emblaApiMain) return

    const onSelect = () => {
      setCurrentIndex(emblaApiMain.selectedScrollSnap())
    }

    emblaApiMain.on("select", onSelect)
    return () => {
      emblaApiMain.off("select", onSelect)
    }
  }, [emblaApiMain])

  const N = industries2.length

  return (
    <div className="2xl:max-w-[1440px] md:max-w-[90%] mx-auto md:rounded-3xl font-['Archivo'] mb-20 bg-[#101010] text-white overflow-hidden">
      {/* Top Navigation - Continuous Scrolling */}
      <div className="overflow-hidden border-[#FFFFFF] border-b">
        <div className="ticker">
          <div className="ticker__wrapper">
            <div className="ticker__item">
              {buttonArray.map((industry, index) => (
                <button
                  key={`original-${index}`}
                  className={cn(
                    "px-4 2xl:px-10 py-6 whitespace-nowrap text-[15px] md:text-[17px] transition-colors duration-300",
                    index % N === currentIndex ? "text-orange-500" : "text-white",
                  )}
                  onClick={() => {
                    const originalIndex = index % N
                    if (emblaApiMain) emblaApiMain.scrollTo(originalIndex)
                  }}
                >
                  {industry}
                </button>
              ))}
            </div>
            <div className="ticker__item" aria-hidden="true">
              {buttonArray.map((industry, index) => (
                <button
                  key={`duplicate-${index}`}
                  className={cn(
                    "px-4 2xl:px-10 py-6 whitespace-nowrap text-[15px] md:text-[17px] transition-colors duration-300",
                    index % N === currentIndex ? "text-orange-500" : "text-white",
                  )}
                  onClick={() => {
                    const originalIndex = index % N
                    if (emblaApiMain) emblaApiMain.scrollTo(originalIndex)
                  }}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div >

      {/* Main Content Carousel */}
      < div className="relative" >
        <div className="overflow-hidden" ref={emblaRefMain}>
          <div className="flex w-full md:max-w-[95%] mx-auto">
            {industries2.map((industry, index) => (
              <div key={industry.id} className="flex-[0_0_100%] min-w-0">
                <div className="py-8 md:p-12">
                  <div className="text-[12px] text-[#989898] text-center md:text-start mb-1">Industry</div>
                  <div className="text-[#FF6035] text-[30px] text-center md:text-start font-semibold mb-6">
                    {industry.industry}
                  </div>
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Image Section */}
                    <div className="w-[90%] mx-auto md:w-1/2 relative">
                      <div className="">
                        <img
                          src={industry.image || "/placeholder.svg"}
                          alt={industry.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-[90%] mx-auto md:w-1/2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[23px] md:text-[28px]  text-[#FFFFFF] font-semibold mb-3">
                          {industry.title}
                        </h3>
                        <p className="text-[#989898] md:max-w-[90%] text-[15px] mb-8">{industry.description}</p>
                      </div>

                      <div className="flex  justify-between mt-auto">
                        <div className="flex flex-col">
                          <div className="text-[12px] text-[#989898] mb-1">Industry</div>
                          <div className="text-white text-[14px]">{industry.industry}</div>
                          <div className="mt-12 md:mt-auto">
                            <Link
                              href={`/case-studies/${index + 1}`}
                              className="text-[#FF6035] text-[15px] md:text-[17px] flex items-center group"
                            >
                              View Project
                              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[11.98px] text-[#989898] text-end mb-1 mt-4 md:mt-0">
                            Technologies Implemented
                          </div>
                          <ul>
                            {industry.expertise.map((item, i) => (
                              <li key={i} className="text-white text-[14.547px] text-end">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div >

        <button
          onClick={scrollPrev}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 p-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" color="#FFFFFF80" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 p-2"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" color="#FFFFFF80" />
        </button>

        {/* Pagination Dots - Mobile */}
        <div className="flex justify-center space-x-1 mt-6 mb-4 md:hidden">
          {industries2.map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                i === currentIndex ? "bg-white w-3" : "bg-gray-600",
              )}
              onClick={() => {
                if (emblaApiMain) emblaApiMain.scrollTo(i)
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <style style jsx > {`
                .ticker {
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    box-sizing: border-box;
                }

                .ticker__wrapper {
                    display: flex;
                    width: fit-content;
                }

                .ticker__item {
                    display: flex;
                    padding-right: 0;
                    animation: ticker 20s linear infinite;
                }

                @keyframes ticker {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                @media (max-width: 768px) {
                    .ticker__item {
                        animation: ticker 15s linear infinite;
                    }
                }
            `}</style >
    </div >
  );
}