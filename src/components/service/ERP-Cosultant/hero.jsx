"use client"
import { useState, useEffect } from "react";
import Button from '@/components/common/button';
import Image from 'next/image';
import React from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Set initial width
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const Service_Inner_Hero = ({ heading, para, is_space_in_image = true, image, image_className, button_text, button_className, isERP = false, isBottomButton = true, heading_className, para_className }) => {
  const width = useWindowWidth();
  return (
    <div className=' lg:h-[110vh] xl:h-[780px] 2xl:h-[820px] overflow-hidden'>
      {/* Wrapper */}
      <div className='2xl:max-w-[1440px] lg:w-[90%] mx-auto my-auto space-y-20 pt-10 md:py-16 lg:py-28'>
        <div className='flex lg:flex-row flex-col items-center md:items-start lg:items-center w-full h-full justify-between gap-8 lg:gap-0 mt-12 lg:mt-0 2xl:mt-20'>
          {/* Left Section Heading Text And Buttons */}
          <div className={`lg:w-[45%] text-center lg:text-start space-y-6 md:space-y-8 mt-12 ms-0 md:ms-20 lg:ms-0 ${width < 450 && "px-5"}`}>
            {/* Heading */}
            <h1 className={`text-secondary ${width < 350 && "text-[38px]"} text-[39px] lg:text-[50px] 2xl:text-[54px] font-["Chakra"] leading-[42px] md:leading-[55px] font-semibold home-section-headings ${heading_className}`}>{heading}</h1>
            {/* Paragraph */}
            <p className={`text-secondary  font-medium text-[18px] opacity-60 font-["Archivo"] lg:w-[80%] ${para_className}`}>{para}</p>
            {/* Button */}
            {!isBottomButton && <Button text={button_text || "Let's Talk"} link={"/contact"} className={button_className ? button_className : "px-10 py-2.5 bg-[#FF6035]  hover:bg-black hover:transition-colors ease-in-out duration-300 hover:text-white text-white"} />}
          </div>
          {/* Right Side Image */}
          {(!isERP || width <= 1440) && <div className={`${image_className ? image_className : "lg:w-[600px] lg:h-[400px] xl:w-[813px] xl:h-[663px]"} ${is_space_in_image ? "" : "lg:relative top-8 md:-top-10 xl:top-8 left-[5.55%]"}`}>
            {/* Image */}
            <Image src={image} alt='ERPC' width={1500} height={1500} />
          </div>}
        </div>
        {isERP && width > 1440 && <div className={`${image_className ? image_className : "lg:w-[600px] lg:h-[400px] xl:w-[800px] 2xl:w-[850px]"}  ${isERP ? "2xl:absolute right-0 lg:top-[14%] 2xl:top-[10%]" : "2xl:absolute right-0 lg:top-[14%] 2xl:top-[2%]"}`}>
          {/* Image */}
          <Image src={image} alt='ERPC' width={1500} height={1500} />
        </div>}
        <div className="flex justify-center lg:justify-start relative lg:bottom-10">
          {isBottomButton && <Button text={button_text || "Let's Talk"} link={"/contact"} className={button_className ? button_className : "px-10 py-2.5 bg-[#FF6035]  hover:bg-black hover:transition-colors ease-in-out duration-300 hover:text-white text-white"} />}
        </div>
      </div>
    </div>
  )
}

export default Service_Inner_Hero;