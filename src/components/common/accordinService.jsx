import React from 'react'
import Button from './button'
import Image from 'next/image'
import { Accordion } from './accordine';


const ERPSolutions = ({ blackSection }) => {
    return (
        <section className='relative font-["Archivo"] bg-[#282526]'>
            <div className={`max-w-[90%] xl:max-w-[75%] 2xl:max-w-[80%] mx-auto text-center py-16`}>
                <h2 className='text-[30px] lg:text-[50px] lg:leading-[55px] text-white lg:w-[80%] 2xl:w-[75%] mx-auto'>{blackSection.heading}</h2>
                <p className='text-[18px] font-normal text-[#FFF] mt-6 opacity-60 lg:w-[80%] mx-auto font-["Archivo"]'>{blackSection.para}</p>
                <Button text={blackSection.button} className='bg-transparent text-white hover:bg-[#FF6035] hover:border-[#FF6035] hover:text-white hover:transition-colors ease-in-out duration-300 text-[15px] mt-8 border border-[#FFFFFF] px-9 py-2' link='/contact' />
            </div>
        </section>
    )
}

export const ERPAccordin = ({ bottomSection, outside, isbottom, items, className, left, blackSection, para, arrow = false, isAccordin }) => {
    return (
        <section className='relative bg-[#EFEFEF] font-["Archivo"]'>
            {!isbottom && !outside && <ERPSolutions blackSection={blackSection} />}

            <div className={`lg:max-w-[95%] 2xl:max-w-[1610px] ${left ? "lg:ms-auto mx-auto lg:mx-0" : ""}`}>
                <div className={`${className}`}>
                    <div className='md:px-8 px-4 w-full lg:w-[50%] 2xl:w-[80%]'>
                        <Accordion items={items} isAccordin={isAccordin} />
                    </div>
                    <div className='w-full lg:w-[50%] 2xl:w-[100%] flex justify-center items-center'>
                        <Image
                            src={bottomSection.img}
                            alt='img'
                            width={1000}
                            height={2000}
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>

            {isbottom && !outside && <ERPSolutions blackSection={blackSection} />}

        </section>
    )
}
