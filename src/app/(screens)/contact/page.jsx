import BrandSlider from '@/components/common/brand-slider'
import WorldMap from '@/components/common/world-map'
import { ContactForm } from '@/components/service/contact-form'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import React from 'react'

function Contact() {
    return (
        <div className='pt-40 xl:pt-20 2xl:pt-0'>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto '>
                {/* HERO */}
                <div className='flex items-center justify-between gap-10 h-screen'>
                    {/* LEFT */}
                    <div className='w-[50%] space-y-40'>
                        {/* HEADING AND PARA*/}
                        <div>
                            <h1 className='text-[60px] font-["Chakra"] tracking-[-2.771px] font-semibold text-primary'>Contact us</h1>
                            <p className="w-[436px] opacity-60 justify-center text-[#0f0f0f] text-lg font-medium font-['Archivo'] leading-[27px]">At Plenum Technologies, we offer cutting-edge AI software platforms tailored to empower data engineers, scientists, analysts, and automation engineers.</p>
                        </div>

                        <div>
                            <BrandSlider text={"Trusted by world's most exciting brands"} brand_icons={service_brand_icons} />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='w-[40%]'>
                        <ContactForm />
                    </div>
                </div>

                <div className='w-[80%] mx-auto pt-20 xl:pt-0'>

                    {/* WORLD MAP */}
                    <WorldMap />

                </div>

                <div className='space-y-8 py-20 '>

                    <div className="w-[383px] h-[118px] justify-center text-[#0f0f0f] text-[36.82px] font-semibold font-['Archivo'] leading-10">Get Started with Plenum: Unlock the Power of Advanced AI</div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-8 font-['Archivo']">
                        <div className="stat border-b pb-2">
                            <h2 className="text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                5k<span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative bottom-2 leading-[21px] font-medium">
                                Projects
                                <br />
                                Delivered
                            </p>
                        </div>

                        <div className="stat border-b">
                            <h2 className="text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                700<span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative bottom-2 leading-[21px] font-medium">
                                Global
                                <br />
                                Employees
                            </p>
                        </div>

                        <div className="stat border-b">
                            <h2 className="text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                1k<span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative bottom-2 leading-[21px] font-medium">
                                Companies
                                <br />
                                Served
                            </p>
                        </div>

                        <div className="stat border-b">
                            <h2 className="text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                20<span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative bottom-2 leading-[21px] font-medium">
                                Global Awards
                                <br />
                                Won
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact