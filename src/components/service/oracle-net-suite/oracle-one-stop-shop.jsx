'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OracleOneStopShop() {
    const [activeTab, setActiveTab] = useState('NetSuite Consultancy');

    const tabs = ['NetSuite Consultancy', 'NetSuite Implementation', 'NetSuite Integration', 'NetSuite Customization'];

    return (
        <div className="text-center py-16 bg-white">
            {/* WRAPPER */}
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-16">
                {/* Headings */}
                <div className="space-y-6">
                    <h1 className="text-[30px] lg:text-[50px] leading-[35px] md:w-[350px] lg:w-[550px] mx-auto lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
                        Trusted Oracle NetSuite Partners in the Region
                    </h1>
                    <p className="text-secondary font-['Archivo'] font-medium opacity-75 mx-auto md:w-[60%] lg:w-[35%] xl:max-w-[40%] 2xl:max-w-[30%]">
                        Whether you're looking for NetSuite consulting partners or full-service ERP support, we’ve got you covered.
                    </p>
                </div>

                <div>
                    {/* Tabs Section */}
                    <div className="flex justify-center items-center gap-10 md:gap-0 mb-10 border-b-2 w-full max-w-[95%] mx-auto overflow-x-auto">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[15px] lg:text-[19px] xl:text-[22px] px-0 md:px-10 xl:px-20 lg:w-full ${index === 0 ? "pl-[14rem] md:pl-[0rem] lg:pl-0" : ""} cursor-pointer pb-4 lg:leading-6 font-['Archivo'] text-secondary font-semibold home-section-headings ${activeTab === tab
                                    ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                                    : 'text-gray-400 '
                                    } focus:outline-none`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full  mx-auto">
                        {activeTab === 'NetSuite Consultancy' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                    {/* Image Section */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full aspect-[4/3]  overflow-hidden">
                                            <Image
                                                src="/images/service/oracle-net-suite/tab-1.png"
                                                alt="Financial dashboard with analytics charts and graphs"
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-col justify-center space-y-5 lg:space-y-10">
                                        <div className=" lg:max-w-[80%] space-y-5 lg:space-y-10">
                                            <h2 className="lg:text-[24px] xl:text-[28px] md:max-w-[50%] font-['Archivo'] leading-6 xl:leading-8 text-secondary font-semibold home-section-headings text-start">
                                                Unified Business Management
                                            </h2>
                                            <p className="text-left text-secondary font-['Archivo'] opacity-75 xl:w-[92%] 2xl:w-[84.5%]">
                                                Oracle NetSuite connects all core business functions—finance, CRM, inventory, HR, and eCommerce, into one cloud-based platform. This unified approach ensures data consistency, improves team collaboration, and eliminates the need for multiple disconnected tools.
                                            </p>
                                        </div>
                                        <button className='bg-[#FF6035] hover:bg-[#101010] cursor-pointer transition-all duration-500 w-[70%] md:w-[40%] lg:w-[60%] xl:w-1/2 text-white py-3 xl:py-4 px-2 xl:px-4 text-[11px] md:text-[15px] xl:text-base rounded-lg'>Explore our Implementation Services</button>

                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'NetSuite Implementation' && (
                            <div className="flex flex-col lg:flex-row  gap-5 lg:gap-10 items-center justify-center ">
                                {/* Left Section - Image */}
                                <div className="w-full lg:w-1/2 xl:w-[60%] md:p-4">
                                    <Image
                                        src="/images/service/microsoft-dynamics/microsoft-tab2.webp"
                                        alt="Analytics Dashboard"
                                        width={1000}
                                        height={1000}
                                        className="object-cover rounded-lg"
                                    />
                                </div>

                                {/* Right Section - Text */}
                                <div className="w-full lg:w-1/2 md:p-4 space-y-4">
                                    <h1 className="text-[28px] lg:text-3xl  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold home-section-headings">
                                        Dynamics 365 CE/CRM solutions by Plenum
                                    </h1>
                                    <p className="text-secondary text-start font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                                        Plenum is a Microsoft Dynamics partner that offers cloud-based Dynamics 365 CE/CRM business solutions geared towards improving sales productivity through better-managed customer interactions. You can add value to your social media marketing, improve business intelligence, and manage your entire campaign all from one location.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'NetSuite Integration' && (
                            <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                                <h2 className="md:text-3xl font-['Archivo'] text-secondary font-semibold">
                                    ERP Services in Qatar
                                </h2>
                                <p className="text-secondary font-['Archivo'] opacity-75 mt-4 max-w-md">
                                    Our Qatar team specializes in Microsoft Dynamics ERP and customized IT infrastructure for businesses.
                                </p>
                            </div>
                        )}

                        {activeTab === 'NetSuite Customization' && (
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