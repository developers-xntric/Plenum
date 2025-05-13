import CaseDetailHero from "@/components/case-studies/case-details-hero"
import CaseStudyList from "@/components/case-studies/case-studies-list"
import Personalization from "@/components/case-studies/personalization"
import Section2 from "@/components/case-studies/section2"
import ArticleSlider from "@/components/common/article-slider"
import { Blog } from "@/components/homepage/blog"
import Testimonials from "@/components/homepage/testimonial"
import { cardData } from "@/data/home-blog"

const case_studies = [
    [
        "No structured procurement or approval tracking",
        "Manual stock adjustment and material logs",
        "Inefficient BOM handling and costing",
        "Fragmented delivery tracking"
    ],
    [
        "Implemented Business Central with MRP and production modules ",
        "Mapped end-to-end material lifecycle from GRN to delivery ",
        "Enabled approval workflows, vendor analysis, and production cost forecasting",
        "Created real-time dashboards for warehouse stock and job status "
    ],
    [
        "Procurement workflows",
        "Production & MRP planning",
        "Job order costing",
        "Role-based dashboards "
    ],
]

export default function BrandOSPage() {
    return (
        <main>
            <CaseDetailHero
                tags={"Manufacturing"}
                heading={"Manufacturing ERP Modernization – Business Central for Steel Fabrication "}
                para={"Implemented Microsoft Dynamics 365 Business Central for end-to-end material tracking, procurement, and production management. "}
                heading_className={"lg:max-w-[870px]"}
                para_className={"lg:max-w-[620px]"}
                bg_image={"/casestudy/casestudy-hero3.png"}
            />
            <Section2
                heading={"A regional steel manufacturer operating warehouses and fabrication units wanted better visibility into raw material usage, procurement timelines, and delivery SLAs. "}
                heading_className={"lg:w-[970px]"}
                case_studies={case_studies}
                image={"/casestudy/Group3.png"}
            />
            <Personalization
                heading1={"Outcomes & Impact"}
                para1={"Improved raw material forecasting accuracy"}
                para2={"Enabled real-time tracking from PO to delivery"}
                number1={"40%"}
                number2={"60%"}
                circlePara1={"Reduced procurement turnaround by"}
                circlePara2={"Reduced data entry effort by"}
            />
            <CaseStudyList servicesData={[
                "Microsoft Dynamics 365 Business Central ",
                "Power BI",
                "Production & MRP Module",
                "Procurement Automation",
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
