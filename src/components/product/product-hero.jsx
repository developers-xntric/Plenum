import Image from 'next/image'
import React from 'react'
import Button from '../common/button'

const ProductHero = ({ bgImage, isLogo = true }) => {
    return (
        <div className='md:h-screen bg-cover bg-no-repeat bg-center overflow-x-hidden' style={{ backgroundImage: `url(${bgImage})` }}>
            {/* Wrapper */}
            <div className="2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16 xl:pt-36">

                {/* Image Div */}
                {isLogo && <div className='xl:w-[200px] xl:h-[250px] w-[130px] h-[180px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <Image src="/service/sp_hero.svg" alt='Plenum AI Logo' width={1500} height={1500} className='w-full h-full object-contain' />
                </div>}

                <div className='w-full h-full flex mt-10 xl:mt-0'>
                    {/* Centered Text Below Image */}
                    <div className="flex flex-col justify-end h-full items-start w-[530px] xl:w-[600px] ">
                        <h1 className='md:text-[60px] xl:text-[90px] font-["Chakra"] font-[600] text-primary flex flex-col gap-2 md:leading-12 xl:leading-20'>Momentum AI</h1>
                        <p className='mt-8 md:text-[14px] xl:text-[18px] font-normal text-gray-400 w-[450px]'>
                            At Plenum Technologies, we offer cutting-edge AI software platforms tailored to empower data engineers, scientists, analysts, and automation engineers.
                        </p>
                    </div>
                    {/* Right-Aligned Text and Button */}
                    <div className="text-gray-400 md:w-[340px] xl:w-96 ms-auto">
                        <p className='mb-8 md:text-[14px] xl:text-[18px] font-normal'>
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