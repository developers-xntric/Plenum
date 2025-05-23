'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function OracleOneStopShop() {
    const [activeTab, setActiveTab] = useState('Unified Business Management');

    const tabs = ['Unified Business Management', 'Real-Time Visibility and Analytics', 'Scalable and Flexible Cloud ERP', 'Automation and Efficiency'];

    return (
        <div className="text-center py-16 bg-white">
            {/* WRAPPER */}
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-16">
                {/* Headings */}
                <div className="space-y-6">
                    <h2 className="text-[30px] lg:text-[50px] leading-[35px] md:w-[350px] lg:w-[550px] mx-auto lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
                        Trusted Oracle NetSuite Partners in the Region
                    </h2>
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
                                className={`text-[15px] lg:text-[19px] xl:text-[22px] px-0 md:px-5 xl:px-10 lg:w-full ${index === 0 ? "pl-[14rem] md:pl-[0rem] lg:pl-0" : ""} cursor-pointer pb-4 lg:leading-6 font-['Archivo'] text-secondary font-semibold home-section-headings ${activeTab === tab
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
                        {activeTab === 'Unified Business Management' && (
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
                                                Streamline operations with automated workflows, approvals, and data entries. NetSuite reduces manual processes, minimizes errors, and boosts overall productivity—so your team can focus on strategy instead of routine tasks.
                                            </p>
                                        </div>
                                        <Link href='/service' className='w-fit flex justify-start'>

                                            <button className='bg-[#FF6035] hover:bg-[#101010] cursor-pointer transition-all duration-500  text-white py-3 xl:py-4 px-2 xl:px-4 text-[11px] md:text-[15px] xl:text-base rounded-lg'>Explore our Implementation Services</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Real-Time Visibility and Analytics' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                    {/* Image Section */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full aspect-[4/3]  overflow-hidden">
                                            <Image
                                                src="/service/ONS/tab2.png"
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
                                                Real-Time Visibility and Analytics
                                            </h2>
                                            <p className="text-left text-secondary font-['Archivo'] opacity-75 xl:w-[92%] 2xl:w-[84.5%]">
                                                With built-in dashboards and real-time reporting, NetSuite offers actionable insights into every area of your business. From financial performance to sales trends, decision-makers have instant access to accurate, up-to-date information.
                                            </p>
                                        </div>
                                        <Link href='/service' className='w-fit flex justify-start'>

                                            <button className='bg-[#FF6035] hover:bg-[#101010] cursor-pointer transition-all duration-500  text-white py-3 xl:py-4 px-2 xl:px-4 text-[11px] md:text-[15px] xl:text-base rounded-lg'>Explore our Implementation Services</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Scalable and Flexible Cloud ERP' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                    {/* Image Section */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full aspect-[4/3]  overflow-hidden">
                                            <Image
                                                src="/service/ONS/tab3.png"
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
                                                Scalable and Flexible Cloud ERP
                                            </h2>
                                            <p className="text-left text-secondary font-['Archivo'] opacity-75 xl:w-[92%] 2xl:w-[84.5%]">
                                                Whether you’re a startup or an enterprise, Oracle NetSuite grows with your business. The platform is designed for flexibility, allowing you to add modules, users, and custom features without expensive upgrades or downtime.
                                            </p>
                                        </div>
                                        <Link href='/service' className='w-fit flex justify-start'>

                                            <button className='bg-[#FF6035] hover:bg-[#101010] cursor-pointer transition-all duration-500  text-white py-3 xl:py-4 px-2 xl:px-4 text-[11px] md:text-[15px] xl:text-base rounded-lg'>Explore our Implementation Services</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Automation and Efficiency' && (
                            <div className="w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                    {/* Image Section */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full aspect-[4/3]  overflow-hidden">
                                            <Image
                                                src="/service/ONS/tab4.png"
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
                                                Automation and Efficiency
                                            </h2>
                                            <p className="text-left text-secondary font-['Archivo'] opacity-75 xl:w-[92%] 2xl:w-[84.5%]">
                                                Streamline operations with automated workflows, approvals, and data entries. NetSuite reduces manual processes, minimizes errors, and boosts overall productivity—so your team can focus on strategy instead of routine tasks.
                                            </p>
                                        </div>
                                        <Link href='/service' className='w-fit flex justify-start'>

                                            <button className='bg-[#FF6035] hover:bg-[#101010] cursor-pointer transition-all duration-500  text-white py-3 xl:py-4 px-2 xl:px-4 text-[11px] md:text-[15px] xl:text-base rounded-lg'>Explore our Implementation Services</button>
                                        </Link>

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