"use client"

import Image from "next/image"
import { useState } from "react"

export default function TabImageGallery({ activeState }) {
  const [activeTab, setActiveTab] = useState(activeState || "UAE")

  // Define tabs
  const tabs = ["UAE", "Saudi Arabia", "Egypt", "United Kingdom", "Qatar"]

  // Unified data for each tab
  const tabData = {
    "UAE": {
      src: "/service/UAE.png",
      alt: "Dubai Skyline with Burj Khalifa",
      address: "Unit #47, Plot #1479, Feeder Commercial Centre, Me’Asiem First, Dubai Production City, Dubai"
    },
    "Saudi Arabia": {
      src: "/service/Saudi-arabia.png",
      alt: "Saudi Arabia Landscape",
      address: "3141 Anas Ibn Malik Rd,Al Malqa, Riyadh 13521"
    },
    "Egypt": {
      src: "/service/egypt.png",
      alt: "Egyptian Landmarks",
      address: "3141 Anas Ibn Malik Rd,Al Malqa, Riyadh 13521 Saudi Arabia"
    },
    "United Kingdom": {
      src: "/service/UK.png",
      alt: "United Kingdom Cityscape",
      address: "3 Rushton’s Yard, Ashby de la Zouch, Leicestershire, LE65 1AL, United Kingdom"
    },
    "Qatar": {
      src: "/service/canada.png",
      alt: "Qatar Modern Architecture",
      address: "3895 Manatee Way, Mississauga, Ontario L5M6P7"
    },
  }

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex justify-center items-center gap-10 sm:gap-1 xl:gap-2 mb-10 border-b-2 w-full max-w-[90%] mx-auto overflow-x-auto 2xl:overflow-x-hidden">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[15px] lg:text-[22px] md:w-[33%] xl:w-[19%] flex-shrink-0 
              ${index === 0 ? "pl-[16rem] md:pl-[0rem] lg:pl-0" : ""} 
              py-2 cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings 
              ${activeTab === tab ? 'text-[#FF6035] border-b-2 border-[#FF6035]' : 'text-gray-400'} 
              focus:outline-none transition-colors duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Display Area */}
      <div className="w-full h-[40vh] md:h-[60vh] xl:h-[580px] lg:max-w-[95%] 2xl:max-w-[95%] mx-auto">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={tabData[activeTab].src}
            alt={tabData[activeTab].alt}
            fill
            style={{ objectFit: "cover" }}
            className="transition-opacity duration-300"
          />

          <div className="bg-primary font-['Archivo'] text-white p-3 md:p-5 absolute flex flex-col justify-start items-start left-0 bottom-0 w-[400px]">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="33" viewBox="0 0 26 33" fill="none">
                <g>
                  <path
                    d="M25.5 13.5337C25.5 19.4535 16.6256 28.552 13.8317 31.2697C13.3657 31.7231 12.6343 31.7231 12.1683 31.2697C9.3744 28.552 0.5 19.4535 0.5 13.5337C0.5 6.50799 6.09644 0.8125 13 0.8125C19.9036 0.8125 25.5 6.50799 25.5 13.5337Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M13 0.65625C19.9924 0.65625 25.6562 6.42473 25.6562 13.5342C25.6561 15.0496 25.0892 16.7543 24.209 18.4912C23.3275 20.2305 22.125 22.016 20.8379 23.6973C18.2633 27.0603 15.3396 30.0208 13.9404 31.3818C13.4138 31.894 12.5862 31.894 12.0596 31.3818C10.6604 30.0208 7.73665 27.0603 5.16211 23.6973C3.87504 22.016 2.67247 20.2305 1.79102 18.4912C0.910803 16.7543 0.34386 15.0496 0.34375 13.5342C0.34375 6.42473 6.00757 0.65625 13 0.65625Z"
                    stroke="url(#paint0_linear_2402_5245)"
                    strokeOpacity="0.5"
                    strokeWidth="0.3125"
                  />
                </g>
                <g filter="url(#filter1_d_2402_5245)">
                  <circle cx="13" cy="12.6875" r="3.75" fill="#D9D9D9" />
                </g>
                <defs>
                  <filter id="filter1_d_2402_5245" x="8" y="8.9375" width="10" height="10" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1.25" />
                    <feGaussianBlur stdDeviation="0.625" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2402_5245"
                    x1="0.5"
                    y1="7.75136"
                    x2="23.1982"
                    y2="43.2909"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>

              <h2 className="text-[18px] md:text-[30px] font-semibold">{activeTab}</h2>
            </div>
            <p className="text-[11px] md:text-base text-left max-w-[70%] md:max-w-[95%] mt-3">{tabData[activeTab].address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}