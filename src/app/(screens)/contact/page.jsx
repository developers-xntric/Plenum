"use client"
import BrandSlider from '@/components/common/brand-slider'
import WorldMap from '@/components/common/world-map'
import { ContactForm } from '@/components/service/contact-form'
import ThankYou from '@/components/thankyou'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

function Contact() {
    const [confirmStatus, setConfirmStatus] = useState(false)
    const statsRef = useRef(null)
    const [startCount, setStartCount] = useState(false)

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
        <div className='pt-36 md:pt-40 lg:pt-32 xl:pt-20 2xl:pt-0'>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto '>
                {/* HERO */}
                <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-10 h-screen'>
                    {/* LEFT */}
                    <div className='lg:w-[40%] xl:w-[50%] space-y-8 md:space-y-10 lg:space-y-40'>
                        {/* HEADING AND PARA*/}
                        <div className='space-y-3 md:space-y-5'>
                            <h2 className='text-[30px] md:text-4xl lg:text-5xl xl:text-[60px] font-["Chakra"] tracking-[-2.771px] font-semibold text-primary'>Contact us</h2>
                            <p className="lg:w-[100%] xl:w-[436px] opacity-60 justify-center text-[#0f0f0f] text-[15px] md:text-lg font-medium font-['Archivo'] leading-[22px] md:leading-[27px]">Ready to boost operational efficiency and drive innovation at scale? Get in touch with us to explore strategic solutions built for enterprise success.</p>
                        </div>

                        <div>
                            <BrandSlider text={"Trusted by world's most exciting brands"} brand_icons={service_brand_icons} />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='lg:w-[50%] xl:w-[40%]'>
                        <ContactForm confirmStatus={confirmStatus} setConfirmStatus={setConfirmStatus} />
                    </div>
                </div>

                <div className=' lg:w-[80%] mx-auto pt-[250px] md:pt-60 lg:pt-20 xl:pt-0'>

                    {/* WORLD MAP */}
                    <WorldMap />

                </div>

                <div className='space-y-6 md:space-y-8 py-10 md:py-20 '>

                    <div className="md:w-[383px] h-[118px] justify-center text-[#0f0f0f] text-[30px] md:text-[36.82px] font-semibold font-['Archivo'] leading-[36px] md:leading-10">Get Started with Plenum: Unlock the Power of Advanced AI</div>

                    {/* Stats */}
                    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 place-items-center md:place-items-start  gap-4 md:gap-8 font-['Archivo']">
                        <div className="stat md:border-b pb-2">
                            <h2 className="text-[38px] md:text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                {startCount ? <CountUp start={0} end={1} duration={1} separator="," /> : '0'}k
                                <span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                Projects
                                <br />
                                Delivered
                            </p>
                        </div>

                        <div className="stat md:border-b">
                            <h2 className="text-[38px] md:text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                {startCount ? <CountUp start={0} end={50} duration={1} separator="," /> : '0'}
                                <span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                Global
                                <br />
                                Employees
                            </p>
                        </div>

                        <div className="stat md:border-b">
                            <h2 className="text-[38px] md:text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                {startCount ? <CountUp start={0} end={200} duration={1} separator="," /> : '0'}
                                <span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                Companies
                                <br />
                                Served
                            </p>
                        </div>

                        <div className="stat md:border-b">
                            <h2 className="text-[38px] md:text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                {startCount ? <CountUp start={0} end={8} duration={1} separator="," /> : '0'}
                                <span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                Global Awards
                                <br />
                                Won
                            </p>
                        </div>
                    </div>
                </div>
                {/* {confirmStatus && <ThankYou confirmStatus={confirmStatus} setConfirmStatus={setConfirmStatus} />} */}
            </div>
        </div>
    )
}

export default Contact