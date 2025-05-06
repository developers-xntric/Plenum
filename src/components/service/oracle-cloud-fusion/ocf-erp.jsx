import Image from "next/image"

export default function OracleCloudFusionERP() {
    return (
        <section className="max-w-5xl mx-auto px-4 pb-1 md:pb-12 py-12">
            <div className="text-center mb-8">
                <h2 className="text-[34px] lg:text-[50px] leading-[34px] md:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings mb-3 lg:mb-6">Oracle Fusion Cloud ERP</h2>

                <p className="text-[15px] lg:block hidden text-secondary font-['Archivo'] opacity-75 max-w-4xl mx-auto leading-relaxed font-medium">
                    Oracle Fusion Cloud ERP allows company decision makers to see historical data on financials, operational
                    costs, and more from a Oracle Enterprise Resource Planning Cloud solution that built-in best practices that
                    offers personalization within the application. It's a scalable SaaS environment that allows the application to
                    scale to support the business as it grows, without the need to invest in additional technologies or AI, IoT,
                    and blockchain.
                </p>

                <p className="text-[15px] lg:block hidden text-secondary font-['Archivo'] opacity-75 max-w-4xl mx-auto leading-relaxed font-medium">
                    Utilizing a cloud solution creates reduction of spending for on-s and hardware upgrades, while the web-based
                    application standards based architecture takes advantage of the new technologies.
                </p>

                <p className="text-[15px] lg:block hidden text-secondary font-['Archivo'] opacity-75 max-w-4xl mx-auto leading-relaxed font-medium">
                    Oracle Fusion Cloud ERP offers new digital technologies such as risk-based dashboards and social collaboration
                    tools. It assists business, people and processes, bringing your company to the technology.
                </p>

                <p className="text-[15px] lg:hidden block text-secondary font-['Archivo'] opacity-75  max-w-4xl mx-auto leading-relaxed font-medium">
                Oracle Fusion Cloud ERP allows company decision makers to vie historical data on financials, operational costs, and more from a Oracle Enterprise Resource Planning Cloud, solutions are built platform that offers personalization within the application. It pr "upgrade-safe" environment that allows the application to scale to support the latest technologies. 
                </p>
            </div>

            <div className="bg-black  overflow-hidden shadow-xl md:max-w-[85%] 2xl:max-w-[100%] mx-auto">
                <div className="relative w-full h-56 md:h-96 lg:h-[610px]" >
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
