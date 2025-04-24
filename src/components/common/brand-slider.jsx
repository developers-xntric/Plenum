"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function BrandSlider({ text, brand_icons }) {
    const loopIcons = [...brand_icons, ...brand_icons];

    return (
        <div className=" overflow-hidden flex items-center ">

            <div className="bg-white absolute z-20 w-[220px]">
                <h2 className="text-secondary opacity-70 w-[150px] text-base leading-[20px] font-normal font-['Archivo'] ">{text}</h2>
            </div>

            <motion.div
                className="flex gap-16 w-[90%] "
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ display: "flex" }}
            >
                {loopIcons.map((icon, index) => (
                    <div key={index} className="flex-shrink-0">
                        <Image src={icon} alt={`Icon ${index}`} width={200} height={180} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}