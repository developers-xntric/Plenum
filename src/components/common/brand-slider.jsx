"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BrandSlider({ text, brand_icons, width }) {
    const loopIcons = [...brand_icons, ...brand_icons];
    const [duration, setDuration] = useState(35); // default for desktop

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDuration(10); // faster on mobile
            } else {
                setDuration(35); // slower on desktop
            }
        };

        handleResize(); // call on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative overflow-hidden flex items-center w-full h-full">
            {/* Left side - Text */}
            <div className="relative z-30 -top-0 md:bg-white ">
                <span className="text- text-white  opacity-0 blur-2xl text-base leading-[20px] font-medium font-['Archivo'] w-[10px] md:block hidden">
                    {text}
                </span>
                <div className="absolute md:-right-20 -top-4 md:top-0 h-32 md:h-96 w-10 md:w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-20 pointer-events-none" />
            </div>

            {/* Moving Icons */}
            <motion.div
                key={duration}
                className="flex gap-8 md:gap-16 md:ml-4 w-full"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >

                {loopIcons.map((icon, index) => (
                    <div key={index} className="flex-shrink-0">
                        <Image src={icon} alt={`Icon ${index}`} width={width ? width : 170} height={1} />
                    </div>
                ))}
            </motion.div>

            {/* Right Fade */}
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none" />
        </div>
    );
}
