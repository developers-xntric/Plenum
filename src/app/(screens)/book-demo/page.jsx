import BookDemoHero from '@/components/book-demo/book-demo-hero'
import Faqs from "@/components/ui/faqs"
import GrowthThird from '@/components/book-demo/growth-third'
import TrustedPartners from '@/components/book-demo/trusted-partners'
import React from 'react'

function BookDemo() {
  return (
    <div>
        <BookDemoHero/>
      
        <BookDemoHero  />
        <TrustedPartners/>
        <GrowthThird/>
        <Faqs/>
    </div>
  )
}

export default BookDemo