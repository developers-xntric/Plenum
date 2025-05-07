"use client"
import Link from "next/link";
import { ArrowRight} from "lucide-react";
import {motion} from "framer-motion"


export default function ServicesList({ serviceList }) {

    return (
        <section className="bg-white ">
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-8 font-['Archivo']">
                    {serviceList.map((service, _index) => (
                        <div key={service.id} className="relative ">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center lg:w-10 w-18 h-[60px] rounded-[208px] border-[0.90px] border-secondary text-lg font-semibold">
                                    <h1 className="text-secondary text-[24px] font-['Archivo']">{service.id}</h1>
                                </div>
                                {/* THE BORDER LINE */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="433"
                                    height="2"
                                    viewBox="0 0 433 2"
                                    fill="none"
                                >
                                    <path
                                        d="M0.0527344 1.35938H432.522"
                                        stroke="#101010"
                                        strokeWidth="0.906643"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="max-w-[80%]">
                                    {/* LOGO   */}
                                    <div className="mb-4">{service.icon}</div>

                                    <div className="space-y-4">
                                        {/* TITLE */}
                                        <h2>
                                            {service.title.map((title, i) => (
                                                <p key={i} className="text-3xl text-secondary font-semibold font-['Archivo']">
                                                    {title}
                                                </p>
                                            ))}
                                        </h2>

                                        <p className="text-secondary text-[17px] opacity-[0.6] font-['Archivo'] mb-6 lg:max-w-[92%] xl:max-w-[78%] 2xl:max-w-[80%]">{service.description}</p>
                                    </div>


                                    <div className="space-y-3">
                                        {service.names.map((link, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center font-semibold font-['Archivo'] w-fit transition-colors duration-300 text-[#101010] text-[16px]"
                                            >
                                                <ArrowRight className="h-4 w-4 mr-2 font-bold text-[#FF6035]" />
                                                <span>{link}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={service.link}
                                        className="flex items-center text-[#FF6035] opacity-[0.9968] mt-6 font-semibold font-['Archivo'] underline text-[17.467px]"
                                    >
                                        <motion.div
                                            whileHover="hover"
                                            className="text-primary flex items-center gap-2 cursor-pointer z-40"
                                        >
                                            View Service
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
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}