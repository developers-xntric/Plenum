"use client"

import Image from "next/image"

export default function LeadershipSection() {
    return (
        <section className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 pb-24 font-['Archivo']">
            <div className="mb-12">
                <h2 className="text-[50px] font-semibold text-secondary tracking-tighter home-section-headings">OUR LEADERSHIP</h2>
            </div>
            <div className="flex items-center justify-between w-full mx-auto space-x-10 h-[400px]">
             
                {/* Left side - Image */}
                <div className="w-1/2 h-full">
                    <Image
                        src="/about/leadership.webp"
                        alt="Aasim Shaikh - Group CEO"
                        width={3000}
                        height={3000}
                        className="w-full h-full rounded-lg"
                    />
                </div>

                {/* Right side - Text */}
                <div className="w-1/2 h-full flex flex-col justify-between">
                    <p className="text-[16px] text-secondary opacity-60 font-normal mb-6 font-['Archivo'] max-w-lg leading-[26px]">
                        “Plenum Technologies is committed to building more than just technology. We are building pathways for businesses to grow intelligently and sustainably. Our focus is on fostering innovation, encouraging collaboration, and delivering solutions that truly empower our partners to lead with confidence in a data-driven world.”
                    </p>
                    <div>
                        <h3 className="text-[30px] font-semibold text-secondary tracking-tighter home-section-headings">Aasim Shaikh</h3>
                        <p className="text-[18px] text-seconday opacity-60 font-medium mt-2">Group CEO</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
