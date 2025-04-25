import ArticleSlider from '@/components/common/article-slider'
import { ERPSolutionsBottomSection } from '@/components/common/solutions'
import { Blog } from '@/components/homepage/blog'
import Testimonials from '@/components/homepage/testimonial'
import Capabilities from '@/components/service/buisness-central/capabilities'
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero'
import MicrosoftDynamic from '@/components/service/microsoft/microsoft-dynamic'
import MobilitySolutions from '@/components/service/microsoft/mobility-solution'
import PinkSection from '@/components/service/pink-section'
import { bc_service, bc_service_black } from '@/data/erp-consulting-service'
import { cardData } from '@/data/home-blog'
import { testimonials } from '@/data/home-testimonials'
import { bc_solution } from '@/data/mobility-solutions'

const BuisnessCentral = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Unlocking Business Potential with Microsoft Dynamics 365 Business Central"}
                para={"Transform Your Business with Microsoft Dynamics 365 Business Central by Plenum."}
                image={"/service/BC/BC_hero.svg"}
                image_className="md:w-[500px] md:h-[300px] xl:w-[650px] xl:h-[500px]"
                button_text="Connect with our Experts"
                isSlider={true}
            />
            <div className='max-w-full 2xl:max-w-[1440px] mx-auto '>
                <ERPSolutionsBottomSection className='flex justify-center items-center gap-5' bottomSection={bc_service} left={true} blackSection={bc_service_black} />
            </div>
            <MobilitySolutions
                card_className={"w-[300px] h-[200px]"}
                className={"flex flex-wrap gap-10 justify-center"}
                solutions={bc_solution}
                isCenter={true}
                heading1={"Why Microsoft Dynamics"}
                heading2={"365 Business Central?"}
                para={"Unlock the full potential of your business with Microsoft Dynamics 365 Business Central.Here's why Microsoft Dynamics 365 Business Central is the solution of choice for organizations worldwide:"}
            />
            <MicrosoftDynamic />
            <Capabilities />
            <div className='pt-32 pb-20'>
                <PinkSection
                    heading={"Ready To Supercharge Your AI Workflow?"}
                    text={"Discover how Microsoft Dynamics 365 Business Central can streamline your operations, boost productivity, and drive smarter decisions. Connect with our experts to explore tailored ERP solutions for your business, anytime, anywhere."}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <Testimonials testimonials={testimonials} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
        </div>
    )
}

export default BuisnessCentral
