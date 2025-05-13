import BrandSlider from '@/components/common/brand-slider';
import { ERPSolutionsBottomSection } from '@/components/common/solutions';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import ERPServicesEast from '@/components/service/ERP-Cosultant/ERP-services-east';
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import { blackSection, blackSection2, bottomSection, bottomSection2 } from '@/data/erp-consulting-service';
import { cardData } from '@/data/home-blog';
import { testimonials } from '@/data/home-testimonials';
import ArticleSlider from "@/components/common/article-slider";
import ERPC2 from '@/components/service/ERP-Cosultant/ERPC2';


const DigitalExperiences = () => {
    return (
        <div>
            <Service_Inner_Hero
                heading={"Engineered for Performance, Crafted for Evolution"}
                para={"We believe that in a world where digital shapes first impressions, experience is paramount. Digital is more than just a tool for performance, it’s a strategic ecosystem. From SEO and paid media to data-driven optimization, we craft digital strategies that evolve in real-time, foster meaningful connections, and drive measurable growth."}
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
            para2={"Our custom digital learning modules are designed for mobile-first use, micro-learning, AI assistants, gamification, progress analytics, and LMS integration."}
                para={"In the digital era, it's not just about visibility. It’s about being discovered, staying relevant, and leaving a lasting impression. Through precise targeting and seamless omni-channel storytelling, we ensure brands appear with purpose and grow with impact. This is digital redefined: powered by performance, driven by content, and guided by insights."}
                image={"/service/DE/DE2.svg"}
                para_className={"xl:w-[120%]"}
                heading={"The Future is Our Strength. 360° is Our Mastery."}
            />
            <ERPServicesEast  para={"Plenum crafts fast, secure digital experiences for the Middle East and UK—built for mobile, bilingual use, and local compliance."} heading={"Digital Experiences Tailored for the Middle East and UK Markets"} activeState={"Egypt"} />

            <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' blackSection={blackSection2} bottomSection={{
                heading: "Custom Digital Solutions",
                Input: ["Mobile-First Business Apps", "Conversational Interfaces with SecureGPT"],
                button: "View All",
                img: "/service/DE/service2.svg"
            }} left={false} />
            <Testimonials testimonials={[
                {
                    id: 1,
                    quote:
                        "“The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what we do.”",
                    author: "Maroun Najjar",
                    position: "Head Of Design",
                    socialLink: "https://linkedin.com",
                },
                {
                    id: 2,
                    quote:
                        "“The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what we do.”",
                    author: "Maroun Najjar",
                    position: "Head Of Design",
                    socialLink: "https://linkedin.com",
                },
                {
                    id: 3,
                    quote:
                        "“The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what we do.”",
                    author: "Maroun Najjar",
                    position: "Head Of Design",
                    socialLink: "https://linkedin.com",
                },
                {
                    id: 4,
                    quote:
                        "“The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what we do.”",
                    author: "Maroun Najjar",
                    position: "Head Of Design",
                    socialLink: "https://linkedin.com",
                },

            ]} />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={{
                heading: "Data-Driven and Efficient Business Operations",
                Input: ["Embedded Dashboards & BI", "UX Optimization & Analytics"],
                button: "View All",
                img: "/service/DE/service.svg"
            }} left={true} blackSection={blackSection} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
        </div>
    )
}

export default DigitalExperiences;
