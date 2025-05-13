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


const ManageCloud = () => {
    return (
        <div>
            <Service_Inner_Hero
                heading={"Managed Cloud Services in Dubai and Middle East"}
                para={"At Plenum, our Managed Cloud Services are built to empower enterprises with a powerful combination of Amazon Web Services (AWS) and Momentum, the no-code AI platform developed by Plenum."}
                image={"/service/MC/hero.png"}
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
                para={"Every cloud transformation begins with the foundation migration. At Plenum, we simplify the transition from legacy infrastructure to cloud-native environments by assessing your current systems, minimizing disruptions, and ensuring long-term scalability using AWS and Momentum."}
                heading={"Cloud Setup & Migration Move with Confidence"}
                image={"/service/MC/MC2.svg"}
                para_className={"xl:w-[120%]"}
                para2={"We provide hyper-care support, real-time rollback planning, and continuous validation to ensure every moved asset is performing optimally in its new cloud environment. The end result? A stable, secure, and scalable foundation for future innovation."}
            />
            <ERPServicesEast para={"We’ve carefully structured our service offerings to cater to both technical and business teams, ensuring clarity, usability, and long-term value."} heading={"Plenum Managed Cloud Services"} activeState={"Saudi Arabia"} />
            <ERPSolutionsBottomSection className='flex justify-center items-center gap-20 lg:flex-row-reverse flex-col pt-10 lg:py-0' blackSection={blackSection2} bottomSection={{
                heading: "Microsoft Dynamics",
                Input: ["Business Central", "Finance and Operations"],
                button: "View All",
                img: "/service/MC/service2.svg"
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
                heading: "Oracle Solutions",
                Input: ["Net Suite", "Fusion Cloud"],
                button: "View All",
                img: "/service/MC/service.svg"
            }} left={true} blackSection={blackSection} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world." cardData={cardData} />
        </div>
    )
}

export default ManageCloud;
