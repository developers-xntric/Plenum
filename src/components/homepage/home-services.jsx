'use client';
import { home_brand_icons } from "@/data/brand-slider-icons-data";
import BrandSlider from "../common/brand-slider";
import Button from "../common/button";
import { useState } from 'react';
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "ERP Consulting & Implementation",
    description: (
      <>
        <h3 className="text-[15px] font-semibold font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/service/ERP-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          View Service
          <ArrowUpRight />
        </Link>
      </>
    ),
  },
  {
    id: 2,
    title: "AI Consulting, Governance & Implementation",
    description: (
      <>
        <h3 className="text-[15px] font-semibold font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/service/ERP-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          View Service
          <ArrowUpRight />
        </Link>
      </>
    ),
  },
  {
    id: 3,
    title: "Momentum",
    description: (
      <>
        <h3 className="text-[15px] font-semibold font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/service/ERP-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          View Service
          <ArrowUpRight />
        </Link>
      </>
    ),
  },
  {
    id: 4,
    title: "Managed Cloud Services",
    description: (
      <>
        <h3 className="text-[15px] font-semibold font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/service/ERP-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          View Service
          <ArrowUpRight />
        </Link>
      </>
    ),
  },
  {
    id: 5,
    title: "Digital Experience",
    description: (
      <>
        <h3 className="text-[15px] font-semibold font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[15px] font-medium text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/service/ERP-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold md:text-[17px] mt-2 underline"
        >
          View Service
          <ArrowUpRight />
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
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 md:py-16 xl:py-24">
        {/* BRAND ICONS SLIDER */}
        <BrandSlider
          text={"Trusted by world's most exciting brands"}
          brand_icons={home_brand_icons}
        />

        <div className="flex flex-col space-y-10 sm:space-y-16">
          {/* UPPER column - Headline */}
          <div className=" xl:w-[80%] 2xl:w-[70%] relative z-20">
            <h2 className="text-[30px] lg:text-[50px] xl:text-[59.542px] leading-[40px] lg:leading-[60px] font-semibold font-['Archivo'] relative z-20 bg-[linear-gradient(to_right,_#101010,_#9b9999,_#101010,_#9b9999)] bg-clip-text text-transparent">
              Why AI enabled Enterprise with Plenum? With Plenum gain the tools to unlock deeper insights, automate complex workflows
            </h2>
          </div>

          {/* BOTTOM column - Services */}
          <div className="flex md:flex-row flex-col items-start justify-between xl:max-w-[90%]">
            {/* LEFT */}
            <div className="space-y-2 md:space-y-6 w-full md:w-[80%]">
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
                  Plenum offers AI solutions to automate workflows, enhance decisions, and boost efficiency. We tailor services to your needs and help you scale confidently.
                </p>
                <Button
                  link={"/service"}
                  text={"Explore More"}
                  className="px-6 py-2 hover:bg-[#FF6035] hover:transition-colors ease-in-out duration-300 hover:text-white border border-primary rounded  sm:text-[15px] font-medium transition-colors inline-block font-['Archivo']"
                />
              </div>
            </div>

            {/* RIGHT - Accordion */}
            <div className="w-full md:w-[65% space-y-0 md:my-0 my-14">
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
                    className={`overflow-hidden transition-all duration-300 ${openAccordion === item.id ? 'max-h-96 py-4' : 'max-h-0'
                      }`}
                  >
                    <div className="ml-10 md:ml-12 text-left">{item.description}</div>
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