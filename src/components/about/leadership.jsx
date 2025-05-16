"use client"

import Image from "next/image"

export default function LeadershipSection() {
    return (
        <section className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 py-14 md:py-20 border-b border-t font-['Archivo']">
            <div className="mb-12">
                <h2 className='text-[36px] lg:text-left text-center lg:text-[50px] text-secondary font-semibold tracking-[-1.5px] md:tracking-tight home-section-headings leading-[35px] md:leading-[40px] '>OUR LEADERSHIP</h2>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-between w-full mx-auto lg:space-y-0 space-y-5 lg:space-x-10 xl:h-[370px] 2xl:h-[400px]">

                {/* Left side - Image */}
                <div className="lg:w-[45%] h-full">
                    <Image
                        src="/about/leader.svg"
                        alt="Aasim Shaikh - Group CEO"
                        width={3000}
                        height={3000}
                        className="w-full md:h-full h-[400px] object-cover rounded-lg"
                    />
                </div>

                {/* Right side - Text */}
                <div className="lg:w-1/2 h-full flex flex-col justify-between">
                    <p className="text-[15px] lg:text-[16px] text-center md:text-left font-medium text-secondary opacity-60  mb-6 font-['Archivo'] max-w-lg leading-[26px]">
                        “Plenum Technologies is committed to building more than just technology. We are building pathways for businesses to grow intelligently and sustainably. Our focus is on fostering innovation, encouraging collaboration, and delivering solutions that truly empower our partners to lead with confidence in a data-driven world.”
                    </p>
                    <div className="mt-10 md:mt-0">
                        <h3 className="text-[20px] md:text-[30px] font-semibold text-secondary tracking-tighter home-section-headings">Aasim Shaikh</h3>
                        <p className="text-[15px] lg:text-[18px] text-seconday opacity-60 font-medium ">Group CEO</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
