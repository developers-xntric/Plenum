'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function MicrosoftDynamicPartner() {
  const [activeTab, setActiveTab] = useState('Dynamics 365 CE/CRM');

  const tabs = ['Dynamics ERP', 'Dynamics 365 CE/CRM', 'Dynamics Modules'];

  return (
    <div className="text-center py-16 bg-white">
      {/* WRAPPER */}
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-16">
        {/* Headings */}
        <div className="space-y-6">
          <h1 className="text-[50px] leading-[55px] font-['Archivo'] text-secondary font-medium home-section-headings">
            Microsoft Dynamics Partner{' '}
            <span className="block text-[50px] leading-[55px] font-['Archivo'] text-secondary font-medium">
              with Diverse Expertise
            </span>
          </h1>
          <p className="text-secondary font-['Archivo'] opacity-75 mx-auto w-[45%] xl:max-w-[40%]">
            15+ years of experience in working with different Microsoft Dynamics ERPs, CRMs and Modules.
          </p>
        </div>

        <div>
          {/* Tabs Section */}
          <div className="flex justify-center items-center mb-10 border-b-2 w-full max-w-[90%] mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[22px] w-full cursor-pointer pb-4 font-['Archivo'] text-secondary font-medium home-section-headings ${activeTab === tab
                    ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                    : 'text-gray-400 '
                  } focus:outline-none`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full h-[60vh]  xl:h-[580px] mx-auto">
            {activeTab === 'Dynamics ERP' && (
              <div className="relative w-full h-full">
                <Image
                  src="/images/service/ERP-consulting/1st-tab-image.webp"
                  alt="Dubai Skyline with Burj Khalifa"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-lg cursor-pointer font-['Archivo']">
                  Play
                </button>
              </div>
            )}

            {activeTab === 'Dynamics 365 CE/CRM' && (
              <div className="flex flex-col md:flex-row gap-10 items-center justify-center ">
                {/* Left Section - Image */}
                <div className="w-full md:w-1/2 xl:w-[60%] p-4">
                  <Image
                    src="/images/service/microsoft-dynamics/microsoft-tab2.webp" 
                    alt="Analytics Dashboard"
                    width={1000}
                    height={1000}
                    className="object-cover "
                  />
                </div>

                {/* Right Section - Text */}
                <div className="w-full md:w-1/2 p-4 space-y-4">
                  <h1 className="text-3xl  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-medium home-section-headings">
                  Dynamics 365 CE/CRM solutions by Plenum
                  </h1>
                  <p className="text-secondary text-start font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                    Plenum is a Microsoft Dynamics partner that offers cloud-based Dynamics 365 CE/CRM business solutions geared towards improving sales productivity through better-managed customer interactions. You can add value to your social media marketing, improve business intelligence, and manage your entire campaign all from one location.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Dynamics Modules' && (
              <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                <h2 className="text-3xl font-['Archivo'] text-secondary font-medium">
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