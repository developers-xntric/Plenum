import BookDemoHero from '@/components/book-demo/book-demo-hero'
import GrowthThird from '@/components/book-demo/growth-third'
import TrustedPartners from '@/components/book-demo/trusted-partners'
import React from 'react'

function BookDemo() {
  return (
    <div>
        <BookDemoHero  />
        <TrustedPartners/>
        <GrowthThird/>
    </div>
  )
}

export default BookDemo