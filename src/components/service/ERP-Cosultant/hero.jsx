import Button from '@/components/common/button';
import React from 'react';

const Service_Inner_Hero = ({ heading, para }) => {
  return (
    <div className='md:h-screen'>

      {/* Wrapper */}
      <div className='2xl:max-w-[1300px] h-full w-[90%] mx-auto space-y-20 py-16 md:py-28'>
        <div className='w-[350px] h-[420px] space-y-8'>
          <h1 className='text-secondary font-bold text-[50px] font-["Chakra"] leading-13'>{heading}</h1>
          <p className='text-secondary font-normal text-[18px]'>{para}</p>
          <Button text={"Let's Talk"} link={"/contact"} className={"px-10 py-2 bg-primary text-white"} />
        </div>
      </div>
    </div>
  )
}

export default Service_Inner_Hero;
