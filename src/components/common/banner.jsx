import React from 'react'

const Banner = ({ heading, para, button }) => {
    return (
        <section className="bg-black pt-34 md:pt-60 pb-20  text-white">
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto'>
                <div className="max-w-[70%] 2xl:max-w-[55%] xl:max-w-[65%] ml-2 mx-auto  grid lg:grid-cols-2 items-end">
                    <div>
                        <h2 className="text-[#FF6035] font-['Chakra'] text-[32px] lg:text-[60px] font-medium">{heading}</h2>
                    </div>
                    <div className='lg:max-w-[75%]'>
                        <p className="text-[#FFFFFF] font-light text-[15px] lg:text-[22px] leading-[25px] md:leading-[29px]">
                            {para}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-4 mt-10 ml-2">
                    {
                        button.map((ele, index) => {
                            return (
                                <span key={index} className="lg:text-[21px] text-white px-3 lg:px-5 py-2 lg:py-2 rounded-full border border-white text-sm">
                                    {ele}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Banner