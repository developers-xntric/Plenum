import Image from "next/image"

export default function StartSmallWithAI() {
    return (
        <section className=" py-16">
            <div className="2xl:max-w-[1440px] mx-auto w-[90%]">
                <div className="text-center mb-8">
                    <h2 className=" text-[30px] lg:text-[50px] leading-[34px] lg:leading-[50px] mx-auto lg:max-w-[55%] xl:max-w-[45%] font-['Archivo'] text-secondary font-semibold home-section-headings mb-6">Start Small and Scale Big
                        with Momentum AI</h2>

                    <p className=" lg:max-w-[80%] xl:max-w-[65%] 2xl:max-w-[55%] mx-auto text-secondary font-['Archivo'] opacity-75">
                        Momentum AI is a powerful cluster technology designed to grow with your business. As your data volume and processing demands increase, Momentum scales effortlessly—offering unmatched flexibility and performance. It supports deployment across leading cloud platforms like Amazon AWS, Google Cloud, IBM Bluemix/Cloud, and Microsoft Azure, as well as on-premises in private clouds or data centers.
                    </p>

                </div>

                <div className="bg-black overflow-hidden shadow-xl lg:max-w-[85%] mx-auto">
                    <div className="relative w-full h-[200px] md:h-[280px] lg:h-[600px]" >
                        <Image
                            src="/service/OCF/OCF_ERP.svg"
                            alt="Oracle Fusion Cloud ERP Dashboard"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
