"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const cardData = [
  {
    img: "/blog/Section-1.jpg",
    date: "May 26, 2025",
    para: "ERP vs CRM: What’s the Difference and Which Do You Need?",
    id: 1,
    link: "/blog/erp-vs-crm",
  },
  {
    img: "/blog/Section-2.jpg",
    date: "May 26, 2025",
    para: "Dynamics vs NetSuite: Comparing Microsoft and Oracle ERP Solutions",
    id: 2,
    link: "/blog/dynamics-vs-netsuite",
  },
  {
    img: "/blog/Article1.1.jpg",
    date: "May 26, 2025",
    para: "How AI Revolutionizes Oracle Cloud Infrastructure for Businesses ",
    id: 3,
    link: "/blog/oracle-cloud-infrastructure",
  },
  {
    img: "/blog/Article3.1.jpg",
    date: "May 26, 2025",
    para: "Microsoft Dynamics 365 vs. Traditional CRM: Which is Better?",
    id: 4,
    link: "/blog/dynamics-vs-traditional-crm",
  },
  // {
  //     img: "/blog/Article4.1.jpg",
  //     date: "May 26, 2025",
  //     para: "Key Benefits of Microsoft Dynamics 365 for Small Businesses",
  //     id: 5,
  //     link: '/blog/dynamics-365-for-small-businesses'
  // },
  {
    img: "/blog/Article2.1.jpg",
    date: "May 26, 2025",
    para: "Why Every Business Needs Oracle Database Integration with ERP Systems",
    id: 6,
    link: "/blog/oracle-database-integration",
  },
  {
    img: "/blog/Article5.1.jpg",
    date: "May 27, 2025",
    para: "How Microsoft Dynamics 365 Integrates with Your Business Operations",
    id: 7,
    link: "/blog/erp-software-explained",
  },
  {
    img: "/blog/Article6.1.jpg",
    date: "May 28, 2025",
    para: "The Future of ERP: Exploring ERP Modules in Microsoft Dynamics 365",
    id: 8,
    link: "/blog/future-of-erp",
  },
  {
    img: "/blog/Article7.1.jpg",
    date: "May 29, 2025",
    para: "What is ERP? A Comprehensive Guide ",
    id: 9,
    link: "/blog/what-is-erp",
  },
  {
    img: "/blog/Article9.1.jpg",
    date: "May 30, 2025",
    para: "What is Microsoft Dynamics 365? A Complete Guide",
    id: 10,
    link: "/blog/what-is-microsoft-dynamics-365",
  },
  {
    img: "/blog/Article12.1.jpg",
    date: "June 2, 2025",
    para: "Key Benefits of Microsoft Dynamics 365 for Small Businesses ",
    id: 11,
    link: "/blog/dynamics-365-for-small-businesses",
  },
  {
    img: "/blog/Article13.1.jpg",
    date: "June 3, 2025",
    para: "Common Types of ERP: Understanding the Options Available",
    id: 12,
    link: "/blog/common-types-of-erp",
  },
  {
    img: "/blog/Article14.1.jpg",
    date: "June 4, 2025",
    para: "How to Integrate Microsoft Dynamics 365 with Other Applications",
    id: 13,
    link: "/blog/dynamics-with-other-apps-integration",
  },
  {
    img: "/blog/AN14.jpg",
    date: "June 5, 2025",
    para: "How ERP Increase Efficiency in Supply Chain Management",
    id: 14,
    link: "/blog/how-erp-enhances-efficiency-in-supply-chain",
  },
  {
    img: "/blog/AN15.jpg",
    date: "June 6, 2025",
    para: "How to Choose an ERP System for Your Company",
    id: 15,
    link: "/blog/how-to-choose-an-erp-system",
  },
  {
    img: "/blog/AN16.jpg",
    date: "June 9, 2025",
    para: "How to Get Started with Microsoft Dynamics 365",
    id: 16,
    link: "/blog/get-started-with-microsoft-dynamics-365",
  },
  {
    img: "/blog/AN17.jpg",
    date: "June 10, 2025",
    para: "Why Microsoft Dynamics 365 is Game-Changer in 2025?",
    id: 17,
    link: "/blog/why-microsoft-dynamics-365-is-game-changer",
  },
  {
    img: "/blog/AN18.jpg",
    date: "June 11, 2025",
    para: "Microsoft Dynamics 365 Improves CRM - Key Features",
    id: 18,
    link: "/blog/microsoft-dynamics-365-improves-crm",
  },
  {
    img: "/blog/AN19.jpg",
    date: "June 12, 2025",
    para: "What is Microsoft Dynamics 365? In-Depth Overview",
    id: 19,
    link: "/blog/what-is-microsoft-dynamics",
  },
  {
    img: "/blog/Article21.1.jpeg",
    date: "June 13, 2025",
    para: "What is Business Process Modelling? A Critical Step in ERP Success",
    id: 20,
    link: "/blog/what-is-business-process-modeling",
  },
  {
    img: "/blog/Article22.1.jpeg",
    date: "June 13, 2025",
    para: "The Complete Guide to Business Central Reporting",
    id: 21,
    link: "/blog/guide-to-business-central-reports",
  },
  {
    img: "/blog/Article23.1.jpg",
    date: "June 23, 2025",
    para: " Dynamics 365 Field Service: Overview and Industry Focus",
    id: 22,
    link: "/blog/ms-dynamics-365-field-service",
  },
  {
    img: "/blog/Article24.1.jpg",
    date: "June 23, 2025",
    para: "  Business Modeling in ERP: Optimizing Enterprise Efficiency",
    id: 23,
    link: "/blog/business-modeling-in-erp",
  },
  {
    img: "/blog/Article25.1.jpg",
    date: "June 23, 2025",
    para: " Dynamics 365 Data Migration: A Step-by-Step Guide for Seamless Transition",
    id: 24,
    link: "/blog/dynamics-365-data-migration",
  },
  {
    img: "/blog/Article26.1.jpg",
    date: "June 23, 2025",
    para: "  Microsoft Business Central Extensions: Powering Custom ERP Solutions",
    id: 25,
    link: "/blog/microsoft-business-central-extensions",
  },
  {
    img: "/blog/Article27.1.jpg",
    date: "June 27, 2025",
    para: "What is Cloud Managed Services? A Complete Guide to the Future of IT Management",
    id: 26,
    link: "/blog/cloud-managed-services",
  },
];
const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const res = await axios.get("http://localhost:8000/api/v2/blogs");
      setData(res.data.blogs);
    };
    getAllBlogs();
  }, []);
  return (
    <section className="py-20">
      <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {data.map((card, index) => (
            <Link href={`blog/${card.slug}`} key={index}>
              <div className="relative hover:opacity-75 transition-opacity ease-in duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[20px] opacity-60"></div>
                <Image
                  src={card.imageURL}
                  width={300}
                  height={300}
                  alt="blog 1"
                  className="w-full rounded-[20px]"
                />
                <div className="max-w-[80%] absolute bottom-6 left-6">
                  <span className="text-[#D4D4D8] text-[14px]">
                    {new Date(card.publishedDate).toLocaleString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <p className="text-white text-[16px] line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          {/* {cardData.map((card, index) => (
            <Link href={card.link} key={index}>
              <div className="relative hover:opacity-75 transition-opacity ease-in duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[20px] opacity-60"></div>
                <Image
                  src={card.img}
                  width={300}
                  height={300}
                  alt="blog 1"
                  className="w-full rounded-[20px]"
                />
                <div className="max-w-[80%] absolute bottom-6 left-6">
                  <span className="text-[#D4D4D8] text-[14px]">
                    {card.date}
                  </span>
                  <p className="text-white text-[16px]">{card.para}</p>
                </div>
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Cards;
