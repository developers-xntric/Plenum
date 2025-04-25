import Image from "next/image"
import Link from "next/link"

export default function MicrosoftDynamic() {
    return (
        <main className="flex flex-col items-center justify-center py-16 bg-[#EFEFEF]">
            <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl font-medium text-secondary home-section-headings md:text-3xl lg:text-[50px]  ">
                        Powerful & Proven Business
                    </h1>
                    <h1 className="text-2xl md:text-3xl lg:text-[50px]  font-medium text-secondary  home-section-headings mb-4">
                        Solutions for Microsoft Dynamics
                    </h1>
                    <p className="text-sm md:text-base text-[#101010] opacity-60 max-w-2xl mx-auto">
                        We have been driving customer success by delivering proven technology solutions alongside Microsoft for
                        almost 20 years.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 mb-5">
                                <Image
                                    src={service.icon || "/placeholder.svg"}
                                    alt={service.title}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="w-[60%] mx-auto text-base md:text-[20px] font-medium text-secondary home-section-headings mb-[18px]">{service.title}</h3>
                            <p className="text-xs md:text-[15px] text-[#101010] opacity-60 px-4">
                                Implementing Dynamics 365 alone is never easy. As your Microsoft Dynamics partner, you can rest assured
                                that we will support you every step of the way be it customization or turn-key integration solutions.
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8 md:mt-12">
                    <Link
                        href="#contact"
                        className="px-6 py-2 border border-gray-300 rounded text-sm md:text-base text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Get in touch now
                    </Link>
                </div>
            </div>
        </main>
    )
}

const services = [
    {
        title: "Microsoft Dynamics Integration",
        icon: "/service/MD/image1.svg",
    },
    {
        title: "Microsoft Dynamics Migration",
        icon: "/service/MD/image2.svg",
    },
    {
        title: "Microsoft Azure DevOps",
        icon: "/service/MD/image3.svg",
    },
    {
        title: "Microsoft Dynamics Implementation",
        icon: "/service/MD/image4.svg",
    },
    {
        title: "Dynamics Mobility Solutions",
        icon: "/service/MD/image5.svg",
    },
    {
        title: "Business Intelligence",
        icon: "/service/MD/image6.svg"
    },
]
