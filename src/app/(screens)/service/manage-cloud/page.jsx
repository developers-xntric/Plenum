import BrandSlider from '@/components/common/brand-slider';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import ERPServicesEast from '@/components/service/ERP-Cosultant/ERP-services-east';
import Service_Inner_Hero from '@/components/service/ERP-Cosultant/hero';
import { service_brand_icons } from '@/data/brand-slider-icons-data';
import { bc_service, cloud1, cloud2, cloudbottom1, cloudbottom2 } from '@/data/erp-consulting-service';
import { cardData } from '@/data/home-blog';
import ArticleSlider from "@/components/common/article-slider";
import ERPC2 from '@/components/service/ERP-Cosultant/ERPC2';
import { ERPAccordin } from '@/components/common/accordinService';
import { cloud, cloudAccor2 } from '@/data/services';
import { testimonials } from '@/data/home-testimonials';

export const metadata = {
    title: 'Scalable, Secure & 24/7 Cloud Management Solutions',
    description: "Get expert-managed cloud services with 24/7 support, scalability, and security.",
    alternates: {
        canonical: 'https://plenum-tech.com/service/manage-cloud',
    },
};


const ManageCloud = () => {
    return (
        <div>
            <Service_Inner_Hero
                heading={"Managed Cloud Services in Dubai and Middle East"}
                para={"Smart Infrastructure. Secure Delivery. AI-Ready from Day One. At Plenum, we help enterprises modernize their cloud ecosystem using Azure, AWS and our in-house AI platform, Momentum. From architecture and cost optimization to 24x7 support and compliance, we manage everything so you can scale faster with intelligence built in."}
                image={"/service/MC/hero.png"}
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
                para={"Every cloud transformation begins with the foundation migration. At Plenum, we simplify the transition from legacy infrastructure to cloud-native environments by assessing your current systems, minimizing disruptions, and ensuring long-term scalability using AWS and Momentum."}
                heading={"Cloud Setup & Migration Move with Confidence"}
                image={"/service/MC/MC2.svg"}
                para_className={"xl:w-[120%]"}
                para2={'We provide hyper-care support, real-time rollback planning, and continuous validation to ensure every moved asset is performing optimally in its new cloud environment. The end result? A stable, secure, and scalable foundation for future innovation.'}
            />
            <ERPServicesEast para={"We’ve carefully structured our service offerings to cater to both technical and business teams, ensuring clarity, usability, and long-term value."} heading={"Plenum Managed Cloud Services"} activeState={"Saudi Arabia"} />
            <ERPAccordin
                isbottom={false} isAccordin={true} outside={false} items={cloud} className='flex justify-center  items-center gap-10 lg:gap-5 lg:flex-row-reverse flex-col pt-10 lg:py-0' bottomSection={cloudbottom1} left={false} blackSection={cloud1} />
            <Testimonials testimonials={testimonials} />
            <ERPAccordin isbottom={false} isAccordin={true} outside={false} items={cloudAccor2} className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={cloudbottom2} left={true} blackSection={cloud2} />
            <ArticleSlider className={'pt-20'} />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world." cardData={cardData} />
        </div>
    )
}

export default ManageCloud;
