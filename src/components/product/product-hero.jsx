import React from 'react'
import Button from '../common/button'

const ProductHero = ({ bgImage, heading, heading_className }) => {
    return (
        <div className='h-screen bg-cover bg-no-repeat bg-center overflow-x-hidden' style={{ backgroundImage: `url(${bgImage})` }}>
            {/* Wrapper */}
            <div className="2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16 xl:pt-36">

                <div className='w-full h-full lg:flex-row flex-col gap-10 lg:gap-0 flex mt-10 xl:mt-0'>
                    {/* Centered Text Below Image */}
                    <div className="flex flex-col justify-end h-full items-start w-[530px] xl:w-[730px]">
                        <h1 className={`text-[45px] lg:text-[90px] font-["Chakra"] font-[600] text-primary flex flex-col gap-2 leading-12 xl:leading-20 ${heading_className}`} dangerouslySetInnerHTML={{ __html: heading ? heading : "Momentum AI" }}></h1>
                        <p className='mt-8 text-[17px] font-normal text-gray-400 w-[75%] lg:w-[450px]'>
                            At Plenum Technologies, we offer cutting-edge AI software platforms tailored to empower data engineers, scientists, analysts, and automation engineers.
                        </p>
                    </div>
                    {/* Right-Aligned Text and Button */}
                    <div className="text-gray-400 w-[100%] lg:w-96 lg:ms-auto">
                        <p className='mb-8 text-[17px] font-normal'>
                            Our flagship solution, Momentum AI, is designed to simplify and supercharge your AI development process with minimal or no coding—accelerating innovation across industries.
                        </p>
                        {/* Button */}
                        <Button className={"px-8 py-2.5  hover:bg-white transition-all duration-500 hover:text-black tracking-tighter font-semibold bg-[#FF6035] text-[#FFFFFF] rounded"} text={"Request a Demo"} link={"/service"} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductHero