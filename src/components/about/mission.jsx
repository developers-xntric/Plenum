import Image from "next/image"
export default function MissionSection({ image, title, subtitle, description, bg = "white", left = false }) {
    return (
        <section className={`w-full py-12 md:py-16 lg:py-20 font-["Archivo"] ${bg == "white" ? "bg-white" : "bg-[#282526]"}`}>
            <div className="max-w-[90%] 2xl:max-w-[1440px] mx-auto">
                <div className={`flex flex-col  gap-8 md:gap-12 lg:gap-12 xl:gap-20 ${left ? "md:flex-row-reverse" : "md:flex-row"} `}>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={image || null}
                            alt="Team photo"
                            width={1000}
                            height={1000}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 xl:w-[45%] flex flex-col justify-center">
                        <h2 className={`${bg == "white" ? "text-[#282526]" : "text-white"} text-[30px] md:text-[36px] font-semibold  mb-4`}>{title}</h2>
                        <h3 className={`${bg == "white" ? "text-[#282526]" : "text-white"} text-[18px] md:text-[20px] font-medium  mb-4`}>{subtitle}</h3>
                        <div className="space-y-4">
                            {description.map((paragraph, index) => (
                                <p key={index} className={`${bg == "white" ? "text-[#282526]" : "text-white "} opacity-60 text-[16px]  leading-[24px] `}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
