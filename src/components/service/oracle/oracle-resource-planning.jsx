'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OracleResourcePlanning() {
    const [activeTab, setActiveTab] = useState('Financial Management');

    const tabs = ['Financial Management', 'Project Management', 'Procurement', 'ERP Analytics'];

    return (
        <div className="text-center py-16 bg-white">
            {/* WRAPPER */}
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-16">
                {/* Headings */}
                <div className="space-y-6">
                    <h1 className="text-[50px] leading-[55px] font-['Archivo'] text-secondary font-medium home-section-headings">
                        Oracle Fusion Cloud Enterprise

                        <span className="block text-[50px] leading-[55px] font-['Archivo'] text-secondary font-medium">
                            Resource Planning
                        </span>
                    </h1>
                    <p className="text-secondary font-['Archivo'] opacity-75 mx-auto w-[45%] xl:max-w-[40%]">
                        15+ years of experience in working with different Microsoft Dynamics ERPs, CRMs and Modules.
                    </p>
                </div>

                <div>
                    {/* Tabs Section */}
                    <div className="flex justify-center items-center mb-10 border-b-2 w-full max-w-[95%] mx-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[22px] w-full cursor-pointer font-['Archivo'] text-secondary font-medium home-section-headings ${activeTab === tab
                                    ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                                    : 'text-gray-400 '
                                    } focus:outline-none`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full h-[580px] mx-auto">
                        {activeTab === 'Financial Management' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
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
                                        <div className="space-y-3 max-w-[60%]">
                                            <h2 className="text-[28px] font-['Archivo'] leading-8 text-secondary font-medium home-section-headings text-start">
                                                Get a clear financial picture to make better decisions
                                            </h2>
                                            <p className=" text-left text-secondary font-['Archivo'] opacity-75 font-medium">
                                                Oracle Financial gives you a complete view of your financial position and results so you can respond
                                                quickly to an ever-changing business environment.
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xl font-medium text-start ">Features</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                                <div className="space-y-2 text-secondary font-['Archivo'] opacity-75">
                                                    <div className="flex items-start gap-2">
                                                        <div className="mt-0.5 h-5 w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Accounting hub</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <div className="mt-0.5 h-5 w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Reporting and analytics</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <div className="mt-0.5 h-5 w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Payables and Assets</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <div className="mt-0.5 h-5 w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Revenue Management</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2 text-secondary font-['Archivo'] opacity-75">
                                                    <div className="flex items-start gap-2">
                                                        <div className="mt-0.5 h-5 w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Collections</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <div className="mt-0.5 h-5 w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Expense management</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <div className="mt-0.5 h-5 w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
                                                        <span>Joint venture management</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <div className="mt-0.5 h-5 w-5 flex-none text-secondary font-['Archivo'] opacity-75">•</div>
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
                            <div className="flex flex-col md:flex-row gap-10 items-center justify-center ">
                                {/* Left Section - Image */}
                                <div className="w-full md:w-1/2 xl:w-[60%] p-4">
                                    <Image
                                        src="/images/service/microsoft-dynamics/microsoft-tab2.webp"
                                        alt="Analytics Dashboard"
                                        width={1000}
                                        height={1000}
                                        className="object-cover rounded-lg"
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

                        {activeTab === 'Procurement' && (
                            <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                                <h2 className="text-3xl font-['Archivo'] text-secondary font-medium">
                                    ERP Services in Qatar
                                </h2>
                                <p className="text-secondary font-['Archivo'] opacity-75 mt-4 max-w-md">
                                    Our Qatar team specializes in Microsoft Dynamics ERP and customized IT infrastructure for businesses.
                                </p>
                            </div>
                        )}

                        {activeTab === 'ERP Analytics' && (
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