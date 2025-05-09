'use client'; // Since we'll use state for tabs, this needs to be a client component

import Image from 'next/image';
import { useState } from 'react';
import TabImageGallery from './Tabs-images';
export default function ERPServicesEast() {
  // const [activeTab, setActiveTab] = useState('United Arab Emirates');

  // const tabs = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Egypt", "United Kingdom"]

  // Map of tab content with images and text
  // const tabContent = {
  //   "United Arab Emirates": {
  //     image: "/images/service/ERP-consulting/uae-image.webp",
  //     title: "ERP Services in United Arab Emirates",
  //     description:
  //       "We deliver comprehensive ERP solutions in the UAE, helping businesses transform their operations with cutting-edge technology.",
  //   },
  //   "Saudi Arabia": {
  //     image: "/images/service/ERP-consulting/saudi-image.webp",
  //     title: "ERP Services in Saudi Arabia",
  //     description:
  //       "We provide tailored ERP solutions in Saudi Arabia, focusing on scalability and integration with local business needs.",
  //   },
  //   Qatar: {
  //     image: "/images/service/ERP-consulting/qatar-image.webp",
  //     title: "ERP Services in Qatar",
  //     description:
  //       "Our Qatar team specializes in Microsoft Dynamics ERP and customized IT infrastructure for businesses.",
  //   },
  //   Egypt: {
  //     image: "/images/service/ERP-consulting/egypt-image.webp",
  //     title: "ERP Services in Egypt",
  //     description:
  //       "Our ERP solutions in Egypt are designed to meet the unique challenges of the local market and regulatory requirements.",
  //   },
  //   "United Kingdom": {
  //     image: "/images/service/ERP-consulting/uk-image.webp",
  //     title: "ERP Services in United Kingdom",
  //     description:
  //       "We offer advanced ERP implementation and consulting services across the UK, helping businesses achieve digital transformation.",
  //   },
  // }

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
        <TabImageGallery/>

        
      </div>
    </div>
  );
}