"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function IndustryTabs() {

    const data = [
        {
            title: "Retail ERP Transformation Finance & Operations Implementation",
            description: "Modernized a retail group's operations using Microsoft Dynamics 365 F&O for finance, procurement, HR, and POS integration.",
            industry: "Banking & Finance",
            sectionId: "banking-finance",
            deliverables: ["Microsoft Dynamics 365 F&O", "Power BI", "POS Middleware", "HRMS Module"],
            image: "/casestudy/Group.png",
            link: "/retail-erp",
        },
        {
            title: "Unified Retail Experience – ERP Integrated eCommerce & Mobile App Platform",
            description: "Launched an ERP-integrated eCommerce store with inventory sync, customer segmentation, delivery tracking, and loyalty logic.",
            industry: "Retail",
            sectionId: "retail",
            deliverables: ["WooCommerce", "WordPress", "REST APIs", "Microsoft Dynamics 365 BC", "Flutter Mobile App"],
            image: "/casestudy/Group2.png",
            link: "/unified-retail",
        },
        {
            title: "Manufacturing ERP Modernization  Business Central for Steel Fabrication",
            description: "Implemented Microsoft Dynamics 365 Business Central for end-to-end material tracking, procurement, and production management.",
            industry: "Manufacturing",
            sectionId: "manufacturing",
            deliverables: ["Microsoft Dynamics 365 Business Central", "Power BI", "Production & MRP Module", "Procurement Automation"],
            image: "/casestudy/Group3.png",
            link: "/manufacturing-erp",
        },
        {
            title: "Virtual Learning Platform – Custom LMS for Digital Education",
            description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
            industry: "Education",
            sectionId: "education",
            deliverables: ["Microsoft Dynamics 365 Business Central", "Power BI", "Production & MRP Module", "Procurement Automation"],
            image: "/casestudy/Group4.png",
            link: "/virtual-learning",
        },
        {
            title: "Personal Finance Intelligence – Behavioral Analytics for Engagement",
            description: "Built AI-powered behavioral models to identify high-potential customers, link entity structures, and personalize financial offerings.",
            industry: "Banking & Finance",
            sectionId: "banking-finance",
            deliverables: ["Microsoft Dynamics 365 Business Central", "Power BI", "Production & MRP Module", "Procurement Automation"],
            image: "/casestudy/Group6.png",
            link: "/proper-finance-intelligence",
        },
        {
            title: "AI-Powered Sentiment Analysis – Client Experience Intelligence",
            description: "Implemented enterprise-grade sentiment tracking from unstructured communication to help reduce churn and identify at-risk clients.",
            industry: "Banking & Finance",
            sectionId: "banking-finance",
            deliverables: ["GPT-4", "Qwen 2.5", "Inset BI", "Momentum Connect", "Secure APIs"],
            image: "/casestudy/Group7.png",
            link: "/ai-powered-sentiment",
        },
        {
            title: "Commission Fraud Detection – AI for DSA Auditing",
            description: "Built an anomaly detection engine to audit Direct Selling Agent commissions and detect overpayments and irregular behavior.",
            industry: "Banking & Finance",
            sectionId: "banking-finance",
            deliverables: ["Momentum AI", "PCA", "Sklearn", "Inset BI"],
            image: "/casestudy/Group8.png",
            link: "/commision-fraud-detection",
        },
    ]


    const [activeTab, setActiveTab] = useState("Retail");
    const tabs = ["Retail", "Manufacturing", "Education", "Banking & Finance"];

    // Filter data by selected industry
    const filteredData = data.filter(item => item.industry === activeTab);

    return (
        <div>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto py-10'>
                {/* Tab Buttons */}
                <div className="hidden md:flex gap-3 items-center justify-center relative">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap font-['Archivo'] hover:text-orange-600 border border-[#10101080] px-[20px] py-[4px] rounded-full text-[18px] transition-colors ${activeTab === tab
                                    ? "font-medium text-primary"
                                    : "bg-white text-secondary hover:bg-[#F9FAFB] cursor-pointer"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex md:hidden flex-wrap gap-3 items-center md:justify-center mt-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`font-['Archivo'] border border-[#10101080] px-4 py-[4px] rounded-full text-[17px] transition-colors ${activeTab === tab
                                    ? "font-medium text-primary"
                                    : "bg-white text-secondary hover:bg-[#F9FAFB] cursor-pointer"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Case Study Content */}
                <div className="mt-12 space-y-[100px]">
                    {filteredData.map((item, index) => (
                        <div key={index} className="flex flex-col lg:flex-row 2xl:gap-12 gap-8 justify-between">
                            <div className="w-full lg:w-1/2 2xl:max-w-[55%]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 2xl:w-[45%] flex flex-col gap-10 md:gap-0 justify-between">
                                <div>
                                    <h2 className="text-[25px] md:text-[32px] opacity-[0.9] 2xl:max-w-[95%] font-medium text-[#101010] leading-[30px] md:leading-[40px] mb-3">
                                        {item.title}
                                    </h2>
                                    <p className="text-[#989898] text-[15px] md:text-[17px] mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="relative flex justify-between flex-col md:flex-row gap-6 md:gap-0">
                                    <div>
                                        <p className="text-[14px] font-['Chakra'] text-[#989898]">Industry</p>
                                        <p className="text-[17px] font-medium text-[#101010]">{item.industry}</p>
                                        <Link
                                            href={`/case-studies${item.link}`}
                                            className="inline-flex items-center text-[#FF6035] text-[13px] md:text-[20px] font-semibold underline underline-offset-3 mt-2"
                                        >
                                            <motion.div
                                                whileHover="hover"
                                                className="text-primary flex items-center gap-2 cursor-pointer"
                                            >
                                                View Project
                                                <motion.svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="11"
                                                    height="11"
                                                    viewBox="0 0 11 11"
                                                    fill="none"
                                                    className="mt-1"
                                                    variants={{
                                                        hover: {
                                                            x: [0, 3, 0],
                                                            y: [0, -3, 0],
                                                            transition: {
                                                                duration: 0.8,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                            },
                                                        },
                                                    }}
                                                >
                                                    <path
                                                        d="M0.9375 10.214L9.67107 1.48047M9.67107 1.48047H0.9375M9.67107 1.48047V10.214"
                                                        stroke="#FF6035"
                                                        strokeWidth="1.74671"
                                                    />
                                                </motion.svg>
                                            </motion.div>
                                        </Link>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[13px] md:text-[14px] font-medium text-[#989898]">
                                            Technologies Implemented
                                        </p>
                                        {item.deliverables.map((tech, i) => (
                                            <p key={i} className="text-[15px] md:text-[17px] text-[#101010]">
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default IndustryTabs;