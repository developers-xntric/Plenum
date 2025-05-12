import ArticleSlider from "@/components/common/article-slider";
import { Blog } from "@/components/homepage/blog";
import IndustryShowcase from "@/components/homepage/case-study-new";
import CentralizeIntelligence from "@/components/homepage/centralize-intelligence";
import Hero from "@/components/homepage/hero";
import HomeServices from "@/components/homepage/home-services";
import HouseAIProduct from "@/components/homepage/house-ai-product";
import Testimonials from "@/components/homepage/testimonial";
import { cardData } from "@/data/home-blog";
import { testimonials } from "@/data/home-testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeServices />
      <CentralizeIntelligence />
      <HouseAIProduct heading={"Momentum AI Our Proprietary ERP Brain"} paragraph={"Plenum’s product suite combines intelligent architecture with advanced technology to solve complex business challenges. From operations to analytics, our solutions deliver agility, accuracy, and actionable insight."} />
      {/* <CaseStudies
        title={" Our Case Studies Driving AI Transformation Across Industries"}
        paragraph={"Plenum isn't just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities."}
        caseStudies={caseStudies}
      /> */}
      <Testimonials title={"What Our Clients Say"} testimonials={testimonials} paragraph={"As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation."}  />
      <IndustryShowcase />
      <ArticleSlider title={"Discover Articles"} paragraph={"Insights & practical knowledge designed to help you navigate the digital landscape effectively. "} />
      <Blog heading='Discover Our Blog ' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
    </div>
  );
}
