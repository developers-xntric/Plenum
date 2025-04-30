import CareerHero from '@/components/careers/career-hero'
import React from 'react'

const Careers = () => {
    return (
        <div className='2xl:max-w-[1440px] mx-auto w-[90%]'>
            <CareerHero
                heading={"Join Us in Building the Future of Intelligence"}
                para={"We're looking for talented and open-minded individuals from all backgrounds who are passionate about advancing human creativity."}
                para2={"We have offices in New York, San Francisco, London, and Seattle. With team members working remotely from all over the world."}
            />
        </div>
    )
}

export default Careers
