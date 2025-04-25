import Image from "next/image"
import Link from "next/link"

export default function MicrosoftDynamic() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12 bg-white">
            <div className="max-w-6xl w-full mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 mb-2">
                        Powerful & Proven Business
                    </h1>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 mb-4">
                        Solutions for Microsoft Dynamics
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                        We have been driving customer success by delivering proven technology solutions alongside Microsoft for
                        almost 20 years.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src={service.icon || "/placeholder.svg"}
                                    alt={service.title}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-xs md:text-sm text-gray-600 px-4">
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
        icon: "/service/Microsoft/image1.svg",
    },
    {
        title: "Microsoft Dynamics Migration",
        icon: "/service/Microsoft/image2.svg",
    },
    {
        title: "Microsoft Azure DevOps",
        icon: "/service/Microsoft/image3.svg",
    },
    {
        title: "Microsoft Dynamics Implementation",
        icon: "/service/Microsoft/image4.svg",
    },
    {
        title: "Dynamics Mobility Solutions",
        icon: "/service/Microsoft/image5.svg",
    },
    {
        title: "Business Intelligence",
        icon: "/service/Microsoft/image6.svg"
    },
]
