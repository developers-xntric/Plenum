import CareerHero from '@/components/careers/career-hero'
import JobListings from '@/components/careers/jobs-linting'
import TeamTestimonials from '@/components/careers/team-testimonials'
import React from 'react'

export const metadata = {
    title: 'Careers at Plenum | Join the Future of AI & Tech',
    description: "Shape the future of AI with Plenum. Explore exciting career opportunities and be part of our innovation-driven team.",
    alternates: {
        canonical: 'https://plenum-tech.com/careers',
    },
};


const Careers = () => {
    return (
        <div>
            {/* Casen Hero */}
            <CareerHero
                heading={"Join Us in Building the Future of Intelligence"}
                para={"Join a team driving the next generation of intelligent solutions, where innovation is powered by the people behind it."}
                para2={"Join Plenum Tech, where a culture driven by innovation and curiosity empowers our team to deliver smart ERP solutions across the Middle East. Be part of a dynamic environment that values fresh ideas and continuous learning to shape the future of enterprise technology"}
            />
            <JobListings />
            <TeamTestimonials />
        </div>
    )
}

export default Careers
