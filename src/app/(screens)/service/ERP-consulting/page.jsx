import BrandSlider from '@/components/common/brand-slider';
import { ERPSolutionsBottomSection } from '@/components/common/solutions';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import ERPServicesEast from '@/components/service/ERP-Cosultant/ERP-services-east';
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import { blackSection, blackSection2, bottomSection, bottomSection2 } from '@/data/erp-consulting-service';
import { cardData } from '@/data/home-blog';
import { testimonials } from '@/data/home-testimonials';
import ArticleSlider from "@/components/common/article-slider";
import ERPC2 from '@/components/service/ERP-Cosultant/ERPC2';

const ERPConsulting = () => {
    return (
        <div>
            <Service_Inner_Hero
                heading={"Plenum Tech offers top ERP solutions across Dubai and the Middle East"}
                para={"Delivering tailored IT services for business growth and operational excellence."}
                image={"/service/ERPC/ERPC-Hero.svg"}
                is_space_in_image={false}
            />
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <ERPC2
                para={"We at Plenum Tech, are honoured to have secured the reputation of being the top most reliable ERP solutions in Dubai and beyond. We uphold a powerful presence in Dubai, Saudi Arabia, and all over the Middle East, providing tailored IT services that enable businesses to reach their maximum potential. We deliver innovation and reliability to every project, offering IT solutions company in the UAE and robust IT infrastructure services."}
            />
            <ERPServicesEast />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={bottomSection} left={true} blackSection={blackSection} />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' blackSection={blackSection2} bottomSection={bottomSection2} left={false} />
            <Testimonials testimonials={testimonials} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
        </div>
    )
}

export default ERPConsulting;
