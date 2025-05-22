import Banner from '@/components/common/banner'
import React from 'react'
import Cards from '../../../components/blog/cards'

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