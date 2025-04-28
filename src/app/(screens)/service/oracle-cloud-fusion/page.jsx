import ArticleSlider from '@/components/common/article-slider'
import { ERPSolutionsBottomSection } from '@/components/common/solutions'
import { Blog } from '@/components/homepage/blog'
import Testimonials from '@/components/homepage/testimonial'
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero'
import OracleCloudFusionERP from '@/components/service/oracle-cloud-fusion/ocf-erp'
import OrcaleFinancialFeature from '@/components/service/oracle-cloud-fusion/oracle-financial-feature'
import PinkSection from '@/components/service/pink-section'
import { ocf_service, ocf_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'

const OracleCloudFusion = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Engineering AI-powered NetSuite Solutions"}
                para={"Helping companies by implementing NetSuite with the latest AI capabilities and customized AI apps."}
                image={"/service/OCF/OCF_hero.svg"}
                image_className="md:w-[500px] md:h-[300px] xl:w-[528.08px] xl:h-[400px]"
                button_text="Connect with our Experts"
            />
            <ERPSolutionsBottomSection para='More than ever, the management of successful organizations relies on the critical information obtained from business results and operations.' arrow={true} className='flex justify-center items-center gap-5' bottomSection={ocf_service} left={true} blackSection={ocf_service_black} />
            <OracleCloudFusionERP />
            <OrcaleFinancialFeature />
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
    )
}

export default OracleCloudFusion
