import Button from "@/components/common/button"
import Image from "next/image"

export default function MicrosoftDynamic({ heading1, heading2, para, services, button, bgColor = "white", className, isCenter = false, paraClass }) {
    return (
        <main className={`flex flex-col items-center font-['Archivo'] justify-center py-16 bg-[#EFEFEF] ${bgColor === "black" ? "bg-black text-white" : "bg-[#EFEFEF]"} `}>
            <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className={`text-2xl font-medium  ${bgColor === "black" ? "text-white" : "home-section-headings"} md:text-3xl lg:text-[50px]`}>
                        {heading1}
                    </h1>
                    <h1 className={`text-2xl md:text-3xl lg:text-[50px]  font-medium   ${bgColor === "black" ? "text-white" : "home-section-headings"} mb-4`}>
                        {heading2}
                    </h1>
                    <p className="text-sm md:text-base opacity-60 max-w-2xl mx-auto">
                        {para}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services?.map((service, index) => (
                        <div key={index} className={`${className}`}>
                            <div className="w-12 h-12 mb-5">
                                <Image
                                    src={service.icon || "/placeholder.svg"}
                                    alt={service.title}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className={`w-[60%] ${isCenter && 'mx-auto'} text-base md:text-[20px] font-medium ${bgColor === "black" ? "text-white" : "home-section-headings"} mb-[18px]`}>{service.title}</h3>
                            <p className={`"text-xs md:text-[15px] opacity-60  ${paraClass} `}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8 md:mt-12">
                    <Button
                        text={button}
                        link="/"
                        className={`px-6 py-2 border border-gray-300 rounded text-sm md:text-base ${bgColor === "black" ? "text-white" : "text-gray-700"} `}
                    />
                </div>
            </div>
        </main>
    )
}

