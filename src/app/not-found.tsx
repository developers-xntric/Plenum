import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="bg-[#101010] overflow-x-hidden flex flex-col justify-center items-center">
      <div className="flex flex-col overflow-hidden items-center justify-center 2xl:max-w-[1440px] mx-auto w-[90%] pt-52">
        <div className="h-">
          <Image src="/home/404.svg" width={500} height={500} alt="404" />
        </div>
        <div className="w-full">
          <Image
            src="/home/404-eclipse.svg"
            width={4000}
            height={200}
            alt="404"
            className="relative z-10 w-screen "
          />
          <div className="font-['Archivo'] text-white flex flex-col items-center justify-center absolute z-30 top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-[52px] font-semibold">Oops!</h2>
            <p className="max-w-[80%] text-[21px] font-normal">
              Sorry we couldn't find the page you're looking for
            </p>
            <Link href="/" className="bg-white text-primary py-2 px-6 rounded-[8.41px] mt-8">
              <button>Go Back</button>
            </Link>
          </div>
          <div className="bg-[#101010] w-full h-20 blur-[30px] absolute z-20 -bottom-10"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
