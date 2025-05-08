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
        "Manual grading and progress tracking ",
        "No centralized portal for parents or tutors",
        "Unstructured payment and payroll systems ",
        "No integration with live class systems"
    ],
    [
        "Built LMS on Supabase and Next.js with custom dashboard flows ",
        "Integrated BigBlueButton for live classes and lesson recording ",
        "Added auto-grading engine and student quiz builder",
        "Developed payroll and donation-based fee billing system",
        "Enabled WhatsApp and multilingual interfaces"
    ],
    [
        "Custom LMS Framework",
        "Live Class Integration ",
        "Fee & Payroll Engine ",
        "Behavioral Dashboards  "
    ],
]

export default function BrandOSPage() {
    return (
        <main>
            <CaseDetailHero
                tags={"Education"}
                heading={"Virtual Learning Platform – Custom LMS for Digital Education "}
                para={"Designed and launched a fully functional, mobile-first Learning Management System with automated grading, video lessons, and parent insights. "}
                heading_className={"lg:max-w-[870px]"}
                para_className={"lg:max-w-[620px]"}
                bg_image={"/casestudy/casestudy-hero4.png"}
            />
            <Section2
                heading={"An EdTech startup needed an end-to-end education platform to serve students, parents, and educators with multilingual support and fee integration. "}
                heading_className={"lg:w-[970px]"}
                case_studies={case_studies}
                image={"/casestudy/Group4.png"}
            />
            <Personalization
                heading1={"Outcomes & Impact"}
                para1={"Increased parental engagement via dashboards"}
                para2={"Scaled to 1,000+ students within 3 months "}
                number1={"60%"}
                number2={"80+"}
                circlePara1={"Reduced grading effort by"}
                circlePara2={"Digitized education workflows"}
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
