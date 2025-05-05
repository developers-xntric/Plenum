'use client'; // Since we'll use state for tabs, this needs to be a client component

import Image from 'next/image';
import { useState } from 'react';

export default function ERPServicesEast() {
  const [activeTab, setActiveTab] = useState('United Arab Emirates');

  const tabs = ['United Arab Emirates', 'Saudi Arabia', 'Qatar'];

  return (
    <div className="text-center py-16 bg-white">
      {/* WRAPPER */}
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-10 md:space-y-16">
        {/* Headings */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[40px] md:leading-[50px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
            Plenum ERP Services{' '}
            <span className="block text-[30px] md:text-[40px] lg:text-[50px] leading-[34px] md:leading-[50px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold">
              in Middle East
            </span>
          </h2>
          <p className="text-secondary font-medium font-['Archivo'] opacity-75 mx-auto md:w-[75%] lg:w-[60%] xl:max-w-[50%]">
            Our services include a wide variety of areas, including ERP solutions,
            Microsoft Dynamics ERP services, customized IT infrastructure services.
          </p>
        </div>

        <div>
          {/* Tabs Section */}
          <div className="flex justify-center items-center lg:gap-10 xl:gap-52 mb-5 border-b-2 lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] md:text-[22px] w-full cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings ${
                  activeTab === tab
                    ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                    : 'text-gray-400 '
                } focus:outline-none`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full h-[40vh]  md:h-[60vh]  xl:h-[580px] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
            {activeTab === 'United Arab Emirates' && (
              <div className="relative w-full h-full">
                <Image
                  src="/images/service/ERP-consulting/1st-tab-image.webp"
                  alt="Dubai Skyline with Burj Khalifa"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-16 md:w-24 h-16 md:h-24 flex items-center justify-center text-lg cursor-pointer font-['Archivo']">
                  Play
                </button>
              </div>
            )}

            {activeTab === 'Saudi Arabia' && (
              <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                <h2 className=" md:text-3xl font-['Archivo'] text-secondary font-semibold">
                  ERP Services in Saudi Arabia
                </h2>
                <p className="text-secondary font-['Archivo'] opacity-75 mt-4 max-w-md">
                  We provide tailored ERP solutions in Saudi Arabia, focusing on scalability and integration with local business needs.
                </p>
              </div>
            )}

            {activeTab === 'Qatar' && (
              <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                <h2 className="md:text-3xl font-['Archivo'] text-secondary font-semibold">
                  ERP Services in Qatar
                </h2>
                <p className="text-secondary font-['Archivo'] opacity-75 mt-4 max-w-md">
                  Our Qatar team specializes in Microsoft Dynamics ERP and customized IT infrastructure for businesses.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}