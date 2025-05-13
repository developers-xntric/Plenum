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
        "Manual valuation processes prone to inconsistency",
        "Limited comparables for non-standard properties",
        "Delayed TAT on rental estimation ",
    ],
    [
        "Built AVM engine using regression and anomaly detection (VAE)",
        "Trained models using multi-emirate property data sets",
        "Enabled Power BI dashboards for rental benchmarking and validation",
    ],
    [
        "Automated Valuation Engine",
        "Anomaly Detection ",
        "Geospatial Analytics",
        "Interactive Dashboards"
    ],
]

export default function BrandOSPage() {
    return (
        <main>
            <CaseDetailHero
                tags={"Banking & Finance"}
                heading={"AI-Driven Property Valuation – Automated Valuation Model (AVM)"}
                para={"Developed an ML-powered rental AVM system to estimate property values and flag anomalies for a leading financial institution. "}
                heading_className={"lg:max-w-[800px]"}
                para_className={"lg:max-w-[680px]"}
                bg_image={"/casestudy/casestudy-hero5.png"}
            />
            <Section2
                heading={"The client needed an AI-based valuation tool to bring consistency and transparency to rental benchmarks used for credit and pricing decisions. "}
                heading_className={"lg:w-[970px]"}
                case_studies={case_studies}
                image={"/casestudy/Group5.png"}
            />
            <Personalization
                heading1={"Outcomes & Impact"}
                para1={"Reduced valuation time from days to minutes "}
                number1={"90%+"}
                number2={"30%"}
                circlePara1={"Achieved pricing accuracy in 4 geographies"}
                circlePara2={"Flagged of properties for validation or review"}
            />
            <CaseStudyList servicesData={[
                "Supabase",
                "Next.js",
                "BigBlueButton",
                "Kahoot",
                "Flutter",
                "Whatsapp API",
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
