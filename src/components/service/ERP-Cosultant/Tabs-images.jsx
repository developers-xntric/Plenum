"use client"

import Image from "next/image"
import { useState } from "react"

export default function TabImageGallery({ activeState }) {
  const [activeTab, setActiveTab] = useState("UAE")

  // Define tabs
  const tabs = ["UAE", "Saudi Arabia", "Egypt", "United Kingdom", "Canada"]

  // Unified data for each tab
  const tabData = {
    "UAE": {
      src: "/service/UAE.png",
      alt: "Dubai Skyline with Burj Khalifa",
      address: "IT Plaza, Dubai Silicon Oasis, Dubai, UAE"
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
    "Canada": {
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
            className={`text-[15px] lg:text-[22px] md:w-[20%] lg:w-[20%] xl:w-[19%] flex-shrink-0 
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
      <div className="w-full h-[40vh] md:h-[60vh] xl:h-[640px] 2xl:h-[700px] lg:max-w-[95%] 2xl:max-w-[95%] mx-auto">
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
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="30.7676" width="30" height="4.54545" rx="2.27273" fill="white" />
                <foreignObject x="0.9375" y="-3.75" width="38.125" height="43.9219"><div xmlns="http://www.w3.org/1999/xhtml" style={{ "backdrop-filter": "blur(3.12px);clip-path:url(#bgblur_0_2402_5242_clip_path);height:100%;width:100%" }}></div></foreignObject><g data-figma-bg-blur-radius="6.25">
                  <path d="M32.5 15.5337C32.5 21.4535 23.6256 30.552 20.8317 33.2697C20.3657 33.7231 19.6343 33.7231 19.1683 33.2697C16.3744 30.552 7.5 21.4535 7.5 15.5337C7.5 8.50799 13.0964 2.8125 20 2.8125C26.9036 2.8125 32.5 8.50799 32.5 15.5337Z" fill="white" fillOpacity="0.2" />
                  <path d="M20 2.65625C26.9924 2.65625 32.6562 8.42474 32.6562 15.5342C32.6561 17.0496 32.0892 18.7543 31.209 20.4912C30.3275 22.2305 29.125 24.016 27.8379 25.6973C25.5852 28.64 23.0653 31.2745 21.5332 32.7988L20.9404 33.3818C20.4466 33.8621 19.688 33.8921 19.1611 33.4717L19.0596 33.3818C17.6604 32.0208 14.7367 29.0603 12.1621 25.6973C10.875 24.016 9.67247 22.2305 8.79102 20.4912C7.9108 18.7543 7.34386 17.0496 7.34375 15.5342C7.34375 8.42474 13.0076 2.65625 20 2.65625Z" stroke="url(#paint0_linear_2402_5242)" strokeOpacity="0.5" strokeWidth="0.3125" />
                </g>
                <g filter="url(#filter1_d_2402_5242)">
                  <circle cx="20" cy="14.6875" r="3.75" fill="#D9D9D9" />
                </g>
                <defs>
                  <clipPath id="bgblur_0_2402_5242_clip_path" transform="translate(-0.9375 3.75)"><path d="M32.5 15.5337C32.5 21.4535 23.6256 30.552 20.8317 33.2697C20.3657 33.7231 19.6343 33.7231 19.1683 33.2697C16.3744 30.552 7.5 21.4535 7.5 15.5337C7.5 8.50799 13.0964 2.8125 20 2.8125C26.9036 2.8125 32.5 8.50799 32.5 15.5337Z" />
                  </clipPath><filter id="filter1_d_2402_5242" x="15" y="10.9375" width="10" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1.25" />
                    <feGaussianBlur stdDeviation="0.625" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2402_5242" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2402_5242" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_2402_5242" x1="7.5" y1="9.75136" x2="30.1982" y2="45.2909" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>


              <h2 className="text-[18px] md:text-[30px] font-semibold">{activeTab === "UAE" ? "United Arab Emirates" : activeTab}</h2>
            </div>
            <p className="text-[11px] md:text-base text-left max-w-[70%] md:max-w-[85%] mt-3">{tabData[activeTab].address}</p>
          </div>
        </div>
      </div>
    </div >
  )
}