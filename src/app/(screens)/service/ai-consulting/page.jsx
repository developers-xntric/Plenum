import BrandSlider from '@/components/common/brand-slider';
import { ERPSolutionsBottomSection } from '@/components/common/solutions';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import ERPServicesEast from '@/components/service/ERP-Cosultant/ERP-services-east';
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import { ai1, ai2, aiSection1, aiSection2, blackSection, blackSection2, bottomSection, bottomSection2 } from '@/data/erp-consulting-service';
import { cardData } from '@/data/home-blog';
import { testimonials } from '@/data/home-testimonials';
import ArticleSlider from "@/components/common/article-slider";
import ERPC2 from '@/components/service/ERP-Cosultant/ERPC2';


const AiConsulting = () => {
    return (
        <div>
            <Service_Inner_Hero
                heading={"AI Consulting, Governance and Implementation Services"}
                para={"At Plenum, we operationalize responsible AI, built for the enterprise From identifying the right use cases to building compliant models and governing them across the lifecycle, we bring AI to life using AWS and Azure Open AI services, and our inhoused no-code AI orchestration platform, Momentum."}
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

                para2={'This ensures you’re not just deploying AI—you’re doing it where it matters, with buy-in from every stakeholder.'}
            />
            <ERPServicesEast para={"At Plenum, we enable companies to use artificial intelligence to release actual economic value. We start with high-impact use cases, then risk analyses, artificial intelligence policy development, and platform architecture."} heading={"Plenum AI Advisory, Governance & Execution"} activeState={"Qatar"} classNamePara={"xl:w-[700px]"}/>
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' blackSection={ai1} bottomSection={aiSection1} left={false} />
            <Testimonials testimonials={testimonials} />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={aiSection2} left={true} blackSection={ai2} />

            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world." cardData={cardData} />
        </div>
    )
}

export default AiConsulting;
