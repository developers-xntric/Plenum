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
                heading={"ERP Consulting and Implementation in Dubai and Middle East"}
                para={"Our ERP implementation experts provide the strategic guidance and technical expertise needed to modernize operations, increase efficiency, and achieve long-term success."}
                image={"/service/ERPC/ERPC-Hero.svg"}
                is_space_in_image={false}
                isERP={true}
                isBottomButton={false}
            />
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <ERPC2
                para={"We believe that ERP implementation isn’t just a software installation, it’s a strategic business transformation. Our seasoned consultants understand industry-specific challenges and align ERP solutions with your business goals to optimize workflows, increase efficiency, and improve ROI. Whether you’re adopting a new system or upgrading your current one, our expert ERP consultants help you make informed decisions, ensuring a seamless transition and long-term value."}
            />
            <ERPServicesEast />
            {/* <ERPSolutionsBottomSection className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={bottomSection} left={true} blackSection={blackSection} /> */}
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' blackSection={blackSection2} bottomSection={bottomSection2} left={false} />
            <Testimonials testimonials={testimonials} />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={bottomSection} left={true} blackSection={blackSection} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
        </div>
    )
}

export default ERPConsulting;
