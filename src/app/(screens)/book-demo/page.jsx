import BookDemoHero from '@/components/book-demo/book-demo-hero'
import Faqs from "@/components/ui/faqs"
import GrowthThird from '@/components/book-demo/growth-third'
import TrustedPartners from '@/components/book-demo/trusted-partners'
import React from 'react'
import DynamicsSection from '@/components/book-demo/dynamics-sections'
import Link from 'next/link'
import IndustriesCarousel from '@/components/book-demo/industries-carousel'
import BrandSlider from '@/components/common/brand-slider'
import { home_brand_icons } from '@/data/brand-slider-icons-data'
import BrandSlider2 from '@/components/common/bs2'

function BookDemo() {
  return (
    <div>
      <BookDemoHero />


      <TrustedPartners />
      <GrowthThird />
      <DynamicsSection />
      <div className="bg-black text-white rounded-[20px] p-5 md:p-9 md:h-[100px] flex flex-col sm:flex-row justify-between items-center shadow-md 2xl:max-w-[1440px] w-[90%] mx-auto lg:my-20">
        <p className="text-[18px] lg:text-[26px] font-semibold font-['Archivo'] text-left md:w-[280px] lg:w-[450px] leading-[30px] lg:leading-[35px]">
          Ready to Scale Your Business and Unlock New Growth?
        </p>
        <Link href="/contact">

          <button className="mt-4 text-[14px] md:text-base sm:mt-0 bg-[#FF6035] hover:bg-orange-600 text-white font-semibold py-2 px-2 md:px-4 rounded-[11px] transition-all duration-500 ">
            Schedule a call with our expert
          </button>
        </Link>
      </div>
      <IndustriesCarousel />
      <BrandSlider2 brand_icons={home_brand_icons} />
      <Faqs />
    </div>
  )
}

export default BookDemo