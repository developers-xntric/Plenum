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
          <h1 className="text-[30px] lg:text-[50px] leading-[34px] lg:leading-[55px] sm:w-[400px] lg:w-[700px] mx-auto text-center font-['Archivo'] text-secondary font-semibold home-section-headings">
            Microsoft Dynamics Partner with Diverse Expertise
            {/* <span className="block text-[30px] lg:text-[50px] leading-[34px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold">
              with Diverse Expertise
            </span> */}
          </h1>
          <p className="text-secondary font-medium font-['Archivo'] sm:text-lg opacity-75 mx-auto md:w-[70%] lg:w-[55%] xl:max-w-[40%]">
            15+ years of experience in working with different Microsoft Dynamics ERPs, CRMs and Modules.
          </p>
        </div>

        <div>
          {/* Tabs Section */}
          <div className="flex justify-center items-center gap-16 sm:gap-1 xl:gap-1 mb-10 border-b-2 w-full sm:max-w-[90%] mx-auto overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[15px] lg:text-[22px] w md:w-[33%]  xl:w-[33%] flex-shrink-0 ${index === 0 ? "pl-[15rem] md:pl-[0rem] lg:pl-0" : ""} py-2 cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings ${activeTab === tab
                  ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                  : 'text-gray-400'
                  } focus:outline-none`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full h-[80vh] md:h-[90vh] lg:h-[40vh]  xl:h-[450px] 2xl:h-[580px] mx-auto">
            {activeTab === 'Dynamics ERP' && (
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center ">
                {/* Left Section - Image */}
                <div className="w-full lg:w-1/2 xl:w-[60%] lg:p-4">
                  <Image
                    src="/images/service/microsoft-dynamics/microsoft-tab2.webp"
                    alt="Analytics Dashboard"
                    width={1000}
                    height={1000}
                    className="object-cover "
                  />
                </div>

                {/* Right Section - Text */}
                <div className="w-full lg:w-1/2 lg:p-4 space-y-4">
                  <h2 className="text-[25px] md:text-3xl  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold opacity-95">
                    Dynamics 365 CE/CRM solutions by Plenum
                  </h2>
                  <p className="text-secondary text-start font-medium font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                    Plenum is a Microsoft Dynamics partner that offers cloud-based Dynamics 365 CE/CRM business solutions geared towards improving sales productivity through better-managed customer interactions. You can add value to your social media marketing, improve business intelligence, and manage your entire campaign all from one location.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Dynamics 365 CE/CRM' && (
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center ">
                {/* Left Section - Image */}
                <div className="w-full lg:w-1/2 xl:w-[60%] lg:p-4">
                  <Image
                    src="/images/service/microsoft-dynamics/microsoft-tab2.webp"
                    alt="Analytics Dashboard"
                    width={1000}
                    height={1000}
                    className="object-cover "
                  />
                </div>

                {/* Right Section - Text */}
                <div className="w-full lg:w-1/2 lg:p-4 space-y-4">
                  <h2 className="text-3xl  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold opacity-95">
                    Dynamics 365 CE/CRM solutions by Plenum
                  </h2>
                  <p className="text-secondary text-start font-medium font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                    Plenum is a Microsoft Dynamics partner that offers cloud-based Dynamics 365 CE/CRM business solutions geared towards improving sales productivity through better-managed customer interactions. You can add value to your social media marketing, improve business intelligence, and manage your entire campaign all from one location.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Dynamics Modules' && (
              <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                <h2 className="text-3xl font-['Archivo'] text-secondary font-semibold">
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