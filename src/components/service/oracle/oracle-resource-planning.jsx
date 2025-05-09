'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OracleResourcePlanning() {
    const [activeTab, setActiveTab] = useState('Seamless Service Integration');

    const tabs = ['Seamless Service Integration', 'Connected Cloud Platforms', 'Real-time Financial Insights', 'Tailored Workflow Automation'];

    return (
        <div className="text-center pb-6 pt-16 bg-white">
            {/* WRAPPER */}
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-8 lg:space-y-16">
                {/* Headings */}
                <div className="space-y-6">
                    <h2 className="text-[30px] lg:text-[50px] leading-[34px] md:w-[480px] lg:w-[680px] mx-auto lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
                        Oracle ERP Services For Best of Both Worldsing

                        {/* <span className="block text-[34px] lg:text-[50px] leading-[34px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold">
                            Resource Planning
                        </span> */}
                    </h2>
                    <p className="text-secondary font-medium font-['Archivo'] sm:text-lg opacity-75 mx-auto lg:w-[70%]  xl:max-w-[60%]">
                        Plenum's proprietary method seamlessly aligns with Oracle ERP Cloud, ideal for businesses seeking flexible integration and future-ready solutions.
                    </p>
                </div>

                <div>
                    {/* Tabs Section */}
                    <div className="flex justify-center items-center gap-5 md:gap-5 lg:gap-5 xl:gap-8 2xl:gap-10 mb-10 border-b-2 w-full xl:max-w-[95vw] 2xl:max-w-[92%] mx-auto overflow-x-auto xl:overflow-x-hidden">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[15px] lg:text-[22px] flex-shrink-0 ${index === 0 ? "pl-[34rem] md:pl-[10rem] lg:pl-14" : ""} py-2 cursor-pointer pb-4 font-['Archivo'] text-secondary font-semibold home-section-headings ${activeTab === tab
                                    ? 'text-[#FF6035] border-b-2 border-[#FF6035]'
                                    : 'text-gray-400'
                                    } focus:outline-none`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    {/* src="/images/service/oracle/tab1.png" */}
                    {/* Tab Content */}
                    <div className="w-full  mx-auto">
                        {activeTab === 'Seamless Service Integration' && (
                            <div className="w-full ">
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center justify-center ">
                                    {/* Left Section - Image */}
                                    <div className="w-full lg:w-1/2 xl:w-[60%] lg:p-4">
                                        <Image
                                            src="/images/service/oracle/tab1.png"
                                            alt="Analytics Dashboard"
                                            width={1000}
                                            height={1000}
                                            className="object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Right Section - Text */}
                                    <div className="w-full lg:w-1/2 lg:p-4 space-y-4">
                                        <h1 className="text-[25px] lg:text-[28px]  text-start lg:max-w-[80%] 2xl:max-w-[60%] font-['Archivo'] text-secondary font-semibold home-section-headings">
                                        Seamless Service Integration
                                        </h1>
                                        <p className="text-secondary text-start font-['Archivo'] opacity-75 w-[45% xl:max-w-[85%] ">
                                        Unify your business functions with Oracle ERP's seamless service integration. Break down data silos and connect departments effortlessly across your enterprise. Experience smoother workflows and enhanced productivity from end to end.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )}

                        {activeTab === 'Connected Cloud Platforms' && (
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

                        {activeTab === 'Real-time Financial Insights' && (
                            <div className="flex flex-col items-center justify-center h-full bg-gray-100">
                                <h2 className="text-3xl font-['Archivo'] text-secondary font-semibold">
                                    ERP Services in Qatar
                                </h2>
                                <p className="text-secondary font-['Archivo'] opacity-75 mt-4 max-w-md">
                                    Our Qatar team specializes in Microsoft Dynamics ERP and customized IT infrastructure for businesses.
                                </p>
                            </div>
                        )}

                        {activeTab === 'Tailored Workflow Automation' && (
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