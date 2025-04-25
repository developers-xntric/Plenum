import ArticleSlider from '@/components/common/article-slider'
import BrandSlider from '@/components/common/brand-slider'
import { ERPSolutionsBottomSection } from '@/components/common/solutions'
import { Blog } from '@/components/homepage/blog'
import CaseStudies from '@/components/homepage/case-studies'
import Testimonials from '@/components/homepage/testimonial'
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero'
import Finance_Opearations_Service from '@/components/service/finance-and-opearations/fao-service'
import OracleResourcePlanning from '@/components/service/oracle/oracle-resource-planning'
import PinkSection from '@/components/service/pink-section'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import { caseStudies } from '@/data/case-studies-card-data'
import { oracle_service, oracle_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'

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
                    <ERPSolutionsBottomSection para='Watch this on-demand webinar to discover how AI can drive real business outcomes and prepare your organization for the future of finance. Make AI your competitive edge.' arrow={true} className='flex justify-center items-center gap-5' bottomSection={oracle_service} left={true} blackSection={oracle_service_black} />
                </div>
                <OracleResourcePlanning />
                <div className='py-8'>
                    <Finance_Opearations_Service />
                </div>
                <CaseStudies
                    title={" Our Case Studies Driving AI Transformation Across Industries"}
                    paragraph={"Plenum isn't just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities."}
                    caseStudies={caseStudies}
                />
                <div className='pt-32 pb-20'>
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
                <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
            </div>
        </div>
    )
}

export default Oracle
