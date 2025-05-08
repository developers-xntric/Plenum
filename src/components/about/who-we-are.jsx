import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WhoWeAre() {
    return (
        <section className='relative font-["Archivo"] bg-[#EFEFEF]'>
            <div className={` `}>
                <div className={`flex 2xl:items-center lg:flex-row flex-col justify-between`}>
                    <div className='space-y-7'>
                        <div className="2xl:max-w-[1440px] lg:w-[82%] max-w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto flex items-center lg:items-start flex-col md:flex-col py-12">

                            <div className='relative flex items-center justify-start'>
                                <h2 className='text-[36px] lg:text-left text-center lg:text-[50px] text-secondary font-semibold tracking-[-1.5px] md:tracking-tight home-section-headings'>Who We Are</h2>
                            </div>
                            <p className='text-secondary lg:text-left text-center font-["Archivo"] lg:max-w-[95%] xl:max-w-[99%] 2xl:max-w-[90%] my-4 opacity-75 text-[15px] xl:text-[18px]'>Plenum is an intelligent technology solutions provider focused on delivering enterprise-grade technology solutions that increase efficiency, scalability, and informed decision-making. With strong expertise in AI consulting, cloud managed IT services and ERP implementation and consulting, we help organizations transform their operations and grow faster.</p>


                        </div>

                    </div>
                    <div className=' flex justify-center relative items-center lg:w-[2100px] 2xl:w-[70%] '>
                        <Image src={"/about/Who-we-are.png"} alt='img' width={1000} height={1000} className='w-full  md:h-full' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre