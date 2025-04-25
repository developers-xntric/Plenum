import Button from '@/components/common/button';
import Image from 'next/image';
import React from 'react';

const ERPC2 = ({ heading, para }) => {
    return (
        <div className='overflow-hidden bg-[#EFEFEF]'>
            {/* Wrapper */}
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto my-auto space-y-20'>
                <div className='flex w-full items-center justify-between'>
                    {/* Part 1 Left */}
                    <div className='w-1/2 space-y-8 relative bottom-8'>
                        <div className='w-[539px] flex flex-col gap-12'>
                            <h1 className='md:text-[35px] xl:text-[48px] font-["Archivo"] md:leading-10 xl:leading-[52px] flex flex-col text-secondary font-medium home-section-headings'>Smart ERP <span>Solutions</span></h1>
                            <p className='text-secondary font-["Archivo"] opacity-75 font-normal md:text-[14px] xl:text-[18px]'>{para}</p>
                            <div className='flex gap-4'>
                                <Button text={"Let's Talk"} link={"/contact"} className={"px-10 py-2 bg-primary text-white"} />
                                <Button text={"Talk to an Expert"} link={"/contact"} className={"px-10 py-[7px] bg-none border border-secondary text-secondary"} />
                            </div>
                        </div>
                    </div>
                    {/* Part 2 Right */}
                    <div className='flex flex-col relative left-[5.55%]'>
                        <div className='md:w-[500px] md:h-[300px] xl:w-[720px] xl:h-[504px]'>
                            <Image src={"/service/ERPC/ERPC2.svg"} alt='ERPC' width={1500} height={1500} />
                            <div></div>
                        </div>
                        <div className='md:w-[500px] xl:w-[720px] p-10 bg-[#282526]'>
                            <p className='text-[#FFF] text-[18px] font-["Archivo"] font-normal'>We possess extensive knowledge across various industries, establishing ourselves as the leading IT company in Dubai for innovative solutions. We prioritize providing customized solutions that meet the distinct requirements of our clients, fostering growth and achieving operational excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ERPC2;
