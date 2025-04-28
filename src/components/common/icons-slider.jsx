"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IconsSlider({ text, brand_icons }) {
    const loopIcons = [...brand_icons, ...brand_icons];

    return (
        <div className="relative overflow-hidden flex items-center">
            {/* 1st Text */}
            <div className="bg-[#F4F7FF] relative z-20 w-[220px]">
                <h2 className="text-secondary h-[105px] opacity-70 w-[150px] text-base leading-[20px] font-normal font-['Archivo'] flex items-center">
                    {text}
                </h2>

                {/* SHADOW */}
                <div className="absolute -right-20 top-0 h-full w-24 bg-gradient-to-r from-[#F4F7FF] via-[#F4F7FF] to-transparent z-20 pointer-events-none" />

            </div>

            {/* Slider */}
            <motion.div
                className="flex gap-16 w-[90%]"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ display: "flex" }}
            >
                {/* Icons render */}
                {loopIcons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center relative z-10"
                        style={{
                            // Ensuring the images are behind the text
                            zIndex: 1,
                        }}
                    >
                        <Image
                            src={icon.src}
                            alt={`Icon ${index}`}
                            width={Number(icon.width)}
                            height={Number(icon.height)}
                            className={`w-[${icon.width}px] h-[${icon.height}px]`}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
