import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="bg-[#101010] overflow-x-hidden flex flex-col justify-center items-center md:pb-0 pb-12">
      <div className="relative h-[90vh] md:h-screen flex flex-col overflow-hidden items-center justify-center 2xl:max-w-[1440px] mx-auto w-[90%] pt-20 md:pt-52">
        <div>
          <Image src="/home/404.svg" width={2000} height={2000} alt="404" className="w-[400px] md:w-[600px] 2xl:w-[800px]" />
        </div>
        <div className="w-full relative">
          <Image
            src="/home/404-eclipse.svg"
            width={4000}
            height={200}
            alt="404 Eclipse"
            className="relative z-10 w-screen md:block hidden"
          />
          <div className="font-['Archivo'] text-white flex flex-col items-center justify-center absolute z-30 top-32 md:top-[40%] xl:top-[40%] 2xl:top-[40%] md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-[32px] lg:text-[52px] font-semibold">Oops!</h2>
            <p className="md:max-w-[80%] text-[21px] font-normal">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <Link href="/" className="cursor-pointer mt-2 lg:mt-8">
              <button className="bg-white text-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-500 cursor-pointer py-2 px-6 rounded-[8.41px]  font-semibold">
                Go Back
              </button>
            </Link>
          </div>
          <div className="bg-[#101010] bg-re-500 bg-blak w-full h-20 blur-[25px] absolute z-20 -bottom-9 lg:bottom-0 xl:-bottom-2 2xl:-bottom-7"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
