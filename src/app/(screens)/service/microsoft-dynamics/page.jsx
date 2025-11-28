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
import { testimonials } from '@/data/home-testimonials'
import { MicrosoftCarouselData } from '@/data/microsoft-carousel'
import ArticleSlider from "@/components/common/article-slider";
import { Blog } from '@/components/homepage/blog'
import { md_solutions } from '@/data/mobility-solutions'
import { services } from '@/data/microsoft'
import Head from 'next/head'
import Script from 'next/script'
// import OracleOneStopShop from '@/components/service/oracle-net-suite/oracle-one-stop-shop'


export const metadata = {
    title: 'Explore Microsoft Dynamics 365 Solutions with ERP & CRM Experts ',
    description: "Discover tailored Microsoft Dynamics solutions your certified Microsoft Dynamics partner in the UAE.",
    alternates: {
        canonical: 'https://plenum-tech.com/service/microsoft-dynamics',
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Microsoft Dynamics",
    "description": "Microsoft Dynamics solutions for business growth and efficiency.",
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
                "name": "Microsoft Dynamics",
            }
        ]
    },
    "potentialAction": {
        "@type": "ReadAction",
        "target": ["https://plenum-tech.com/service/microsoft-dynamics"]
    },
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://plenum-tech.com/service/MD/MD_hero.svg",
            "width": 1200,
            "height": 630,
            "caption": "Microsoft Dynamics Solutions Tailored to Your Business"
        },
    ],
}



const MicrosoftDynamics = () => {
    return (
        <div>
            <div className='mt-10'>
                <Script
                    id="schema-script"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
                <Service_Inner_Hero
                    heading={"Microsoft Dynamics Solutions Tailored to Your Business"}
                    para={"At Plenum Technologies, we offer Microsoft Dynamics 365 Solutions that empower organizations to streamline operations, enhance productivity, and achieve sustainable growth."}
                    image={"/service/MD/MD_hero.svg"}
                    image_className="lg:w-[500px] lg:h-[300px] xl:w-[650px] xl:h-[500px]"
                    button_text="Connect with our Experts"
                    heading_className={"lg:max-w-[350px] 2xl:max-w-[370px] "}
                    para_className={"lg:max-w-[400px] xl:max-w-[390px]"}

                />
            </div>
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-10'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <MicrosoftDynamic heading1='Comprehensive Microsoft ' heading2='Dynamics Services' para='For nearly two decades, we’ve been at the forefront of driving digital transformation and customer success through tailored Microsoft Dynamics solutions. With a deep partnership alongside Microsoft, we deliver results that are strategic, scalable, and built for long-term value' services={services}
                button={"Get in touch now"}
                className='flex flex-col items-center text-center'
                paraClass='px-4'
                isCenter={true}
                ismicrosoft={true}

            />
            <MicrosoftCarousel MicrosoftCarouselData={MicrosoftCarouselData} title={"Let’s Transform Your Business Together"} para={"Plenum redefines integration by offering intelligent, future-ready solutions that streamline how your business operates. Effortlessly link your applications with Microsoft Dynamics to simplify workflows, eliminate manual processes, and boost overall efficiency"} />


            <MobilitySolutions heading1={"Mobile-First Solutions for"} heading2={"Microsoft Dynamics"} para={"With Plexian's innovative mobile apps, created and delivered by a Certified Microsoft Application Developer, lock the full potential of Microsoft Dynamics 365, NAV, AX, and Business Central. Our complete mobility solutions provide industry-wide optimization of company processes, increased productivity, and agility."} className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"} solutions={md_solutions} />
            <MicrosoftPartner />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' bottomSection={md_service} left={false} blackSection={md_service_black} />
            <div className='pt-20'>
                <PinkSection
                    heading={"Empowering Your CRM Strategy with Plenum"}
                    text={"As a trusted Microsoft Dynamics partner, Plenum delivers cloud-based Dynamics 365 CE/CRM solutions that are purpose-built to elevate your business. From enhancing customer relationships to optimizing your sales funnel, our solutions help you centralize customer data and communications"}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <Testimonials testimonials={testimonials} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog Articles' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." />
        </div>
    )
}

export default MicrosoftDynamics
