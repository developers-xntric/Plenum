import Section2 from "@/components/case-studies/section2"
import CaseDetailHero from "@/components/case-studies/case-details-hero"
import Personalization from "@/components/case-studies/personalization"
import { testimonials } from "@/data/home-testimonials"
import Testimonials from "@/components/homepage/testimonial"
import ArticleSlider from "@/components/common/article-slider"
import { Blog } from "@/components/homepage/blog"
import { cardData } from "@/data/home-blog"
import { ServiceList } from "@/data/service-list"
import CaseStudyList from "@/components/case-studies/case-studies-list"

export default function BrandOSPage() {
  return (
    <main>
      <CaseDetailHero
        tags={"Finance"}
        heading={"Retail ERP Transformation Finance & Operations Implementation"}
        para={"Modernized a retail group's operations using Microsoft Dynamics 365 F&O for finance, procurement, HR, and POS integration."}
        heading_className={"lg:max-w-[800px]"}
        para_className={"lg:max-w-[620px]"}
      />
      <Section2 />
      <Personalization />
      <CaseStudyList serviceList={ServiceList} />
      <Testimonials testimonials={testimonials} />
      <ArticleSlider />
      <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
    </main>
  )
}
