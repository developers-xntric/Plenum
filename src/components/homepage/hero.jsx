import Link from 'next/link'
import React from 'react'
import Button from '../common/button'
import Image from 'next/image'
import { AnimatedBorder } from '../common/animated-border'
const links = [
    {
        name: "(SCM)",
        link: "/"
    },
    {
        name: "(CRM)",
        link: "/"
    },
    {
        name: "(HR) & Payroll",
        link: "/"
    },
    {
        name: "Retail & POS",
        link: "/"
    },
    {
        name: "Asset Management",
        link: "/"
    },
    {
        name: "Finance & Accounting",
        link: "/"
    },
    {
        name: "Business Intelligence & Analytics",
        link: "/"
    },
    {
        name: "Compliance & Risk Management",
        link: "/"
    },
    {
        name: "Sales & Order Management",
        link: "/"
    },
    {
        name: "Document Management",
        link: "/"
    },
    {
        name: "Project Management",
        link: "/"
    },
    {
        name: "Manufacturing & Production",
        link: "/"
    },
]
const Hero = () => {
    return (
        <section className='relative z-30 bg-black overflow-hidden flex flex-col'>
            <div className=' absolute top-0 -translate-x-1/2 left-1/2 w-full -z-15'>
                <Image src='/home/shade.png' priority height={1000} width={1000} alt='' className='w-full h-full' />
            </div>
            {/* //hero section main heading */}
            <div className='flex w-[750px] xl:w-[950px] 2xl:w-[980px] mx-auto justify-center h-screen mt-40'>
                <div className='w-full mx-auto flex flex-col gap-4'>
                    <h1 className='max-w-[80%] 2xl:max-w-[80%] mx-auto text-white 2xl:text-[75px] text-[55px] font-semibold xl:text-[70px] leading-[50px] xl:leading-[71px] font-["Chakra"] text-center'>ERP with <span className='text-primary'>Intelligence</span> at Its Core</h1>
                    <p className='font-["Archivo"] font-normal text-sm lg:text-lg xl:text-[19px] text-center text-white'>Plenum isn’t just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities.</p>
                </div>
            </div>
            {/* //video */}
            <div className='w-full absolute top-48  2xl:top-20 -z-20 opacity-100 left-1/2 -translate-x-1/2'>
                <video
                    src='/home/hero.webm'
                    height={1000}
                    width={1000}
                    autoPlay
                    loop
                    muted
                    className='w-full object-contain h-full'
                />
            </div>
            {/* //section section of hero section */}
            <div className='flex justify-center items-center flex-col text-center'>
                <AnimatedBorder>
                    <div className="w-[680px] p-[0.8px] h-14 bg-white/5 rounded-xl   inline-flex justify-start items-center">
                        <div className="flex px-4 rounded-xl justify-start items-center gap-2 bg-zinc-900 w-full h-full">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <div className="text-white/50 text-sm xl:text-[15.5px] font-semibold font-['Archivo']">What process in your business you would like to enhance with intelligence </div>
                            <div className="w-2.5 h-7 relative">
                                <span className="text-lg text-primary animate-blink font-semibold">
                                    ?
                                </span>
                            </div>
                        </div>
                    </div>
                </AnimatedBorder>
                <div className='flex mt-10 2xl:max-w-[1440px] pb-10 leading-[15px] w-[1000px] mx-auto justify-center items-center gap-8 flex-wrap'>
                    {
                        links.map((ele, ind) => {
                            return (
                                <Link href={ele.link} key={ind} className='text-white hover:text-[#FF6035] hover:transition-all ease-in-out duration-400  text-[12px] lg:text-[18px] underline font-medium font-["Archivo"]'>
                                    {ele.name}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='w-full  bg-[#1a1a1a] py-3 flex justify-center items-center gap-10'>
                    <p className='font-["Chakra"] font-normal xl:text-[22px] text-white opacity-80' >Ready to experience hyperperformance?</p>
                    <div className='bg-gradient-to-l p-[0.7px] xl:p-[0.5px]  from-red-500 via-orange-700/80 to-red-300 rounded-[8px]'>
                        <Button className='font-["Archivo"] hover:bg-[#FF6035] hover:transition-colors ease-in-out duration-300 bg-zinc-900 xl:px-8 px-8 xl:py-3 py-2 text-white font-primary text-[14px]' text="Lets Talk" link='/' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero