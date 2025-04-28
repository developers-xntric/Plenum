import Image from "next/image";

export default function AISolutions() {
    return (
        <section className='relative font-["Archivo"] bg-[#EFEFEF]'>
            <div className={` `}>
                <div className={`flex 2xl:items-center justify-between`}>
                    <div className='space-y-7'>
                        <div className="2xl:max-w-[1440px] lg:w-[82%] xl:w-[85%] 2xl:w-[60%] mx-auto flex flex-col py-12">

                            <div className='relative flex items-center justify-start'>
                                <h2 className='text-[36px] text-secondary font-medium home-section-headings leading-10 lg:max-w-[70%] xl:max-w-[70%]   '>Create Comprehensive
                                    AI Solutions Without Coding</h2>
                            </div>
                            <p className='text-secondary font-["Archivo"] lg:max-w-[80%] xl:max-w-[62%] 2xl:max-w-[68%] my-4 opacity-75'>Accelerate digital transformation with Momentum AI by PlenumTech — a no-code platform that streamlines data ingestion, ML model training, deployment, and workflow automation.</p>

                            <button className='font-["Archivo"] mt-4 w-44 cursor-pointer bg-primary rounded-[8px] xl:px-8 px-8 xl:py-3 py-2 text-white font-primary xl:text-[15px] '  >Request a demo</button>
                        </div>

                    </div>
                    <div className=' flex justify-center items-center '>
                        <Image src={"/images/product-momentum-ai/AI-solutions.webp"} alt='img' width={1000} height={1000} className='w-full h-full' />
                    </div>
                </div>
            </div>
        </section>
    );
}