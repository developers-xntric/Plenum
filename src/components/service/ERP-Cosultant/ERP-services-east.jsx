'use client'; // Since we'll use state for tabs, this needs to be a client component

import Image from 'next/image';
import { useState } from 'react';

export default function ERPServicesEast() {
  const [activeTab, setActiveTab] = useState('United Arab Emirates');

  const tabs = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Egypt", "United Kingdom"]

  // Map of tab content with images and text
  const tabContent = {
    "United Arab Emirates": {
      image: "/images/service/ERP-consulting/uae-image.webp",
      title: "ERP Services in United Arab Emirates",
      description:
        "We deliver comprehensive ERP solutions in the UAE, helping businesses transform their operations with cutting-edge technology.",
    },
    "Saudi Arabia": {
      image: "/images/service/ERP-consulting/saudi-image.webp",
      title: "ERP Services in Saudi Arabia",
      description:
        "We provide tailored ERP solutions in Saudi Arabia, focusing on scalability and integration with local business needs.",
    },
    Qatar: {
      image: "/images/service/ERP-consulting/qatar-image.webp",
      title: "ERP Services in Qatar",
      description:
        "Our Qatar team specializes in Microsoft Dynamics ERP and customized IT infrastructure for businesses.",
    },
    Egypt: {
      image: "/images/service/ERP-consulting/egypt-image.webp",
      title: "ERP Services in Egypt",
      description:
        "Our ERP solutions in Egypt are designed to meet the unique challenges of the local market and regulatory requirements.",
    },
    "United Kingdom": {
      image: "/images/service/ERP-consulting/uk-image.webp",
      title: "ERP Services in United Kingdom",
      description:
        "We offer advanced ERP implementation and consulting services across the UK, helping businesses achieve digital transformation.",
    },
  }

  return (
    <div className="text-center py-16 bg-white">
      {/* WRAPPER */}
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-10 md:space-y-16">
        {/* Headings */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[40px] md:leading-[50px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
          ERP Consulting and Implementation 
            <span className="block text-[30px] md:text-[40px] lg:text-[50px] leading-[34px] md:leading-[50px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold">
            in the Middle East
            </span>
          </h2>
          <p className="text-secondary font-medium font-['Archivo'] opacity-75 mx-auto md:w-[75%] lg:w-[60%] xl:max-w-[50%]">
          Our ERP implementation experts provide the strategic guidance and technical expertise needed to modernize operations, increase efficiency, and achieve long-term success.
          </p>
        </div>

        <div>
          {/* Tabs Section */}
          <div className="flex justify-center items-center gap-16 sm:gap-1 xl:gap-1 mb-10 border-b-2 w-full sm:max-w-[85%] mx-auto overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[15px] lg:text-[22px] w md:w-[33%]  xl:w-[33%] flex-shrink-0 ${index === 0 ? "pl-[10rem] md:pl-[0rem] lg:pl-0" : ""} py-2 cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings ${activeTab === tab
                  ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                  : 'text-gray-400'
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

            {activeTab === 'United Arab Emirates' && (
              <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                <h2 className=" md:text-3xl font-['Archivo'] text-secondary font-semibold">
                  ERP Services in Saudi Arabia
                </h2>
                <p className="text-secondary font-['Archivo'] opacity-75 mt-4 max-w-md">
                  We provide tailored ERP solutions in Saudi Arabia, focusing on scalability and integration with local business needs.
                </p>
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
            {activeTab === 'Egypt' && (
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