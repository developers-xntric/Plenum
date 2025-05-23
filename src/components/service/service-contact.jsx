"use client"
import { useEffect, useRef, useState } from "react"
import WorldMap from "../common/world-map"
import { ContactForm } from "./contact-form"
import CountUp from "react-countup"
import ThankYou from "../thankyou"
import { useRouter } from "next/navigation"

export default function ServiceContact() {
    const statsRef = useRef(null)
    const [startCount, setStartCount] = useState(false)
    const [confirmStatus, setConfirmStatus] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStartCount(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }


        return () => observer.disconnect()
    }, [])

    return (

        <div className="bg-white">
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto py-20">
                <div className="flex flex-col lg:flex-row  justify-between gap-y-10 lg:gap-y-0">

                    {/* Left side - Map and Stats */}
                    <div className="lg:w-[60%] ">

                        {/* World Map */}
                        <div className="relative mb-16">
                            <div className="world-map mr-[10%]">
                                <WorldMap />
                            </div>
                        </div>
                        {/* Stats */}
                        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 font-['Archivo'] place-items-center md:place-items-start">
                            <div className="stat ">
                                <h2 className="text-[38px] md:text-[48px] xl:text-[60px] font-semibold flex items-center font-['Archivo'] text-[#202020] opacity-[0.8]">
                                    {startCount ? <CountUp start={0} end={1} duration={1} separator="" /> : '0'}k <span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                    Projects
                                    <br />
                                    Delivered
                                </p>
                            </div>

                            <div className="stat ">
                                <h2 className="text-[38px] md:text-[48px] xl:text-[60px] font-semibold font-['Archivo'] text-[#202020] opacity-[0.8]">
                                    {startCount ? <CountUp start={0} end={50} duration={1} separator="" /> : '0'}<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                    Global
                                    <br />
                                    Employees
                                </p>
                            </div>

                            <div className="stat ">
                                <h2 className="text-[38px] md:text-[48px] xl:text-[60px] font-semibold font-['Archivo'] text-[#202020] opacity-[0.8]">
                                    {startCount ? <CountUp start={0} end={200} duration={1} separator="" /> : '0'}<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                    Companies
                                    <br />
                                    Served
                                </p>
                            </div>

                            <div className="stat pl-4 md:pl-0">
                                <h2 className="text-[38px] md:text-[48px] xl:text-[60px] font-semibold font-['Archivo'] text-[#202020] opacity-[0.8]">
                                    {startCount ? <CountUp start={0} end={8} duration={1} separator="" /> : '0'}<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                    Global Awards
                                    <br />
                                    Won
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact Form */}
                    <div className="lg:w-[40%]">
                        <ContactForm confirmStatus={confirmStatus} setConfirmStatus={setConfirmStatus} />
                    </div>
                </div>
                {/* {confirmStatus && <ThankYou confirmStatus={confirmStatus} setConfirmStatus={setConfirmStatus} />} */}
            </div>
        </div>
    )
}
