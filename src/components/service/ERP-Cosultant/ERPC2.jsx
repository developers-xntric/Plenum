import Button from '@/components/common/button';
import Image from 'next/image';
import React from 'react';

const ERPC2 = ({ heading, para, para2, image, para_className, heading_className }) => {
    return (
        <div className='overflow-hidden bg-[#EFEFEF]'>
            {/* Wrapper */}
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto my-auto space-y-20'>
                <div className='flex flex-col lg:flex-row w-full lg:items-center justify-between sm:space-y-6 lg:space-y-0'>
                    {/* Part 1 Left */}
                    <div className='lg:w-1/2 space-y-8 relative lg:bottom-8 py-14 lg:py-0'>
                        <div className=' xl:w-[80%] flex flex-col gap-4 lg:gap-12 md:text-left text-center'>
                            <h2 className={`text-[30px] md:text-[35px] xl:w-[600px] xl:text-[48px] font-["Archivo"] leading-[37px] md:leading-10 xl:leading-[55px] flex flex-col text-secondary font-semibold home-section-headings ${heading_className}`}>{heading || "Top Notch ERP Consulting and Implementation Services"}</h2>
                            <p className={`text-secondary font-["Archivo"] opacity-75 font-medium text-[14px] md:text-[14px] xl:text-[18px] ${para_className}`}>{para}</p>
                            <div className='flex justify-center md:justify-between gap-4'>
                                <Button text={"Talk to an Expert"} link={"/contact"} className={"px-5 sm:px-10 py-2.5 hover:bg-black hover:transition-colors ease-in-out duration-300 font-medium hover:text-white bg-none border border-secondary text-[#282526]"} />
                            </div>
                        </div>
                    </div>
                    {/* Part 2 Right */}
                    <div className=' flex-col relative lg:left-[5.55%] lg:flex hidden'>
                        <div className='w-full lg:w-[500px] md:h-[300px] xl:w-[720px] xl:h-[504px]'>
                            <Image src={image || "/service/ERPC/ERPC2.svg"} alt='ERPC' width={1500} priority height={1500} />
                        </div>
                        <div className='w-full lg:w-[500px] xl:w-[720px] p-10 bg-[#282526]'>
                            <p className='text-[#FFF] text-[18px] font-["Archivo"] font-normal w-[80%] md:w-[100%] xl:w-[80%]'>{para2 || "We possess extensive knowledge across various industries, establishing ourselves as the leading IT company in Dubai for innovative solutions. We prioritize providing customized solutions that meet the distinct requirements of our clients, fostering growth and achieving operational excellence."}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Part 2 Right */}
            <div className='flex-col relative lg:left-[5.55%] lg:hidden flex'>
                <div className='w-full lg:w-[500px] md:h-[300px] xl:w-[720px] xl:h-[504px]'>
                    <Image src={image || "/service/ERPC/ERPC2.svg"} alt='ERPC' width={1500} priority height={1500} />
                </div>
                <div className='w-full lg:w-[500px] xl:w-[720px] p-5 md:p-10 bg-[#282526]'>
                    <p className='text-[#FFF] text-[14px] md:text-[18px] font-["Archivo"] font-normal'>{para2 || "We possess extensive knowledge across various industries, establishing ourselves as the leading IT company in Dubai for innovative solutions. We prioritize providing customized solutions that meet the distinct requirements of our clients, fostering growth and achieving operational excellence."}</p>
                </div>
            </div>
        </div>
    )
}

export default ERPC2;
