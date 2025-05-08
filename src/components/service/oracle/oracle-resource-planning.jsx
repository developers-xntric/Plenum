'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OracleResourcePlanning() {
    const [activeTab, setActiveTab] = useState('Financial Management');

    const tabs = ['Financial Management', 'Project Management', 'Procurement', 'ERP Analytics'];

    return (
        <div className="text-center pt-16 bg-white">
            {/* WRAPPER */}
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-8 lg:space-y-16">
                {/* Headings */}
                <div className="space-y-6">
                    <h2 className="text-[30px] lg:text-[50px] leading-[34px] md:w-[480px] lg:w-[680px] mx-auto lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
                        Oracle Fusion Cloud Enterprise Resource Planning

                        {/* <span className="block text-[34px] lg:text-[50px] leading-[34px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold">
                            Resource Planning
                        </span> */}
                    </h2>
                    <p className="text-secondary font-medium font-['Archivo'] sm:text-lg opacity-75 mx-auto md:w-[70%] lg:w-[55%] xl:max-w-[40%]">
                        15+ years of experience in working with different Microsoft Dynamics ERPs, CRMs and Modules.
                    </p>
                </div>

                <div>
                    {/* Tabs Section */}
                    <div className="flex justify-center items-center gap-5 md:gap-14 lg:gap-14 xl:gap-32 2xl:gap-44 mb-10 border-b-2 w-full xl:max-w-[90%] mx-auto overflow-x-auto">
                        {tabs.map((tab,index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[15px] lg:text-[22px] flex-shrink-0 ${index === 0 ? "pl-[16rem] md:pl-[2rem] lg:pl-0" : ""} py-2 cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings ${activeTab === tab
                                        ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                                        : 'text-gray-400'
                                    } focus:outline-none`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full  mx-auto">
                        {activeTab === 'Financial Management' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                    {/* Image Section */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full aspect-[4/3]  overflow-hidden">
                                            <Image
                                                src="/images/service/oracle/tab1.png"
                                                alt="Financial dashboard with analytics charts and graphs"
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-col justify-center space-y-6">
                                        <div className="space-y-3 xl:max-w-[60%]">
                                            <h2 className="text-[25px] lg:text-[28px] font-['Archivo'] leading-8 text-secondary font-semibold home-section-headings text-start">
                                                Get a clear financial picture to make better decisions
                                            </h2>
                                            <p className="text-[14px] lg:text-base text-left text-secondary font-['Archivo'] opacity-75 font-semibold">
                                                Oracle Financial gives you a complete view of your financial position and results so you can respond
                                                quickly to an ever-changing business environment.
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="md:text-xl font-semibold text-start ">Features</h3>
                                            <div className="grid grid-cols-2 md:gap-x-6 md:gap-y-2">
                                                <div className="space-y-2 text-secondary font-['Archivo'] opacity-75">
                                                    <div className="flex items-start md:gap-2 text-[13.5px] md:text-base">
                                                        <div className="mt-0.5 h-3 md:h-5 w-3 md:w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Accounting hub</span>
                                                    </div>
                                                    <div className="flex items-start md:gap-2 text-[13.5px] md:text-base">
                                                        <div className="mt-0.5 h-3 md:h-5 w-3 md:w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Reporting and analytics</span>
                                                    </div>
                                                    <div className="flex items-start md:gap-2 text-[13.5px] md:text-base">
                                                        <div className="mt-0.5 h-3 md:h-5 w-3 md:w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Payables and Assets</span>
                                                    </div>
                                                    <div className="flex items-start  md:gap-2 text-[13.5px] md:text-base">
                                                        <div className="mt-0.5 h-3 md:h-5 w-3 md:w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Revenue Management</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2 text-secondary font-['Archivo'] opacity-75">
                                                    <div className="flex items-start  md:gap-2 text-[13.5px] md:text-base">
                                                        <div className="mt-0.5 h-3 md:h-5 w-3 md:w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Collections</span>
                                                    </div>
                                                    <div className="flex items-start  md:gap-2 text-[13.5px] md:text-base">
                                                        <div className="mt-0.5 h-3 md:h-5 w-3 md:w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Expense management</span>
                                                    </div>
                                                    <div className="flex items-start  md:gap-2 text-[13.5px] md:text-base">
                                                        <div className="mt-0.5 h-3 md:h-5 w-3 md:w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Joint management</span>
                                                    </div>
                                                    <div className="flex items-start  md:gap-2 text-[13.5px] md:text-base">
                                                        <div className="mt-0.5 h-3 md:h-5 w-3 md:w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Receivables</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Project Management' && (
                            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center justify-center ">
                                {/* Left Section - Image */}
                                <div className="w-full lg:w-1/2 xl:w-[60%] lg:p-4">
                                    <Image
                                        src="/images/service/microsoft-dynamics/microsoft-tab2.webp"
                                        alt="Analytics Dashboard"
                                        width={1000}
                                        height={1000}
                                        className="object-cover rounded-lg"
                                    />
                                </div>

                                {/* Right Section - Text */}
                                <div className="w-full lg:w-1/2 lg:p-4 space-y-4">
                                    <h1 className="text-[25px] lg:text-[28px]  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold home-section-headings">
                                        Dynamics 365 CE/CRM solutions by Plenum
                                    </h1>
                                    <p className="text-secondary text-start font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                                        Plenum is a Microsoft Dynamics partner that offers cloud-based Dynamics 365 CE/CRM business solutions geared towards improving sales productivity through better-managed customer interactions. You can add value to your social media marketing, improve business intelligence, and manage your entire campaign all from one location.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Procurement' && (
                            <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                                <h2 className="text-3xl font-['Archivo'] text-secondary font-semibold">
                                    ERP Services in Qatar
                                </h2>
                                <p className="text-secondary font-['Archivo'] opacity-75 mt-4 max-w-md">
                                    Our Qatar team specializes in Microsoft Dynamics ERP and customized IT infrastructure for businesses.
                                </p>
                            </div>
                        )}

                        {activeTab === 'ERP Analytics' && (
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