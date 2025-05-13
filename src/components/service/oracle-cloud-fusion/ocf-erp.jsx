import Image from "next/image"

export default function OracleCloudFusionERP() {
    return (
        <section className="2xl:max-w-[1440] max-w-[90%] mx-auto md:pb-20 py-20">
            <div className="text-center mb-8">
                <h2 className="text-[34px] md:max-w-[70%] mx-auto 2xl:max-w-[48%] lg:text-[50px] leading-[34px] md:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings mb-3 lg:mb-6">Oracle Cloud Application Services A Unified Experience</h2>

                <p className="text-[15px] lg:block hidden text-secondary font-['Archivo'] opacity-75 max-w-4xl mx-auto leading-relaxed font-medium">
                   Comprising scalable, safe, and efficient applications tailored to suit companies' particular requirements, Oracle Cloud Application Services constitute the backbone of the Oracle Fusion Cloud ecosystem. 
                </p>

                <p className="text-[15px] lg:block hidden text-secondary font-['Archivo'] opacity-75 max-w-4xl mx-auto leading-relaxed font-medium">
                    Whether your priorities are ERP, HR, supply chain management, or ERP, Oracle Fusion Cloud solutions provide adaptability that lets each company need to be perfectly matched. Integrating Oracle Cloud Application Services will help companies to utilize artificial intelligence and machine learning for improved decision-making, expedite business processes via automation, and achieve flawless departmental integration.
                </p>
            </div>

            <div className="bg-black  overflow-hidden shadow-xl md:max-w-[85%] 2xl:max-w-[77%] mx-auto">
                <div className="relative w-full h-56 md:h-96 lg:h-[610px] 2xl:h-[700px]" >
                    <Image
                        src="/service/OCF/OCF_ERP.svg"
                        alt="Oracle Fusion Cloud ERP Dashboard"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
