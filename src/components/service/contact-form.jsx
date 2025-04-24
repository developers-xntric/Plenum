"use client"
import { ArrowRight } from 'lucide-react'
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
            {/* Right side - Contact Form */}
            <div className="">
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

                        <div className="mb-6">
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

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 px-6 rounded-full hover:from-orange-600 hover:to-orange-500 transition-all duration-300"
                        >
                            <span>Book a free consultation session</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
