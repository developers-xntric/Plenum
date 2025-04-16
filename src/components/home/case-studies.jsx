import { caseStudies } from "@/data/case-studies-card-data"
import CaseStudyCard from "../common/home-case-study-card"


export default function CaseStudies() {

    return (
        <section className="bg-white 2xl:py-16">
            <div className="2xl:max-w-[1330px] w-[90%] mx-auto py-16 xl:py-24">
                <div className="mb-8 space-y-6">
                    <div className="xl:max-w-[70%]">
                        <h2 className="text-[50px] leading-[55px] font-['Archivo'] text-secondary font-bold home-section-headings">
                            Our Case Studies Driving AI Transformation Across Industries
                        </h2>
                    </div>

                    <p className="text-gray-600 font-['Archivo'] opacity-[0.7] max-w-[55%]">
                        Plenum isn't just another ERP provider; we embed AI into your systems to deliver actionable insights and
                        smarter decision-making capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={index} title={study.title} image={study.image} link={study.link} />
                    ))}
                </div>

            </div>

        </section>
    )
}
