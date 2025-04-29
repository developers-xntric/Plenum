import React from 'react'
import CaseHero from '@/components/common/case-hero'
import ListingPage from '@/components/casestudy/listing'
import PinkSection from '@/components/service/pink-section'
import ServiceContact from '@/components/service/service-contact';
const CaseStudy = () => {
  return (
    <div>
      <CaseHero />
      <ListingPage />
      <PinkSection
        heading={"Ready To Supercharge Your AI Workflow?"}
        text={"Ready to explore the power of AI? Contact us 24×7 to schedule a one-on-one consultation and see how Momentum AI can elevate your AI workflow management and automation journey."}
        show_button={true}
        className="xl:h-[340px]"
        isVideo={true}
      />
      <ServiceContact />
    </div>
  )
}

export default CaseStudy