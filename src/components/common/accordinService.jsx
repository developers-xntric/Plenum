import React from 'react'
import Button from './button'
import Image from 'next/image'
import { Accordion } from './accordine'

const ERPSolutions = ({ blackSection }) => {
    return (
        <section className='relative font-["Archivo"] bg-[#282526]'>
            <div className='max-w-[90%] xl:max-w-[75%] 2xl:max-w-[80%] mx-auto text-center py-16'>
                <h2 className='text-[30px] lg:text-[50px] leading-[36px] lg:leading-[55px] text-white mx-auto'>
                    {blackSection.heading}
                </h2>
                <p className='text-[18px] font-normal text-[#FFF] opacity-70 mt-6 lg:w-[92%] 2xl:w-[80%] mx-auto'>
                    {blackSection.para}
                </p>
                <Button
                    text={blackSection.button}
                    ariaLabel="Contact us for ERP services"
                    className="bg-transparent text-white border border-white hover:bg-[#FF6035] hover:border-[#FF6035] hover:text-white transition-colors duration-300 text-[15px] mt-8 px-9 py-3"
                    link="/contact"
                />
            </div>
        </section>
    )
}

export const ERPAccordin = ({ bottomSection, outside, isbottom, items, className, left, blackSection, para, arrow = false, isAccordin }) => {
    return (
        <section className='relative bg-[#EFEFEF] font-["Archivo"]'>
            {!isbottom && !outside && <ERPSolutions blackSection={blackSection} />}

            <div className={`lg:max-w-[95%] 2xl:max-w-[1610px] ${left ? "lg:ms-auto 2xl:mx-auto lg:mx-0" : "2xl:mx-auto"}`}>
                <div className={className}>
                    <div className='md:px-8 px-4 w-full lg:w-[50%] 2xl:w-[80%]'>
                        <Accordion items={items} isAccordin={isAccordin} />
                    </div>
                    <div className='w-full lg:w-[50%] 2xl:w-[100%] flex justify-center items-center'>
                        <Image
                            src={bottomSection.img}
                            alt={bottomSection.alt || 'ERP Solution Illustration'}
                            width={1000}
                            height={2000}
                            loading="lazy"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {isbottom && !outside && <ERPSolutions blackSection={blackSection} />}
        </section>
    )
}
