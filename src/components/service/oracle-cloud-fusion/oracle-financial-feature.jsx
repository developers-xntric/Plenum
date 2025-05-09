'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OrcaleFinancialFeature({ tabs,heading,para }) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="text-center bg-white pb-16 2xl:pb-20">
            {/* WRAPPER */}
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-16">
                {/* Headings */}
                <div className="space-y-6">
                    <h2 className="text-[30px] lg:text-[50px] leading-[34px] md:w-[480px] lg:w-[680px] mx-auto lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
                        {heading}
                    </h2>
                    <p className="text-secondary font-medium font-['Archivo'] sm:text-lg opacity-75 mx-auto md:w-[70%] lg:w-[55%] xl:max-w-[40%]">
                        {para}
                    </p>
                </div>

                <div>
                    {/* Tabs Section */}
                    <div className="flex justify-center items-center gap-4 md:gap-10 lg:gap-14 xl:gap-24 2xl:gap-0 mb-10 border-b-2 w-[90%] xl:max-w-[90%] mx-auto overflow-x-auto">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[15px] md:max-w-[20%] mx-auto lg:text-[19px] xl:text-[22px] flex-shrink-0 ${index === 0 ? "pl-[40rem] md:pl-[0rem] lg:pl-0" : ""} py-2 cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings ${activeTab === tab
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
                        {activeTab === tabs[0] && (
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
                                        <div className="space-y-3 lg:max-w-[80%] text-[14px] md:text-base">
                                            <h2 className="text-[25px] md:text-[28px] font-['Archivo'] leading-8 text-secondary font-semibold home-section-headings text-start">
                                                Accounting and Control
                                            </h2>
                                            <p className=" text-left text-secondary font-['Archivo'] opacity-75 font-semibold">
                                                Automate more than 80% of your financial processes, including accounting for intercompany tax, and transfer pricing journals. Eliminate manual effort, create more accurate tax reports, and close your books faster
                                            </p>
                                            <p className=" text-left text-secondary font-['Archivo'] opacity-75 font-semibold">
                                                Continually improve exception handling based on past actions and quickly identify issues that present business and audit risks.
                                            </p>
                                            <p className=" text-left text-secondary font-['Archivo'] opacity-75 font-semibold">
                                                Standardize your chart of accounts, business processes, data model, security and compliance controls to unify your business for coordinated decisions and action.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Accounting Hub' && (
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
                                    <h2 className="text-3xl  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold home-section-headings">
                                        Dynamics 365 CE/CRM solutions by Plenum
                                    </h2>
                                    <p className="text-secondary text-start font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                                        Plenum is a Microsoft Dynamics partner that offers cloud-based Dynamics 365 CE/CRM business solutions geared towards improving sales productivity through better-managed customer interactions. You can add value to your social media marketing, improve business intelligence, and manage your entire campaign all from one location.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Payables and Expenses' && (
                            <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                                <h2 className="text-3xl font-['Archivo'] text-secondary font-semibold">
                                    ERP Services in Qatar
                                </h2>
                                <p className="text-secondary font-['Archivo'] opacity-75 mt-4 max-w-md">
                                    Our Qatar team specializes in Microsoft Dynamics ERP and customized IT infrastructure for businesses.
                                </p>
                            </div>
                        )}

                        {activeTab === 'Receivable and cash' && (
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