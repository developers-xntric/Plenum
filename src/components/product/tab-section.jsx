"use client"
import Image from "next/image"
import { useState } from "react"

export function TabsSection({ values, tabImages, direction, heading, para }) {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto lg:space-y-20 py-16 md:py-10 xl:py-16'>
                <div className="text-center mb-20">
                    <h2 className={`text-[36px] text-center lg:text-[50px] text-secondary font-semibold tracking-[-1.5px] md:tracking-tight home-section-headings  leading-[38px] lg:leading-16 mx-auto ${heading ? "md:max-w-[60%]" : "md:max-w-[50%]"}`}>{heading || "Purpose-Built Platforms. Less Code. Smarter Results"}</h2>
                    <p className='text-secondary text-center font-["Archivo"] lg:max-w-[95%] xl:max-w-[48.5%] mx-auto 2xl:max-w-[50%] my-4 opacity-75 text-[15px] xl:text-[18px]'>
                        {para || "Vertical Builds delivers custom-fit solutions for diverse industries, faster, smarter, and more efficiently. Empower your teams to launch scalable systems without the complexity of traditional development."}
                    </p>
                </div>

                <div className={`flex lg:flex-${direction || "row"} flex-col gap-10 w-full justify-between items-start xl:h-[650px]`}>
                    {/* Left side - Tabs */}
                    <div className="bg-white rounded-lg lg:w-[45%] font-['Archivo'] w-full">
                        {values.map((value, index) => (
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
