"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="bg-[#EFEFEF] rounded-[20px] p-8">
            <form onSubmit={handleSubmit} className='space-y-3'>
                {/* Form Inputs (Unchanged) */}
                {["name", "email", "phone"].map((field, i) => (
                    <div key={i} className="space-y-1">
                        <label htmlFor={field} className="block text-base text-[#0D0D0D] font-['Archivo'] font-medium">
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            id={field}
                            name={field}
                            placeholder={
                                field === "name"
                                    ? "Please enter your name."
                                    : field === "email"
                                        ? "Please enter your email ID."
                                        : "Share your mobile number."
                            }
                            className="w-full px-4 py-3 rounded-[7px] bg-[#FFF] border text-[16px] border-[#D6D6D6] text-[#808080]  placeholder:text-[#808080]"
                            value={formData[field]}
                            onChange={handleChange}
                            required={field !== "phone"}
                        />
                    </div>
                ))}

                {/* Message Field */}
                <div className="space-y-1 mb-6">
                    <label htmlFor="message" className="block text-base text-[#0D0D0D] font-['Archivo'] font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Please write your message here."
                        rows={4}
                        className="w-full px-4 py-3 rounded-[7px] bg-[#FFF] border text-[16px] border-[#D6D6D6] text-[#808080]  placeholder:text-[#808080]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Animated Submit Button */}
                <motion.button
                    type="submit"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                        hover: { transition: { staggerChildren: 0.1 } },
                        rest: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="group bg-primary cursor-pointer text-white rounded-full py-2 px-6 flex items-center justify-between gap-3 text-sm hover:bg-[#ff784f] transition-colors"
                >
                    <div className="bg-white rounded-full p-5 relative -left-4">
                        {[1, 2, 3].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/5 left-1/5"
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" >
                                    <path
                                        d="M15.3395 13.8009V6.31445H7.85305M15.119 6.53429L6.09082 15.5625"
                                        stroke="#FF6035"
                                        strokeWidth="1.32114"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.div>
                        ))}
                    </div>
                    <span className="text-[17px] font-semibold font-['Archivo']">Book a free consultation session</span>
                </motion.button>
            </form>
        </div>
    )
}
