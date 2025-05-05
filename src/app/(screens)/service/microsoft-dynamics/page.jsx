import BrandSlider from '@/components/common/brand-slider'
import { ERPSolutionsBottomSection } from '@/components/common/solutions'
import Testimonials from '@/components/homepage/testimonial'
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero'
import MicrosoftCarousel from '@/components/service/microsoft/microsft-carousel'
import MicrosoftDynamic from '@/components/service/microsoft/microsoft-dynamic'
import MicrosoftPartner from '@/components/service/microsoft/microsoft-dynamic-partner'
import MobilitySolutions from '@/components/service/microsoft/mobility-solution'
import PinkSection from '@/components/service/pink-section'
import { service_brand_icons } from '@/data/brand-slider-icons-data'
import { md_service, md_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'
import { MicrosoftCarouselData } from '@/data/microsoft-carousel'
import ArticleSlider from "@/components/common/article-slider";
import { Blog } from '@/components/homepage/blog'
import { md_solutions } from '@/data/mobility-solutions'
import { services } from '@/data/microsoft'
import OracleOneStopShop from '@/components/service/oracle-net-suite/oracle-one-stop-shop'

const MicrosoftDynamics = () => {
    return (
        <div>
            {/* <div className='mt-10'>
                <Service_Inner_Hero
                    heading={"Certified Gold Microsoft Dynamics Partner with Global Presence"}
                    para={"Top Microsoft Dynamics partner with 300+ Projects completed worldwide. Delivering a single point solution tailored for your business needs."}
                    image={"/service/MD/MD_hero.svg"}
                    image_className="md:w-[500px] md:h-[300px] xl:w-[650px] xl:h-[500px]"
                    button_text="Connect with our Experts"
                />
            </div>
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <MicrosoftDynamic heading1='Powerful & Proven Business' heading2='Solutions for Microsoft Dynamics' para=' We have been driving customer success by delivering proven technology solutions alongside Microsoft for
                        almost 20 years.' services={services}
                button={"Get in touch now"}
                className='flex flex-col items-center text-center'
                paraClass='px-4'
                isCenter={true}
            /> 
            */}
            {/* <MicrosoftCarousel MicrosoftCarouselData={MicrosoftCarouselData} title={"Connect Your Applications With Microsoft Dynamics"} para={"Plenum provides a smart approach to integration and helps you transform the way you work. Seamlessly connect your apps with Microsoft Dynamics to save time and effort and increase productivity"} />
             */}
            <MobilitySolutions className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"} solutions={md_solutions} />
            <MicrosoftPartner />
            {/* <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' bottomSection={md_service} left={false} blackSection={md_service_black} />
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
            <OracleOneStopShop />
            <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} /> */}
        </div>
    )
}

export default MicrosoftDynamics
