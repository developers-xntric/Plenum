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
        "Overpaid commissions due to misaligned rules",
        "Difficult to detect fraudulent approval loops",
        "Manual audits missed subtle anomalies",
    ],
    [
        "Built ML pipeline to detect DSA behavior outliers using PCA and clustering",
        "Integrated commission logic with loan disbursal patterns",
        "Created fraud alert dashboard for internal audit",
    ],
    [
        "Unsupervised Clustering",
        "Behavioral Analytics",
        "Commission Auditing",
        "Alert & Case Review UI"
    ],
]

export default function AiPoweredSentiment() {
    return (
        <main>
            <CaseDetailHero
                tags={"Banking & Finance"}
                heading={"Commission Fraud Detection – AI for DSA Auditing "}
                para={"Built an anomaly detection engine to audit Direct Selling Agent commissions and detect overpayments and irregular behavior."}
                heading_className={"lg:max-w-[650px]"}
                para_className={"lg:max-w-[600px]"}
                bg_image={"/casestudy/casestudy-hero8.png"}
            />
            <Section2
                heading={"A bank wanted to automate auditing of commission payouts to prevent abuse by agents gaming the disbursal system. "}
                heading_className={"lg:w-[970px]"}
                case_studies={case_studies}
                image={"/casestudy/Group8.png"}
            />
            <Personalization
                heading1={"Outcomes & Impact"}
                para1={"Reduced commission abuse risks via early alerts"}
                number1={"12%"}
                number2={"80%"}
                circlePara1={"Detected overpayment anomalies"}
                circlePara2={"Improved auditor productivity with faster triage"}
            />
            <CaseStudyList servicesData={[
                "Momentum AI",
                "PCA",
                "Inset BI ",
                "Sklearn ",
            ]} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" />
        </main>
    )
}
