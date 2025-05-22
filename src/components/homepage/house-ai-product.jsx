"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BrandSlider from "../common/brand-slider";
import { useState } from 'react';

import { home_brand_icons } from "@/data/brand-slider-icons-data";
export default function HouseAIProduct({ heading, paragraph, card1Para, card2Para }) {
  const processRef = useRef(null);
  const optimizationRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true });
  const isOptimizationInView = useInView(optimizationRef, { once: true });

  return (
    <section className="pb-3 pt-5 md:pt-12 bg-white">
      <div className="2xl:max-w-[1440px] mx-auto w-[90%] space-y-8 md:space-y-12">
        <div className="space-y-3 md:space-y-5 text-center md:text-left">
          <h2 className="text-[30px] lg:text-[50px] leading-[34px] lg:w-[500px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
            {heading || "AI Products"}
          </h2>
          <p className="text-secondary font-['Archivo'] font-medium opacity-75 md:max-w-[80%] lg:max-w-[75%] xl:max-w-[50%] 2xl:max-w-[45%] text-[12px] md:text-[15px] break-words">
            {paragraph ||
              "Plenum integrates intelligence into your business in addition to providing ERP systems. Our proprietary AI solutions are designed to help all organizational levels get deeper insights, increase productivity, and make more informed business decisions."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Momentum AI Card */}
          <div className="relative rounded-2xl overflow-hidden max-h-[400px]">
            <Image
              src="/images/house-ai-product/smoke.webp"
              width={400}
              height={400}
              alt="Smoke Background"
              className="w-full h-full object-cover absolute inset-0 z-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black opacity-90 to-gray-950 z-20" />
            <div className="text-white p-6 sm:p-5 lg:p-7 pb-0 xl:h-80 rounded-2xl space-y-6 relative z-50">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-[22px] md:text-[30.816px] font-medium font-['Archivo']">Momentum AI</h3>
                  <Link
                    href="/product/momentum-ai"
                    className="text-primary flex items-center gap-2 underline underline-offset-4 cursor-pointer z-40 text-[11.279px] md:text-[13.696px] my-auto"
                  >
                    <motion.div
                      whileHover="hover"
                      className="text-primary flex items-center gap-2 underline underline-offset-4 cursor-pointer z-40"
                    >
                      View Product
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
                <p className="text-[11px] sm:text-[12px] md:text-[13px] text-white font-['Archivo'] w-full max-w-[100%] lg:max-w-[95%] xl:max-w-[75%] break-words">
                  {card1Para || "Momentum AI empowers your business with actionable insights, forecast trends, and real-time analytics."}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/line-animated-video.gif"
                  width={300}
                  height={100}
                  alt="Momentum Graph"
                  className="w-full h-32 md:h-44 object-contain mix-blend-screen"
                />
              </div>
            </div>
          </div>

          {/* Vertical Builds Card */}
          <div className="relative rounded-2xl overflow-hidden max-h-[400px]">
            <Image
              src="/images/house-ai-product/smoke.webp"
              width={400}
              height={400}
              alt="Smoke Background"
              className="w-full h-full object-cover absolute inset-0 z-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black opacity-90 to-gray-950 z-20" />
            <div className="text-white p-6 sm:p-5 lg:p-7 h-full rounded-2xl space-y-6 relative z-50">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-[22px] md:text-[30.816px] font-medium font-['Archivo']">Vertical Builds</h3>
                  <Link
                    href="/product/vertical-builds"
                    className="text-primary flex items-center gap-2 underline underline-offset-4 cursor-pointer z-40 text-[11.279px] md:text-[14px] my-auto"
                  >
                    <motion.div
                      whileHover="hover"
                      className="text-primary flex items-center gap-2 underline underline-offset-4 cursor-pointer z-40"
                    >
                      View Product
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
                <p className="text-[11px] sm:text-[12px] md:text-[13px] text-white font-['Archivo'] w-full max-w-[100%] lg:max-w-[95%] xl:max-w-[85%] break-words">
                  {card2Para ||
                    "Scalable AI models for retail, industrial, and enterprise supply chain operations are provided by Vertical Builds; these models are made for easy integration and quantifiable effects at scale."}
                </p>
              </div>
              <div className="flex  justify-center gap-[10px] md:gap-12 items-start md:items-center py-4">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src="/home/Real-Estate.svg"
                    alt="Hospital"
                    width={70}
                    height={70}
                    className="w-[50px] h-[55px] xl:w-[90px] xl:h-[110px] md:w-[65px] md:h-[100px]"
                  />
                  <p className="text-[12px] md:text-[16px] font-['Archivo'] text-center">Real Estate</p>
                </div>

                <Link href={"/product//vertical-builds#project-management"} className="flex flex-col items-center justify-center">
                  <Image
                    src="/home/Project-Managment.svg"
                    alt="Real Estate"
                    width={70}
                    height={70}
                    className="w-[50px] h-[55px] xl:w-[90px] xl:h-[110px]  md:w-[65px] md:h-[100px]"
                  />
                  <p className="text-[12px] md:text-[16px] font-['Archivo'] text-center">Project Management</p>
                </Link>
                <Link href="/product/vertical-builds#hospital" className="flex flex-col items-center justify-center">
                  <Image
                    src="/home/Hospital.svg"
                    alt="Project Management"
                    width={70}
                    height={70}
                    className="w-[50px] h-[55px] xl:w-[90px] xl:h-[110px] md:w-[120px] md:h-[100px]"
                  />
                  <p className="text-[12px] md:text-[16px] font-['Archivo'] text-center">Hospital</p>
                </Link>
              </div>


              {/* <div className="flex items-center justify-center pb-2 md:pb-0">
                <div className="space-y-3 w-[85%] md:w-[55%] max-w-[90%] mx-auto">
                  <div className="space-y-2">
                    <p className="text-sm font-['Archivo']">Process</p>
                    <div ref={processRef} className="bg-[#dbdbdb] rounded-full h-6 md:h-8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isProcessInView ? "100%" : 0 }}
                        transition={{ duration: 1.2 }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-['Archivo']">Optimization</p>
                    <div ref={optimizationRef} className="bg-gray-300 rounded-full h-6 md:h-8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isOptimizationInView ? "100%" : 0 }}
                        transition={{ duration: 1.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
        <BrandSlider
          text={"Trusted by world's most exciting brands"}
          brand_icons={home_brand_icons} />
      </div>
    </section>
  );
}