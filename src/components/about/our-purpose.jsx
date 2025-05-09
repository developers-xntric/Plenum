import Image from 'next/image'
import React from 'react'

function OurPurpose() {
    return (
        <section className={`w-full py-12 md:pb-16 pb-14 md:py-16 lg:py-20 font-["Archivo"] `}>
            <div className="max-w-[90%] 2xl:max-w-[1440px] mx-auto">
                <div className={`flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-12 xl:gap-20  `}>
                    <div className="w-full lg:w-1/2">
                        <Image
                            src={"/about/our-purpose.svg"}
                            alt="Team photo"
                            width={2000}
                            height={2000}
                            quality={100}
                            className="w-full h-full md:block hidden"
                        />
                        <Image
                            src={"/about/our-porpose-mob.png"}
                            alt="Team photo"
                            width={2000}
                            height={2000}
                            quality={100}
                            className="w-full h-full md:hidden block"
                        />

                    </div>
                    <div className="w-full lg:w-1/2 xl:w-[45%] flex flex-col justify-center space">
                        <h2 className='text-[36px] lg:text-left text-center lg:text-[50px] text-secondary font-semibold tracking-[-1.5px] md:tracking-tight home-section-headings  '>Our Purpose</h2>
                        <div className="text-secondary font-['Archivo'] font-medium lg:max-w-[95%] xl:max-w-[99%] 2xl:max-w-[90%] my-4 opacity-[0.6] text-[15px] lg:text-[18px] lg:text-left text-center">
                            Our purpose is to change the way businesses use technology by providing customized, smart AI and ERP solutions that deliver real business value. We're here to make things simpler, improve operations, and boost growth through seamless automation and cloud innovation. By working closely with our clients, we help them take advantage of advanced platforms like Momentum AI, Oracle Cloud ERP, and Microsoft Dynamics 365, so they can seize new opportunities and stay ahead in a rapidly evolving digital landscape.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPurpose