import BrandSlider from "@/components/common/brand-slider"
import AISolutions from "@/components/product/AI-solutions"
import EndToEndAI from "@/components/product/end-to-end"
import ProductHero from "@/components/product/product-hero"
import StartSmallWithAI from "@/components/product/start-small-with-AI"
import MicrosoftDynamic from "@/components/service/microsoft/microsoft-dynamic"
import PinkSection from "@/components/service/pink-section"
import ServiceContact from "@/components/service/service-contact"
import { service_brand_icons } from "@/data/brand-slider-icons-data"
import { momentumaiservices } from "@/data/momentum-ai-service"

const MomentumAI = () => {
    return (
        <div>
            <ProductHero isLogo={false} bgImage='/product/m_hero.svg' />
            <div className="2xl:max-w-[1440px] mx-auto w-[93%] xl:w-[90%] 2xl:w-[90%] py-10">
                <BrandSlider brand_icons={service_brand_icons} text={"Trusted by world's most exciting brands"} />
            </div>

            <AISolutions title={"Create Comprehensive AI Solutions Without Coding"}
                paragraph={"Accelerate digital transformation with Momentum AI by PlenumTech — a no-code platform that streamlines data ingestion, ML model training, deployment, and workflow automation."}
                image={'/images/product-momentum-AI/AI-solutions.webp'} />
            <EndToEndAI />
            <MicrosoftDynamic heading1='What Can You Do With Momentum?' heading2='' para='Momentum AI is an integrated suite of AI software platforms purpose-built to automate every stage of the AI lifecycle — from data ingestion to model deployment. Designed to support enterprise scalability and flexibility, Momentum empowers businesses with intelligent AI automation tools that streamline processes and reduce development time.' services={momentumaiservices}
                className='flex flex-col item-ce'
                bgColor='black'
                paraClass={'lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%]'}
                gridcol='md:grid-cols-2 lg:grid-cols-4'
            />
            <StartSmallWithAI />
            <div className='py-16'>
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

export default MomentumAI
