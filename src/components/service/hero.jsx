import Image from 'next/image'
import React from 'react'
import Button from '../common/button'

const ServiceHero = ({ bgImage, isLogo = true }) => {
  return (
    <div className='lg:h-screen bg-cover bg-no-repeat bg-center overflow-x-hidden' style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Wrapper */}
      <div className="2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16 pt-[64vh] md:pt-[60vh] lg:pt-36">

        {/* Image Div */}
        {isLogo && <div className='xl:w-[200px] xl:h-[250px] w-[185px] md:w-[130px] h-[240px] md:h-[180px] absolute left-1/2 lg:top-1/2 md:top-[40%] top-[38%] transform -translate-x-1/2 -translate-y-1/2'>
          <Image src="/service/sp_hero.svg" alt='Plenum AI Logo' width={1500} height={1500} className='w-full h-full object-contain' />
        </div>}

        <div className='w-full h-full flex lg:flex-row flex-col text-center md:text-left lg:mt-10 xl:mt-0 lg:gap-0 gap-8'>
          {/* Centered Text Below Image */}
          <div className="flex flex-col justify-end h-full items-center md:items-start lg:w-[530px]">
            <h1 className='text-[40px] lg:text-[60px] xl:text-[90px] font-["Chakra"] font-[600] text-primary flex flex-col gap-2 leading-10 lg:leading-12 xl:leading-20'>Plenum <span>AI Services</span></h1>
            <p className='mt-8 text-[17px] lg:text-[14px] xl:text-[18px] font-normal text-gray-400 md:max-w-[480px] md:pr-10'>
              Transform your business with scalable, intelligent AI services that are specifically designed to improve decision making, streamline operations, and accelerate growth in a variety of sectors.
            </p>
{/* Traces */}
{/* This is the updated one */}
          </div>
          {/* Right-Aligned Text and Button */}
          <div className="text-gray-400 lg:w-[340px] xl:w-96 lg:ms-auto">
            <p className='mb-8 text-[17px] lg:text-[14px] xl:text-[18px] font-normal'>
              Experience how Plenum brings clarity to complexity with impactful digital solutions. See our process in action.
            </p>
            {/* Button */}
            <Button className={"px-8 py-2.5 hover:bg-[#FF6035] hover:transition-colors ease-in-out duration-300 hover:text-white  tracking-tighter font-semibold bg-[#FFF] text-black rounded font-['Archivo'] text-[15px]"} text={"Request a Demo"} link={"/contact"} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default ServiceHero