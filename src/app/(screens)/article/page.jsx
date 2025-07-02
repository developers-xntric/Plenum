import LinkedSection from '@/components/article/LinkedSection';
import Banner from '@/components/common/banner'
import React from 'react'

export const metadata = {
  title: 'Plenum Articles | Expert Takes on Tech & Trends ',
  description: 'Explore in-depth articles on AI, cloud, and digital innovation curated by Plenum tech experts and industry professionals.',
  alternates: {
    canonical: 'https://plenum-tech.com/article',
  },
};
const Article = () => {
  return (
    <div>
      <Banner heading='Our Articles' para='Insights, analysis, and thought leadership that keeps you on the front edge' paraClass="lg:max-w-[100%]" button={['Thought Leadership', 'AI Trends', 'Business Strategy', 'Innovation ']} />
      <LinkedSection/>
    </div>
  )
}

export default Article