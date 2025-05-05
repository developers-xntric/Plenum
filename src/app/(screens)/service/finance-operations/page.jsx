import CaseStudies from '@/components/homepage/case-studies';
import Testimonials from '@/components/homepage/testimonial';
import FaoDynamicOpearation from '@/components/service/finance-and-opearations/fao-dynamic-opearation';
import Finance_Opearations_Service from '@/components/service/finance-and-opearations/fao-service';
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero';
import PinkSection from '@/components/service/pink-section';
import { caseStudies } from '@/data/case-studies-card-data';
import { fao_service, fao_service_black } from '@/data/erp-consulting-service';
import { testimonials } from '@/data/home-testimonials';
import ArticleSlider from "@/components/common/article-slider";
import { Blog } from '@/components/homepage/blog';
import { cardData } from '@/data/home-blog';
import { ERPAccordin } from '@/components/common/accordinService';

const FinanceOpearations = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Microsoft Dynamics 365 Finance and Operations Implementation Partner"}
                para={"Delivering tailored IT services for business growth and operational excellence."}
                image={"/service/FAO/FAO_hero.svg"}
                image_className="md:w-[500px] md:h-[300px] xl:w-[500] xl:h-[500px]"
                button_text="Connect with our Experts"
                isSlider={true}
                heading_className={"lg:w-[600px] w-[300px]"}
            />
            {/* <ERPAccordin  className='flex justify-center items-center gap-20' bottomSection={fao_service} left={true} blackSection={fao_service_black} />
            <FaoDynamicOpearation />
            <div className='py-8'>
                <Finance_Opearations_Service />
            </div>
            <CaseStudies
                title={" Our Case Studies Driving AI Transformation Across Industries"}
                paragraph={"Plenum isn't just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities."}
                caseStudies={caseStudies}
            />
            <div className='pt-20'>
                <PinkSection
                    heading={"Ready To Supercharge Your AI Workflow?"}
                    text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <Testimonials testimonials={testimonials} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} /> */}
        </div>
    )
}

export default FinanceOpearations;
