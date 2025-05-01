import React from 'react'
import Button from './button'
import Image from 'next/image'
import { Accordion } from './accordine';


const ERPSolutions = ({ blackSection }) => {
    return (
        <section className='relative font-["Archivo"] bg-[#282526]'>
            <div className='max-w-[90%] xl:max-w-[75%] 2xl:max-w-[80%]  mx-auto text-center py-16  '>
                <h2 className='text-[50px] leading-[50px] text-white  xl:w-[95%] 2xl:w-[65%] mx-auto'>{blackSection.heading}</h2>
                <p className='text-[18px] text-[#FFF] mt-6 opacity-60 w-[80%] mx-auto'>{blackSection.para}</p>
                <Button text={blackSection.button} className='bg-transparent text-white text-[15px] mt-8 border border-[#FFFFFF] px-9 py-2' link='/' />
            </div>
        </section>
    )
}

export const ERPAccordin = ({ bottomSection, className, left, blackSection, para, arrow = false }) => {
    return (
        <section className='relative bg-[#EFEFEF] font-["Archivo"]'>
            <ERPSolutions blackSection={blackSection} />
            <div className={`max-w-[95%]  2xl:max-w-[1610px] ${left ? "ms-auto" : ""}`}>
                <div className={`${className}`}>
                    <div className='w-[50%] 2xl:w-[60%]'>
                        <Accordion />
                    </div>
                    <div className='w-[50%] 2xl:w-[100%] flex justify-center items-center'>
                        <Image
                            src={bottomSection.img}
                            alt='img'
                            width={1000}
                            height={1000}
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}
