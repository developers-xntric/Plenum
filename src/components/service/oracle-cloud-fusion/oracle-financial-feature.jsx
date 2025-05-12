'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OrcaleFinancialFeature({ tabs, heading, para }) {
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
                    <div className="flex justify-center items-center gap-4 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-0 mb-10 border-b-2 w-[90%] xl:max-w-[90%] mx-auto overflow-x-auto">
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
                                            <h2 className="text-[25px] md:text-[28px] font-['Archivo'] leading-8 text-secondary font-semibold h text-start">
                                                Real-time Financial Reporting
                                            </h2>

                                            <p className=" text-left text-secondary font-['Archivo'] opacity-75 font-semibold">
                                                Oracle Fusion Cloud delivers real-time insights into financial data, enabling businesses to generate accurate reports instantly. This ensures that decision-makers have access to the most up-to-date financial information to make informed choices quickly.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Automated Invoice Processing' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                    {/* Image Section */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full aspect-[4/3]  overflow-hidden">
                                            <Image
                                                src="/service/OCF/tab2.png"
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
                                            <h2 className="text-[25px] md:text-[28px] font-['Archivo'] leading-8 text-secondary font-semibold h text-start">
                                                Automated Invoice Processing
                                            </h2>

                                            <p className=" text-left text-secondary font-['Archivo'] opacity-75 font-semibold">
                                                The platform automated invoice processing, reducing the time spent on manual tasks and minimizing human error. With automated workflows, businesses can process and track invoices more efficiently, improving cash flow and vendor relationships.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Budgeting and Forecasting Tools' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                    {/* Image Section */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full aspect-[4/3]  overflow-hidden">
                                            <Image
                                              src="/service/OCF/tab3.png"
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
                                            <h2 className="text-[25px] md:text-[28px] font-['Archivo'] leading-8 text-secondary font-semibold h text-start">
                                                Budgeting and Forecasting Tools
                                            </h2>

                                            <p className=" text-left text-secondary font-['Archivo'] opacity-75 font-semibold">
                                                Oracle Fusion Cloud provides advanced budgeting and forecasting features, allowing businesses to plan for the future with greater accuracy. By analyzing historical data and trends, organizations can create more reliable financial projections and allocate resources effectively.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Integrated Financial Management' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                    {/* Image Section */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full aspect-[4/3]  overflow-hidden">
                                            <Image
                                                 src="/service/OCF/tab4.png"
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
                                            <h2 className="text-[25px] md:text-[28px] font-['Archivo'] leading-8 text-secondary font-semibold h text-start">
                                                Integrated Financial Management
                                            </h2>

                                            <p className=" text-left text-secondary font-['Archivo'] opacity-75 font-semibold">
                                               With integrated financial management, businesses can seamlessly connect all financial processes across the enterprise, from accounts payable to general ledger. This integration improves accuracy, efficiency, and consistency, ensuring financial data is always aligned with business operations.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}