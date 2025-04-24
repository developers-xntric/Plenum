import BrandSlider from '@/components/common/brand-slider';
import  { ERPSolutionsBottomSection } from '@/components/common/solutions';
import ERP_Consultant_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import { Input } from 'postcss';
import React from 'react';



const bottomSection = {
    heading: "Oracle Solutions",
    Input: ["Net Suite", "Fusion Cloud"],
    button: "View All",
    img:"/service/ERPC/service.webp"
}
const ERPConsulting = () => {
    return (
        <div>
            <ERP_Consultant_Hero />
            {/* <div className='2xl:max-w-[1300px] h-full w-[90%] mx-auto space-y-20 py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div> */}
            {/* <ERPSolutionsBottomSection className='flex justify-center items-center gap-5' bottomSection={bottomSection} left={true} /> */}
        </div>
    )
}

export default ERPConsulting;
