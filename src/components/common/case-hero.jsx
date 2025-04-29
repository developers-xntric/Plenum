import React from 'react'

const CaseHero = ({ heading, para }) => {
    return (
        <section className='relative pt-44'>
            <div className='flex justify-center items-center'>
                <div className='max-w-[45%] 2xl:max-w-[30%] mx-auto'>
                    <h1 className='text-[60px] font-["Chakra"] font-semibold leading-[65px] text-center tracking-[-2.771px] text-[#FF6035]'>{heading || "Fueling Innovation with AI-Powered Possibilities"}</h1>
                    <p className='text-center text-[18px] mt-4 text-[#151515] opacity-60'>{para || "We create AI tools that amplify creativity and solve real-world problems. From concept to impact, our technology powers the next wave of innovation."}</p>
                </div>
            </div>
        </section>
    )
}

export default CaseHero