import Blog from "@/components/home/blog";
import CaseStudies from "@/components/home/case-studies";
import CentralizeIntelligence from "@/components/home/centralize-intelligence";
import Hero from "@/components/Home/hero";
import HomeServices from "@/components/home/home-services";
import HouseAIProduct from "@/components/Home/house-ai-product";
import { cardData } from "@/data/home-blog";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeServices />
      <CentralizeIntelligence />
      <HouseAIProduct />
      <CaseStudies />
      <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
    </div>
  );
}
