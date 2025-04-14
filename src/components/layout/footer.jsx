"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Footer() {
  const [year, setYear] = useState("2023")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-black text-white pb- px-4 md:px-8 lg:px-12 relative">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex item-center justify-between gap-8">
          {/* Logo and Left Links */}
          <div className=" space-y-8 pt-12 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="198" height="40" viewBox="0 0 198 40" fill="none">
              <g clipPath="url(#clip0_1043_8141)">
                <path
                  d="M192.963 3.13672C193.154 3.13672 193.291 3.2048 193.431 3.34095C193.571 3.2048 193.708 3.13672 193.899 3.13672H194.448V3.42605H193.597V5.3535H193.261V3.42605H192.414V3.13672H192.963Z"
                  fill="white"
                />
                <path
                  d="M195.063 3.3367V5.34925H194.727V3.13672H195.148C195.275 3.13672 195.378 3.21756 195.437 3.32819C195.795 4.00897 195.616 3.66858 195.977 4.35361L196.518 3.32819C196.577 3.22182 196.68 3.14097 196.803 3.14097H197.224V5.3535H196.888V3.34095L196.029 4.97482H195.931L195.063 3.34095V3.3367Z"
                  fill="white"
                />
                <path
                  d="M19.9979 5.35156H13.3688C5.9866 5.35156 0 11.3382 0 18.7204V40.0032H5.34837V10.6999H20.0021C25.142 10.6999 29.3075 14.8654 29.3075 20.0053C29.3075 25.1452 25.142 29.3107 20.0021 29.3107H8.02468L13.373 34.6591H20.0021C28.0949 34.6591 34.6559 28.0981 34.6559 20.0053C34.6559 11.9126 28.0949 5.35156 20.0021 5.35156H19.9979Z"
                  fill="white"
                />
                <path d="M45.3484 0H40V34.6516H45.3484V0Z" fill="white" />
                <path
                  d="M65.3413 5.35156C57.2485 5.35156 50.6875 11.9126 50.6875 20.0053C50.6875 28.0981 57.2485 34.6591 65.3413 34.6591H79.995V29.3107H65.3413C60.2014 29.3107 56.0359 25.1452 56.0359 20.0053C56.0359 14.8654 60.2014 10.6999 65.3413 10.6999H74.6467V17.329H61.3842V22.6774H79.9908V5.35156H65.337H65.3413Z"
                  fill="white"
                />
                <path
                  d="M101.278 5.35156H85.3438V34.6548H90.6921V10.6999H109.299V34.6548H114.647V18.7204C114.647 11.3382 108.66 5.35156 101.278 5.35156Z"
                  fill="white"
                />
                <path
                  d="M133.369 34.6548H149.303V5.35156H143.955V29.3065H125.348V5.35156H120V21.286C120 28.6682 125.987 34.6548 133.369 34.6548Z"
                  fill="white"
                />
                <path
                  d="M183.835 5.35156H143.945V10.6999H167.9V34.6548H173.249V10.6999H191.855V34.6548H197.203V18.7204C197.203 11.3382 191.217 5.35156 183.835 5.35156Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1043_8141">
                  <rect width="197.213" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2 ">
              <div>
                <h3 className="text-gray-400 mb-4 text-lg font-semibold font-['Archivo']">Product</h3>
                <ul className="space-y-2 font-normal text-base font-['Archivo']">
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Global Accounts
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Payments
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Transfer
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-400 mb-4 text-lg font-semibold font-['Archivo']">Company</h3>
                <ul className="space-y-2 font-normal text-base font-['Archivo']">
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Center CTA */}
          <div className="md:col-span- flex justify-center relative font-['Archivo']">
            <div className="">
              <Image src="/layout/footer-circle.webp" width={440} height={450} alt="footer-circle" className=""/>
              <div className="flex flex-col items-center justify-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <h3 className="text-3xl font-normal mb-1 font-['Archivo']">Got a project?</h3>
                <p className="text-3xl font-normal mb-4 font-['Archivo']">Want to collaborate?</p>
                <button className="bg-white text-black rounded-full py-1 px-5 flex items-center justify-between gap-2 text-sm hover:bg-gray-100 transition-colors">
                  <div className="bg-orange-600 text-white rounded-full p-2 relative right-4">
                    {/* ARROW ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M15.4786 13.7214V6.54688H8.30404M15.2672 6.75755L6.61523 15.4095"
                        stroke="white"
                        strokeWidth="1.2661"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium font-['Archivo'] relative right-2">Discuss your project</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Links */}
          <div className=" mt-[9%]">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <h3 className="text-gray-400 mb-4 text-lg font-semibold font-['Archivo']">Legal</h3>
                <ul className="space-y-2 text-base font-['Archivo']">
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Regulatory
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-400 mb-4 text-lg font-semibold font-['Archivo']">Follow Us</h3>
                <ul className="space-y-2 text-base font-['Archivo']">
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright  */}
        <div className="flex items-center justify-center ">
          <p className="text-[13px] text-white text-center relative right-5 bottom-6 font-['Archivo']">© {year} Plenum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
