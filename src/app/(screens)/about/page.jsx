import MissionSection from '@/components/about/mission'
import React from 'react'

const About = () => {
  return (
    <div>
      <MissionSection title='Our Mission' description={['Based in Dubai, UAE, we have established ourselves as a leading IT in-housing company with a passion for innovation and a vision for the future. Our core expertise lies in delivering top-quality IT solutions and skilled resources to businesses, enabling them to thrive in the digital age.', ' Plenum bridges data gaps by connecting systems, people, and processes, transforming fragmented information into unified, actionable insights. By fostering real-time visibility and collaboration, we help enterprises make smarter decisions and scale with confidence.']} subtitle='Breaking Down Data Silos for Unified Enterprise Insights' image='/about/mission.svg' />
      <MissionSection title='Our Vision' description={['Our vision goes beyond just providing IT services; we aim to empower businesses in the Middle East to be self-sufficient and prepared for the technological changes in the new age. At Plenum, we harness the power of AI to turn data into foresight, empowering businesses to act with confidence, agility, and precision. Our predictive analytics enable proactive decision-making that fuels sustainable growth and long-term success.', 'Join us on this journey towards a brighter tomorrow, where possibilities are limitless, and innovation is the driving force.']} subtitle='Enabling Proactive Decision-Making with AI-Powered Predictive Analytics' image='/about/vission.svg' left={true} bg='black' />
    </div>
  )
}

export default About
