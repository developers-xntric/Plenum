'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { useState } from 'react';

import Button from "../common/button";

const servicesData = [
  {
    id: 1,
    title: "AI Consulting, Governance & Deployment",
    description: (
      <>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          Plenum helps you deploy AI responsibly with custom roadmaps. We align AI strategy with your goals, identifying automation use cases and the right models for real-world impact.
        </p>
        <Link
          href="/service/ai-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          <motion.div
            whileHover="hover"
            className="text-primary flex items-center gap-2  cursor-pointer z-40"
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
      </>
    ),
  },
  {
    id: 2,
    title: "Managed Cloud Services",
    description: (
      <>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          Focus on innovation while we manage your cloud. Our certified experts deliver secure, scalable solutions with tailored SLAs and full transparency across AWS, Azure, GCP, and more.
        </p>
        <Link
          href="/service/manage-cloud"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          <motion.div
            whileHover="hover"
            className="text-primary flex items-center gap-2  cursor-pointer z-40"
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
      </>
    ),
  },
  {
    id: 3,
    title: "Digital Experience",
    description: (
      <>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          Today’s digital world demands more than just presence—exceptional user experiences are essential for engagement, growth, and long-term success.
        </p>
        <Link
          href="/service/digital-experiences"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          <motion.div
            whileHover="hover"
            className="text-primary flex items-center gap-2  cursor-pointer z-40"
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
      </>
    ),
  },
  {
    id: 4,
    title: "ERP Consulting and Implementation",
    description: (
      <>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          We offer ERP consulting and implementation services to streamline and scale your business operations. Our integrated solutions ensure efficiency and seamless process management
        </p>
        <Link
          href="/service/ERP-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          <motion.div
            whileHover="hover"
            className="text-primary flex items-center gap-2  cursor-pointer z-40"
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
      </>
    ),
  },

];

export default function HomeServices() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Main content */}
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-10 md:space-y-20 py-8 md:py-16 xl:py-16">
        {/* BRAND ICONS SLIDER */}
        {/* <BrandSlider
          text={"Trusted by world's most exciting brands"}
          brand_icons={home_brand_icons}
        /> */}

        <div className="flex flex-col space-y-10 sm:space-y-16">
          {/* UPPER column - Headline */}
          <div className=" xl:w-[80%] 2xl:w-[70%] text-center md:text-left relative z-20">
            <h2 className="text-[30px] lg:text-[50px] xl:text-[59.542px] leading-[40px] lg:leading-[60px] font-semibold font-['Archivo'] relative z-20 bg-[linear-gradient(to_right,_#101010,_#9b9999,_#101010,_#9b9999)] bg-clip-text text-transparent">
              Why Choose Plenum's AI-Enabled Enterprise Solutions?
            </h2>
          </div>

          {/* BOTTOM column - Services */}
          <div className="flex lg:flex-row flex-col items-start justify-between xl:max-w-[90%]">
            {/* LEFT */}
            <div className="space-y-2 lg:space-y-6 text-center md:text-left w-full lg:w-[80%]">
              <div className="relative font-medium">
                <h2 className="text-[30px] lg:text-[50px] xl:text-[57.375px] font-semibold text-secondary opacity-[0.8] inline-block md:block font-['Archivo'] tracking-tighter">
                  Our
                </h2>
                <h2 className="text-[30px] lg:text-[50px] xl:text-[57.375px] font-semibold text-secondary opacity-[0.8] inline-block lg:block md:mx-0 mx-2 font-['Archivo'] tracking-tighter mt-[-32px]">
                  Services
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-[14px] md:text-[15px] text-secondary w-full md:w-[80%]  xl:max-w-[70%] leading-[20px] font-normal font-['Archivo'] opacity-75">
                  We specialize in crafting innovative digital, AI, and ERP solutions customized to meet the unique needs of your business. Our services span from developing seamless digital experiences that engage and retain users, to implementing advanced AI technologies that drive intelligent decision-making. We also offer robust ERP solutions that streamline operations, enhance data management, and improve financial oversight. By combining industry expertise with advanced technology, we empower enterprises to stay ahead in a fast-evolving digital landscape.
                </p>
                <Button
                  link={"/service"}
                  text={"Explore More"}
                  className="px-6 py-2 hover:bg-[#FF6035] hover:transition-colors ease-in-out duration-300 hover:text-white border border-primary rounded  sm:text-[15px] font-medium transition-colors inline-block font-['Archivo']"
                />
              </div>
            </div>

            {/* RIGHT - Accordion */}
            <div className="w-full lg:w-[65%] space-y-0 lg:my-0 my-14 font-['Archivo']">
              {servicesData.map((item) => (
                <div
                  key={item.id}
                  className="border-t-[2.5px] border-[#e7e7e7] py-5"
                >
                  <div
                    onClick={() => toggleAccordion(item.id)}
                    className="group flex items-center gap-3 font-medium text-secondary lg:text-[21px] cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      className={`stroke-current transition-transform duration-300 ${openAccordion === item.id ? 'rotate-90' : ''
                        } group-hover:text-[#FF6035]`}
                    >
                      <path
                        d="M16.9722 7.62439L24.5462 14.8954L16.9722 22.1665M23.6373 14.8954H4.55078"
                        strokeWidth="1.81776"
                        strokeLinecap="square"
                      />
                    </svg>
                    <p className="group-hover:text-[#FF6035] leading font-bold transition-colors w-[90%] leading-[-0.485px]  duration-500 font-['Archivo']">
                      {item.title}
                    </p>
                  </div>
                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all font-['Archivo'] duration-300 ${openAccordion === item.id ? 'max-h-96 py-4' : 'max-h-0'
                      }`}
                  >
                    <div className="ml-10 text-left font-['Archivo']">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}