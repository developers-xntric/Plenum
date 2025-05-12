import React from 'react'
import Button from './button'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'


const ERPSolutions = ({ blackSection }) => {
    return (
        <section className='relative font-["Archivo"] bg-[#282526]'>
            <div className='max-w-[90%] xl:max-w-[95%] 2xl:max-w-[75%]  mx-auto text-center py-16 '>
                <h2 className='text-[30px] lg:text-[50px] leading-[35px] lg:leading-[50px] text-white lg:w-[60%] 2xl:w-[70%] mx-auto'>{blackSection.heading}</h2>
                <p className='text-[15px] lg:text-[18px] text-[#FFF] mt-6 opacity-60  xl:w-[900px] mx-auto'>{blackSection.para}</p>
                <Button text={blackSection.button} className='bg-transparent text-white hover:bg-[#FF6035] hover:transition-colors ease-in-out duration-300 hover:border-[#FF6035]  text-[15px] mt-8 border border-[#FFFFFF] px-9 py-2' link='/' />
            </div>
        </section>
    )
}

export const ERPSolutionsBottomSection = ({ bottomSection, className, left, blackSection, para, arrow = false }) => {
    return (
        <section className='relative bg-[#EFEFEF] font-["Archivo"] '>
            <ERPSolutions blackSection={blackSection} />
            <div className={`lg:max-w-[95%] 2xl:max-w-[1610px] ${left ? "ms-auto" : ""}  `}>
                <div className={`${className}`}>
                    <div className='w-[95%] lg:w-[50%] 2xl:w-[60%]'>
                        <div className='relative flex items-center justify-start'>
                            <h2 className='text-[30px] lg:text-[39px] text-secondary font-semibold home-section-headings lg:w-[68%]'>{bottomSection.heading}</h2>
                            {arrow && <ArrowUpRight color='#FF6035' size={30} className='ml-14' />}
                        </div>
                        {para && <p className='text-secondary font-["Archivo"] max-w-[91%] my-4 opacity-75'>{para}</p>}
                        {
                            bottomSection.Input.map((item, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-2 mt-8'>
                                        <Link href='/' className='w-full lg:w-[80%] py-2 border-b border-[#BABABA] text-secondary font-medium cursor-pointer  home-section-headings px-2 placeholder:text-secondary placeholder:font-medium placeholder:home-section-headings text-[25px]' >
                                            {item}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        <Button text={bottomSection.button} className='bg-transparent cursor-pointer  hover:bg-black hover:text-white hover:transition-colors ease-in-out duration-300 text-[15px] mt-8
                        border border-[#282526] px-9 py-2.5' link='/' />
                    </div>
                    <div className='w-full lg:w-[50%] 2xl:w-[100%] flex justify-center items-center'>
                        <Image src={bottomSection.img} alt='img' width={1000} height={1000} className='w-full h-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}
