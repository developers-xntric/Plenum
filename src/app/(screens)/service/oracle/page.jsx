import BrandSlider from '@/components/common/brand-slider'
import { ERPSolutionsBottomSection } from '@/components/common/solutions'
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import { ocf_service, ocf_service_black } from '@/data/erp-consulting-service'
import React from 'react'

const Oracle = () => {
    return (
        <div>
            <div className='mt-10'>
                <Service_Inner_Hero
                    heading={"Certified Gold Microsoft Dynamics Partner with Global Presence"}
                    para={"Top Microsoft Dynamics partner with 300+ Projects completed worldwide. Delivering a single point solution tailored for your business needs."}
                    image={"/service/oracle/oracle.svg"}
                    image_className="md:w-[500px] md:h-[300px] xl:w-[600px] xl:h-[450px]"
                    button_text="Connect with our Experts"
                />
                <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16'>
                    <BrandSlider
                        text={"Trusted by world's most exciting brands"}
                        brand_icons={service_brand_icons} />
                </div>
                <div className='max-w-full 2xl:max-w-[1440px] mx-auto '>
                    <ERPSolutionsBottomSection para='Watch this on-demand webinar to discover how AI can drive real business outcomes and prepare your organization for the future of finance. Make AI your competitive edge.' arrow={true} className='flex justify-center items-center gap-5' bottomSection={ocf_service} left={true} blackSection={ocf_service_black} />
                </div>
            </div>
        </div>
    )
}

export default Oracle
