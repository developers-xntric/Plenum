"use client"
import React, { useState } from 'react'

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
        <>
            {/*  Contact Form */}
            <div className="bg-[#EFEFEF] rounded-[20px] p-8">
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <div className="space-y-1">
                        <label htmlFor="name" className="block text-base text-[#0D0D0D] font-['Archivo'] font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Please enter your name."
                            className="w-full px-4 py-3 rounded-[7px] bg-[#FFF] border text-[16px] border-[#D6D6D6] text-[#808080]  placeholder:text-[#808080] "
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-base text-[#0D0D0D] font-['Archivo'] font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Please enter your email ID."
                            className="w-full px-4 py-3 rounded-[7px] bg-[#FFF] border text-[16px] border-[#D6D6D6] text-[#808080]  placeholder:text-[#808080] "
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="phone" className="block text-base text-[#0D0D0D] font-['Archivo'] font-medium">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Share your mobile number."
                            className="w-full px-4 py-3 rounded-[7px] bg-[#FFF] border text-[16px] border-[#D6D6D6] text-[#808080]  placeholder:text-[#808080] "
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-1 mb-6">
                        <label htmlFor="message" className="block text-base text-[#0D0D0D] font-['Archivo'] font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Please write your message here."
                            rows={4}
                            className="w-full px-4 py-3 rounded-[7px] bg-[#FFF] border text-[16px] border-[#D6D6D6] text-[#808080]  placeholder:text-[#808080] "
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type='submit' className={`bg-primary text-black rounded-full py-1 px-5 flex items-center justify-between gap-2 text-sm hover:bg-gray-100 transition-colors`}>
                        <div className={`bg-white text-white rounded-full p-2 relative right-4 `}>
                            {/* ARROW ICON */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M15.3395 13.8009V6.31445H7.85305M15.119 6.53429L6.09082 15.5625" stroke="#FF6035" strokeWidth="1.32114" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-sm font-['Archivo'] relative right-2 text-white">Book a free consultation session</span>
                    </button>
                </form>
            </div>
        </>
    )
}
