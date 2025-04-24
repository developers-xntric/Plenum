import React from 'react';
import ArrowButton from '../common/arrow-button';
import Image from 'next/image';

const PinkSection = ({ heading, text, show_button = false, className, isVideo = false }) => {
    return (
        <div className={`bg-[#EFEFEF] md:h-[280px] ${className}`}>
            <div className='2xl:max-w-[1300px] h-full w-[90%] mx-auto space-y-20 py-16 relative'>
                {/* first Image Line */}
                <div className='h-full w-[180px] absolute top-0 z-10'>
                    {isVideo && <Image src={"/service/pink_link.svg"} alt='Russian' width={1000} height={1000} className='w-full h-full object-cover' />}
                </div>
                {/* center heading and text */}
                <div className='w-[913px] mx-auto my-auto h-[141px]'>
                    <h2 className='text-secondary text-[45px] font-["Archivo"] font-bold text-center'>{heading}</h2>
                    <p className='text-secondary opacity-60 text-[18px] font-normal text-center font-["Archivo"] mt-4'>{text}</p>
                </div>
                {/* Arrow Button Optional */}
                <div className='w-full flex justify-center mt-4'>
                    {show_button && <ArrowButton text={"Request A Demo"} className={"mt-5"} />}
                </div>
                {/* Right Line image */}
                <div className='h-full w-[180px] absolute right-0 top-0 z-10'>
                    {isVideo && <Image src={"/service/pink_link.svg"} alt='Russian' width={1000} height={1000} className='w-full h-full object-cover' />}
                </div>
            </div>
        </div>
    )
}

export default PinkSection;
