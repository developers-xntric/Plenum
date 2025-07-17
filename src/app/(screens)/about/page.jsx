
import AboutHero from '../../../components/about/about-hero'
import LeadershipSection from '../../../components/about/leadership'
// import MissionSection from '@/components/about/mission'
import OurPurpose from '../../../components/about/our-purpose'
import TabsSection from '../../../components/about/tabs-section'
import WhoWeAre from '../../../components/about/who-we-are'
import BrandSlider from '../../../components/common/brand-slider'
import { service_brand_icons } from '../../../data/brand-slider-icons-data'
import About4 from '../../../components/about/about-4'
import OurPeopleSection from '../../../components/about/our-people'


export const metadata = {
  title: 'About Plenum | AI Innovators Powering Digital Change',
  description: 'Learn about Plenum’s mission, vision, and leadership in AI-powered innovation and enterprise technology solutions.',
  alternates: {
    canonical: 'https://plenum-tech.com/about',
  },
};

const About = () => {
  return (
    <div>
      
      <AboutHero />
      <div className="2xl:max-w-[1440px] mx-auto w-[90%] py-10 md:py-14">
        <BrandSlider brand_icons={service_brand_icons} text={"Trusted by world's most exciting brands"} />
      </div>
      <WhoWeAre />
      <OurPurpose />
      <About4 />
      <TabsSection />
      <LeadershipSection />
      <OurPeopleSection />
    </div>
  )
}

export default About
