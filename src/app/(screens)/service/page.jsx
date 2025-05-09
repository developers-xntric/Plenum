import BrandSlider from '@/components/common/brand-slider'
import ServiceHero from '@/components/service/hero'
import PinkSection from '@/components/service/pink-section'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import ServicesList from '@/components/service/services-list'
import React from 'react'
import { ServiceList } from "@/data/service-list";
import ServiceContact from '@/components/service/service-contact';
import ArticleSlider from '@/components/common/article-slider'
import { Blog } from '@/components/homepage/blog'
import { cardData } from '@/data/home-blog'

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
            <PinkSection
                heading={"Ready To Supercharge Your AI Workflow?"}
                text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                show_button={true}
                className="xl:h-[340px]"
                isVideo={true}
            />
            <ArticleSlider  title={"Discover Our Articles"} paragraph={"Insights & practical knowledge designed to help you navigate the digital landscape effectively. "}/>
            <Blog heading='Discover Our Blogs' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
            <ServiceContact />
        </div>
    )
}

export default Service
