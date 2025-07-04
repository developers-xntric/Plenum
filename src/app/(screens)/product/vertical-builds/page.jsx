import ArticleSlider from "@/components/common/article-slider"
import BrandSlider from "@/components/common/brand-slider"
import { Blog } from "@/components/homepage/blog"
import ProductHero from "@/components/product/product-hero"
import PinkSection from "@/components/service/pink-section"
import ServiceContact from "@/components/service/service-contact"
import { product_brand_icons } from "@/data/brand-slider-icons-data"
import { cardData } from "@/data/home-blog"
import AISolutions from "@/components/product/AI-solutions"
import { TabsSection } from "@/components/product/tab-section"

const tabImages = [
    "/product/image.svg",
    "/product/image-1.svg",
    "/product/image-2.svg",
    "/product/image-3.svg",
    "/product/image-4.svg",
]

const values = [
    {
        title: "Tasks",
        description: "Asing tasks to project members and track the status.​",
    },
    {
        title: "Project",
        description: "Keep a track of all your projects in most simple way.​",
    },
    {
        title: "Reports​",
        description: "Reports section to analyse what's working and what's not for your business.​",
    },
    {
        title: "Messages​",
        description: "Real time message sections helps team members to discuss quickly with eachother.​",
    },
    {
        title: "Tickets",
        description: "Simplify every experience and put customers back in control by offering the support they expect.​",
    },
]

const tabImages2 = [
    "/product/image-5.svg",
    "/product/image-7.svg",
    "/product/image-9.svg",
    "/product/image-6.svg",
    "/product/image-8.svg",
]

const values2 = [
    {
        title: "Super Admin​",
        description: "The Super Admin has full access across all modules and branches, with the ability to configure settings, assign roles, manage permissions, and oversee system-wide operations.​​",
    },
    {
        title: "Patients",
        description: "Secure digital records with visit history, prescriptions, lab reports, and upcoming appointments  all in one place.​​",
    },
    {
        title: "Labs",
        description: "Up to 50% quicker processing with real-time sample tracking.​​",
    },
    {
        title: "Doctors",
        description: "Access complete patient history, conduct live consultations, update visit reports, and view lab results in real-time anytime, anywhere.​​",
    },
    {
        title: "Receptionist",
        description: "Quick and easy patient creation, appointment booking, and queue management  all in a few clicks.​​",
    },
]

export const metadata = {
    title: ' Vertical Builds: Industry-Focused Innovative Solutions',
    description: "Industry-specific tech solutions that drive growth, from patient care to SEO and project optimization.",
    alternates: {
        canonical: 'https://plenum-tech.com/product/vertical-builds',
    },
};


const VerticalBuilds = () => {
    return (
        <div>
            <ProductHero
                heading={"Vertical Builds"}
                isLogo={false}
                bgImage='/product/m_hero.svg'
                mobileBgImage={'/product/m_hero_mobile.svg'}
                para1={"Driving operational excellence across diverse industries with innovative solutions, from streamlined project execution and intelligent patient care systems to data-driven SEO strategies that deliver measurable growth."}
                para2={"Vertical Builds is engineered to simplify and accelerate digital solution development across industries. We deliver low-code systems that address the unique needs of each business vertical."}
            />
            <div className="2xl:max-w-[1440px] mx-auto w-[93%] xl:w-[90%] 2xl:w-[90%] py-10">
                <BrandSlider
                    brand_icons={product_brand_icons}
                    text={"Trusted by world's most exciting brands"}
                    width={150}
                />
            </div>
            <AISolutions title={"Develop Scalable Vertical Solutions. No Coding Required "}
                paragraph={"Vertical Builds empowers your teams to launch customized, industry-ready applications through a low-code framework, cutting development time, reducing costs, and accelerating go-to-market across sectors."}
                video={"/product/momentum2.mp4"} />
            <div id="project-management">

                <TabsSection values={values} tabImages={tabImages} />
            </div>
            <div id="hospital" className="xl:pb-20">
                <TabsSection para={"A comprehensive software solution designed to digitize and streamline every aspect of hospital operations, from patient care to backend administration.​"} heading={"Hospital Management System"} values={values2} tabImages={tabImages2} direction={"row-reverse"} />
            </div>
            <ArticleSlider />
            <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
            <div className='py-10'>
                <PinkSection
                    heading={"Ready To Supercharge Your AI Workflow?"}
                    text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <ServiceContact />
        </div>
    )
}

export default VerticalBuilds

