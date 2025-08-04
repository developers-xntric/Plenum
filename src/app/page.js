import ArticleSlider from "../components/common/article-slider";
import { Blog } from "../components/homepage/blog";
import IndustryShowcase from "../components/homepage/case-study-new";
import CentralizeIntelligence from "../components/homepage/centralize-intelligence";
import Hero from "../components/homepage/hero";
import HomeServices from "../components/homepage/home-services";
import HouseAIProduct from "../components/homepage/house-ai-product";
import Testimonials from "../components/homepage/testimonial";
import { testimonials } from "../data/home-testimonials";
import Script from "next/script";
const cardData = [
  {
    img: "/blog/Section-1.jpg",
    date: "May 26, 2025",
    para: "ERP vs CRM: What’s the Difference and Which Do You Need?",
    id: 1,
    link: '/blog/erp-vs-crm'
  },
  {
    img: "/blog/Section-2.jpg",
    date: "May 26, 2025",
    para: "Dynamics vs NetSuite: Comparing Microsoft and Oracle ERP Solutions",
    id: 2,
    link: '/blog/dynamics-vs-netsuite'
  },
  {
    img: "/blog/Article1.1.jpg",
    date: "May 26, 2025",
    para: "How AI Revolutionizes Oracle Cloud Infrastructure for Businesses ",
    id: 3,
    link: '/blog/ai-revolutionizes'
  },
  {
    img: "/blog/Article3.1.jpg",
    date: "May 26, 2025",
    para: "Microsoft Dynamics 365 vs. Traditional CRM: Which is Better?",
    id: 4,
    link: '/blog/dynamics-traditional-crm'
  },
  {
    img: "/blog/Article4.1.jpg",
    date: "May 26, 2025",
    para: "Key Benefits of Microsoft Dynamics 365 for Small Businesses",
    id: 5,
    link: '/blog/key-benefits'
  },
  {
    img: "/blog/Article2.1.jpg",
    date: "May 26, 2025",
    para: "Why Every Business Needs Oracle Database Integration with ERP Systems",
    id: 6,
    link: '/blog/oracle-database'
  },

];

export const metadata = {
  title: 'AI, ERP & Cloud Solutions in the Middle East | Plenum',
  description: 'We deliver AI, ERP, and cloud solutions across the Middle East and UAE. Streamline operations and scale with trusted enterprise tech from Plenum.',
  alternates: {
    canonical: 'https://plenum-tech.com',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Plenum Tech Solutions",
  "url": "https://plenum-tech.com/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "30",
    "bestRating": "5",
    "worstRating": "2"
  }
  };

export default function Home() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div>
        <Hero />
        <HomeServices />
        <CentralizeIntelligence />
        <HouseAIProduct heading={"AI Products "} paragraph={"Plenum integrates intelligence into your business in addition to providing ERP systems. Our proprietary AI solutions are designed to help all organizational levels get deeper insights, increase productivity, and make more informed business decisions."} />
        <Testimonials title={"What Our Clients Say"} testimonials={testimonials} paragraph={"As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation."} />
        <IndustryShowcase />
        <ArticleSlider className={'pt-20'} title={"Discover Our Articles"} paragraph={"Insights & practical knowledge designed to help you navigate the digital landscape effectively. "} />
        <Blog heading='Discover Our Blog ' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
      </div>
    </>
  );
}
