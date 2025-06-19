"use client";

import Image from "next/image";
import Button from "@/components/common/button";
import React from "react";

const Service_Inner_Hero = ({
  heading,
  para,
  is_space_in_image = true,
  image,
  image_className,
  button_text,
  button_className,
  isERP = false,
  isBottomButton = true,
  heading_className,
  para_className,
}) => {
  return (
    <div className="lg:h-[110vh] xl:h-[780px] 2xl:h-[820px] overflow-hidden">
      <div className="2xl:max-w-[1440px] lg:w-[90%] mx-auto space-y-20 pt-10 md:py-16 lg:py-28">
        <div className="flex lg:flex-row flex-col items-center lg:items-center justify-between gap-8 mt-12 lg:mt-0 2xl:mt-20">
          {/* LEFT: Text */}
          <div className={`lg:w-[45%] text-center lg:text-left space-y-6 md:space-y-8 px-4 lg:px-0 ${heading_className}`}>
            <h1 className="text-secondary text-[39px] sm:text-[44px] md:text-[50px] 2xl:text-[54px] font-['Chakra'] leading-[42px] md:leading-[55px] font-semibold">
              {heading}
            </h1>
            <p className={`text-secondary font-medium text-[18px] opacity-60 font-['Archivo'] lg:w-[80%] ${para_className}`}>
              {para}
            </p>
            {!isBottomButton && (
              <Button
                text={button_text || "Let's Talk"}
                link="/contact"
                className={
                  button_className
                    ? button_className
                    : "px-10 py-2.5 bg-[#FF6035] hover:bg-black duration-300 text-white"
                }
              />
            )}
          </div>

          {/* RIGHT: Image */}
          <div
            className={`${
              image_className
                ? image_className
                : "lg:w-[600px] lg:h-[400px] xl:w-[813px] xl:h-[663px]"
            } ${!is_space_in_image ? "relative lg:top-8 md:-top-10 xl:top-8 left-[5.55%]" : ""}`}
          >
            <Image
              src={image}
              alt="ERPC"
              width={813}
              height={663}
              priority
              fetchPriority="high"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Bottom Button */}
        {isBottomButton && (
          <div className="flex justify-center lg:justify-start relative lg:bottom-10">
            <Button
              text={button_text || "Let's Talk"}
              link="/contact"
              className={
                button_className
                  ? button_className
                  : "px-10 py-2.5 bg-[#FF6035] hover:bg-black duration-300 text-white"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Service_Inner_Hero;
