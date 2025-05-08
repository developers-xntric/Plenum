'use client';

import Image from 'next/image';
import Button from '../common/button';

export default function AboutHero() {
  return (
    <section
      className="bg-black text-white pt-16 md:px-16 relative bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url('/service/sp_herobg.webp')` }}
    >
      {/* Heading and button section */}
      <div className="flex w-full mx-auto justify-center lg:h-[40vh] mt-32 md:mt-40">
        <div className="w-full mx-auto flex flex-col gap-8 px-2 md:px-0">
          <h1 className=" lg:max-w-[95%]  xl:max-w-[90%] 2xl:max-w-[80%] mx-auto text-white 2xl:text-[75px] text-[36px] lg:text-[55px] font-semibold xl:text-[70px] leading-10 md:leading-[50px] xl:leading-[71px] font-['Chakra'] text-center">
            Driving <span className="text-primary">Enterprise Efficiency <br /></span>
            Through Intelligent ERP Solutions
          </h1>
          <p className="font-['Archivo'] font-normal text-[16px] 2xl:max-w-[60%] lg:text-lg xl:text-[19px] text-center opacity-[0.6] text-white md:max-w-[80%] max-w-[92%] mx-auto">
            We’re on a mission to redefine how businesses operate integrating people, processes, and
            technology into a unified, scalable ERP system that fuels growth and innovation.
          </p>
          <div className="flex items-center justify-center">
            <Button
              className="px-8 py-2.5 hover:bg-[#FF6035] transition-colors ease-in-out duration-300 hover:text-white tracking-tighter font-semibold bg-white text-black rounded font-['Archivo'] text-[15px]"
              text="Request a Demo"
              link="/service"
            />
          </div>
        </div>
      </div>

     

      {/* Desktop image grid */}
      <div className="grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-12 lg:grid hidden">
        <div className="relative h-96 2xl:h-[500px] overflow-hidden">
          <Image
            src="/about/about-hero3.png"
            alt="ERP Dashboard 1"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-72 2xl:h-[400px] -bottom-12 2xl:-bottom-14 overflow-hidden self-center">
          <Image
            src="/about/about-hero2.png"
            alt="ERP Dashboard 2"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-96 2xl:h-[500px] overflow-hidden">
          <Image
            src="/about/abou-hero1.png"
            alt="ERP Dashboard 3"
            fill
            className="object-cover"
          />
        </div>
      </div>

      
       {/* Mobile image section */}
       <div className="relative -bottom-10 w-[100vw] h-[300px] md:h-full mt-10 lg:hidden">
        <Image
          src="/about/about-hero-mob.png"
          alt="ERP Mobile"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
