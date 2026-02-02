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
        "Lack of real-time stock sync between retail and online store",
        "No digital loyalty or customer tiering logic",
        "Manual delivery tracking and promo code reconciliation",
        "Inconsistent UX across web and mobile"
    ],
    [
        "Launched WooCommerce store integrated with Dynamics 365 backend",
        "Built custom APIs for product sync, delivery updates, and loyalty logic",
        "Enabled geo-based delivery charge and time slot selection",
        "Developed cross-platform mobile app with login, cart, and payment features "
    ],
    [
        "WooCommerce-D365 integration",
        "Geo-delivery & promo engine",
        "Digital loyalty & wallet logic",
        "Mobile app with payment gateway "
    ],
]

export default function BrandOSPage() {
    return (
        <main>
            <CaseDetailHero
                tags={"Retail"}
                heading={"Unified Retail Experience – ERP-Integrated eCommerce & Mobile App Platform "}
                para={"Launched an ERP-integrated eCommerce store with inventory sync, customer segmentation, delivery tracking, and loyalty logic. "}
                heading_className={"lg:max-w-[870px]"}
                para_className={"lg:max-w-[620px]"}
                bg_image={"/casestudy/casestudy-hero2.png"}
            />
            <Section2
                heading={"A retail group needed to digitize its physical store operations by launching a B2C online store connected to its back-end ERP system. "}
                heading_className={"lg:w-[900px]"}
                case_studies={case_studies}
                image={"/casestudy/Group2.png"}
            />
            <Personalization
                heading1={"Outcomes & Impact"}
                para1={"Boosted customer acquisition via loyalty & wallet offers"}
                para2={"Reduced cart abandonment with seamless checkout"}
                circlePara1={"Real-time inventory sync reduced stockouts "}
                circlePara2={"Improved customer retention through segment-specific campaigns"}
            />
            <CaseStudyList servicesData={[
                "WooCommerce",
                "WordPress",
                "REST APIs",
                "Microsoft Dynamics 365 BC",
                "Flutter Mobile App"
            ]} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world"  />
        </main>
    )
}
