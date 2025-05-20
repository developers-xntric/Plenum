import Image from 'next/image'
import React from 'react'

function TrustedPartners() {
    const partners = [
        { logo: '/images/book-demo/trusted-partner-logo/logo-5.svg', alt: 'logo5' },
        { logo: '/images/book-demo/trusted-partner-logo/logo-4.svg', alt: 'logo4' },
        { logo: '/images/book-demo/trusted-partner-logo/logo-1.svg', alt: 'logo1' },
        { logo: '/images/book-demo/trusted-partner-logo/logo-2.svg', alt: 'logo2' },
        { logo: '/images/book-demo/trusted-partner-logo/logo-3.svg', alt: 'logo3' },
        { logo: '/images/book-demo/trusted-partner-logo/logo-6.svg', alt: 'logo6' },
    ];

    return (
        <section className=" py-16 md:py-20 overflow-hidden">
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 md:space-y-24">

                <div>
                    {/* CONTENT */}
                    <div className='flex items-center flex-col justify-center gap-1'>
                        <h2 className="text-center text-black text-[30px] lg:text-[40px] font-bold font-['Archivo'] uppercase leading-[34px] md:leading-[55.70px]">
                            Trusted Partners
                        </h2>
                        <p className=" mx-auto md:w-[80%] lg:w-full text-center justify-center text-[#000] text-[15px] md:text-[20px] md:text-lg font-normal font-['Archivo'] leading-[22px] md:leading-[27px]">
                            IT technology consulting company with OEM partner alliances for Oracle and Microsoft
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-5 mt-10 place-items-center">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="md:w-[187.82px] p-5 h-[70px] md:h-[90.67px] bg-white/10 rounded-[20.79px] outline outline-[#ff6035]/70 backdrop-blur-[10.40px] flex items-center justify-center relative"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.alt}
                                    width={2030}
                                    height={200}
                                    className="object-contain w-full h-full z-50"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='space-y-12'>
                    <h2 className="text-center xl:w-[1000px] mx-auto justify-start text-black text-[30px] lg:text-[40px] font-bold font-['Archivo'] uppercase leading-[34px] md:leading-[47.70px]">
                        Why Microsoft Dynamics 365 Business Central is Perfect for SMEs
                    </h2>

                    {/* GUIDE VIDEO */}
                    <div className='mx-auto md:w-[80%] rounded-[15px]'>
                        <video
                            className='w-[100%] rounded-[15px] h-full object-cover'
                            src="/images/book-demo/book-demo-guide.webm"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedPartners;
