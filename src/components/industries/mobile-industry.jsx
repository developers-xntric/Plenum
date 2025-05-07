    "use client"

    import { useState, useEffect } from "react"
    import Image from "next/image"
    import { ArrowUpRight } from "lucide-react"
    import { Swiper, SwiperSlide } from "swiper/react"
    import { Pagination } from "swiper/modules"

    import "swiper/css"
    import "swiper/css/pagination"

    const caseStudies = [
        {
            id: 1,
            title: "Explore More Case studies",
            description:
                "Momentum AI is a unified platform built to automate every stage of the AI lifecycle — from data ingestion to deployment. Designed for enterprise scalability, it streamlines processes and accelerates AI.",
            company: "OrionEdge Technologies",
            image: "/industries/i2.png",
            link: "#",
        },
        {
            id: 2,
            title: "Explore More Case studies",
            description:
                "DataSync Pro enables seamless data integration across enterprise systems with real-time synchronization capabilities and advanced conflict resolution.",
            company: "Nexus Systems",
            image: "/industries/i2.png",
            link: "#",
        },
        {
            id: 3,
            title: "Explore More Case studies",
            description:
                "CloudGuard provides comprehensive security monitoring for cloud infrastructure with automated threat detection and remediation workflows.",
            company: "SecureCloud Inc",
            image: "/industries/i2.png",
            link: "/",
        },
        {
            id: 4,
            title: "Explore More Case studies",
            description:
                "PredictiveOps uses machine learning to forecast system performance issues before they impact business operations.",
            company: "FutureTech Solutions",
            image: "/industries/i2.png",
            link: "/",
        },
    ]

    /**
     * A Swiper component for displaying case studies on mobile
     *
     * Renders a swipeable list of case studies, each with a title, description, and
     * screenshot of the company's dashboard.
     *
     * @returns {JSX.Element} - The rendered Swiper component
     */
    export default function CaseStudiesSlider() {
        const [isMounted, setIsMounted] = useState(false)

        useEffect(() => {
            setIsMounted(true)
        }, [])

        if (!isMounted) {
            return null
        }

        return (
            <div className="bg-white max-w-[90%] mb-10 relative mx-auto md:hidden block font-['Archivo'] ">
                <div className="flex flex-col gap-3 mb-8 text-center">
                    <h1 className="font-semibold leading-[34px] font-['Archivo'] text-[30px] text-secondary tracking-tight">Explore More Case Studies</h1>
                    <p className="text-[15px] opacity-60 font-normal font-['Archivo']">Momentum AI is a unified platform built to automate every stage of the AI lifecycle — from data ingestion to deployment. Designed for enterprise scalability, it streamlines processes and accelerates AI.</p>
                </div>
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="case-studies-swiper"
                >
                    {caseStudies.map((study) => (
                        <SwiperSlide key={study.id}>
                            <div className="case-study-slide px-2 pb-16">
                                <div className="mb-6  overflow-hidden">
                                    <Image
                                        src={study.image}
                                        alt={`${study.company} dashboard`}
                                        width={377}
                                        height={210}
                                        className="w-full h-full"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <h3 className="text-[#232522] text-[20px] font-semibold">{study.company}</h3>
                                    <a
                                        href={study.link}
                                        className="flex items-center justify-center w-6 h-6 rounded-full"
                                        aria-label={`View ${study.company} case study`}
                                    >
                                        <ArrowUpRight className="w-5 h-5 text-[#FF6035]" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination mb-4 absolute bottom-0 flex justify-center"></div>
            </div>
        )
    }
