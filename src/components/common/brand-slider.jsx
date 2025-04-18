"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const brand_icons = [
    "/images/brand-logos/achieve.webp",
    "/images/brand-logos/midfunnel.webp",
    "/images/brand-logos/momentum.webp",
    "/images/brand-logos/obscura.webp",
    "/images/brand-logos/tangent.webp",
];

export default function BrandSlider() {
    const loopIcons = [...brand_icons, ...brand_icons];

    return (
        <div className=" overflow-hidden flex items-center ">

            <div className="bg-white absolute z-20 w-[220px]">
                <h2 className="text-secondary opacity-45 w-[170px] text-base leading-[20px] font-bold font-['Archivo'] ">Trusted by world's most exciting brands</h2>
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
                        <Image src={icon} alt={`Icon ${index}`} width={170} height={150} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}