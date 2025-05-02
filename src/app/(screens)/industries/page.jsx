import ArticleSlider from '@/components/common/article-slider';
import CaseHero from '@/components/common/case-hero';
import { Blog } from '@/components/homepage/blog';
import Testimonials from '@/components/homepage/testimonial';
import IndustryShowcase from '@/components/industries/industry-showcase';
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
            <IndustryShowcase isTabs={true}/>
            <div className='pt-16'>
                <PinkSection
                    heading={"Ready To Supercharge Your AI Workflow?"}
                    text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
                    show_button={true}
                    className="xl:h-[340px]"
                    isVideo={true}
                />
            </div>
            <Testimonials testimonials={testimonials} />
            <ArticleSlider />
            <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />
            <ServiceContact />
        </div>
    )
}

export default Industries;
