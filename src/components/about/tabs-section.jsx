"use client"

import { useState } from "react"
import Image from "next/image"
import { tabImages, values } from "@/data/tabs-section-data"

export default function ValuesSection() {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <section>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 py-16 mt-[100px]'>
                <div className="text-center mb-20">
                    <h2 className="text-[50px] font-['Archivo'] font-medium text-secondary mb-4 tracking-tighter">OUR VALUES</h2>
                    <p className="text-secondary font-['Archivo'] text-[15px] max-w-3xl mx-auto font-normal opacity-60">
                        At Planium, we stand out from the 120+ IT outsourcing companies in the region with our unique value proposition, which combines the following key differentiators.
                    </p>
                </div>

                <div className="flex gap-10 w-full justify-between items-start h-[650px]">
                    {/* Left side - Tabs */}
                    <div className="bg-white rounded-lg w-[45%]">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`p-6 cursor-pointer transition-all duration-200 hover:bg-[#F4F4F4] ${activeTab === index ? "bg-[#EFEFEF] rounded-[20px] shadow-lg" : ""}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <h3 className="text-[26px] tracking-tighter font-medium text-secondary">{value.title}</h3>
                                <p className="text-secondary font-normal text-[18px] mt-1 opacity-60 tracking-tight">{value.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Just the image */}
                    <div className="flex items-center h-full justify-center w-1/2 relative">
                        <Image
                            src={tabImages[activeTab] || "/placeholder.svg"}
                            alt="Project criteria"
                            width={1400}
                            height={1400}
                            className="w-full h-full"
                            priority={activeTab === 0}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
