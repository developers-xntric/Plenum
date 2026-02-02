import BrandSlider from '@/components/common/brand-slider';
import { ERPSolutionsBottomSection } from '@/components/common/solutions';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import ERPServicesEast from '@/components/service/ERP-Cosultant/ERP-services-east';
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import { ai1, ai2, aiSection1, aiSection2, blackSection, blackSection2, bottomSection, bottomSection2 } from '@/data/erp-consulting-service';
;
import ArticleSlider from "@/components/common/article-slider";
import ERPC2 from '@/components/service/ERP-Cosultant/ERPC2';
import Script from 'next/script';

export const metadata = {
    title: 'Top Notch AI Consulting, Governance & Implementation',
    description: "Explore expert AI consulting, responsible governance, and end-to-end implementation services. ",
    alternates: {
        canonical: 'https://plenum-tech.com/service/ai-consulting',
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Consulting",
    "description": "AI Consulting, Governance and Implementation Services",
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
                "name": "AI Consulting",
            }
        ]
    },
    "potentialAction": {
        "@type": "ReadAction",
        "target": ["https://plenum-tech.com/service/ai-consulting"]
    },
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://plenum-tech.com/service/AC/image3.svg",
            "width": 1200,
            "height": 630,
            "caption": "AI Consulting, Governance and Implementation Services"
        },

    ],
}


const AiConsulting = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Service_Inner_Hero
                heading={"AI Consulting, Governance and Implementation Services"}
                para={"At Plenum, we operationalize responsible AI, built for the enterprise From identifying the right use cases to building compliant models and governing them across the lifecycle, we bring AI to life using AWS and Azure Open AI services, and our inhoused no code AI orchestration platform, Momentum."}
                image={"/service/AC/image3.svg"}
                is_space_in_image={false}
                isERP={true}
                isBottomButton={false}
                heading_className={"xl:max-w-[600px]"}
                para_className={"xl:w-[80%]"}
            />
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 lg:pb-16 pb-10  lg:py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <ERPC2
                image={'/service/AC/ai.svg'}
                heading={'AI Strategy & Readiness Laying the Right Foundation'}
                para={"Successful AI starts with alignment. Our strategy workshops and AI readiness assessments help you identify high-impact use cases, assess data availability, and build a phased, ROI-driven roadmap."}

                para2={'This ensures you’re not just deploying AI you’re doing it where it matters, with buy-in from every stakeholder.'}
            />
            <ERPServicesEast para={"At Plenum, we enable companies to use artificial intelligence to release actual economic value. We start with high-impact use cases, then risk analyses, artificial intelligence policy development, and platform architecture."} heading={"Plenum AI Advisory, Governance & Execution"} activeState={"Qatar"} classNamePara={"xl:w-[700px]"} />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' blackSection={ai1} bottomSection={aiSection1} left={false} />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={aiSection2} left={true} blackSection={ai2} />

            <ArticleSlider className={'pt-20'} />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world." />
        </div>
    )
}

export default AiConsulting;
