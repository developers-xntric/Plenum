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
import { bottomSection, oracle_service, oracle_service_black, OracleBlack } from '@/data/erp-consulting-service'
import { testimonials } from '@/data/home-testimonials'
import { oracle } from '@/data/services'
import Head from 'next/head'
import Script from 'next/script'


export const metadata = {
    title: 'Outstanding Oracle Cloud ERP Experts in Dubai',
    description: "Discover expert Oracle Cloud ERP services to streamline operations without any additional hassle. ",
    alternates: {
        canonical: 'https://plenum-tech.com/service/oracle',
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Oracle",
    "description": "Oracle ERP solutions for business growth and efficiency.",
    "provider": {
        "@type": "Organization",
        "name": "Plenum Tech Solutions",
        "url": "https://plenum-tech.com",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971 54 308 9222",
            "contactType": "Sales",
            "areaServed": "AE",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.facebook.com/people/Plenum-Technologies/",
            "https://www.instagram.com/plenum.technologies/"
        ]
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
    },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": "https://plenum-tech.com/#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Oracle",
            }
        ]
    },
    "potentialAction": {
        "@type": "ReadAction",
        "target": ["https://plenum-tech.com/service/oracle"]
    },
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://plenum-tech.com/service/Oracle/oracle.svg",
            "width": 1200,
            "height": 630,
            "caption": "Oracle ERP Solutions Empowered by Oracle Cloud ERP"
        },
    ],
}

const Oracle = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className='mt-10'>
                <Service_Inner_Hero
                    heading={"Oracle ERP Solutions Empowered by Oracle Cloud ERP"}
                    para={"Whether you're upgrading legacy systems or embarking on your digital transformation journey, our tailored solutions enhanced by Oracle Cloud ensure you stay competitive in an evolving marketplace."}
                    image={"/service/Oracle/oracle.svg"}
                    image_className="lg:w-[500px] md:h-[300px] xl:w-[600px] xl:h-[450px]"
                    button_text="Connect with our Experts"
                    heading_className={"lg:max-w-[400px] 2xl:max-w-[500px] "}
                />
                <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 pt-10 lg:pt-5 pb-10'>
                    <BrandSlider
                        text={"Trusted by world's most exciting brands"}
                        brand_icons={service_brand_icons} />
                </div>
                <ERPAccordin items={Oracleitems} para='From procurement to financial planning, Oracle ERP modules offer functionality that spans every corner of your enterprise. Combined with our expertise, you’ll have a customized tech stack aligned with your goals.' arrow={true} className='flex justify-center items-center gap-10 lg:gap-5 2xl:gap-10 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={oracle_service} left={true} blackSection={oracle_service_black} />
                <OracleResourcePlanning />

                <Finance_Opearations_Service data={oracle} heading={"Impact of Oracle Cloud ERP and Oracle Fusion Finance"} para={"Explore our latest insights on Oracle’s innovation in enterprise resource planning, financial management, and workflow optimization. Stay ahead with fresh perspectives that shape the future of business."} />

                <ERPSolutionsBottomSection className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={bottomSection} left={true} blackSection={OracleBlack} />
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
                <Blog heading='Discover Our Blog' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." />
            </div>
        </div>
    )
}

export default Oracle
