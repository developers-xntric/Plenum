"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandSlider({ text, brand_icons, width }) {
    const loopIcons = [...brand_icons, ...brand_icons];

    return (
        <div className="relative overflow-hidden flex items-center w-full">
            {/* Left side - Text */}
            <div className="relative z-30 md:bg-white pr-10 py-2">
                <h2 className="text-secondary opacity-70 text-base leading-[20px] font-medium font-['Archivo'] w-[150px] md:block hidden">
                    {text}
                </h2>

                {/* Left SHADOW (near text) */}
                <div className="absolute md:-right-20 -top-4 md:top-0 h-32 md:h-full w-10 md:w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-20 pointer-events-none" />
            </div>

            {/* Moving Icons */}
            <motion.div
                className="flex gap-16 ml-4 w-full"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {loopIcons.map((icon, index) => (
                    <div key={index} className="flex-shrink-0">
                        <Image src={icon} alt={`Icon ${index}`} width={width ? width : 190} height={170} />
                    </div>
                ))}
            </motion.div>


            {/* Right Fade (end of carousel) */}
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none" />
        </div>
    );
}
