import { ERPAccordin } from '@/components/common/accordinService'
import ArticleSlider from '@/components/common/article-slider'
import Button from '@/components/common/button'
import { Blog } from '@/components/homepage/blog'
import Testimonials from '@/components/homepage/testimonial'
import Capabilities from '@/components/service/buisness-central/capabilities'
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero'
import MicrosoftDynamic from '@/components/service/microsoft/microsoft-dynamic'
import MobilitySolutions from '@/components/service/microsoft/mobility-solution'
import PinkSection from '@/components/service/pink-section'
import { Oracleitems } from '@/data/accordineData'
import { bc_service, bc_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'
import { businessPage } from '@/data/microsoft'
import { bc_solution } from '@/data/mobility-solutions'
import { businessSer, capabilities } from '@/data/services'

const BuisnessCentral = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Streamline Your Business With Dynamics 365 Business Central"}
                para={"Dynamics 365 Business Central is a comprehensive cloud-based ERP solution designed to help small and medium-sized businesses manage finances, streamline operations, and improve customer interactions all from one unified platform."}
                image={"/service/BC/BC_hero.svg"}
                image_className="w-full"
                button_text="Connect with our Experts"
                isSlider={true}
                heading_className={"lg:w-[88%] mt-10 lg:mt-0 lg:max-w-[550px]"}
                para_className={"lg:w-[60%] lg:w-[70%] 2xl:w-[65%]"}
            />
            <ERPAccordin isbottom={true} outside={true} items={businessSer} className='flex justify-center items-center gap-10 lg:gap-5 lg:flex-row flex-col pt-10 lg:py-0' bottomSection={bc_service} left={true} blackSection={bc_service_black} />
            <Testimonials testimonials={testimonials} />
            <ERPSolutionsAlone/>
            
            <MobilitySolutions
                card_className={"w-[300px] h-[200px]"}
                className={"flex flex-wrap gap-10 justify-center"}
                solutions={bc_solution}
                isCenter={true}
                heading1={"Why Choose Microsoft Dynamics 365"}
                heading2={"Business Central in Dubai?"}
                para={"Working with a Microsoft Dynamics 365 Business Central Partner in the UAE ensures personalized implementation, tailored solutions, and local support to help your business grow confidently."}
            />
            <MicrosoftDynamic heading1='Who Needs Microsoft Dynamics 365 Business Central?' para='Microsoft Dynamics 365 Business Central is an ideal solution for a wide range of businesses.' services={businessPage}
                button={"Free consultation"}
                className='flex flex-col items-center md:items-start text-center md:text-start'
                bgColor='black'

            />
            <Capabilities capabilities={capabilities} />
            <div className=''>
                <PinkSection
                    heading={"Ready To Supercharge Your AI Workflow?"}
                    text={"Discover how Microsoft Dynamics 365 Business Central can streamline your operations, boost productivity, and drive smarter decisions. Connect with our experts to explore tailored ERP solutions for your business, anytime, anywhere."}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
        </div>
    )
}

export default BuisnessCentral


const ERPSolutionsAlone = ({ blackSection }) => {
    return (
        <section className='relative font-["Archivo"] bg-[#282526]'>
            <div className={`max-w-[90%] xl:max-w-[75%] 2xl:max-w-[80%] mx-auto text-center py-16`}>
                <h2 className='text-[30px] lg:text-[50px] leading-[36px] text-white lg:w-[80%] 2xl:w-[75%] mx-auto'>What is Microsoft Dynamics 365 Business Central?</h2>
                <p className='text-[18px] font-normal text-[#FFF] mt-6 opacity-60 lg:w-[80%] mx-auto font-["Archivo"]'>Microsoft Dynamics 365 Business Central is an all-in-one enterprise resource planning (ERP) platform that integrates seamlessly with Microsoft tools like Office 365 and Power BI.</p>
                <Button text={"Get in touch with us"} className='bg-transparent text-white hover:bg-[#FF6035] hover:border-[#FF6035] hover:text-white hover:transition-colors ease-in-out duration-300 text-[15px] mt-8 border border-[#FFFFFF] px-9 py-2' link='/contact' />
            </div>
        </section>
    )
}