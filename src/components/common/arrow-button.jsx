import React from 'react'
import { motion } from 'framer-motion'
const ArrowButton = ({ text, className, arrow_class }) => {
    return (
        <button className={`bg-white text-black rounded-full py-1 px-5 flex items-center justify-between gap-2 text-sm hover:bg-gray-100 transition-colors ${className}`}>
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
                <div className={`bg-primary text-white rounded-full p-5 relative right-4 ${arrow_class}`}>
                    {[1, 2, 3].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/4 left-1/4"
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
            </motion.div>
            <span className="text-sm font-medium font-['Archivo'] relative right-2">{text}</span>
        </button>
    )
}

export default ArrowButton
