import ArticleSlider from "@/components/common/article-slider"
import BrandSlider from "@/components/common/brand-slider"
import { Blog } from "@/components/homepage/blog"
import AISolutions from "@/components/product/AI-solutions"
import EndToEndAI from "@/components/product/end-to-end"
import ProductHero from "@/components/product/product-hero"
import StartSmallWithAI from "@/components/product/start-small-with-AI"
import MicrosoftDynamic from "@/components/service/microsoft/microsoft-dynamic"
import PinkSection from "@/components/service/pink-section"
import ServiceContact from "@/components/service/service-contact"
import { service_brand_icons } from "@/data/brand-slider-icons-data"
import { momentumaiservices } from "@/data/momentum-ai-service"
import Head from "next/head"
import Script from "next/script"

export const metadata = {
    title: 'Momentum AI by Plenum | Transform Business with AI',
    description: "Leverage Momentum AI to boost operational efficiency, automate processes, and drive intelligent decision-making at scale.",
    alternates: {
        canonical: 'https://plenum-tech.com/product/momentum-ai',
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Momentum AI",
    "description": "AI-powered productivity and process automation platform by Plenum Tech Solutions.",
    "brand": {
        "@type": "Organization",
        "name": "Plenum Tech Solutions"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": "34",
        "bestRating": "5",
        "worstRating": "1"
    }
}


const MomentumAI = () => {
    return (

        <div>
        <Head>
    <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Product",
              "url": "https://plenum-tech.com/product",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "56",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          `}
        </script>
            </Head>
            <Script
                id="schema-script"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <ProductHero isLogo={false} bgImage='/product/m_hero.svg' mobileBgImage={'/product/m_hero_mobile.svg'} para1={"Unlock enterprise-grade AI solutions that will fuel accuracy, speed, and additional intelligent decision-making and are designed to grow with your supply chain, retail, and industrial operations."} />
            <div className="2xl:max-w-[1440px] mx-auto w-[93%] xl:w-[90%] 2xl:w-[90%] py-10">
                <BrandSlider brand_icons={service_brand_icons} text={"Trusted by world's most exciting brands"} />
            </div>

            <AISolutions title={"Create Comprehensive AI Solutions Without Coding"}
                paragraph={"Turn ideas into intelligent solutions, without any technical expertise. Build and launch AI-driven processes with ease, all through a user-friendly no-code interface."}
                image={'/images/product-momentum-AI/AI-solutions.webp'} />
            <EndToEndAI />
            <MicrosoftDynamic heading1='What Can You Do With Momentum?' heading2='' para='Momentum AI is an integrated suite of AI software platforms purpose-built to automate every stage of the AI lifecycle from data ingestion to model deployment. Designed to support enterprise scalability and flexibility, Momentum empowers businesses with intelligent AI automation tools that streamline processes and reduce development time.' services={momentumaiservices}
                className='flex flex-col item-ce 2xl:relative 2xl:left-12'
                bgColor='black'
                paraClass={'lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[95%]'}
                gridcol='md:grid-cols-2 lg:grid-cols-4 gap-x-0   '
                oneCardMobile={true}
            />
            <StartSmallWithAI />
            <ArticleSlider className={'pt-10'} paragraph={'Insights & practical knowledge designed to help you navigate the digital landscape effectively.'} />
            <Blog heading='Discover Our Blogs' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" />
            <div className='py-10'>
                <PinkSection
                    heading={"Ready To Supercharge Your AI Workflow?"}
                    text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <ServiceContact />

        </div>
    )
}

export default MomentumAI
