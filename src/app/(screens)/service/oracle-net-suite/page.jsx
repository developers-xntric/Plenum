import ArticleSlider from '@/components/common/article-slider'
import { ERPSolutionsBottomSection } from '@/components/common/solutions'
import { Blog } from '@/components/homepage/blog'
import Testimonials from '@/components/homepage/testimonial'
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero'
import MicrosoftCarousel from '@/components/service/microsoft/microsft-carousel'
import NetSuiteCards from '@/components/service/oracle-net-suite/netsuite-cards'
import OracleOneStopShop from '@/components/service/oracle-net-suite/oracle-one-stop-shop'
import PinkSection from '@/components/service/pink-section'
import { ons_service, ons_service_black, oracle_service, oracle_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'
import { MicrosoftCarouselData } from '@/data/microsoft-carousel'
import React from 'react'

const OracleNetSuite = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Engineering AI-powered NetSuite Solutions"}
                para={"Helping companies by implementing NetSuite with the latest AI capabilities and customized AI apps."}
                image={"/service/FAO/FAO_hero.svg"}
                image_className="md:w-[500px] md:h-[300px] xl:w-[528.08px] xl:h-[400px]"
                button_text="Connect with our Experts"
            />
            <div className='max-w-full 2xl:max-w-[1440px] mx-auto '>
                <ERPSolutionsBottomSection para='Watch this on-demand webinar to discover how AI can drive real business outcomes and prepare your organization for the future of finance. Make AI your competitive edge.' arrow={true} className='flex justify-center items-center gap-5' bottomSection={ons_service} left={true} blackSection={ons_service_black} />
            </div>
            <OracleOneStopShop />
            <NetSuiteCards />
            <MicrosoftCarousel MicrosoftCarouselData={MicrosoftCarouselData} title={"Connect Your Favorite App to NetSuite Instantly"} para={"We offer pre-built NetSuite integrations for eCommerce platforms, CRMs, marketplaces, payment gateways, and 3PLs. Need something custom? We’ve got that too—with fast deployment and minimal coding."} />
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

export default OracleNetSuite
