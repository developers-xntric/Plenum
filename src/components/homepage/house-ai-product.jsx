"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HouseAIProduct() {
  const processRef = useRef(null);
  const optimizationRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true });
  const isOptimizationInView = useInView(optimizationRef, { once: true });

  return (
    <section className="py-12 bg-white ">
      <div className="2xl:max-w-[1440px] mx-auto w-[90%] space-y-12">
        <div className='space-y-5'>
          <h2 className="text-[50px] leading-[55px] font-['Archivo'] text-secondary font-medium home-section-headings">Our In house AI Product</h2>
          <p className="text-secondary font-['Archivo'] opacity-75 lg:max-w-[70%] xl:max-w-[52%]">
            Plenum isn't just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/house-ai-product/smoke.webp"
              width={400}
              height={400}
              alt="Smoke Background"
              className="w-full h-full object-cover absolute inset-0 z-30"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black opacity-90 to-gray-950 z-20" />


            {/* Momentum AI Card */}
            <div className="text-white p-7 pb-0 xl:h-80 rounded-2xl space-y-6 relative z-50">
              <div className='space-y-2'>
                <div className="flex justify-between items-start ">
                  <h3 className="text-3xl font-medium font-['Archivo']">Momentum AI</h3>
                  <Link href="#" className="text-primary flex items-center gap-2 underline underline-offset-4 cursor-pointer z-40 ">View Product
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M0.9375 10.214L9.67107 1.48047M9.67107 1.48047H0.9375M9.67107 1.48047V10.214" stroke="#FF6035" strokeWidth="1.74671" />
                    </svg>
                  </Link>
                </div>
                <p className="text-[13px] text-white font-['Archivo'] lg:max-w-[80%] xl:w-[60%]">
                  Plenum isn’t just another ERP provider; we embed AI into your systems to deliver actionable insights.
                </p>
              </div>

              <div className="flex justify-center items-center ">
                {/*  A Chart  */}
                <Image
                  src="/images/house-ai-product/momentum-graph.png"
                  width={300}
                  height={100}
                  alt="Smoke Background"
                  className="w-full h-44 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Vertical Builds Card */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/house-ai-product/smoke.webp"
              width={400}
              height={400}
              alt="Smoke Background"
              className="w-full h-full object-cover absolute inset-0 z-30"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black opacity-90 to-gray-950 z-20" />


            <div className="text-white p-7 h-full rounded-2xl shadow-xl space-y-6  relative z-50">
              <div className='space-y-2'>
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-medium font-['Archivo']">Vertical builds</h3>
                  <Link href="#" className="text-primary flex items-center gap-2 underline underline-offset-4 cursor-pointer z-20">View Product
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M0.9375 10.214L9.67107 1.48047M9.67107 1.48047H0.9375M9.67107 1.48047V10.214" stroke="#FF6035" strokeWidth="1.74671" />
                    </svg>
                  </Link>
                </div>
                <p className="text-[13px] text-white font-['Archivo'] lg:max-w-[80%] xl:w-[60%]">
                  Plenum isn’t just another ERP provider; we embed AI into your systems to deliver actionable insights.
                </p>
              </div>
              <div className='flex items-center justify-center '>
                <div className="space-y-3 w-[55%]">
                  <div className='space-y-2'>
                    <p className="text-sm font-['Archivo']">Process</p>
                    <div ref={processRef} className="bg-[#dbdbdb] rounded-full h-8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isProcessInView ? '100%' : 0 }}
                        transition={{ duration: 1.2 }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <p className="text-sm font-['Archivo']">Optimization</p>
                    <div ref={optimizationRef} className="bg-gray-300 rounded-full h-8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isOptimizationInView ? '100%' : 0 }}
                        transition={{ duration: 1.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
