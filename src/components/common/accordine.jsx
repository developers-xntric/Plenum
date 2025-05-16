"use client"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion";
const AccordionItem = ({ title, description, isOpen, isAccordin, onToggle, index }) => {
    return (
        <div className="border-b border-[#BABABA] relative overflow-hidden">
            {/* Hover wrapper for both title and arrow */}
            <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="w-full"
            >
                <button
                    onClick={() => onToggle(index)}
                    className="flex items-center justify-between w-full py-5  text-left"
                >
                    <h3 className={`${isOpen && isAccordin ? "text-[#101010] opacity-80" :` ${isAccordin ? "opacity-60" : "home-section-headings" } text-secondary `} text-[23px] lg:text-[26px]  2xl:text-[33px]  xl:text-[28px] leading-[30px] lg:leading-[32px] xl:leading-[40px] font-semibold lg:max-w-[95%] xl:max-w-[82%]`}>
                        {title}
                    </h3>

                    {isAccordin && isOpen && (
                        <motion.div
                            variants={{
                                rest: { x: 0, y: 0, opacity: 1 },
                                hover: {
                                    x: [0, 6, 0],
                                    y: [0, -6, 0],
                                    opacity: 1,
                                    transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                    },
                                },
                            }}
                        >
                            <ArrowUpRight
                                size={14}
                                className="h-8 md:h-10 w-8 md:w-10 text-[#FF6035] cursor-pointer transition-transform duration-200"
                            />
                        </motion.div>
                    )}
                </button>
            </motion.div>

            {/* Animated Accordion Content */}
            {isAccordin && <motion.div
                initial="collapsed"
                animate={isOpen ? "open" : "collapsed"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="pb-5 text-[#101010] font-['Archivo'] font-medium opacity-60 mt-4 text-[15px] md:text-[18px] md:w-[90%]">
                    <p>{description}</p>
                </div>
            </motion.div>}
        </div>
    );
};


export function Accordion({ items = [], isAccordin }) {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? index : index);
    };

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                {items.map((item, index) => (
                    <AccordionItem
                        isAccordin={isAccordin}
                        key={index}
                        index={index}
                        title={item.title}
                        description={item.description}
                        isOpen={openIndex === index}
                        onToggle={handleToggle}
                    />
                ))}
            </div>
        </div>
    );

}
