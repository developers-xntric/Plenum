"use client"

import { useState } from "react"
import Image from "next/image"
import { about, tabImages, values } from "@/data/tabs-section-data"

export default function TabsSection() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto lg:space-y-20 py-16 md:py-10 lg:py-16'>
                <div className="text-center mb-20">
                    <h2 className='text-[36px]  text-center lg:text-[50px] text-secondary font-semibold tracking-[-1.5px] md:tracking-tight home-section-headings'>OUR VALUES</h2>
                    <p className='text-secondary text-center font-["Archivo"] lg:max-w-[95%] xl:max-w-[50%] mx-auto 2xl:max-w-[50%] my-4 opacity-75 text-[15px] xl:text-[18px]'>
                        At Planium, we stand out from the 120+ IT outsourcing companies in the region with our unique value proposition, which combines the following key differentiators.
                    </p>
                </div>

                <div className="flex lg:flex-row flex-col gap-10 w-full justify-between items-start lg:h-[650px]">
                    {/* Left side - Tabs */}
                    <div className="bg-white rounded-lg lg:w-[45%] font-['Archivo'] w-full">
                        {about.map((value, index) => (
                            <div key={index}>

                                <div
                                    key={index}
                                    className={`p-4 md:p-6 cursor-pointer transition-all duration-200 hover:bg-[#F4F4F4] ${activeTab === index ? "bg-[#EFEFEF] rounded-[20px]" : ""}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <h3 className="text-[20px] lg:text-[26px] tracking-tighter font-semibold home-section-headings text-secondary">
                                        {value.title}
                                    </h3>
                                    <p className="text-secondary font-normal text-[16px] lg:text-[18px] mt-1 opacity-60 tracking-tight">
                                        {value.description}
                                    </p>

                                </div>
                                {/* Accordion-style image for mobile */}
                                {activeTab === index && (
                                    <div className="mt-4 lg:hidden">
                                        <Image
                                            src={tabImages[index] || "/placeholder.svg"}
                                            alt={value.title}
                                            width={800}
                                            height={800}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right side - image for desktop only */}
                    <div className="hidden lg:flex items-center h-full justify-center lg:w-1/2 relative">
                        <Image
                            src={tabImages[activeTab] || "/placeholder.svg"}
                            alt="Project criteria"
                            width={1400}
                            height={1400}
                            className="w-full h-full object-contain"
                            priority={activeTab === 0}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
