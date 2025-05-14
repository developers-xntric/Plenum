import ArticleSlider from '@/components/common/article-slider';
import CaseHero from '@/components/common/case-hero';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import IndustryShowcase from '@/components/industries/industry-showcase';
import IndustryTabs from '@/components/industries/IndustryTabs';
import PinkSection from '@/components/service/pink-section';
import ServiceContact from '@/components/service/service-contact';
import { cardData } from '@/data/home-blog';
import { testimonials } from '@/data/home-testimonials';
import React from 'react'

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
            <Testimonials testimonials={testimonials} title='Trusted by Professionals' paragraph={"As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation."} />
            <ArticleSlider />
            <Blog heading='Discover Our Blogs' para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness." cardData={cardData} />
            <ServiceContact />
        </div>
    )
}

export default Industries;
