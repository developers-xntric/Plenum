import { ERPAccordin } from '@/components/common/accordinService'
import ArticleSlider from '@/components/common/article-slider'
import { Blog } from '@/components/homepage/blog'
import Testimonials from '@/components/homepage/testimonial'
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero'
import MicrosoftCarousel from '@/components/service/microsoft/microsft-carousel'
import NetSuiteCards from '@/components/service/oracle-net-suite/netsuite-cards'
import OracleOneStopShop from '@/components/service/oracle-net-suite/oracle-one-stop-shop'
import PinkSection from '@/components/service/pink-section'
import { oracleNetSuite } from '@/data/services'
import { ons_service, ons_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'
import { MicrosoftCarouselData } from '@/data/microsoft-carousel'
import React from 'react'

export const metadata = {
    title: 'Oracle NetSuite ERP Solutions Consulting & Integration ',
    description: 'Plenum is a leading Oracle NetSuite partner in Dubai, offering ERP implementation tailored for UAE businesses.',
    alternates: {
        canonical: 'https://plenum-tech.com/service/oracle-net-suite',
    },
};


const OracleNetSuite = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Oracle NetSuite: Powerful ERP for Growth"}
                para={"Whether you're a growing SME or an established enterprise, our Oracle NetSuite services streamline operations, boost productivity, and improve visibility."}
                image={"/service/ONS/banner.svg"}
                image_className="md:w-[500px] md:h-[300px] mt-6 xl:w-[480.08px] xl:h-[500px]"
                button_text="Consult our experts today"
                heading_className={"lg:w-[85%] mt-10 lg:mt-0 lg:max-w-[600px] leading-12"}
                para_className={" lg:w-[350px]"}
            />
            <ERPAccordin
                items={oracleNetSuite}
                className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0'
                para={"As experienced NetSuite implementation partners, we design and deploy ERP solutions that align with your operational goals. Our phased implementation approach minimizes downtime and ensures smooth migration."}
                bottomSection={ons_service} left={true} blackSection={ons_service_black}
            />

            <OracleOneStopShop />
            <NetSuiteCards />
            <MicrosoftCarousel MicrosoftCarouselData={MicrosoftCarouselData} title={"Seamless Oracle NetSuite Integration with Leading Business Apps"} para={"Accelerate your operations by connecting Oracle NetSuite with your favorite tools, eCommerce platforms, CRMs, marketplaces, payment gateways, and 3PLs."}
            />
            <div className='pt-20'>
                <PinkSection
                    heading={"Ready To Supercharge Your AI Workflow?"}
                    text={"Unlock the full potential of your business with smarter AI automation. Contact us anytime—our team is available 24×7 to schedule a personalized consultation and show you how Momentum AI can elevate your workflow, efficiency, and performance."}
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
