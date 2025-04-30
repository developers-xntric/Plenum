import ArticleDetail from '@/components/article/detail'
import ArticleSlider from '@/components/common/article-slider'
import React from 'react'

const ArticleDetailPage = () => {
    return (
        <div>
            <ArticleDetail />
            <ArticleSlider bg='white' />
        </div>
    )
}

export default ArticleDetailPage