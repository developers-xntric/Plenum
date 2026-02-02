import BrandSlider from '@/components/common/brand-slider';
import { ERPSolutionsBottomSection } from '@/components/common/solutions';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import ERPServicesEast from '@/components/service/ERP-Cosultant/ERP-services-east';
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import { blackSection3, blackSection4, bottomSection, bottomSection2 } from '@/data/erp-consulting-service';
;
import ArticleSlider from "@/components/common/article-slider";
import ERPC2 from '@/components/service/ERP-Cosultant/ERPC2';

import Script from 'next/script';
export const metadata = {
    title: 'Top ERP Consulting and Implementation Services ',
    description: 'Streamline your business operations with expert ERP consulting and implementation services. ',
    alternates: {
        canonical: 'https://plenum-tech.com/service/ERP-consulting',
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ERP Consulting",
    "description": "Expert ERP consulting services including implementation, migration, and optimization tailored for your business.",
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
                "name": "ERP Consulting",
            }
        ]
    },
    "potentialAction": {
        "@type": "ReadAction",
        "target": ["https://plenum-tech.com/service/ERP-consulting"]
    },
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://plenum-tech.com/service/ERPC/ERPC-Hero.svg",
            "width": 1200,
            "height": 630,
            "caption": "ERP Consulting and Implementation in Dubai and Middle East"
        },
    ],
}


const ERPConsulting = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Service_Inner_Hero
                heading={"ERP Consulting and Implementation in Dubai and Middle East"}
                para={"We are Microsoft business central + AI for Intelligent enterprise ops we architect, implement and optimize Microsoft D365 ERP systems with a focus on automation, insights, and integrated workflows. With our copilot studio capabilities and our inhouse on premise product SecureGPT®  built in, your ERP becomes a smart assistant empowering finance, operations, and procurement teams. "}
                image={"/service/ERPC/ERPC-Hero.svg"}
                is_space_in_image={false}
                isERP={true}
                isBottomButton={false}
                heading_className={"xl:max-w-[600px]"}
                para_className={"xl:w-[90%]"}

            />
            {/* Upadated code new code  */}
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 lg:pb-16 pb-10  lg:py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <ERPC2
                para={"We believe that ERP implementation isn’t just a software installation, it’s a strategic business transformation. Our seasoned consultants understand industry-specific challenges and align ERP solutions with your business goals to optimize workflows, increase efficiency, and improve ROI. Whether you’re adopting a new system or upgrading your current one, our expert ERP consultants help you make informed decisions, ensuring a seamless transition and long-term value."}
            />
            <ERPServicesEast para={"Our ERP implementation experts provide the strategic guidance and technical expertise needed to modernize operations, increase efficiency, and achieve long-term success."} heading={"ERP Consulting and Implementation in the Middle East"} activeState={"UAE"} />

            <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' blackSection={blackSection3} bottomSection={bottomSection2} left={false} />

            <ERPSolutionsBottomSection className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={bottomSection} left={true} blackSection={blackSection4} />
            <ArticleSlider className={'pt-20'} />

            <Blog heading='Discover Our Blog' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." />
        </div>
    )
}

export default ERPConsulting;
