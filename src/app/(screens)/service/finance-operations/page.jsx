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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Oracleitems } from '@/data/accordineData';
=======
import IndustryShowcase from '@/components/homepage/case-study-new';
import { finance } from '@/data/services';
>>>>>>> Stashed changes
=======
import IndustryShowcase from '@/components/homepage/case-study-new';
import { finance } from '@/data/services';
>>>>>>> Stashed changes

const FinanceOpearations = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Microsoft Dynamics 365 Finance and Operations"}
                para={"Microsoft Dynamics 365 Finance and Operations is an integrated suite of enterprise resource planning (ERP) and customer relationship management (CRM) tools."}
                image={"/service/FAO/FAO_hero.svg"}
                image_className="md:w-[500px] md:h-[300px] xl:w-[500] xl:h-[500px]"
                button_text="Connect with our Experts"
                isSlider={true}
                heading_className={"lg:w-[600px] w-[300px]"}
                para_className={'lg:w-[80%]'}
            />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <ERPAccordin items={Oracleitems} className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={fao_service} left={true} blackSection={fao_service_black} />
=======
            <ERPAccordin data={finance}  className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={fao_service} left={true} blackSection={fao_service_black} />
>>>>>>> Stashed changes
=======
            <ERPAccordin data={finance}  className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={fao_service} left={true} blackSection={fao_service_black} />
>>>>>>> Stashed changes
            <FaoDynamicOpearation />
            <Finance_Opearations_Service
                heading='Benefits of Microsoft Dynamics 365 Finance and Operations'
                para='Get real-time insights into your financial data to make faster, data-driven decisions. Track cash flow, profitability, and financial performance across global operations.'
            />
            {/* <CaseStudies
                title={" Our Case Studies Driving AI Transformation Across Industries"}
                paragraph={"Plenum isn't just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities."}
                caseStudies={caseStudies}
            /> */}
            <IndustryShowcase />
            <div className='pt-20'>
                <PinkSection
                    heading={"Ready To Choose Microsoft Dynamics 365 Finance and Operations?"}
                    text={"By integrating financial management, supply chain optimization, and human resources management into one platform, Dynamics 365 Finance and Operations empowers businesses"}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <Testimonials testimonials={testimonials} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
        </div>
    )
}

export default FinanceOpearations;
