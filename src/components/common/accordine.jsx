"use client"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { items } from "@/data/accordineData"
import { motion } from "framer-motion";
const AccordionItem = ({ title, description, isOpen, onToggle, index }) => {
    return (
        <div className="border-b border-[#BABABA] relative">
            <button onClick={() => onToggle(index)} className="flex items-center justify-between w-full py-5 text-left">
                <h3 className={`${isOpen ? "text-secondary font-medium  home-section-headings  " : "opacity-50"}  cursor-pointer text-[30px] leading-[40px] max-w-[80%] `}>{title}</h3>
                {isOpen &&
                    <motion.div
                        className=""
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        variants={{
                            hover: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                            rest: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        <motion.div
                            className="absolute right-0 top-7 "
                            variants={{
                                rest: {
                                    x: 0,
                                    y: 0,
                                    opacity: 1,
                                },
                                hover: {
                                    x: [0, 8, 0],
                                    y: [0, -8, 0],
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
                                className={cn("h-10 cursor-pointer w-10 text-[#FF6035] transition-transform duration-200")}
                            />
                        </motion.div>
                    </motion.div>
                }

                {/* <ArrowUpRight className={cn("h-10 w-10 text-[#FF6035] transition-transform duration-200")} /> */}
            </button>
            {
                isOpen && description && (
                    <div className="pb-5 text-[#101010] opacity-60 text-[18px]">
                        <p>{description}</p>
                    </div>
                )
            }
        </div >
    )
}

export function Accordion() {
    `  `
    const [openIndex, setOpenIndex] = useState(0) // Default first item open

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? index : index)
    }

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                {items.map((item, index) => (
                    <AccordionItem
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
    )
}
