'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
const data = [
    {
        title: "Brand OS",
        description: "At our core is a brand operating system that synthesizes every fiber of your brand, from strategies and business plans.",
        industry: "Finance",
        deliverables: ["Web Design", "Brand Identity", "Product Design"],
        image: "/casestudy/case1.svg",
    },
    {
        title: "NovaChem Industries",
        description: "At our core is a brand operating system that synthesizes every fiber of your brand, from strategies and business plans.",
        industry: "Finance",
        deliverables: ["Web Design", "Brand Identity", "Product Design"],
        image: "/casestudy/case2.svg",
    },
    {
        title: "Lunaris Apparel Co",
        description: "At our core is a brand operating system that synthesizes every fiber of your brand, from strategies and business plans.",
        industry: "Apparel",
        deliverables: ["Web Design", "Brand Identity", "Product Design"],
        image: "/casestudy/case3.svg",
    },
    {
        title: "GreenHaven Foods",
        description: "At our core is a brand operating system that synthesizes every fiber of your brand, from strategies and business plans.",
        industry: "Foods",
        deliverables: ["Web Design", "Brand Identity", "Product Design"],
        image: "/casestudy/case4.svg",
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
                                    <h2 className="text-[25px] md:text-[32px] font-medium text-[#101010] opacity-[0.9968] mb-3">{item.title}</h2>
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
                                                <p className="text-[17px] font-normal text-[#101010] opacity-[0.9968] ">{item.industry}</p>
                                            </div>

                                            <Link
                                                href={`/case-studies/${index + 1}`}
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
                                            <p className="text-[14px] font-['Chakra'] text-[#989898] opacity-[0.9968] ">Deliverables</p>
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