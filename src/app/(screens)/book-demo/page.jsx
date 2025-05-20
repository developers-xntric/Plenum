import BookDemoHero from '@/components/book-demo/book-demo-hero'
import DynamicsSection from '@/components/book-demo/dynamics-sections'
import IndustriesCarousel from '@/components/book-demo/industries-carousel'
import React from 'react'

function BookDemo() {
  return (
    <div>
      <BookDemoHero />
      <DynamicsSection />
      <IndustriesCarousel />
    </div>
  )
}

export default BookDemo