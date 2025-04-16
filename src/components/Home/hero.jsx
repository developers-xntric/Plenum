import Link from 'next/link'
import React from 'react'
import Button from '../common/button'
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
        <div className='bg-black'>
        {/* // hero main section */}
        <section className='relative z-30 pb-24  overflow-hidden  h-screen flex flex-col'>
            {/* //shadow svg */}
            <div className='absolute top-0 -z-10 left-1/2 -translate-x-1/2'>
                <svg width="1440" height="1484" viewBox="0 0 1440 1484" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1440" height="1484" fill="url(#paint0_linear_1096_1934)" />
                    <defs>
                        <linearGradient id="paint0_linear_1096_1934" x1="720" y1="0" x2="720" y2="1484" gradientUnits="userSpaceOnUse">
                            <stop offset="0.150626" stopColor="#101010" />
                            <stop offset="0.532738" stopColor="#101010" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* //hero section main heading */}
            <div className='flex w-[600px] xl:w-[950px] mx-auto justify-center h-screen items-center'>
                <div className='w-[730px] mx-auto flex flex-col gap-3'>
                    <h1 className='text-white text-[50px] font-semibold xl:text-[60px] leading-[50px] xl:leading-[71px] font-["Chakra"] text-center'>ERP with <span className='text-primary'>Intelligence</span> at Its Core</h1>
                    <p className='font-["Archivo"] font-normal text-sm xl:text-base text-center text-white'>Plenum isn’t just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities.</p>
                </div>
            </div>
            {/* //video */}
            <div className='w-full absolute top-0 -z-20 opacity-50 left-1/2 -translate-x-1/2'>
                <video
                    src='/home/hero.webm'
                    height={1000}
                    width={1000}
                    autoPlay={true}
                    loop
                    muted
                    className='w-full object-contain h-full'
                />
            </div>
            {/* //section section of hero section */}
            <div className='flex justify-center items-center flex-col text-center'>
                <div className="w-auto xl:w-[680px] p-[0.8px] h-14 bg-white/5 rounded-xl  bg-gradient-to-l from-red-500 via-orange-700/80 to-red-300 outline-red-500 inline-flex justify-start items-center">
                    <div className="flex px-4 rounded-xl justify-start items-center gap-2 bg-zinc-900 w-full h-full">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <div className="text-white/80 text-sm xl:text-[14px] font-semibold font-['Archivo']">What process in your business you would like to enhance with intelligence  </div>
                        <div className="w-2.5 h-7 relative">
                            <span className="text-lg text-primary animate-blink font-semibold">
                                ?
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex mt-10 2xl:max-w-[1440px]  leading-[15px] w-[1000px] mx-auto justify-center items-center gap-8 flex-wrap'>
                    {
                        links.map((ele, ind) => {
                            return (
                                <Link href={ele.link} key={ind} className='text-white hover:text-[#FF6035] hover:transition-all ease-in-out duration-400 text-[12px] xl:text-[14px] underline  font-["Archivo"]'>
                                    {ele.name}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            {/* last section of hero */}
            {/* second shadow */}
            <div className='absolute top-full -z-10 left-1/2 -translate-x-1/2'>
                <svg width="1440" height="1484" viewBox="0 0 1440 1484" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1440" height="1484" fill="url(#paint0_linear_1096_1934)" />
                    <defs>
                        <linearGradient id="paint0_linear_1096_1934" x1="720" y1="0" x2="720" y2="1484" gradientUnits="userSpaceOnUse">
                            <stop offset="0.150626" stopColor="#101010" />
                            <stop offset="0.532738" stopColor="#101010" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
        </section>
            <div className='w-full  bg-gradient-to-l from-stone-950/10 via-white/10 to-stone-950/10 py-3 xl:py-3  flex justify-center items-center gap-10'>
                <p className='font-["Chakra"] font-normal text-base xl:text-lg text-white' >Ready to experience hyperperformance?</p>
                <div className='bg-gradient-to-l p-[0.7px] xl:p-[0.5px]  from-red-500 via-orange-700/80 to-red-300 rounded-[8px]'>
                    <Button className='font-["Archivo"] bg-zinc-900 xl:px-8 px-8 xl:py-3 py-2 text-white font-primary xl:text-[10px] text-[14px]' text="Lets Talk" link='/' />
                </div>
            </div>
        </div>
    )
}

export default Hero