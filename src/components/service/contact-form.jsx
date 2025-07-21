"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'


export function ContactForm({ confirmStatus, setConfirmStatus }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    })

    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "number") {
            const cleanedValue = value.replace(/(?!^\+)[^\d]/g, "");
            setFormData((prev) => ({ ...prev, [name]: cleanedValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setErrorMessage("")
        setSuccessMessage("")

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSuccessMessage("Your message has been sent successfully!")
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    message: "",
                })
                setConfirmStatus(!confirmStatus)
            } else {
                setErrorMessage(data.error || "Failed to send the message. Please try again later.")
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            setErrorMessage("An error occurred while submitting the form. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-[#EFEFEF] rounded-[20px] p-5 sm:p-8">
            <form onSubmit={handleSubmit} className='space-y-3'>
                {/* Form Inputs (Unchanged) */}
                {["name", "email", "number"].map((field, i) => (
                    <div key={i} className="space-y-1">
                        <label htmlFor={field} className="block text-base text-[#0D0D0D] font-['Archivo'] font-semibold">
                            {field === "number" ? "Phone Number" : field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            type={field === "email" ? "email" : field === "number" ? "tel" : "text"}
                            id={field}
                            name={field}
                            placeholder={
                                field === "name"
                                    ? "Please enter your name."
                                    : field === "email"
                                        ? "Please enter your email ID."
                                        : "Share your phone number."
                            }
                            className="w-full px-4 py-3 rounded-[7px] bg-[#FFF] border text-[16px] border-[#D6D6D6] text-[#808080]  placeholder:text-[#808080]"
                            value={formData[field]}
                            onChange={handleChange}
                            required
                            data-lpignore="true" 
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

                {/* Success/Error Message */}
                {successMessage && (
                    <div className="text-green-500 font-semibold">{successMessage}</div>
                )}
                {errorMessage && (
                    <div className="text-red-500 font-semibold">{errorMessage}</div>
                )}

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
                    className="group bg-primary cursor-pointer text-white rounded-full py-1 md:py-2 px-4 md:px-6 flex items-center justify-between md:gap-3 text-sm hover:bg-[#ff784f] transition-colors"
                    disabled={loading}  // Disable the button while submitting
                >
                    <div className="bg-white rounded-full p-5 relative -left-3">
                        {[1].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/5 left-1/5"
                                variants={{
                                    rest: {
                                        rotate: 0,
                                        opacity: 1,
                                    },
                                    hover: {
                                        rotate: [0, 45],
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeInOut",
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
                    <span className="text-[12px] md:text-[17px] font-semibold font-['Archivo']">
                        {loading ? "Sending..." : "Book a free consultation session"}
                    </span>
                </motion.button>
            </form>
        </div>
    )
}
