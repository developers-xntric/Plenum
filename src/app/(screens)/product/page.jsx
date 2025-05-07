import ArticleSlider from "@/components/common/article-slider"
import BrandSlider from "@/components/common/brand-slider"
import { Blog } from "@/components/homepage/blog"
import HouseAIProduct from "@/components/homepage/house-ai-product"
import ProductHero from "@/components/product/product-hero"
import PinkSection from "@/components/service/pink-section"
import ServiceContact from "@/components/service/service-contact"
import { service_brand_icons } from "@/data/brand-slider-icons-data"
import { cardData } from "@/data/home-blog"

const Product = () => {
    return (
        <div>
            <ProductHero
                heading={"Plenum <br/> AI Products"}
                isLogo={false}
                bgImage='/product/m_hero.svg'
                mobileBgImage={'/product/m_hero_mobile.svg'}

            />
            <div className="2xl:max-w-[1440px] mx-auto w-[93%] xl:w-[90%] 2xl:w-[90%] py-5 lg:py-10">
                <BrandSlider brand_icons={service_brand_icons} text={"Trusted by world's most exciting brands"} />
            </div>
            <div className="pb-5 lg:pb-20">
                <HouseAIProduct />
            </div>
            <ArticleSlider />
            <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
            <PinkSection
                heading={"Ready To Supercharge Your AI Workflow?"}
                text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                show_button={true}
                className="xl:h-[340px]"
                isVideo={true}
            />
            <ServiceContact />
        </div>
    )
}

export default Product
