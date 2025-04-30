import Cards from '@/components/article/cards'
import Banner from '@/components/common/banner'
import React from 'react'

const Article = () => {
    return (
        <div>
            <Banner heading='Our Articles' para='News, insights and resources
from the world of AI and Tech.' button={['business solutions', 'accelerate', 'accelerate', 'accelerate']} />
            <Cards />
        </div>
    )
}

export default Article