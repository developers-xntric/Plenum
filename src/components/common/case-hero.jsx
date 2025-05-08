import React from 'react'

const CaseHero = ({ heading, para }) => {
    return (
        <section className='relative pt-44 2xl:pt-60'>
            <div className='flex justify-center items-center'>
                <div className=' lg:max-w-[60%] max-w-[90%] xl:max-w-[45%] 2xl:max-w-[40%] mx-auto'>
                    <h1 className='text-[30px] md:text-[60px] font-["Chakra"] font-semibold leading-[35px] md:leading-[65px] text-center tracking-[-2.771px] text-[#FF6035]'>{heading || "Fueling Innovation with AI-Powered Possibilities"}</h1>
                    <p className='text-center text-[15px] md:text-[18px] mt-4 text-[#151515] opacity-60'>{para || "We create AI tools that amplify creativity and solve real-world problems. From concept to impact, our technology powers the next wave of innovation."}</p>
                </div>
            </div>
        </section>
    )
}

export default CaseHero