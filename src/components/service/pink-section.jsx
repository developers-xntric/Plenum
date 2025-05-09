'use client'
import React from 'react';
import ArrowButton from '../common/arrow-button';
import Image from 'next/image';
import Link from 'next/link';

const PinkSection = ({ heading, text, show_button = false, className, isVideo = false }) => {
  return (
    <section className="bg-[#EFEFEF]">
      <div className={`relative h-[500px] md:h-[300px] xl:h-[340px] overflow-hidden ${className}`}>
        {/* Wrapper for max width */}
        <div className="relative max-w-[1440px] w-full mx-auto h-full">
          {/* Desktop Left Image */}
          {isVideo && (
            <div className="hidden md:block absolute top-0 left-0 h-full w-[180px] z-10">
              <Image
                src="/service/pink_link.svg"
                alt="Left Decoration"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Desktop Right Image */}
          {isVideo && (
            <div className="hidden md:block absolute top-0 right-0 h-full w-[250px] z-10">
              <Image
                src="/service/pink_link.svg"
                alt="Right Decoration"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Mobile Images */}
          {isVideo && (
            <>
              <div className="md:hidden absolute -left-20 top-0 z-0 w-[120px] h-full">
                <Image
                  src="/service/pink_mob1.png"
                  alt="Mobile Left"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:hidden absolute -right-1 -top-16 z-0 w-20 h-full">
                <Image
                  src="/service/pink_mob2.png"
                  alt="Mobile Right"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          )}

          {/* Centered Content */}
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-secondary text-[30px] lg:text-[40px] xl:text-[45px] font-['Archivo'] font-semibold home-section-headings leading-[34px] md:leading-[56px]">
              {heading}
            </h2>
            <p className="text-secondary opacity-60 md:text-[14px] xl:text-[18px] font-medium mt-4 font-['Archivo'] max-w-3xl">
              {text}
            </p>
            {show_button && (
              <div className="mt-6">
                <Link href="/contact">
                  <ArrowButton text="Request A Demo" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinkSection;
