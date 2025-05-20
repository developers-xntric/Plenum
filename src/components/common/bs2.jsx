"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BrandSlider2({ text, brand_icons, width }) {
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
        <div className="relative overflow-hidden flex items-center w-full h-full py-8">
            {/* Left side - Text */}
            <div className="relative z-30 -top-0 md:bg-white ">
                <h2 className="text- text-white  opacity-0 blur-2xl text-base leading-[20px] font-medium font-['Archivo'] w-[10px] md:block hidden">
                    {text}
                </h2>
               
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

        </div>
    );
}
