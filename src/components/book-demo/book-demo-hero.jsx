import React from 'react'
import { ContactForm } from '../service/contact-form'

function BookDemoHero() {
    return (
        <section>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto'>
                {/* HERO */}
                <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-10 h-screen'>
                    {/* LEFT */}
                    <div className='lg:w-[40%] xl:w-[50%] space-y-8 md:space-y-10 lg:space-y-40'>
                        {/* HEADING AND PARA*/}
                        <div className='space-y-3 md:space-y-5'>
                            <h2 className='text-[30px] md:text-4xl lg:text-5xl xl:text-[60px] font-["Chakra"] tracking-[-2.771px] font-semibold text-primary'>Contact us</h2>
                            <p className="lg:w-[100%] xl:w-[436px] opacity-60 justify-center text-[#0f0f0f] text-[15px] md:text-lg font-medium font-['Archivo'] leading-[22px] md:leading-[27px]">Ready to boost operational efficiency and drive innovation at scale? Get in touch with us to explore strategic solutions built for enterprise success.</p>
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