"use client"

import Image from "next/image"
import { useState } from "react"

export default function FaoDynamicOperation() {
    const [activeTab, setActiveTab] = useState("Finance")

    const tabs = ["Finance", "Supply Chain", "Human Resources", "Manufacturing"]

    const tabContent = {
        Finance: [
            {
                image: "/service/FAO/FAO-DO.svg",
                caption: "Ensure on-time payments from customers and improve your cash flow cycle with rule-based collection automation",
            },
           
        ],
        "Supply Chain": [
            {
                image: "/service/FAO/supply-chain.svg",
                caption: "Optimize inventory management with real-time visibility across your entire supply chain",
            },
           
        ],
        "Human Resources": [
            {
                image: "/service/FAO/human-resource.svg",
                caption: "Simplify employee onboarding and management with comprehensive HR tools",
            },
           
        ],
        Manufacturing: [
            {
                image: "/service/FAO/manufacturing.svg",
                caption: "Monitor production efficiency with real-time manufacturing insights",
            },
           
        ],
    }

    return (
        <section className="2xl:max-w-[1400px] w-[90%] mx-auto text-center px-4 py-14 md:pt-20 xl:pt-22 font-['Archivo']">
            <h1 className="text-[30px] lg:text-[50px] max-w-2xl mx-auto leading-[34px] lg:leading-[55px] text-secondary font-medium mb-4">
                Dynamics 365 Finance and Operations modules
            </h1>

            <p className="text-secondary font-medium opacity-75 max-w-4xl mx-auto mb-8">
                Enhance your business efficiency and adapt quickly to changing market conditions by optimizing your financial
                processes and streamlining your finance operations with real-time insights and analytics that enable informed
                decision-making.
            </p>

            <div className="flex flex-wrap md:justify-center gap-2 md:gap-4 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 border cursor-pointer border-[#808080] font-medium rounded-full text-sm transition-colors md:block ${
                            activeTab === tab
                                ? "bg-white text-primary"
                                : "bg-white text-[#101010] hover:border-gray-400"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className=" mb-6">
                {tabContent[activeTab].map((slide, index) => (
                    <div key={index} className="space-y-2">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded shadow">
                            <Image
                                src={slide.image || "/placeholder.svg"}
                                alt={`${activeTab} dashboard slide ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 1000px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
