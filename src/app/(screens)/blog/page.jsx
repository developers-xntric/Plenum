import Banner from '@/components/common/banner'
import React from 'react'
import Cards from '../../../components/blog/cards'

const Blog = () => {
    return (
        <div>
            <Banner heading='Our Blogs' para='News, insights and resources
from the world of AI and Tech.' button={['business solutions', 'accelerate', 'accelerate', 'accelerate']} />
            <Cards />
        </div>
    )
}

export default Blog