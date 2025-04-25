'use client'; // Since we'll use state for the accordion, this needs to be a client component

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
        <h3 className="text-[17px] font-medium font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[16px] text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/services/erp-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold text-[17px] mt-2 underline"
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
        <h3 className="text-[17px] font-medium font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[16px] text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/services/erp-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold text-[17px] mt-2 underline"
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
        <h3 className="text-[17px] font-medium font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[16px] text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/services/erp-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold text-[17px] mt-2 underline"
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
        <h3 className="text-[17px] font-medium font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-[16px] text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/services/erp-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold text-[17px] mt-2 underline"
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
        <h3 className="text-lg font-medium font-['Archivo'] text-secondary">
          Microsoft Business Central + AI for Intelligent Enterprise Ops
        </h3>
        <p className="text-sm text-secondary opacity-75 mt-2 font-['Archivo']">
          We architect, implement and optimize Microsoft D365 ERP systems, Business Central with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT® built in, your ERP becomes a smart assistant — empowering finance, operations, and procurement teams.
        </p>
        <Link
          href="/services/erp-consulting"
          className="text-[#FF6035] font-['Archivo'] flex items-center font-semibold text-[17px] mt-2 underline"
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
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 py-16 xl:py-24">
        {/* BRAND ICONS SLIDER */}
        <BrandSlider
          text={"Trusted by world's most exciting brands"}
          brand_icons={home_brand_icons}
        />

        <div className="flex flex-col space-y-16">
          {/* UPPER column - Headline */}
          <div className=" xl:w-[69%] 2xl:w-[65%] relative z-20">
            <h2 className="text-[55px] leading-[60px] font-medium font-['Archivo'] relative z-20 bg-[linear-gradient(to_right,_#101010,_#9b9999,_#101010,_#9b9999)] bg-clip-text text-transparent">
              Why AI enabled Enterprise with Plenum? With Plenum gain the tools to unlock deeper insights, automate complex workflows
            </h2>
          </div>

          {/* BOTTOM column - Services */}
          <div className="flex items-start justify-between xl:max-w-[90%]">
            {/* LEFT */}
            <div className="space-y-6 w-full md:w-[80%]">
              <div className="relative font-medium">
                <h2 className="text-[52px] text-secondary3 opacity-[0.85] font-['Archivo']">
                  Our
                </h2>
                <h2 className="text-[52px] text-secondary3 opacity-[0.85] font-['Archivo'] mt-[-32px]">
                  Services
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-sm text-secondary xl:max-w-[70%] leading-[20px] font-['Archivo'] opacity-75">
                  Plenum offers AI solutions to automate workflows, enhance decisions, and boost efficiency. We tailor services to your needs and help you scale confidently.
                </p>
                <Button
                  link={"/services"}
                  text={"Explore More"}
                  className="px-6 py-2 border border-primary text-secondary rounded text-sm transition-colors inline-block font-['Archivo']"
                />
              </div>
            </div>

            {/* RIGHT - Accordion */}
            <div className="w-full md:w-[65% space-y-0">
              {servicesData.map((item) => (
                <div
                  key={item.id}
                  className="border-t-[2.5px] border-[#e7e7e7] py-5"
                >
                  <div
                    onClick={() => toggleAccordion(item.id)}
                    className="group flex items-center gap-3 font-medium text-secondary text-[21px] cursor-pointer"
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
                    <p className="group-hover:text-[#FF6035] font-bold transition-colors duration-500 font-['Archivo']">
                      {item.title}
                    </p>
                  </div>
                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openAccordion === item.id ? 'max-h-96 py-4' : 'max-h-0'
                      }`}
                  >
                    <div className="ml-12 text-left">{item.description}</div>
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