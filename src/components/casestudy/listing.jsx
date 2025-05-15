'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
        title: "Unified Retail Experience – ERP-Integrated eCommerce & Mobile App Platform",
        description: "Launched an ERP-integrated eCommerce store with inventory sync, customer segmentation, delivery tracking, and loyalty logic.",
        industry: "Retail",
        sectionId: "retail",
        deliverables: ["WooCommerce", "WordPress", "REST APIs", "Microsoft Dynamics 365 BC", "Flutter Mobile App"],
        image: "/casestudy/Group2.png",
        link: "/unified-retail",
    },
    {
        title: "Manufacturing ERP Modernization – Business Central for Steel Fabrication",
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
        title: "AI-Driven Property Valuation – Automated Valuation Model (AVM)",
        description: "Developed an ML-powered rental AVM system to estimate property values and flag anomalies for a leading financial institution.",
        industry: "Real Estate",
        sectionId: "Real Estate",
        deliverables: ["Databricks", "Power BI", "Momentum AI", "MLflow", "Python", 'Delta Tables'],
        image: "/casestudy/Group5.svg",
        link: "/ai-driven-property",
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

export default function ListingPage() {
    const router = useRouter();

    useEffect(() => {
        // Handle smooth scrolling to section based on URL hash
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className="pt-20 font-['Archivo']">
            <div className='2xl:max-w-[1200px] max-w-[90%] mx-auto'>
                {data.reduce((acc, item, index) => {
                    // Only add a section header if the industry changes
                    const prevItem = data[index - 1];
                    if (!prevItem || prevItem.sectionId !== item.sectionId) {
                        acc.push(
                            <div key={`section-${index}`} id={item.sectionId} className="mb-8">
                                <h2 className="text-[28px] md:text-[36px] font-semibold text-[#101010] opacity-[0]">
                                    {item.industry}
                                </h2>
                            </div>
                        );
                    }
                    acc.push(
                        <div key={index} className="flex flex-col lg:flex-row 2xl:gap-12 gap-8 justify-between mb-[100px]">
                            <div className="w-full lg:w-1/2 2xl:max-w-[55%]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 2xl:w-[45%] flex flex-col gap-10 md:gap-0 justify-between">
                                <div>
                                    <h2 className="text-[25px] md:text-[32px] md:max-w-[80%] xl:max-w-[90%] 2xl:max-w-[95%] font-medium text-[#101010] leading-[30px] md:leading-[40px] opacity-[0.9968] mb-3">
                                        {item.title}
                                    </h2>
                                    <p className="text-[#989898] text-[15px] md:text-[17px] lg:max-w-[80%] 2xl:max-w-[80%] mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="relative flex justify-between">
                                        <div className="space-y-6 md:space-y-4">
                                            <div>
                                                <p className="text-[14px] font-['Chakra'] text-[#989898] opacity-[0.9968]">
                                                    Industry
                                                </p>
                                                <p className="text-[17px] font-medium text-[#101010] opacity-[0.9968]">
                                                    {item.industry}
                                                </p>
                                            </div>
                                            <Link
                                                href={`/case-studies${item.link}`}
                                                className="inline-flex relative items-center text-[#FF6035] opacity-[0.9968] text-[13px] md:text-[20px] font-semibold underline underline-offset-3"
                                            >
                                                <motion.div
                                                    whileHover="hover"
                                                    className="text-primary flex items-center gap-2 cursor-pointer z-40"
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
                                                                    ease: "easeInOut"
                                                                }
                                                            }
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
                                            <p className="text-[13px] md:text-[14px] font-medium font-['Archivo'] text-[#989898] opacity-[0.9968]">
                                                Technologies Implemented
                                            </p>
                                            {item.deliverables.map((deliverable, index) => (
                                                <p key={index} className="text-[15px] md:text-[17px] font-normal text-[#101010] opacity-[0.9968]">
                                                    {deliverable}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                    return acc;
                }, [])}
            </div>
        </div>
    );
}