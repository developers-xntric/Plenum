import BrandSlider from '@/components/common/brand-slider'
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero'
import MicrosoftDynamic from '@/components/service/microsoft/microsoft-dynamic'
import MobilitySolutions from '@/components/service/microsoft/mobility-solution'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import React from 'react'

const MicrosoftDynamics = () => {
    return (
        <div>
            <div className='mt-10'>
                <Service_Inner_Hero
                    heading={"Certified Gold Microsoft Dynamics Partner with Global Presence"}
                    para={"Top Microsoft Dynamics partner with 300+ Projects completed worldwide. Delivering a single point solution tailored for your business needs."}
                    image={"/service/MD/MD_hero.svg"}
                    image_className="md:w-[500px] md:h-[300px] xl:w-[650px] xl:h-[500px]"
                    button_text="Connect with our Experts"
                />
            </div>
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <div>
                <MicrosoftDynamic/>
            </div>
            <div>
                <MobilitySolutions/>
            </div>
        </div>
    )
}

export default MicrosoftDynamics
