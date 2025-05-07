import BrandSlider from '@/components/common/brand-slider'
import ServiceHero from '@/components/service/hero'
import PinkSection from '@/components/service/pink-section'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import ServicesList from '@/components/service/services-list'
import React from 'react'
import { ServiceList } from "@/data/service-list";
import ServiceContact from '@/components/service/service-contact';

const Service = () => {
    return (
        <div>
            <ServiceHero bgImage='/service/sp_herobg.webp' />
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-6  md:py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <PinkSection
                heading={"Scalable Expertise When You Need It"}
                text={"Plenum Tech delivers advanced Enterprise Technology Platforms tailored to streamline operations and optimize workflows. Our solutions are designed to drive business growth and scalability across industries."}
            />
            <ServicesList serviceList={ServiceList} />
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

export default Service
