import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

import { ERPAccordin } from '@/components/common/accordinService'
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero'
import MicrosoftCarousel from '@/components/service/microsoft/microsft-carousel'
import NetSuiteCards from '@/components/service/oracle-net-suite/netsuite-cards'
import OracleOneStopShop from '@/components/service/oracle-net-suite/oracle-one-stop-shop'
import PinkSection from '@/components/service/pink-section'

import { Blog } from '@/components/homepage/blog'
import { ons_service, ons_service_black } from '@/data/erp-consulting-service'
import { testimonials } from '@/data/home-testimonials'
import { MicrosoftCarouselData } from '@/data/microsoft-carousel'
import { oracleNetSuite } from '@/data/services'
import Script from 'next/script'

const Testimonials = dynamic(() => import('@/components/homepage/testimonial'))
const ArticleSlider = dynamic(() => import('@/components/common/article-slider'))

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Oracle NetSuite",
  "description": "Oracle NetSuite ERP solutions for business growth and efficiency.",
  "provider": {
    "@type": "Organization",
    "name": "Plenum Tech Solutions",
    "url": "https://plenum-tech.com"
  },
  "serviceType": "ERP Consulting",
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "53",
    "bestRating": "5",
    "worstRating": "1"
  }
}


const OracleNetSuite = () => {
    return (
        <div>
            <Head>
                <title>Oracle NetSuite ERP Solutions Consulting & Integration</title>
                <meta name="description" content="Plenum is a leading Oracle NetSuite partner in Dubai, offering ERP implementation tailored for UAE businesses." />
                <link rel="canonical" href="https://plenum-tech.com/service/oracle-net-suite" />

                {/* Open Graph Meta */}
                <meta property="og:title" content="Oracle NetSuite ERP Solutions Consulting & Integration" />
                <meta property="og:description" content="Plenum is a leading Oracle NetSuite partner in Dubai, offering ERP implementation tailored for UAE businesses." />
                <meta property="og:url" content="https://plenum-tech.com/service/oracle-net-suite" />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Oracle NetSuite ERP Solutions Consulting & Integration" />
                <meta name="twitter:description" content="Plenum is a leading Oracle NetSuite partner in Dubai." />
                <meta name="twitter:image" content="/og-image.png" />

                {/* JSON-LD Structured Data */}
                <Script
                    id="schema-service-cloud"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>

            {/* ✅ Hero Section with h1 */}
            <New_Service_Inner_Hero
                heading={
                    "Oracle NetSuite:Powerful ERP for Growth"
                }
                para="Whether you're a growing SME or an established enterprise, our Oracle NetSuite services streamline operations, boost productivity, and improve visibility."
                image="/service/ONS/banner.svg"
                image_className="md:w-[500px] md:h-[300px] mt-6 xl:w-[480.08px] xl:h-[500px]"
                button_text="Consult our experts today"
                heading_className="lg:w-[85%] mt-10 lg:mt-0 lg:max-w-[600px] leading-12"
                para_className="lg:w-[350px]"
            />

            {/* ✅ ERP Accordian */}
            <ERPAccordin
                items={oracleNetSuite}
                className="flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0"
                para="As experienced NetSuite implementation partners, we design and deploy ERP solutions that align with your operational goals. Our phased implementation approach minimizes downtime and ensures smooth migration."
                bottomSection={ons_service}
                left={true}
                blackSection={ons_service_black}
            />

            {/* ✅ Components */}
            <OracleOneStopShop />
            <NetSuiteCards />

            <MicrosoftCarousel
                MicrosoftCarouselData={MicrosoftCarouselData}
                title="Seamless Oracle NetSuite Integration with Leading Business Apps"
                para="Accelerate your operations by connecting Oracle NetSuite with your favorite tools, eCommerce platforms, CRMs, marketplaces, payment gateways, and 3PLs."
            />

            <div className="pt-20">
                <PinkSection
                    heading="Ready To Supercharge Your AI Workflow?"
                    text="Unlock the full potential of your business with smarter AI automation. Contact us anytime—our team is available 24×7 to schedule a personalized consultation and show you how Momentum AI can elevate your workflow, efficiency, and performance."
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>

            {/* ✅ Lazy-loaded components */}
            <Testimonials testimonials={testimonials} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" />
        </div>
    )
}

export default OracleNetSuite
