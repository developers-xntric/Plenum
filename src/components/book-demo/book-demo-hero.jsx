import React from 'react'
import { ContactForm } from '../service/contact-form'
import Image from 'next/image'

function BookDemoHero({}) {
    return (
        <section className='pt-36 md:pt-40 lg:pt-28 xl:pt-20 2xl:pt-36'>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto'>
                {/* HERO */}
                <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-10 lg:h-[80vh] 2xl:h-[60vh]'>
                    {/* LEFT */}
                    <div className='lg:w-[48%] xl:w-[500px] space-y-14 '>
                        {/* HEADING AND PARA*/}
                        <div className='space-y-3 md:space-y-5'>
                            <h2 className='text-[28px] uppercase md:text-4xl lg:text-[38px] xl:text-[40px] leading-[32px] md:leading-[43px] font-["Chakra"] font-bold text-black'>Transform Your SME Operations with Microsoft{''}<span className='text-primary'> DYNAMICS 365</span>{' '}Business Central</h2>
                            <p className="lg:w-[100%] xl:w-[550px] justify-center text-[#000] text-[15px] md:text-[20px] md:text-lg font-normal font-['Archivo'] leading-[22px] md:leading-[27px]">Streamline workflows, enhance productivity, and drive growth with the ERP designed for small and medium sized enterprises.</p>
                        </div>

                        <div className='flex  items-center gap-5 md:gap-10'>
                            <p className='font-["Archivo"] text-secondary opacity-[0.5] text-[14px] md:text-[15px] 2xl:text-[17px] font-semibold w-[120px]'>Proud Solution Partner</p>
                            <Image className='w-[150px] ' src="/images/book-demo/hero-logo.svg" alt="microsoft-logo" width={2000} height={2000}  />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='lg:w-[50%] xl:w-[40%]'>
                        <ContactForm />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BookDemoHero