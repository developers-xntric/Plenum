import ArticleSlider from "@/components/common/article-slider";
import { Blog } from "@/components/homepage/blog";
import CaseStudies from "@/components/homepage/case-studies";
import CentralizeIntelligence from "@/components/homepage/centralize-intelligence";
import Hero from "@/components/homepage/hero";
import HomeServices from "@/components/homepage/home-services";
import HouseAIProduct from "@/components/homepage/house-ai-product";
import Testimonials from "@/components/homepage/testimonial";
import { caseStudies } from "@/data/case-studies-card-data";
import { cardData } from "@/data/home-blog";
import { testimonials } from "@/data/home-testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeServices />
      <CentralizeIntelligence />
      <HouseAIProduct />
      <CaseStudies
        title={" Our Case Studies Driving AI Transformation Across Industries"}
        paragraph={"Plenum isn't just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities."}
        caseStudies={caseStudies}
     />
      <Testimonials testimonials={testimonials} />
      <Blog
        heading="Discover Our Blog Articles"
        para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world"
        cardData={cardData}
      />
      <CaseStudies />
      <Testimonials/>
      <ArticleSlider />
      <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
    </div>
  );
}
