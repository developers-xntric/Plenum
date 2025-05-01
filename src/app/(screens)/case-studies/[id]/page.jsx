import Image from "next/image"
import Section2 from "@/components/case-studies/section2"
import CaseDetailHero from "@/components/case-studies/case-details-hero"
import Personalization from "@/components/case-studies/personalization"
import AISolutions from "@/components/product/AI-solutions"
import TeamTestimonials from "@/components/careers/team-testimonials"
import IndustryShowcase from "@/components/industries/industry-showcase"

export default function BrandOSPage() {
  return (
    <main>
      <CaseDetailHero />
      <Section2 />
      <Personalization />
      <div className="py-16">
        <AISolutions
          title={"Create Comprehensive AI Solutions Without Coding"}
          paragraph={"Accelerate digital transformation with Momentum AI by PlenumTech — a no-code platform that streamlines data ingestion, ML model training, deployment, and workflow automation."}
          image={'/casestudy/cs4.svg'} />
      </div>
      <div className="2xl:max-w-[1440px] lg:w-[82%] xl:w-[65%] 2xl:w-[50%] mx-auto py-20">
        <div className="w-[700px] mx-auto flex flex-col gap-10">
          <div className="w-full h-[70px] flex justify-center">
            <Image src={"/images/brand-logos/momentum.webp"} alt="Logo" width={1500} height={1500} className="w-[196.083px]" />
          </div>
          <p className="text-center text-[20px] font-['Archivo'] font-normal opacity-60">“The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what we do.”</p>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
              <Image
                src={"/careers/p1.svg"}
                alt={"People"}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-[16px]">Maroun Najjar</p>
              <p className="text-xs text-gray-600">Head of Design</p>
            </div>
          </div>
        </div>
      </div>
      <IndustryShowcase />
    </main>
  )
}
