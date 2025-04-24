import BrandSlider from '@/components/common/brand-slider';
import ERP_Consultant_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import React from 'react';

const ERPConsulting = () => {
    return (
        <div>
            <ERP_Consultant_Hero />
            {/* <div className='2xl:max-w-[1300px] h-full w-[90%] mx-auto space-y-20 py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div> */}
        </div>
    )
}

export default ERPConsulting;
