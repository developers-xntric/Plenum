import React from 'react'
import Button from './button'
import Image from 'next/image'


const ERPSolutions = ({ blackSection }) => {
    return (
        <section className='relative font-["Archivo"] bg-[#282526]'>
            <div className='max-w-[85%] mx-auto text-center py-16  '>
                <h2 className='text-[50px] text-white'>{blackSection.heading}</h2>
                <p className='text-[18px] text-[#FFF] mt-6'>{blackSection.para}</p>
                <Button text={blackSection.button} className='bg-transparent text-white text-[15px] mt-8 border border-[#FFFFFF] px-9 py-2' link='/' />
            </div>
        </section>
    )
}

export const ERPSolutionsBottomSection = ({ bottomSection, className, left, blackSection }) => {
    return (
        <section className='relative font-["Archivo"] '>
            <ERPSolutions blackSection={blackSection} />
            <div className={`max-w-[95%] 2xl:max-w-[1300px] ${left ? "ms-auto" : ""}  `}>
                <div className={`${className}`}>
                    <div className='w-[50%]'>
                        <h2 className='text-[39px] '>{bottomSection.heading}</h2>
                        {
                            bottomSection.Input.map((item, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-2 mt-8'>
                                        <input type="input" placeholder={item} className='w-[80%] py-2 border-b border-[#BABABA]' />
                                    </div>
                                )
                            })
                        }
                        <Button text={bottomSection.button} className='bg-transparent  text-[15px] mt-8
                        border border-[#282526] px-9 py-2' link='/' />
                    </div>
                    <div className='w-[50%] flex justify-center items-center'>
                        <Image src={bottomSection.img} alt='img' width={1000} height={1000} className='w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}
