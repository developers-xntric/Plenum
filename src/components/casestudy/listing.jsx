'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
const data = [
    {
        title: "Retail ERP Transformation Finance & Operations Implementation",
        description: "Modernized a retail group's operations using Microsoft Dynamics 365 F&O for finance, procurement, HR, and POS integration.",
        industry: "Finance",
        deliverables: ["Microsoft Dynamics 365 F&O", "Power BI", "POS Middleware", "HRMS Module"],
        image: "/casestudy/Group.png",
        link: "/retail-erp",
    },
    {
        title: "Unified Retail Experience – ERP-Integrated eCommerce & Mobile App Platform ",
        description: "Launched an ERP-integrated eCommerce store with inventory sync, customer segmentation, delivery tracking, and loyalty logic. ",
        industry: "Retail",
        deliverables: ["WooCommerce ", "WordPress", "REST APIs", "Microsoft Dynamics 365 BC", "Flutter Mobile App"],
        image: "/casestudy/Group2.png",
        link: "/unified-retail",
    },
    {
        title: "Retail ERP Transformation Finance & Operations Implementation",
        description: "Implemented Microsoft Dynamics 365 Business Central for end-to-end material tracking, procurement, and production management.",
        industry: "Finance",
        deliverables: ["Microsoft Dynamics 365 Business Central ", "Power BI", "Production & MRP Module", "Procurement Automation"],
        image: "/casestudy/Group3.png",
        link: "/manufacturing-erp",
    },
    {
        title: "Retail ERP Transformation Finance & Operations Implementation",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        industry: "Education",
        deliverables: ["Microsoft Dynamics 365 Business Central ", "Power BI", "Production & MRP Module", "Procurement Automation"],
        image: "/casestudy/Group4.png",
        link: "/virtual-learning",
    },
    {
        title: "Retail ERP Transformation Finance & Operations Implementation",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        industry: "Education",
        deliverables: ["Microsoft Dynamics 365 Business Central ", "Power BI", "Production & MRP Module", "Procurement Automation"],
        image: "/casestudy/Group5.png",
        link: "/ai-driven-property",
    },
    {
        title: "Retail ERP Transformation Finance & Operations Implementation",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        industry: "Education",
        deliverables: ["Microsoft Dynamics 365 Business Central ", "Power BI", "Production & MRP Module", "Procurement Automation"],
        image: "/casestudy/Group6.png",
        link: "/proper-finance-intelligence",
    },
    {
        title: "Retail ERP Transformation Finance & Operations Implementation",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        industry: "Education",
        deliverables: ["Microsoft Dynamics 365 Business Central ", "Power BI", "Production & MRP Module", "Procurement Automation"],
        image: "/casestudy/Group7.png",
        link: "/ai-powered-sentiment",
    },
    {
        title: "Retail ERP Transformation Finance & Operations Implementation",
        description: "Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights.",
        industry: "Education",
        deliverables: ["Microsoft Dynamics 365 Business Central ", "Power BI", "Production & MRP Module", "Procurement Automation"],
        image: "/casestudy/Group8.png",
        link: "/commision-fraud-detection",
    },
]
export default function ListingPage() {
    return (
        <div className="pt-20 font-['Archivo']">
            <div className='2xl:max-w-[1200px] max-w-[90%] mx-auto'>
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col lg:flex-row 2xl:gap-12 gap-8 justify-between mb-[100px]">
                            <div className="w-full lg:w-1/2 2xl:max-w-[55%]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full "
                                />
                            </div>
                            <div className="w-full lg:w-1/2 2xl:w-[45%] flex flex-col gap-10 md:gap-0 justify-between">
                                <div>
                                    <h2 className="text-[25px] md:text-[32px] max-w-[80%] font-medium text-[#101010] leading-[40px] opacity-[0.9968] mb-3">{item.title}</h2>
                                    <p className="text-[#989898] text-[15px] md:text-[17px] md:max-w-[60%] 2xl:max-w-[50%] mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="relative flex justify-between">
                                        {/* Left Side */}
                                        <div className="space-y-6 md:space-y-4">
                                            <div>
                                                <p className="text-[14px] font-['Chakra'] text-[#989898] opacity-[0.9968] ">Industry</p>
                                                <p className="text-[17px] font-medium text-[#101010] opacity-[0.9968] ">{item.industry}</p>
                                            </div>

                                            <Link
                                                href={`/case-studies${item?.link}`}
                                                className="inline-flex relative items-center text-[#FF6035] opacity-[0.9968] text-[20px] font-semibold underline underline-offset-3"
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
                                                        className={"mt-1"}
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
                                        {/* Right Side */}
                                        <div className="text-right">
                                            <p className="text-[14px] font-medium font-['Archivo'] text-[#989898] opacity-[0.9968] ">Technologies Implemented</p>
                                            {item.deliverables.map((deliverable, index) => (
                                                <p key={index} className="text-[17px] font-normal text-[#101010] opacity-[0.9968] ">{deliverable}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}