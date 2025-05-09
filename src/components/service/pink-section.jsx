'use client'
import React from 'react';
import ArrowButton from '../common/arrow-button';
import Image from 'next/image';
import Link from 'next/link';


const PinkSection = ({ heading, text, show_button = false, className, isVideo = false }) => {
    return (
        <div className={`bg-[#EFEFEF] md:h-[280px] overflow-hidden py-8 ${className}`}>
            <div className='2xl:max-w-[1440px] w-[90%] z-20 mx-auto space-y-20 relative'>
                {/* first Image Line */}
                <div className='h-full md:block hidden w-[180px] absolute top-0 z-10'>
                    {isVideo && <Image src={"/service/pink_link.svg"} alt='Russian' width={1000} height={1000} className='w-full h-full object-cover' />}
                </div>

                {/* IMAGE FOR MOBILE  left    */}
                <div className='h-full md:hidden block  absolute -left-12 top-0 -z-10'>
                    {isVideo && <Image src={"/service/pink_mob1.png"} alt='Russian' width={1000} height={1000} className='w-full h-full object-cover' />}
                </div>
                {/* IMAGE FOR MOBILE  right   */}
                <div className='h-full md:hidden block absolute -right-8 top-0 -z-10'>
                    {isVideo && <Image src={"/service/pink_mob2.png"} alt='Russian' width={1000} height={1000} className='w-full h-full object-cover' />}
                </div>

                {/* center heading and text */}
<<<<<<< Updated upstream
                <div className='md:w-[740px] xl:w-[955px] 2xl:w-[950px] mx-auto my-auto h-[141px]'>
                    <h2 className='text-secondary text-[30px] lg:text-[32px] lg:text-4xl xl:text-[45px] font-["Archivo"] text-center leading-[34px] md:leading-[55px] font-semibold home-section-headings'>{heading}</h2>
=======
                <div className='md:w-[720px] xl:w-[913px] mx-auto my-auto'>
                    <h2 className='text-secondary text-[30px] lg:text-[40px]  xl:text-[45px] font-["Archivo"] text-center leading-[34px] md:leading-[56px] font-semibold home-section-headings'>{heading}</h2>
>>>>>>> Stashed changes
                    <p className='text-secondary opacity-60 md:text-[14px] xl:text-[18px] font-medium text-center font-["Archivo"] mt-4'>{text}</p>
                </div>
                {/* Arrow Button Optional */}
                <div className='w-full flex justify-center top-24 md:top-0 md:mt-4 xl:mt-4 relative'>
                    {show_button && (
                        <Link href='/contact'>
                            <ArrowButton text={"Request A Demo"} className={"xl:mt-5"} />
                        </Link>
                    )}
                </div>
                {/* Right Line image */}
                <div className='h-full md:block hidden w-[180px] absolute right-0 top-0 z-10'>
                    {isVideo && <Image src={"/service/pink_link.svg"} alt='Russian' width={1000} height={1000} className='w-full h-full object-cover' />}
                </div>
            </div>
        </div>
    )
}

export default PinkSection;
