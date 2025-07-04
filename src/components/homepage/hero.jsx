'use client'
import Link from 'next/link'
import React from 'react'
import Button from '../common/button'
import Image from 'next/image'
import { AnimatedBorder } from '../common/animated-border'
import {memo} from 'react'

const links = [
    {
        name: "Retail",
        link: "/case-studies#retail",
        sectionId: "retail"
    },
    {
        name: "Education",
        link: "/case-studies#education",
        sectionId: "education"
    },
    {
        name: "Banking & Finance",
        link: "/case-studies#banking-finance",
        sectionId: "banking-finance"
    },
    {
        name: "Manufacturing",
        link: "/case-studies#manufacturing",
        sectionId: "manufacturing"
    },
    {
        name: "Real Estate",
        link: "/case-studies#Real Estate",
        sectionId: "Real Estate"
    },
]

const Hero = () => {
    return (
        <section className='home-hero relative z-30 bg-black md:h-[90vh] lg:h-[115vh] xl:h-[850px] 2xl:h-[100vh] overflow-hidden flex flex-col'>
            <div className='hidden md:block b absolute top-0 xl:-top-20 2xl:-top-40 -translate-x-1/2 left-1/2 w-full -z-15'>
                <Image src='/home/shade.png' priority height={1000} width={1000} alt='img' className='w-full h-full' />
            </div>
            <div className='md:hidden block h-[150vh] absolute top-0 -translate-x-1/2 left-1/2 w-full -z-15'>
                <Image src='/home/shade.png' priority height={1000} width={1000} alt='img' className='w-full h-full' />
            </div>
            <div className='flex w-full md:w-[100%] lg:w-[95%] xl:w-[80%] 2xl:w-[1200px] mx-auto justify-center h-[80vh] md:h-screen mt-32 lg:mt-[18%] xl:mt-[13%] 2xl:mt-[8%]'>
                <div className='w-full mx-auto flex flex-col gap-4'>
                    <h1 className='max-w-[98%] md:max-w-[100%] lg:max-w-[800px] xl:max-w-[90%] mx-auto text-white 2xl:text-[70px] text-[32px] sm:text-[55px] font-semibold xl:text-[70px] leading-[36px] md:leading-[50px] xl:leading-[71px] 2xl:leading-[75px] font-["Chakra"] text-center'>
                        Empower your<span className='text-primary'> enterprise</span> to think smarter, operate faster, and grow intelligently
                    </h1>
                    <p className='font-["Archivo"] font-normal text-[14px] lg:text-lg xl:text-[19px] text-center text-white 2xl:max-w-[73%] xl:max-w-[80%] lg:max-w-[900px] max-w-[92%] mx-auto'>
                        We build intelligent enterprise ecosystems by combining AI, data engineering, ERP, and digital experiences empowering your businesses to work smarter, move faster, and stay connected seamlessly.
                    </p>
                </div>
            </div>
            <div className='w-full hidden md:block absolute top-48 2xl:top-20 -z-20 opacity-100 left-1/2 -translate-x-1/2'>
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
            <div className='w-full md:hidden video absolute top-64 -z-20 opacity-100 left-1/2 -translate-x-1/2'>
                <video
                    src='/home/new.webm'
                    height={1000}
                    width={1000}
                    autoPlay
                    loop
                    muted
                    className='w-full object-contain h-full'
                />
            </div>
            <div className='flex justify-center items-center flex-col text-center relative bottom-'>
                <AnimatedBorder className='hidden lg:block'>
                    <div className="w-[680px] p-[0.8px] h-14 bg-white/5 rounded-xl inline-flex justify-start items-center">
                        <div className="flex px-4 rounded-xl justify-start items-center gap-2 bg-zinc-900 w-full h-full">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <div className="text-white/50 text-sm xl:text-[15.5px] font-semibold font-['Archivo']">
                                What process in your business would you like to enhance with intelligence
                            </div>
                            <div className="w-2.5 h-7 relative">
                                <span className="text-lg text-primary animate-blink font-semibold">?</span>
                            </div>
                        </div>
                    </div>
                </AnimatedBorder>
                <div className='lg:flex hidden mt-10 2xl:max-w-[1440px] pb-10 leading-[15px] w-[1000px] mx-auto justify-center items-center gap-8 flex-wrap'>
                    {links.map((ele, ind) => (
                        <Link
                            href={ele.link}
                            key={ind}
                            className='text-white hover:text-[#FF6035] hover:transition-all ease-in-out duration-400 text-[12px] lg:text-[18px] underline font-medium font-["Archivo"]'
                        >
                            {ele.name}
                        </Link>
                    ))}
                </div>
                <div className='w-full bg-[#1a1a1a] py-3 flex justify-center items-center gap-10'>
                    <p className='font-["Chakra"] font-normal sm:text-[16px] text-[14px] md:text-[22px] text-white opacity-80'>
                        Ready to experience hyperperformance?
                    </p>
                    <div className='bg-gradient-to-l relative right-3 p-[1.4px] xl:p-[1.2px] 2xl:p-[1.5px] from-red-500 via-orange-700/80 to-red-300 rounded-[8px]'>
                        <Button
                            className='font-["Archivo"] hover:bg-[#FF6035] hover:transition-colors ease-in-out duration-300 bg-zinc-900 xl:px-8 px-4 w-[100px] md:w-full xl:w-full md:px-8 md:py-2 py-2 text-white font-primary text-[10px] md:text-[14px]'
                            text="Lets Talk"
                            link='/contact'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Hero)