import TabsSection from "@/components/about/tabs-section"
import ArticleSlider from "@/components/common/article-slider"
import BrandSlider from "@/components/common/brand-slider"
import { Blog } from "@/components/homepage/blog"
import ProductHero from "@/components/product/product-hero"
import PinkSection from "@/components/service/pink-section"
import ServiceContact from "@/components/service/service-contact"
import { product_brand_icons } from "@/data/brand-slider-icons-data"
import { cardData } from "@/data/home-blog"

const VerticalBuilds = () => {
    return (
        <div>
            <ProductHero
                heading={"Vertical Builds"}
                isLogo={false}
                bgImage='/product/m_hero.svg'
                mobileBgImage={'/product/m_hero_mobile.svg'}
            />
            <div className="2xl:max-w-[1440px] mx-auto w-[93%] xl:w-[90%] 2xl:w-[90%] py-10">
                <BrandSlider
                    brand_icons={product_brand_icons}
                    text={"Trusted by world's most exciting brands"}
                    width={150}
                />
            </div>
            <TabsSection />
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
