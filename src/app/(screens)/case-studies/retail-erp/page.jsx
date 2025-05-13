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

const case_studies = [
  [
    "Fragmented financial reporting across entities",
    "Manual reconciliation and budgeting processes",
    "POS and loyalty system disconnected from ERP",
    "No central HRMS for payroll or leave tracking"
  ],
  [
    "Deployed Microsoft Dynamics 365 F&O across entities",
    "Integrated POS systems with real-time financial posting",
    "Implemented budgeting, inventory management, and intercompany workflows",
    "Automated payroll, leave, and biometric attendance via HRMS "
  ],
  [
    "Entity-wide financial consolidation",
    "POS to ERP integration",
    "Budgeting & workflow automation",
    "HRMS with payroll logic"
  ],
]

export default function BrandOSPage() {
  return (
    <main>
      <CaseDetailHero
        tags={"Banking & Finance"}
        heading={"Retail ERP Transformation Finance & Operations Implementation"}
        para={"Modernized a retail group's operations using Microsoft Dynamics 365 F&O for finance, procurement, HR, and POS integration."}
        heading_className={"lg:max-w-[800px]"}
        para_className={"lg:max-w-[620px]"}
      />
      <Section2
        heading={"A retail business operating supermarkets, Ecommerce, and distribution units needed to centralize operations across finance, procurement, HRMS, and POS under one ERP system. "}
        heading_className={"lg:w-[970px]"}
        case_studies={case_studies}
      />
      <Personalization
        heading1={"Outcomes & Impact"}
        para1={"Enabled real-time visibility into inventory and P&L"}
        para2={"Improved forecasting accuracy for inventory and sales"}
        number1={"70%"}
        circlePara1={"Reduced month-end financial closure time by"}
        number2={"700+"}
        circlePara2={"Standardized HR processes across employees"}
      />
      <CaseStudyList servicesData={[
        "Microsoft Dynamics 365 F&O",
        "Power BI",
        "POS Middleware",
        "HRMS Module"
      ]} />
      <Testimonials testimonials={[
        {
          id: 1,
          quote:
            "“Plenum’s approach to design and innovation has transformed how we operate. Their team consistently delivers exceptional results.”",
          author: "Sarah Johnson",
          position: "Director of Operations",
          socialLink: "https://linkedin.com",
        },
        {
          id: 2,
          quote:
            "“Working with Plenum has been a game-changer for our business. Their insight-driven approach has helped us reach new heights.”.",
          author: "Michael Chen",
          position: "Chief Marketing Officer",
          socialLink: "https://linkedin.com",
        },
        {
          id: 3,
          quote:
            "“Plenum’s approach to design and innovation has transformed how we operate. Their team consistently delivers exceptional results.”",
          author: "Sarah Johnson",
          position: "Director of Operations",
          socialLink: "https://linkedin.com",
        },
        {
          id: 4,
          quote:
            "“Working with Plenum has been a game-changer for our business. Their insight-driven approach has helped us reach new heights.”.",
          author: "Michael Chen",
          position: "Chief Marketing Officer",
          socialLink: "https://linkedin.com",
        },
      ]} />
      <ArticleSlider />
      <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
    </main>
  )
}
