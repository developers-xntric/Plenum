"use client"
import Image from "next/image"
import React from "react"
export default function About4() {
  return (
    <section className="bg-[#1E1E1E] text-white py-16 md:py-20  overflow-hidden relative">
      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start 2xl:max-w-[1440px] w-[90%] mx-auto justify-between mb-4 lg:mb-32 relative">
        {/* Left side - SVG Circle Element */}
        <div className="w-full lg:w-1/3 relative mb-10 lg:mb-0">
          <div className="relative h-full w-full mx-auto lg:mx-0">
            {/* This is where you would place your SVG */}
          <Image
          alt="Circle"
          src="/about/circle1.svg"
          width={1000}
          height={1000}
          className="w-full h-full object-cover lg:block hidden"
          style={{ userSelect: "none" }}
          unoptimized
          />
          </div>
          <Image
          alt="Circle"
          src="/about/Icons.svg"
          width={1000}
          height={1000}
          className="w-52 mx-auto h-full object-cover lg:hidden block"
          style={{ userSelect: "none" }}
          unoptimized
          />
        </div>

        {/* Right side - Vision Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[39px] md:text-left text-center md:px-0 px-16 leading-[45px] md:leading-[40px] lg:text-6xl xl:text-7xl font-fontmedium mb-8">
            Our <span className="text-[#F26B44]">Vision</span>
          </h2>
          <p className="text-[15px] lg:text-xl md:text-left text-center leading-relaxed text-gray-300">
            To be a future-ready technology partner transforming enterprise operations through AI-powered ERP systems
            that empower every person and department within a company. We anticipate a future where businesses of all
            sizes embrace intelligent technologies as part of their operations, driving innovation, agility, scale, and
            long- term growth, and transforming entire industries.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row items-center 2xl:max-w-[1440px] w-[90%] mx-auto lg:items-start justify-between relative">
        {/* Left side - Mission Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[39px] md:text-left text-center md:px-0 px-10 leading-[45px] md:leading-[40px] font-medium lg:text-6xl xl:text-7xl mb-8 mt-10 lg:mt-0">
            Our <span className="text-[#F26B44]">Mission</span>
          </h2>
          <p className="text-lg lg:text-xl md:text-left text-center leading-relaxed text-gray-300">
            Our mission is to provide innovative, scalable, and secure AI-enabled ERP solutions that simplify complex
            processes, simplify real-time analytics, and allow organizations to stay compliant. We strive to democratize
            AI through no-code intelligent platforms and cloud-managed services that empower business and IT teams to
            work together. Our consulting, custom services, and ongoing operational support help organizations in
            diverse industries—including manufacturing, logistics, and healthcare—reach their digital transformation
            goals with assurance.
          </p>
        </div>

        {/* Right side - SVG Semi-Circle Element */}
        <div className="w-full lg:w-1/3 relative mb-10 lg:mb-0 flex justify-end">
          <div className="relative h-64 w-64 mx-auto lg:mx-0">
            {/* This is where you would place your SVG */}
            <Image
              alt="Arc"
              src="/about/circle2.svg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              style={{ userSelect: "none" }}
              unoptimized
              />
            </div>
          </div>
        </div>
    </section>
  )
}

