import React from 'react'
import Button from './button'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'


const ERPSolutions = ({ blackSection }) => {
    return (
        <section className='relative font-["Archivo"] bg-[#282526]'>
            <div className='max-w-[90%] xl:max-w-[75%] 2xl:max-w-[55%]  mx-auto text-center py-16  '>
                <h2 className='text-[50px] leading-[50px] text-white w-[54%] 2xl:w-[65%] mx-auto'>{blackSection.heading}</h2>
                <p className='text-[18px] text-[#FFF] mt-6 opacity-60 w-[80%] mx-auto'>{blackSection.para}</p>
                <Button text={blackSection.button} className='bg-transparent text-white text-[15px] mt-8 border border-[#FFFFFF] px-9 py-2' link='/' />
            </div>
        </section>
    )
}

export const ERPSolutionsBottomSection = ({ bottomSection, className, left, blackSection, para, arrow = false }) => {
    return (
        <section className='relative font-["Archivo"] '>
            <ERPSolutions blackSection={blackSection} />
            <div className={`max-w-[95%] 2xl:max-w-[1610px] ${left ? "ms-auto" : ""}  `}>
                <div className={`${className}`}>
                    <div className='w-[50%] 2xl:w-[60%]'>
                        <div className='relative flex items-center justify-start'>
                            <h2 className='text-[39px] text-secondary font-medium home-section-headings w-[68%]'>{bottomSection.heading}</h2>
                            {arrow && <ArrowUpRight color='#FF6035' size={30} className='ml-14' />}
                        </div>
                        {para && <p className='text-secondary font-["Archivo"] max-w-[91%] my-4 opacity-75'>{para}</p>}
                        {
                            bottomSection.Input.map((item, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-2 mt-8'>
                                        <Link href='/' className='w-[80%] py-2 border-b border-[#BABABA] text-secondary font-medium cursor-pointer  home-section-headings px-2 placeholder:text-secondary placeholder:font-medium placeholder:home-section-headings' >
                                            {item}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        <Button text={bottomSection.button} className='bg-transparent cursor-pointer  text-[15px] mt-8
                        border border-[#282526] px-9 py-2.5' link='/' />
                    </div>
                    <div className='w-[50%] 2xl:w-[100%] flex justify-center items-center'>
                        <Image src={bottomSection.img} alt='img' width={1000} height={1000} className='w-full h-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}
