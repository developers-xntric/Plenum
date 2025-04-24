import Image from 'next/image'
import React from 'react'

const ServiceHero = () => {
  return (
    <div className='md:h-screen bg-cover bg-no-repeat' style={{ backgroundImage: "url('/service/sp_herobg.webp')" }}>
      {/* Wrapper */}
      <div className="2xl:max-w-[1300px] h-full w-[90%] mx-auto space-y-20 py-16 xl:pt-24">
        {/* Image Div */}
        <div className='w-[160px] h-[250px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Image src="/service/sp_hero.png" alt='Plenum AI Logo' width={1500} height={1500} className='w-full h-full object-contain' />
        </div>

        <div className='w-full h-full'>
          {/* Centered Text Below Image */}
          <div className="flex flex-col justify-end h-full items-start w-96">
            <h1 className='text-5xl font-bold text-orange-500'>Plenum<br />AI Services</h1>
            <p className='mt-4 text-gray-400 max-w-md'>
              At Plenum Technologies, we offer cutting-edge AI software platforms tailored to empower data engineers, scientists, analysts, and automation engineers.
            </p>
          </div>
          {/* Right-Aligned Text and Button */}
          {/* <div className="text-right text-gray-400 max-w-xs">
          <p className='mb-4'>
            Our flagship solution, Momentum AI, is designed to simplify and supercharge your AI development process with minimal or no coding —accelerating innovation across industries.
          </p>
          <button className='px-4 py-2 bg-white text-black border border-gray-300 rounded'>
            Request a Demo
          </button>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default ServiceHero