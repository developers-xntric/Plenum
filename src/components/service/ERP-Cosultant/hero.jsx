import Button from '@/components/common/button';
import Image from 'next/image';
import React from 'react';

const Service_Inner_Hero = ({ heading, para }) => {
  return (
    <div className='md:h-screen 2xl:h-auto overflow-hidden'>
      {/* Wrapper */}
      <div className='2xl:max-w-[1300px] h-full w-[90%] mx-auto my-auto space-y-20 py-16 md:py-28'>
        <div className='flex items-center w-full justify-between'>
          <div className='w-[377px] space-y-8 mt-12'>
            <h1 className='text-secondary font-bold md:text-[35px] xl:text-[48px] font-["Chakra"] md:leading-10 xl:leading-[52px]'>{heading}</h1>
            <p className='text-secondary font-normal md:text-[14px] xl:text-[18px] opacity-60'>{para}</p>
            <Button text={"Let's Talk"} link={"/contact"} className={"px-10 py-2 bg-primary text-white"} />
          </div>
          <div className='md:w-[600px] md:h-[400px] xl:w-[813px] xl:h-[663px] relative left-[5.55%]'>
            <Image src={"/service/ERPC/ERPC-Hero.svg"} alt='ERPC' width={1500} height={1500} />
          </div>
        </div>
      </div>                
    </div>
  )
}

export default Service_Inner_Hero;
