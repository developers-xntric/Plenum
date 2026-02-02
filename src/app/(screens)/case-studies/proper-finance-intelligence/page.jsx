import CaseDetailHero from "@/components/case-studies/case-details-hero"
import CaseStudyList from "@/components/case-studies/case-studies-list"
import Personalization from "@/components/case-studies/personalization"
import Section2 from "@/components/case-studies/section2"
import ArticleSlider from "@/components/common/article-slider"
import { Blog } from "@/components/homepage/blog"
import Testimonials from "@/components/homepage/testimonial"
import { testimonials } from "@/data/home-testimonials"

const case_studies = [
    [
        "Dormant high-value customers not identified",
        "No segmentation of behavior-based risk or opportunity",
        "Disconnected transaction systems across verticals ",
    ],
    [
        "Mapped customer behavior using NLP and geospatial clustering ",
        "Scored wallet share and churn probability",
        "Used graph-based entity linking for holding company mapping",
    ],
    [
        "Customer Behavior Segmentation ",
        "Entity Relationship Mapping",
        "Wallet Share Intelligence",
        "Predictive Analytics"
    ],
]

export default function ProperFinanceIntelligence() {
    return (
        <main>
            <CaseDetailHero
                tags={"Finance"}
                heading={"Personal Finance Intelligence – Behavioral Analytics for Engagement"}
                para={"Built AI-powered behavioral models to identify high-potential customers, link entity structures, and personalize financial offerings. "}
                heading_className={"lg:max-w-[800px]"}
                para_className={"lg:max-w-[680px]"}
                bg_image={"/casestudy/casestudy-hero6.png"}
            />
            <Section2
                heading={"A bank wanted to uncover hidden customer opportunities by analyzing spending behavior, mapping entities, and scoring wallet share. "}
                heading_className={"lg:w-[920px]"}
                case_studies={case_studies}
                image={"/casestudy/Group6.png"}
            />
            <Personalization
                heading1={"Outcomes & Impact"}
                para1={"Increased personalized product recommendations"}
                number1={"200+"}
                number2={"50+"}
                circlePara1={"Activated dormant high-value customers"}
                circlePara2={"Identified holding companies with cross-sell opportunities"}
            />
            <CaseStudyList servicesData={[
                "Momentum AI",
                "GraphFrames",
                "Geospatial ML",
                "Power BI",
                "SecureGPT",
            ]} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world"  />
        </main>
    )
}
