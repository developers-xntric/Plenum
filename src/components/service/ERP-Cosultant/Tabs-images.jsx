"use client"

import Image from "next/image"
import { useState } from "react"

export default function TabImageGallery() {
  const [activeTab, setActiveTab] = useState("United Arab Emirates")

  // Define tabs
  const tabs = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Egypt", "United Kingdom"]

  // Define image content for each tab
  const tabImages = {
    "United Arab Emirates": {
      src: "/service/uae-image.webp",
      alt: "Dubai Skyline with Burj Khalifa"
    },
    "Saudi Arabia": {
      src: "/service/saudi-image.webp",
      alt: "Saudi Arabia Landscape"
    },
    "Qatar": {
      src: "/service/qatar-image.webp",
      alt: "Qatar Modern Architecture"
    },
    "Egypt": {
      src: "/service/egypt-image.webp",
      alt: "Egyptian Landmarks"
    },
    "United Kingdom": {
      src: "/service/uk-image.webp",
      alt: "United Kingdom Cityscape"
    }
  }

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex justify-center items-center gap-16 sm:gap-1 xl:gap-1 mb-10 border-b-2 w-full sm:max-w-[85%] mx-auto overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[15px] lg:text-[22px] w md:w-[33%] xl:w-[33%] flex-shrink-0 
              ${index === 0 ? "pl-[10rem] md:pl-[0rem] lg:pl-0" : ""} 
              py-2 cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings 
              ${activeTab === tab ? 'text-[#FF6035] border-b-2 border-[#FF6035]' : 'text-gray-400'} 
              focus:outline-none transition-colors duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Display Area */}
      <div className="w-full h-[40vh] md:h-[60vh] xl:h-[580px] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
        <div className="relative w-full h-full">
          <Image
            src={tabImages[activeTab].src}
            alt={tabImages[activeTab].alt}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg transition-opacity duration-300"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-16 md:w-24 h-16 md:h-24 flex items-center justify-center text-lg cursor-pointer font-['Archivo'] hover:bg-[#e55a30] transition-colors duration-300">
            Play
          </button>
        </div>
      </div>
    </div>
  )
}