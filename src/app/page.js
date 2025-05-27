import ArticleSlider from "@/components/common/article-slider";
import { Blog } from "@/components/homepage/blog";
import IndustryShowcase from "@/components/homepage/case-study-new";
import CentralizeIntelligence from "@/components/homepage/centralize-intelligence";
import Hero from "@/components/homepage/hero";
import HomeServices from "@/components/homepage/home-services";
import HouseAIProduct from "@/components/homepage/house-ai-product";
import Testimonials from "@/components/homepage/testimonial";
import { testimonials } from "@/data/home-testimonials";
const cardData = [
    {
        img: "/blog/blog_1.jpg",
        date: "May 26, 2025",
        para: "ERP vs CRM: What’s the Difference and Which Do You Need?",
        id: 1,
        link: '/blog/ERP-CRM'
    },
    {
        img: "/blog/blog_2.jpg",
        date: "May 26, 2025",
        para: "Dynamics vs NetSuite: Comparing Microsoft and Oracle ERP Solutions",
        id: 2,
        link: '/blog/dynamics-netsuite'
    },
    {
        img: "/blog/blog_3.jpg",
        date: "May 26, 2025",
        para: "Oracle NetSuite vs Salesforce: CRM and ERP Compared",
        id: 3,
        link: '/blog/oracle-netsuite-salesforce'
    },
    {
        img: "/blog/blog_1.jpg",
        date: "May 26, 2025",
        para: "Oracle NetSuite vs SAP: Which ERP Solution Fits Your Business Best?",
        id: 4,
        link: '/blog/oracle-netsuite-sap'
    },

]
export const metadata = {
  title: 'About Plenum | AI Innovators Powering Digital Change',
  description: 'Learn about Plenum’s mission, vision, and leadership in AI-powered innovation and enterprise technology solutions.',
  alternates: {
    canonical: 'https://plenum-tech.com',
  },
};
export default function Home() {
  return (
    <div>
      <Hero />
      <HomeServices />
      <CentralizeIntelligence />
      <HouseAIProduct heading={"AI Products "} paragraph={"Plenum integrates intelligence into your business in addition to providing ERP systems. Our proprietary AI solutions are designed to help all organizational levels get deeper insights, increase productivity, and make more informed business decisions."} />
      <Testimonials title={"What Our Clients Say"} testimonials={testimonials} paragraph={"As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation."} />
      <IndustryShowcase />
      <ArticleSlider title={"Discover Our Articles"} paragraph={"Insights & practical knowledge designed to help you navigate the digital landscape effectively. "} />
      <Blog heading='Discover Our Blog ' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
    </div>
  );
}

