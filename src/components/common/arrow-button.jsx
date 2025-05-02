import React from 'react'
import { motion } from 'framer-motion'

const ArrowButton = ({ text, className = "", arrow_class = "" }) => {
    return (
        <motion.button
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
            className={`group bg-white cursor-pointer text-black rounded-full py-1 px-5 flex items-center justify-between gap-2 text-sm hover:bg-gray-200 transition-colors ${className}`}
        >
            <div className={`bg-primary text-white rounded-full p-5 relative right-4 ${arrow_class}`}>
                {[1].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/4 left-1/4"
                        variants={{
                            rest: {
                                rotate: 0,
                                opacity: 1,
                            },
                            hover: {
                                rotate: [0, 45],
                                opacity: 1,
                                transition: {
                                    duration: 0.4,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path
                                d="M15.4786 13.7214V6.54688H8.30404M15.2672 6.75755L6.61523 15.4095"
                                stroke="white"
                                strokeWidth="1.2661"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.div>
                ))}
            </div>
            <span className="text-sm font-medium font-['Archivo'] relative right-2">{text}</span>
        </motion.button>
    )
}

export default ArrowButton
