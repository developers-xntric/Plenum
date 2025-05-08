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
        "Manual review of transcripts and notes lacked accuracy",
        "No standardized sentiment classification across teams",
        "High effort to detect dissatisfaction early",
    ],
    [
        "Used GPT-4 and Qwen 2.5 to classify sentiment in communication logs",
        "Built dashboards to visualize weekly and monthly trends",
        "Incorporated human feedback loop to fine-tune sentiment scoring",
    ],
    [
        "Secure NLP Pipeline",
        "LLM-Based Sentiment Classifier",
        "Human-in-the-Loop Validation",
        "Dashboards & Alerts"
    ],
]

export default function AiPoweredSentiment() {
    return (
        <main>
            <CaseDetailHero
                tags={"Finance"}
                heading={"AI-Powered Sentiment Analysis – Client Experience Intelligence "}
                para={"Implemented enterprise-grade sentiment tracking from unstructured communication to help reduce churn and identify at-risk clients."}
                heading_className={"lg:max-w-[800px]"}
                para_className={"lg:max-w-[680px]"}
                bg_image={"/casestudy/casestudy-hero7.png"}
            />
            <Section2
                heading={"An enterprise services provider wanted to proactively detect customer dissatisfaction embedded in meeting notes, emails, and manager reports. "}
                heading_className={"lg:w-[970px]"}
                case_studies={case_studies}
                image={"/casestudy/Group7.png"}
            />
            <Personalization
                heading1={"Outcomes & Impact"}
                para1={"Streamlined UAT feedback tracking and risk flagging"}
                number1={"3-4"}
                number2={"88%+"}
                circlePara1={"Reduced client churn detection lag by weeks"}
                circlePara2={"Achieved sentiment accuracy of across languages"}
            />
            <CaseStudyList servicesData={[
                "GPT-4",
                "Qwen 2.5",
                "Inset BI ",
                "Momentum Connect",
                "Secure APIs",
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
