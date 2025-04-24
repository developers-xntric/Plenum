import CaseStudies from "@/components/homepage/case-studies";
import { Blog } from "@/components/homepage/blog";
import CentralizeIntelligence from "@/components/homepage/centralize-intelligence";
import Hero from "@/components/homepage/hero";
import HomeServices from "@/components/homepage/home-services";
import HouseAIProduct from "@/components/homepage/house-ai-product";
import { cardData } from "@/data/home-blog";
import Testimonials from "@/components/homepage/testimonial";
import ArticleSlider from "@/components/common/article-slider";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeServices />
      <CentralizeIntelligence />
      <HouseAIProduct />
      <CaseStudies />
      <Testimonials/>
      <ArticleSlider />
      <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
    </div>
  );
}
