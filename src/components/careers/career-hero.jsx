import Image from 'next/image'
import React from 'react'

const CareerHero = ({ heading, para, para2 }) => {
    return (
        <section className='relative  pt-36 md:pt-44 pb-16 md:pb-28'>
            <div className='flex flex-col justify-center items-center'>
                <div className='max-w-[90%] md:max-w-[55%] xl:max-w-[50%]  2xl:max-w-[40%] mx-auto'>
                    <h1 className='text-[30px] md:text-[60px] font-["Chakra"] font-semibold leading-[35px] md:leading-[65px] text-center tracking-[-2.771px] text-[#FF6035]'>{heading || "Fueling Innovation with AI-Powered Possibilities"}</h1>
                    <p className='text-center text-[15px] md:text-[18px] mt-4 text-[#151515] opacity-60'>{para || "We create AI tools that amplify creativity and solve real-world problems. From concept to impact, our technology powers the next wave of innovation."}</p>
                </div>
                <div className='mt-10 h-full md:max-w-[80%]'>
                    <Image src={"/careers/hero.svg"} alt='Alt' width={1000} height={1000} className='w-full h-full object-contain' />
                </div>
                <p className='text-center text-[15px] md:text-[22px] mt-8 md:mt-4 max-w-[675px] text-[#282526] opacity-60'>{para2 || "We create AI tools that amplify creativity and solve real-world problems. From concept to impact, our technology powers the next wave of innovation."}</p>
            </div>
        </section>
    )
}

export default CareerHero
