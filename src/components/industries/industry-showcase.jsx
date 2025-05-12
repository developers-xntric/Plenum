"use client"

import { useState, useRef } from "react"
import Image from "next/image"

export default function IndustryShowcase({ isTabs = false }) {
  const [activeTab, setActiveTab] = useState("Healthcare")
  const tabsRef = useRef(null)

  // Tab buttons (Category Titles)
  const tabs = ["Healthcare", "Food & Agriculture", "Bio Tech", "Consumer Banking", "Construction", "Business"]

  // Scroll the carousel by 200px
  const scrollTabs = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  // Drag-scrolling state and handlers
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - tabsRef.current.offsetLeft)
    setScrollLeft(tabsRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - tabsRef.current.offsetLeft
    const walk = (x - startX) * 2
    tabsRef.current.scrollLeft = scrollLeft - walk
  }
  // Thus qhsjqhs
  return (
    <div className="2xl:max-w-[1440px] mx-auto w-[93%] xl:w-[95%] pt-10 pb-20 2xl:pb-28 overflow-hidden">
      {/* Tabs Carousel */}
      {isTabs ? <div className="relative mb-10 w-[95%] md:w-[85%] mx-auto">
        <div
          ref={tabsRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* FOR DESKTOP */}
          <div className="hidden md:flex gap-3 items-center ralative">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap font-['Archivo'] border border-[#10101080] px-[20px] py-[4px] rounded-full text-[18px]  transition-colors ${activeTab === tab
                  ? " font-medium  text-primary"
                  : "bg-white text-secondary  hover:bg-[#F9FAFB] cursor-pointer"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FOR MOBILE */}

          <div className="flex md:hidden flex-wrap gap-3 items-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w font-['Archivo'] border border-[#10101080] px-4 py-[4px] rounded-full text-[17px]  transition-colors ${activeTab === tab
                  ? " font-medium  text-primary"
                  : "bg-white text-secondary  hover:bg-[#F9FAFB] cursor-pointer"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* <button
            onClick={scrollTabs}
            className="absolute md:-right-8 lg:-right-10 xl:right-0 top-3 md:block hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
              <path d="M16.4041 0.243345C16.327 0.319824 16.2658 0.410812 16.224 0.511062C16.1823 0.611313 16.1608 0.718841 16.1608 0.827444C16.1608 0.936046 16.1823 1.04357 16.224 1.14382C16.2658 1.24407 16.327 1.33506 16.4041 1.41154L20.1884 5.19584H0.822673C0.604487 5.19584 0.395237 5.28251 0.240955 5.43679C0.0866742 5.59108 0 5.80033 0 6.01851C0 6.2367 0.0866742 6.44595 0.240955 6.60023C0.395237 6.75451 0.604487 6.84119 0.822673 6.84119H20.172L16.4041 10.6008C16.2509 10.7549 16.1649 10.9634 16.1649 11.1808C16.1649 11.3981 16.2509 11.6066 16.4041 11.7608C16.5582 11.914 16.7668 12 16.9841 12C17.2014 12 17.4099 11.914 17.5641 11.7608L22.7963 6.52857C22.8667 6.461 22.9227 6.3799 22.961 6.29012C22.9993 6.20035 23.019 6.10377 23.019 6.00617C23.019 5.90858 22.9993 5.81199 22.961 5.72222C22.9227 5.63245 22.8667 5.55134 22.7963 5.48377L17.5723 0.243345C17.4958 0.166238 17.4048 0.105036 17.3046 0.0632695C17.2043 0.0215034 17.0968 0 16.9882 0C16.8796 0 16.7721 0.0215034 16.6718 0.0632695C16.5716 0.105036 16.4806 0.166238 16.4041 0.243345Z" fill="#101010" />
            </svg>
          </button> */}
        </div>
      </div> : <div className="flex flex-col gap-3 py-16">
        <h1 className="font-semibold font-['Archivo'] text-[50px] text-secondary tracking-tight">Explore More Case Studies</h1>
        <p className="max-w-3xl text-[16px] opacity-60 font-normal font-['Archivo']">Momentum AI is a unified platform built to automate every stage of the AI lifecycle — from data ingestion to deployment. Designed for enterprise scalability, it streamlines processes and accelerates AI.</p>
      </div>}

      {/* Portfolio Grid - Exact layout from the image */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-4 md:justify-between">

        {/* HorizonGrow - Large item on left */}
        <div className="hidden md:block relative md:w-[24%]">
          <div className="bg-white overflow-hidden xl:h-[512px]">
            <Image
              src="/industries/i1.png"
              alt="HorizonGrow"
              width={2000}
              height={2000}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-2 flex gap-4 items-center">
            <span className=" xl:text-[21.419px] text-[#232522] font-medium">HorizonGrow</span>
            <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
          </div>
        </div>

        <div className="flex flex-col md:w-[50%]">
          {/* OrionEdge Technologies - Top middle */}
          <div className="relative mx-auto">
            <div className="bg-white  overflow-hidden shadow-sm lg:w-[450px] xl:w-[584.037px] xl:h-[332.957px]">
              <Image
                src="/industries/i2.png"
                alt="OrionEdge Technologies"
                width={2000}
                height={2000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 flex gap-4 items-center">
              <span className=" xl:text-[21.419px] text-[#232522] font-medium">OrionEdge Technologies</span>
              <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
            </div>
          </div>

          {/* FOR MOBILE  */}

          {/* HorizonGrow - Large item on left */}
          <div className="blck md:hidden relative md:w-[24%] mt-4">
            <div className="bg-white overflow-hidden xl:h-[512px]">
              <Image
                src="/industries/i1.png"
                alt="HorizonGrow"
                width={2000}
                height={2000}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-2 flex gap-4 items-center">
              <span className=" xl:text-[21.419px] text-[#232522] font-medium">HorizonGrow</span>
              <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
            </div>
          </div>

          {/* CrimsonBay Energy */}
          <div className="hidden md:flex  lg:w-[584.037px] gap-8 mx-auto mt-10 lg:mt-16">
            <div className="relative">
              <div className="bg-white  overflow-hidden lg:w-[180px] xl:w-[262.691px] shadow-sm xl:h-[276.048px]">
                <Image
                  src="/industries/i4.png"
                  alt="CrimsonBay Energy"
                  width={2000}
                  height={2000}
                  className="w-full h-full"
                />
              </div>
              <div className="mt-2 flex gap-4 items-center">
                <span className=" xl:text-[21.419px] text-[#232522] font-medium">ZenithMed</span>
                <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
              </div>
            </div>
            <div className="relative right-5 lg:right-0">
              <div className="bg-white overflow-hidden md:w-[180px] lg:w-[250px] xl:w-[280.5px] shadow-sm xl:h-[228.556px]">
                <Image
                  src="/industries/i5.png"
                  alt="CrimsonBay Energy"
                  width={2000}
                  height={2000}
                  className="w-full h-full"
                />
              </div>
              <div className="mt-2 flex gap-4 items-center">
                <span className=" xl:text-[21.419px] text-[#232522] font-medium">VertaTech</span>
                <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:w-[26%]">
          {/* ZenithMed - Bottom middle */}
          <div className="col-span-12 md:col-span-4 relative">
            <div className="bg-white overflow-hidden shadow-sm xl:w-[309.388px] xl:h-[218.862px]">
              <Image
                src="/industries/i3.png"
                alt="ZenithMed"
                width={2000}
                height={2000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 flex gap-4 items-center">
              <span className=" xl:text-[21.419px] text-[#232522] font-medium">CrimsonBay Energy</span>
              <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
            </div>
          </div>

          {/* VertaTech - Bottom right */}
          <div className="col-span-12 md:col-span-4 relative">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm xl:w-[309.388px] xl:h-[335.567px]">
              <Image
                src="/industries/i6.png"
                alt="VertaTech"
                width={2000}
                height={2000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 flex items-center gap-4">
              <span className=" xl:text-[21.419px] text-[#232522] font-medium">BluePeak</span>
              <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
            </div>
          </div>
        </div>

        {/* FOR MOBILE  */}
        <div className=" md:hidden flex  lg:w-[584.037px] gap-4 mx-auto mt-2 md:mt-10 lg:mt-16">
          <div className="relative">
            <div className="bg-white  overflow-hidden lg:w-[180px] xl:w-[262.691px] shadow-sm xl:h-[276.048px]">
              <Image
                src="/industries/i4.png"
                alt="CrimsonBay Energy"
                width={2000}
                height={2000}
                className="w-full h-full"
              />
            </div>
            <div className="mt-2 flex gap-4 items-center">
              <span className=" xl:text-[21.419px] text-[#232522] font-medium">ZenithMed</span>
              <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
            </div>
          </div>
          <div className="relative lg:right-0 w-[50%]">
            <div className="bg-white overflow-hidden md:w-[180px] lg:w-[250px] xl:w-[280.5px] shadow-sm xl:h-[228.556px]">
              <Image
                src="/industries/i5.png"
                alt="CrimsonBay Energy"
                width={2000}
                height={2000}
                className="w-full h-full"
              />
            </div>
            <div className="mt-2 flex gap-4 items-center">
              <span className=" xl:text-[21.419px] text-[#232522] font-medium">VertaTech</span>
              <Image src={"/industries/arrow_i.svg"} alt="Arrow" width={15} height={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
