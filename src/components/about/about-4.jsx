"use client"
import Image from "next/image"
import React from "react"
export default function About4() {
  return (
    <section className="bg-[#1E1E1E] font-['Archivo'] py-20  relative">
      <div className="2xl:max-w-[1440px] w-[85%] lg:w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-start  lg:justify-evenly mb-16 lg:mb-20 relative">
          <div className="w-full lg:w-1/3 relative mb-6 lg:mb-0">
            <div className="relative flex justify-center">
              <Image
                alt="Circle"
                src="/about/circle1.svg"
                width={700}
                height={700}
                className="w-[277px] h-full object-cover"
                style={{ userSelect: "none" }}
                unoptimized
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-[39px] lg:text-[60px] xl:text-7xl font-light  mb-4 text-[#FFF]">
              Our <span className="text-[#F26B44]">Vision</span>
            </h2>
            <p className="text-[15px] lg:text-[16px] 2xl:max-w-[70%] leading-relaxed text-[#FFFFFF] opacity-60">
            To be a future-ready technology partner transforming enterprise operations through AI-powered ERP systems that empower every person and department within a company. We anticipate a future where businesses of all sizes embrace intelligent technologies as part of their operations, driving innovation, agility, scale, and long-term growth, and transforming entire industries.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-start  justify-between  relative">
          {/* Left side - Mission Content */}
          <div className="w-full lg:w-[70%]">
            <h2 className="text-[39px] lg:text-[60px] xl:text-7xl font-light text-[#FFF] mb-4">
              Our <span className="text-[#F26B44]">Mission</span>
            </h2>
            <p className="text-[15px] 2xl:max-w-[85%] lg:text-[16px] leading-relaxed text-[#FFFFFF] opacity-60 ">
              Our mission is to provide innovative, scalable, and secure AI-enabled ERP solutions that simplify complex processes, simplify real-time analytics, and allow organizations to stay compliant. We strive to democratize AI through no-code intelligent platforms and cloud-managed services that empower business and IT teams to work together. Our consulting, custom services, and ongoing operational support help organizations in diverse industries—including manufacturing, logistics, and healthcare—reach their digital transformation goals with assurance.
            </p>
          </div>

          {/* Right side - SVG Semi-Circle Element */}
          <div className="w-full lg:w-1/3 relative flex 2xl:justify-start justify-end">
            <div className="relative h-64 w-64 mx-auto lg:mx-0">
              {/* This is where you would place your SVG */}
              <Image
                alt="Arc"
                src="/about/circle2.svg"
                width={700}
                height={700}
                className="w-full h-full object-cover"
                style={{ userSelect: "none" }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

