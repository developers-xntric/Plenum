'use client'

import Link from "next/link";
import { useRef, useState } from "react";


export default function AISolutions({ title, paragraph, video }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <section className='relative font-["Archivo"] bg-[#EFEFEF]'>
            <div className={` `}>
                <div className={`flex 2xl:items-center md:flex-row flex-col justify-between`}>
                    <div className='space-y-7'>
                        <div className="2xl:max-w-[1440px] lg:w-[82%] max-w-[90%] xl:w-[65%] 2xl:w-[50%] mx-auto flex items-center md:items-start flex-col md:flex-col py-12">

                            <div className='relative flex items-center justify-start'>
                                <h2 className='text-[30px] md:text-left text-center md:text-[36px] text-secondary font-semibold tracking-[-1.5px] md:tracking-tight home-section-headings leading-[34px] md:leading-10 lg:max-w-[85%] xl:max-w-[100%] 2xl:max-w-[90%]'>{title}</h2>
                            </div>
                            <p className='text-secondary md:text-left text-center font-["Archivo"] lg:max-w-[95%] xl:max-w-[88%] 2xl:max-w-[90%] my-4 opacity-75 text-[15px]'>{paragraph}</p>


                            <Link href='/contact' className=" md:text-left text-center w-fit " >
                                <button className='font-["Archivo"] hover:bg-black ease-in-out duration-500 mt-4 md:w-44 cursor-pointer bg-[#FF6035] rounded-[8px] xl:px-8 px-4 xl:py-3 py-2 text-white font-primary xl:text-[15px]'  >Request a demo</button>
                            </Link>
                        </div>

                    </div>
                    <div className="flex justify-center relative items-center md:w-[80%] 2xl:w-[50%]">
                        <video
                            ref={videoRef}
                            className="w-full h-72 md:h-full object-cover"
                            src={video || "/product/momentum.mp4"}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                </div>
                <div>
                </div>
            </div>
        </section>
    );
}