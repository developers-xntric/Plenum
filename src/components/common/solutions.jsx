import React from 'react'
import Button from './button'
import Image from 'next/image'


const ERPSolutions = ({ blackSection }) => {
    return (
        <section className='relative font-["Archivo"] bg-[#282526]'>
            <div className='max-w-[90%] xl:max-w-[75%] 2xl:max-w-[55%]  mx-auto text-center py-16  '>
                <h2 className='text-[50px] text-white'>{blackSection.heading}</h2>
                <p className='text-[18px] text-[#FFF] mt-6 opacity-60'>{blackSection.para}</p>
                <Button text={blackSection.button} className='bg-transparent text-white text-[15px] mt-8 border border-[#FFFFFF] px-9 py-2' link='/' />
            </div>
        </section>
    )
}

export const ERPSolutionsBottomSection = ({ bottomSection, className, left, blackSection }) => {
    return (
        <section className='relative font-["Archivo"] '>
            <ERPSolutions blackSection={blackSection} />
<<<<<<< HEAD
            <div className={`max-w-[95%] 2xl:max-w-[1610px] ${left ? "ms-auto" : ""}  `}>
=======
            <div className={`max-w-[95%] 2xl:max-w-[1440px] ${left ? "ms-auto" : ""}  `}>
>>>>>>> origin/plenum-umar
                <div className={`${className}`}>
                    <div className='w-[50%] 2xl:w-[60%]'>
                        <h2 className='text-[39px] text-secondary font-medium home-section-headings'>{bottomSection.heading}</h2>
                        {
                            bottomSection.Input.map((item, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-2 mt-8'>
                                        <input type="input" placeholder={item} className='w-[80%] py-2 border-b border-[#BABABA] text-secondary font-medium home-section-headings px-2 placeholder:text-secondary placeholder:font-medium placeholder:home-section-headings' />
                                    </div>
                                )
                            })
                        }
                        <Button text={bottomSection.button} className='bg-transparent cursor-pointer  text-[15px] mt-8
                        border border-[#282526] px-9 py-2' link='/' />
                    </div>
                    <div className='w-[50%] 2xl:w-[100%] flex justify-center items-center'>
                        <Image src={bottomSection.img} alt='img' width={1000} height={1000} className='w-full h-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}
