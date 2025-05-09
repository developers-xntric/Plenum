import ArticleSlider from "@/components/common/article-slider";
import { Blog } from "@/components/homepage/blog";
import CaseStudies from "@/components/homepage/case-studies";
import IndustryShowcase from "@/components/homepage/case-study-new";
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
      <HouseAIProduct heading={"Momentum AI Our Proprietary ERP Brain"} paragraph={"More than software, Momentum is the intelligent core of your enterprise. Built by Plenum, it leverages AI to deliver predictive insights, automate processes, and scale performance. From finance to HR to inventory, Momentum transforms how your teams work and how your business grows."} />
      {/* <CaseStudies
        title={" Our Case Studies Driving AI Transformation Across Industries"}
        paragraph={"Plenum isn't just another ERP provider; we embed AI into your systems to deliver actionable insights and smarter decision-making capabilities."}
        caseStudies={caseStudies}
      /> */}
      <Testimonials testimonials={testimonials} paragraph={"As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation."}  />
      <IndustryShowcase />
      <ArticleSlider title={"Discover Articles"} paragraph={"Insights & practical knowledge designed to help you navigate the digital landscape effectively. "} />
      <Blog heading='Discover Our Blog ' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
    </div>
  );
}
