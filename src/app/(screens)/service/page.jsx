import dynamic from 'next/dynamic'
const PinkSection = dynamic(()=> import('@/components/service/pink-section'))
import { service_brand_icons } from '@/data/brand-slider-icons-data'
const ServicesList = dynamic(() => import('@/components/service/services-list'))
import React from 'react'
import { ServiceList } from "@/data/service-list";
import ServiceContact from '@/components/service/service-contact';
const ArticleSlider = dynamic(() => import('@/components/common/article-slider'))
import { Blog } from '@/components/homepage/blog'
import { cardData } from '@/data/home-blog'
import {memo}  from "react"

const ServiceHero = dynamic(() => import('@/components/service/hero'))
const BrandSlider = dynamic(() => import('@/components/common/brand-slider'))

export const metadata = {
    title: 'Plenum Services | Digital Transformation & AI Solutions',
    description: "Explore Plenum's innovative services in AI, cloud, and digital transformation tailored to accelerate your business growth.",
    alternates: {
        canonical: 'https://plenum-tech.com/service',
    },
};


const Service = () => {
    return (
        <div>
            <ServiceHero bgImage='/service/sp_herobg.webp' />
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-6  md:py-8'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <PinkSection
                heading={"Scalable Expertise When You Need It"}
                text={"With smart, scalable solutions catered to your company's specific requirements, you can revolutionize the way you operate and empower your employees across departments."}
            />
            <ServicesList serviceList={ServiceList} />

            <ArticleSlider title={"Discover Our Articles"} paragraph={"Insights & practical knowledge designed to help you navigate the digital landscape effectively. "} />
            <Blog heading='Discover Our Blogs' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
            <PinkSection
                heading={"Ready To Supercharge Your AI Workflow?"}
                text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                show_button={true}
                className="xl:h-[340px]"
                isVideo={true}
            />
            <ServiceContact />
        </div>
    )
}

export default memo(Service)
