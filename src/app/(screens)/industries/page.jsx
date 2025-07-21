import ArticleSlider from '@/components/common/article-slider';
import CaseHero from '@/components/common/case-hero';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import IndustryTabs from '@/components/industries/IndustryTabs';
import PinkSection from '@/components/service/pink-section';
import ServiceContact from '@/components/service/service-contact';
import { testimonials } from '@/data/home-testimonials';
import React from 'react'



export const metadata = {
    title: 'ERP & AI Solutions for Retail, Finance, and Manufacturing',
    description: "Explore how Plenum delivers ERP, AI, and cloud services across retail, education, finance, and more—powering digital transformation in every industry.",
    alternates: {
        canonical: 'https://plenum-tech.com/industries',
    },
};

const Industries = () => {
    return (
        <div>
            <CaseHero
                heading={"Pioneering new AI tools for human imagination."}
                para={"We create AI tools that amplify creativity and solve real-world problems. From concept to impact, our technology powers the next wave of innovation."}
            />
            <div className='w-full h-10 border-b border-black/20'></div>
            {/* <IndustryShowcase isTabs={true}/> */}
            <IndustryTabs/>
            <div className='pt-16'>
                <PinkSection
                    heading={"Ready To Supercharge Your AI Workflow?"}
                    text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <Testimonials testimonials={testimonials}  paragraph={"As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation."} />
            <ArticleSlider />
            <Blog heading='Discover Our Blogs' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." />
            <ServiceContact />
        </div>
    )
}

export default Industries;
