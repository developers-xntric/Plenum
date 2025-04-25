import { caseStudies } from "@/data/case-studies-card-data"
import CaseStudyCard from "../common/home-case-study-card"


export default function CaseStudies({title,paragraph,caseStudies}) {

    return (
        <section className="bg-white ">
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto py-12 xl:py-10">
                <div className="mb-8 space-y-6">
                    <div className="w-[90%] lg:max-w-[85%] xl:max-w-[70%] 2xl:max-w-[65%]">
                        <h2 className="text-[50px] leading-[55px] font-['Archivo'] text-secondary font-medium home-section-headings">
                            {title}
                        </h2>
                    </div>

                    <p className="text-secondary font-['Archivo'] opacity-75 max-w-[55%]">
                        {paragraph}
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
