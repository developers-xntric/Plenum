import Banner from '@/components/common/banner'
import React from 'react'
import Cards from '../../../components/blog/cards'

export const metadata = {
  title: 'Plenum Blog | Insights on AI, Tech & Innovation',
  description: "Stay updated with the latest trends in AI, cloud, and digital innovation through expert articles and industry insights.",
};


const Blog = () => {
    return (
        <div>
            {/* This is how we do */}
            <Banner heading='Our Blogs' para='Explore stories, updates, and perspectives from the minds shaping the future of AI and intelligent systems' button={['business solutions', 'accelerate', 'accelerate', 'accelerate']} />
            <Cards />
        </div>
    )
}

export default Blog