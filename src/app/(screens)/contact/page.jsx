import BrandSlider from '@/components/common/brand-slider'
import WorldMap from '@/components/common/world-map'
import { ContactForm } from '@/components/service/contact-form'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import React from 'react'

function Contact() {
    return (
        <div className='pt-36 md:pt-40 lg:pt-32 xl:pt-20 2xl:pt-0'>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto '>
                {/* HERO */}
                <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-10 h-screen'>
                    {/* LEFT */}
                    <div className='lg:w-[40%] xl:w-[50%] space-y-16 lg:space-y-40'>
                        {/* HEADING AND PARA*/}
                        <div className='space-y-3 md:space-y-5'>
                            <h1 className='text-[30px] md:text-4xl lg:text-5xl xl:text-[60px] font-["Chakra"] tracking-[-2.771px] font-semibold text-primary'>Contact us</h1>
                            <p className="lg:w-[100%] xl:w-[436px] opacity-60 justify-center text-[#0f0f0f] text-[15px] md:text-lg font-medium font-['Archivo'] leading-[22px] md:leading-[27px]">At Plenum Technologies, we offer cutting-edge AI software platforms tailored to empower data engineers, scientists, analysts, and automation engineers.</p>
                        </div>

                        <div>
                            <BrandSlider text={"Trusted by world's most exciting brands"} brand_icons={service_brand_icons} />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='lg:w-[50%] xl:w-[40%]'>
                        <ContactForm />
                    </div>
                </div>

                <div className=' lg:w-[80%] mx-auto pt-[250px] md:pt-60 lg:pt-20 xl:pt-0'>

                    {/* WORLD MAP */}
                    <WorldMap />

                </div>

                <div className='space-y-6 md:space-y-8 py-10 md:py-20 '>

                    <div className="md:w-[383px] h-[118px] justify-center text-[#0f0f0f] text-[30px] md:text-[36.82px] font-semibold font-['Archivo'] leading-[36px] md:leading-10">Get Started with Plenum: Unlock the Power of Advanced AI</div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-8 font-['Archivo']">
                        <div className="stat md:border-b pb-2">
                            <h2 className="text-[33px] md:text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                5k<span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                Projects
                                <br />
                                Delivered
                            </p>
                        </div>

                        <div className="stat md:border-b">
                            <h2 className="text-[33px] md:text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                700<span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                Global
                                <br />
                                Employees
                            </p>
                        </div>

                        <div className="stat md:border-b">
                            <h2 className="text-[33px] md:text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                1k<span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                Companies
                                <br />
                                Served
                            </p>
                        </div>

                        <div className="stat md:border-b">
                            <h2 className="text-[33px] md:text-[48px] xl:text-[70px] font-semibold font-['Archivo'] text-[#101010]">
                                20<span className="text-primary font-['Archivo'] ">+</span>
                            </h2>
                            <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
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