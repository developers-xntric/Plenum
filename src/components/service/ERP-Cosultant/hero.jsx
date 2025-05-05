import Button from '@/components/common/button';
import Image from 'next/image';
import React from 'react';

const Service_Inner_Hero = ({ heading, para, is_space_in_image = true, image, image_className, button_text, button_className }) => {
  return (
    <div className='h-screen 2xl:h-[800px] overflow-hidden'>
      {/* Wrapper */}
      <div className='2xl:max-w-[1440px] h-full lg:w-[90%] mx-auto my-auto space-y-20 py-16 lg:py-28'>
        <div className='flex lg:flex-row flex-col items-center md:items-start lg:items-center w-full justify-between gap-8 lg:gap-0'>
          {/* Left Section Heading Text And Buttons */}
          <div className='w-[385px] space-y-8 mt-12 ms-0 md:ms-20 lg:ms-0'>
            {/* Heading */}
            <h1 className='text-secondary text-[50px] font-["Chakra"] leading-[55px] font-semibold home-section-headings'>{heading}</h1>
            {/* Paragraph */}
            <p className='text-secondary font-normal text-[18px] opacity-60 w-[95%]'>{para}</p>
            {/* Button */}
            <Button text={button_text || "Let's Talk"} link={"/contact"} className={button_className ? button_className : "px-10 py-2.5 bg-[#FF6035]  hover:bg-black hover:transition-colors ease-in-out duration-300 hover:text-white text-white"} />
          </div>
          {/* Right Side Image */}
          <div className={`${image_className ? image_className : "lg:w-[600px] lg:h-[400px] xl:w-[813px] xl:h-[663px]"} ${is_space_in_image ? "" : "lg:relative left-[5.55%]"}`}>
            {/* Image */}
            <Image src={image} alt='ERPC' width={1500} height={1500} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service_Inner_Hero;

