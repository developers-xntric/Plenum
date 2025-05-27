import BrandSlider from '@/components/common/brand-slider';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import ERPServicesEast from '@/components/service/ERP-Cosultant/ERP-services-east';
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import { digital1, digital2, digitalBottom1, digitalBottom2 } from '@/data/erp-consulting-service';
import { cardData } from '@/data/home-blog';
import { testimonials } from '@/data/home-testimonials';
import ArticleSlider from "@/components/common/article-slider";
import ERPC2 from '@/components/service/ERP-Cosultant/ERPC2';
import { ERPAccordin } from '@/components/common/accordinService';
import { digitalItem1, digitalItem2 } from '@/data/services';


export const metadata = {
    title: 'Transformative Digital Experiences and Unmatched Solutions',
    description: "Create seamless, user-centric digital experiences with Plenum’s UI/UX, web, and mobile solutions.",
    alternates: {
        canonical: 'https://plenum-tech.com/service/digital-experiences',
    },
};



const DigitalExperiences = () => {
    return (
        <div>
            <Service_Inner_Hero
                heading={"Engineered for Performance, Crafted for Evolution"}
                para={"We believe that in a world where digital shapes first impressions, experience is paramount. Digital is more than just a tool for performance, it’s a strategic ecosystem. From SEO and paid media to data driven optimization, we craft digital strategies that evolve in real-time, foster meaningful connections, and drive measurable growth."}
                image={"/service/DE/hero.png"}
                is_space_in_image={false}
                isERP={true}
                isBottomButton={false}
                heading_className={"xl:max-w-[600px]"}
                para_className={"xl:w-[88%]"}
            />
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 lg:pb-16 pb-10  lg:py-16'>
                <BrandSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={service_brand_icons} />
            </div>
            <ERPC2
                para2={"Our custom digital learning modules are designed for mobile-first use, micro learning, AI assistants, gamification, progress analytics, and LMS integration."}
                para={"At Plenum, we craft intelligent digital platforms that are fast, intuitive, and secure. From public-facing websites to employee portals and AI-powered service apps, we design and build responsive, mobile-ready, and enterprise-integrated experiences that work across every touchpoint. "}
                image={"/service/DE/DE2-new.svg"}
                para_className={"xl:w-[120%]"}
                heading={"Smart, Seamless, and Scalable"}
            />
            <Testimonials testimonials={testimonials} />
            <ERPAccordin isbottom={true} isAccordin={true} outside={false} items={digitalItem1} className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row-reverse flex-col pt-10 lg:py-0' bottomSection={digitalBottom1} left={false} blackSection={digital1} />
            <ERPAccordin isbottom={true} isAccordin={true} outside={false} items={digitalItem2} className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={digitalBottom2} left={true} blackSection={digital2} />
            <ERPServicesEast para={"Plenum crafts fast, secure digital experiences for the Middle East and UK—built for mobile, bilingual use, and local compliance."} heading={"Digital Experiences Tailored for the Middle East and UK Markets"} activeState={"Egypt"} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
        </div>
    )
}

export default DigitalExperiences;
