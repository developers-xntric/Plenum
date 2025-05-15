"use client"
import ArticleSlider from "@/components/common/article-slider"
import BrandSlider from "@/components/common/brand-slider"
import { Blog } from "@/components/homepage/blog"
import ProductHero from "@/components/product/product-hero"
import PinkSection from "@/components/service/pink-section"
import ServiceContact from "@/components/service/service-contact"
import { product_brand_icons } from "@/data/brand-slider-icons-data"
import { cardData } from "@/data/home-blog"
import { useState } from "react"
import Image from "next/image"
import AISolutions from "@/components/product/AI-solutions"

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
    "/product/image-6.svg",
    "/product/image-7.svg",
    "/product/image-8.svg",
    "/product/image-9.svg",
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
            <TabsSection values={values} tabImages={tabImages} />
            <div className="md:pb-16 lg:pb-20">
                <TabsSection values={values2} tabImages={tabImages2} direction={"row-reverse"} />
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

function TabsSection({ values, tabImages, direction }) {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section>
            <div className='2xl:max-w-[1440px] w-[90%] mx-auto lg:space-y-20 py-16 md:py-10 lg:py-16'>
                <div className="text-center mb-20">
                    <h2 className='text-[36px] text-center lg:text-[50px] text-secondary font-semibold tracking-[-1.5px] md:tracking-tight home-section-headings  leading-[38px] lg:leading-14 mx-auto md:max-w-[50%]'>Purpose-Built Platforms. Less Code. Smarter Results</h2>
                    <p className='text-secondary text-center font-["Archivo"] lg:max-w-[95%] xl:max-w-[48.5%] mx-auto 2xl:max-w-[50%] my-4 opacity-75 text-[15px] xl:text-[18px]'>
                        Vertical Builds delivers custom-fit solutions for diverse industries, faster, smarter, and more efficiently. Empower your teams to launch scalable systems without the complexity of traditional development.
                    </p>
                </div>

                <div className={`flex lg:flex-${direction || "row"} flex-col gap-10 w-full justify-between items-start lg:h-[650px]`}>
                    {/* Left side - Tabs */}
                    <div className="bg-white rounded-lg lg:w-[45%] font-['Archivo'] w-full">
                        {values.map((value, index) => (
                            <div key={index}>

                                <div
                                    key={index}
                                    className={`p-4 md:p-6 cursor-pointer transition-all duration-200 hover:bg-[#F4F4F4] ${activeTab === index ? "bg-[#EFEFEF] rounded-[20px]" : ""}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <h3 className="text-[20px] lg:text-[26px] tracking-tighter font-semibold home-section-headings text-secondary">
                                        {value.title}
                                    </h3>
                                    <p className="text-secondary font-normal text-[16px] lg:text-[18px] mt-1 opacity-60 tracking-tight">
                                        {value.description}
                                    </p>

                                </div>
                                {/* Accordion-style image for mobile */}
                                {activeTab === index && (
                                    <div className="mt-4 lg:hidden">
                                        <Image
                                            src={tabImages[index] || "/placeholder.svg"}
                                            alt={value.title}
                                            width={800}
                                            height={800}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right side - image for desktop only */}
                    <div className="hidden lg:flex items-center h-full justify-center lg:w-1/2 relative">
                        <Image
                            src={tabImages[activeTab] || "/placeholder.svg"}
                            alt="Project criteria"
                            width={1400}
                            height={1400}
                            className="w-full h-full object-contain"
                            priority={activeTab === 0}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
