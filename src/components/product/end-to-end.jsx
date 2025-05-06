import Image from 'next/image'
import React from 'react'

const EndToEndAI = () => {
    return (
        <div className="py-16 xl:py-20 font-['Archivo']">
            <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto lg:text-center mb-8">
                <div>
                    <h2 className="text-[30px] lg:text-[50px] leading-[35px]  text-secondary font-semibold home-section-headings">Momentum AI</h2>
                </div>
                <div className="mb-2">
                    <h3 className="text-[30px] lg:text-[50px] text-secondary font-semibold home-section-headings w-[90%] lg:w-auto">Simplifying End-to-End AI Workflows</h3>
                </div>
                <div className="lg:p-2 mx-auto lg:max-w-[60%]">
                    <p className="text-[15px] text-secondary font-['Archivo'] opacity-75 leading-tight">
                        Momentum AI is a unified platform built to automate every stage of the AI lifecycle — from data ingestion to deployment. Designed for enterprise scalability, it streamlines processes and accelerates AI development with powerful automation tools.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-10 xl:gap-16 lg:max-w-[75%] 2xl:max-w-[900px] mx-auto">
                {data.map((ele, i) => (
                    <div
                        key={i}
                        className="rounded-[30px] px-8 pt-6 w-auto h-[280px]  md:w-[260px] md:h-[390px] xl:w-[315px] xl:h-[380px] flex flex-col"
                        style={{
                            background: ele.bg === "white"
                                ? "#EFEFEF"
                                : `linear-gradient(142deg, rgba(255, 255, 255, 0.20) 2.65%, rgba(255, 255, 255, 0.00) 44.8%), 
                                   radial-gradient(134.54% 167.3% at 46.27% 13.94%, #282526 0%, #282526 55.82%, rgba(40, 37, 38, 0.50) 93.99%)`,
                            boxShadow: ele.bg !== "white"
                                ? " 0px -6.875px 15.375px 0px #FFF inset"
                                : undefined,
                        }}
                    >
                        <div className='mb-5'>
                            <Image src={ele.logo || null} alt="logo" width={50} height={50} />
                        </div>
                        <h3 className={`${ele.bg === "white" ? "text-[#282526]" : "text-[#FFFFFF]"} leading-[23.749px] font-bold max-w-[70%] text-[19.999px] mb-4`}>{ele.title}</h3>
                        <p className={`${ele.bg == "white" ? "text-[#28252680]" : "text-[#E6E6E7]"} text-[14px] font-semibold leading-5`}>{ele.para}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EndToEndAI

const data = [
    {
        logo: "/product/icon1.svg",
        title: "Data Engineering",
        para: "Streamline data ingestion from a wide variety of sources. Transform, clean, blend, and prepare data at scale for machine learning.",
        bg: "white"
    },
    {
        logo: "/product/icon2.svg",
        title: "Machine Learning",
        para: "Rapidly build solutions based on supervised and unsupervised machine learnings, including NLP, computer vision, and recommendation engine.",
        bg: "black"
    },
    {
        logo: "/product/icon1.svg",
        title: "MLOPS",
        para: "Streamline deployment of ML models built in any programming language or tool. Automate CI/CD, model governance, monitoring, drift detection, and version control to save on time and cost.",
        bg: "white"
    },
    {
        logo: "/product/icon2.svg",
        title: "Data Warehouse",
        para: "Supercharge your analytics with the Impulse OLAP solution that provides SQL compliant columnar database for your enterprise data warehouse, a database for millisecond query performance for big data.",
        bg: "black"
    },
    {
        logo: "/product/icon1.svg",
        title: "Process Automation",
        para: "An UI driven engine to build complex business automation tasks by sequencing ML models, OCR, ICR, computer vision, and NLP models.",
        bg: "white"
    },
    {
        logo: "/product/icon2.svg",
        title: "Decision Intelligence",
        para: "Visualize AI/ML outcomes, monitor KPIs, build powerful dashboards, automate insight delivery and create alerts for what matters the most for your business with Inset BI, a web-based decision support tool that gives visibility to your business.",
        bg: "black"
    },
]
