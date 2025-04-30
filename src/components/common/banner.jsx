import React from 'react'

const Banner = ({ heading, para, button }) => {
    return (
        <section className="bg-black pt-60 pb-20  text-white">
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto'>
                <div className="max-w-[70%] 2xl:max-w-[55%] xl:max-w-[65%] ml-2 mx-auto  grid md:grid-cols-2 items-end">
                    <div>
                        <h2 className="text-[#FF6035] font-['Chakra'] text-4xl md:text-[60px] font-medium">{heading}</h2>
                    </div>
                    <div className='lg:max-w-[75%]'>
                        <p className="text-[#FFFFFF] font-light text-[22px] leading-[29px]">
                            {para}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-10 ml-2">
                    {
                        button.map((ele, index) => {
                            return (
                                <span key={index} className="text-[21px] text-white px-5 py-2 rounded-full border border-white text-sm">
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