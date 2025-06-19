'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function MicrosoftDynamicPartner() {
  const [activeTab, setActiveTab] = useState('Dynamics ERP Solutions');

  const tabs = ['Modular Solutions', 'Dynamics ERP Solutions', 'Dynamics 365 CE/CRM'];

  return (
    <div className="text-center py-16 bg-white">
      {/* WRAPPER */}
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-16">
        {/* Headings */}
        <div className="space-y-6">
          <h2 className="text-[30px] lg:text-[50px] leading-[34px] lg:leading-[55px] sm:w-[400px] lg:w-[700px] mx-auto text-center font-['Archivo'] text-secondary font-semibold home-section-headings">
            Your Trusted Microsoft Dynamics Partner
            {/* <span className="block text-[30px] lg:text-[50px] leading-[34px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold">
              with Diverse Expertise
            </span> */}
          </h2>
          <p className="text-secondary font-medium font-['Archivo'] sm:text-lg opacity-75 mx-auto  lg:w-[70%] xl:max-w-[50%]">
            With over 15 years of hands-on experience, Plenum specializes in delivering tailored solutions across the Microsoft Dynamics ecosystem, including ERPs, CRMs, industry-specific modules, and advanced analytics dashboards.
          </p>
        </div>

        <div>
          {/* Tabs Section */}
          <div className="flex justify-center items-center gap-12 sm:gap-1 xl:gap-1 mb-10 border-b-2 w-full sm:max-w-[90%] mx-auto overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[15px] lg:text-[22px] w md:w-[33%]  xl:w-[33%] flex-shrink-0 ${index === 0 ? "pl-[17rem] md:pl-[0rem] lg:pl-0" : ""} py-2 cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings ${activeTab === tab
                  ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                  : 'text-gray-400'
                  } focus:outline-none`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full h-[80%] md:h-[90vh] lg:h-[40vh]  xl:h-[450px] 2xl:h-[580px] mx-auto">
            {activeTab === 'Modular Solutions' && (
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center ">
                {/* Left Section - Image */}
                <div className="w-full lg:w-1/2 xl:w-[60%] lg:p-4">
                  <Image
                    src="/images/service/microsoft-dynamics/image.svg"
                    alt="Analytics Dashboard"
                    width={1000}
                    height={1000}
                    className="object-cover "
                    priority  // ✅ Forces early preload
                    fetchPriority="high"
                  />
                </div>

                { }
                <div className="w-full lg:w-1/2 lg:p-4 space-y-4">
                  <h3 className="text-[25px] md:text-3xl  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold opacity-95">
                    Modular Solutions
                  </h3>
                  <p className="text-secondary text-start font-medium font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                    Customize your Microsoft Dynamics setup with industry-specific modules tailored to your needs. Achieve greater flexibility, faster deployment, and targeted functionality that grows with your business.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Dynamics ERP Solutions' && (
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
                  <h3 className="text-[25px] md:text-3xl  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold opacity-95">
                    Dynamics ERP Solutions
                  </h3>
                  <p className="text-secondary text-start font-medium font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                    Streamline core business operations with powerful, scalable ERP systems. Enhance productivity, unify departments, and make smarter decisions with real-time data and automation.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Dynamics 365 CE/CRM' && (
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center ">
                {/* Left Section - Image */}
                <div className="w-full lg:w-1/2 xl:w-[60%] lg:p-4">
                  <Image
                    src="/images/service/microsoft-dynamics/image-1.svg"
                    alt="Analytics Dashboard"
                    width={1000}
                    height={1000}
                    className="object-cover "
                  />
                </div>

                {/* Right Section - Text */}
                <div className="w-full lg:w-1/2 lg:p-4 space-y-4">
                  <h3 className="text-[25px] md:text-3xl  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold opacity-95">
                    Dynamics 365 CE/CRM
                  </h3>
                  <p className="text-secondary text-start font-medium font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                    Boost customer engagement and sales performance with intelligent CRM tools tailored to your business. Track leads, manage relationships, and deliver personalized experiences across every touchpoint.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}