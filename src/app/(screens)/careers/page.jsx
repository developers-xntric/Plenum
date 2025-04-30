import CareerHero from '@/components/careers/career-hero'
import JobListings from '@/components/careers/jobs-linting'
import TeamTestimonials from '@/components/careers/team-testimonials'
import React from 'react'

const Careers = () => {
    return (
        <div>
            <CareerHero
                heading={"Join Us in Building the Future of Intelligence"}
                para={"We're looking for talented and open-minded individuals from all backgrounds who are passionate about advancing human creativity."}
                para2={"We have offices in New York, San Francisco, London, and Seattle. With team members working remotely from all over the world."}
            />
            <JobListings />
            <TeamTestimonials />
        </div>
    )
}

export default Careers
