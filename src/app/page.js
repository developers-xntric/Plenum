import CaseStudies from "@/components/home/case-studies";
import CentralizeIntelligence from "@/components/home/centralize-intelligence";
import Hero from "@/components/Home/hero";
import HomeServices from "@/components/home/home-services";
import HouseAIProduct from "@/components/home/house-ai-product"

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <HomeServices />
      <CentralizeIntelligence/>
      <HouseAIProduct/>
      <CaseStudies/>
    </div>
  );
}
