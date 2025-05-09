import { ERPAccordin } from '@/components/common/accordinService'
import ArticleSlider from '@/components/common/article-slider'
import { Blog } from '@/components/homepage/blog'
import Testimonials from '@/components/homepage/testimonial'
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero'
import OracleCloudFusionERP from '@/components/service/oracle-cloud-fusion/ocf-erp'
import OrcaleFinancialFeature from '@/components/service/oracle-cloud-fusion/oracle-financial-feature'
import PinkSection from '@/components/service/pink-section'
import { ocf_service, ocf_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'
import { fusion, fusionTabs } from '@/data/services'

const OracleCloudFusion = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Oracle Fusion Cloud Transforming Your Business"}
                para={"This integrated suite of applications offers a wide range of solutions, from Oracle Fusion ERP to Oracle Fusion applications."}
                image={"/service/OCF/OCF_hero.svg"}
                image_className="md:w-[500px] md:h-[300px] xl:w-[528.08px] xl:h-[400px]"
                button_text="Connect with our Experts"
                heading_className={"w-[58%] leading-14"}
                para_className={"w-[55%] lg:w-[45%] text-md"}
            />
            <ERPAccordin items={fusion} className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={ocf_service} left={true} blackSection={ocf_service_black} />
            <OracleCloudFusionERP />
            <OrcaleFinancialFeature tabs={fusionTabs} para='Oracle Fusion Cloud provides a comprehensive suite of financial features and capabilities.' heading='Financial Features and Capabilities' />
            <PinkSection
                heading={"Ready To Supercharge Your AI Workflow?"}
                text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                show_button={true}
                className="xl:h-[340px]"
                isVideo={true}
            />
            <Testimonials testimonials={testimonials} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
        </div>
    )
}

export default OracleCloudFusion
