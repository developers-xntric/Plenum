import Image from "next/image";
import Link from "next/link";

export default function AISolutions({ title, paragraph, image }) {
    return (
        <section className='relative font-["Archivo"] bg-[#EFEFEF]'>
            <div className={` `}>
                <div className={`flex 2xl:items-center md:flex-row flex-col justify-between`}>
                    <div className='space-y-7'>
                        <div className="2xl:max-w-[1440px] lg:w-[82%] max-w-[90%] xl:w-[65%] 2xl:w-[50%] mx-auto flex flex-col py-12">

                            <div className='relative flex items-center justify-start'>
                                <h2 className='text-[30px] md:text-[36px] text-secondary font-semibold tracking-[-1.5px] md:tracking-tight home-section-headings leading-[45px] md:leading-10 lg:max-w-[85%] xl:max-w-[90%] 2xl:max-w-[90%]'>{title}</h2>
                            </div>
                            <p className='text-secondary font-["Archivo"] lg:max-w-[95%] xl:max-w-[99%] 2xl:max-w-[90%] my-4 opacity-75'>{paragraph}</p>


                            <Link href='/contact' className="w-fit" >
                                <button className='font-["Archivo"] hover:bg-black ease-in-out duration-500 mt-4 w-44 cursor-pointer bg-[#FF6035] rounded-[8px] xl:px-8 px-4 xl:py-3 py-2 text-white font-primary xl:text-[15px] '  >Request a demo</button>
                            </Link>
                        </div>

                    </div>
                    <div className=' flex justify-center relative items-center md:w-[80%] 2xl:w-[50%] '>
                        <Image src={image} alt='img' width={1000} height={1000} className='w-full h-full' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                className="bg-white rounded-full cursor-pointer w-12 h-12 md:w-24 md:h-24 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                                aria-label="Play video"
                            >
                                <span className="text-gray-800 font-medium text-xs md:text-sm">Play</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}