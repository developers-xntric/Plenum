import BrandSlider from '@/components/common/brand-slider';
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';

const ERPConsulting = () => {
    return (
        <div>
            <Service_Inner_Hero
                heading={"Plenum Tech offers top ERP solutions across Dubai and the Middle East"}
                para={"Delivering tailored IT services for business growth and operational excellence."}
            />
            <div className='2xl:max-w-[1300px] h-full w-[90%] mx-auto space-y-20 py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
        </div>
    )
}

export default ERPConsulting;
