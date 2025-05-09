import { ERPAccordin } from '@/components/common/accordinService'
import ArticleSlider from '@/components/common/article-slider'
import BrandSlider from '@/components/common/brand-slider'
import { ERPSolutionsBottomSection } from '@/components/common/solutions'
import { Blog } from '@/components/homepage/blog'
import Testimonials from '@/components/homepage/testimonial'
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero'
import Finance_Opearations_Service from '@/components/service/finance-and-opearations/fao-service'
import OracleResourcePlanning from '@/components/service/oracle/oracle-resource-planning'
import PinkSection from '@/components/service/pink-section'
import { Oracleitems } from '@/data/accordineData'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import { blackSection, bottomSection, oracle_service, oracle_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'

const Oracle = () => {
    return (
        <div>
            <div className='mt-10'>
                <Service_Inner_Hero
                    heading={"Oracle ERP Solutions Empowered by Oracle Cloud ERP"}
                    para={"Whether you're upgrading legacy systems or embarking on your digital transformation journey, our tailored solutions enhanced by Oracle Cloud ensure you stay competitive in an evolving marketplace."}
                    image={"/service/Oracle/oracle.svg"}
                    image_className="md:w-[500px] md:h-[300px] xl:w-[600px] xl:h-[450px]"
                    button_text="Connect with our Experts"
                />
                <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-10'>
                    <BrandSlider
                        text={"Trusted by world's most exciting brands"}
                        brand_icons={service_brand_icons} />
                </div>
                <ERPAccordin items={Oracleitems} para='From procurement to financial planning, Oracle ERP modules offer functionality that spans every corner of your enterprise. Combined with our expertise, you’ll have a customized tech stack aligned with your goals.' arrow={true} className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={oracle_service} left={true} blackSection={oracle_service_black} />
                <OracleResourcePlanning />
                <Finance_Opearations_Service />
                <ERPSolutionsBottomSection  className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={bottomSection} left={true} blackSection={blackSection} />
                <div className=' pt-20'>
                    <PinkSection
                        heading={"Ready To Use The Best Oracle ERP Solutions?"}
                        text={"Modern businesses demand agility. Oracle ERP software provides organizations with the flexibility to adapt and innovate"}
                        show_button={true}
                        className="xl:h-[340px]"
                        isVideo={true}
                    />
                </div>
                <Testimonials testimonials={testimonials} />
                <ArticleSlider />
                <Blog heading='Discover Our Blog' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
            </div>
        </div>
    )
}

export default Oracle
