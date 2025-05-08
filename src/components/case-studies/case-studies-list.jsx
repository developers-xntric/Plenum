"use client"
import { useState } from "react";

export default function HomeServices({ servicesData }) {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="bg-white h-[450px]">
            {/* Main content */}
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-10 md:space-y-20 py-8 md:py-16 xl:py-24">

                <div className="flex flex-col space-y-10 sm:space-y-16">
                    {/* BOTTOM column - Services */}
                    <div className="flex md:flex-row flex-col items-start justify-between xl:max-w-[90%]">
                        {/* LEFT */}
                        <div className="space-y-2 md:space-y-6 w-full md:w-[80%]">
                            <div className="relative font-medium">
                                <h2 className="text-[30px] lg:text-[50px] xl:text-[50px] font-semibold text-secondary opacity-[0.8] inline-block md:block font-['Archivo'] tracking-tighter">
                                    Technologies
                                </h2>
                                <h2 className="text-[30px] lg:text-[50px] xl:text-[50px] font-semibold text-secondary opacity-[0.8] inline-block lg:block md:mx-0 mx-2 font-['Archivo'] tracking-tighter mt-[-24px]">
                                    Implemented
                                </h2>
                            </div>
                        </div>

                        {/* RIGHT - Accordion */}
                        <div className="w-full md:w-[65%] space-y-0 md:my-0 my-14 font-['Archivo']">
                            {servicesData.map((item) => (
                                <div
                                    key={item}
                                    className="border-t-[2.5px] border-[#e7e7e7] py-5"
                                >
                                    <div
                                        onClick={() => toggleAccordion(item)}
                                        className="group flex items-center gap-3 font-medium text-secondary lg:text-[21px] cursor-pointer"
                                    >
                                        <p className="group-hover:text-[#FF6035] leading font-bold transition-colors w-[90%] leading-[-0.485px]  duration-500 font-['Archivo']">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}