import Image from 'next/image'
import React from 'react'

const CaseDetailHero = () => {
    return (
        <div className='bg-cover bg-no-repeat' style={{ backgroundImage: "url('/casestudy/casestudy-hero1.png')" }}>
            <div className="2xl:max-w-[1440px] w-[85%] mx-auto space-y-20 py-16 xl:py-24 h-screen 2xl:h-[900px]">

                <div className="container mx-auto md:px-4 pt-20 md:pt-40">
                    <div className="mb-6">
                        <button className="px-6 py-1 text-white text-lg bg-[rgba(114, 114, 114, 0.50)] hover:bg-white/30 border border-white/70 rounded-full transition-colors font-[Archivo] font-medium ">
                            Healthcare
                        </button>
                    </div>

                    <h1 className="text-[30px] md:text-5xl lg:text-6xl tracking-[-1px] leading-[35px] md:tracking-[-2.954px] md:leading-[64px] text-white mb-4 md:max-w-xl font-semibold font-['Chakra'] ">
                        Turn soft solutions into real results
                    </h1>

                    <p className="text-white opacity-60 md:max-w-[480px] text-[15px] md:text-xl font-normal font-['Archivo'] ">
                        At Plenum Technologies, we offer cutting-edge AI software platforms tailored to empower data engineers,
                        scientists, analysts, and automation engineers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CaseDetailHero
