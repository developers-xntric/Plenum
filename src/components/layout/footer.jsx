"use client"
import Link from "next/link"
import Image from "next/image"
import ArrowButton from "../common/arrow-button";

export default function Footer() {

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <footer className="bg-secondary text-white  relative">
      <div className="2xl:max-w-[1440px] w-[90%]  mx-auto">
        <div className="flex item-center justify-between gap-8">
          {/* Logo and Left Links */}
          <div className=" space-y-8 pt-12 ">

            {/* PLENUM LOGO */}
            <svg xmlns="http://www.w3.org/2000/svg" width="199" height="41" viewBox="0 0 199 41" fill="none">
              <g clipPath="url(#clip0_1189_1803)">
                <path d="M193.775 3.88281C193.967 3.88281 194.103 3.95089 194.243 4.08705C194.384 3.95089 194.52 3.88281 194.712 3.88281H195.26V4.17214H194.409V6.0996H194.073V4.17214H193.227V3.88281H193.775Z" fill="#FF6035" />
                <path d="M195.873 4.08279V6.09534H195.537V3.88281H195.958C196.086 3.88281 196.188 3.96365 196.248 4.07428C196.605 4.75506 196.426 4.41467 196.788 5.0997L197.328 4.07428C197.388 3.96791 197.49 3.88707 197.613 3.88707H198.035V6.0996H197.699V4.08705L196.839 5.72091H196.741L195.873 4.08705V4.08279Z" fill="#FF6035" />
                <path d="M20.8143 6.10156H14.1852C6.803 6.10156 0.816406 12.0882 0.816406 19.4704V40.7532H6.16477V11.4499H20.8185C25.9584 11.4499 30.1239 15.6154 30.1239 20.7553C30.1239 25.8952 25.9584 30.0607 20.8185 30.0607H8.84108L14.1895 35.4091H20.8185C28.9113 35.4091 35.4723 28.8481 35.4723 20.7553C35.4723 12.6626 28.9113 6.10156 20.8185 6.10156H20.8143Z" fill="#FF6035" />
                <path d="M46.1667 0.75H40.8184V35.4016H46.1667V0.75Z" fill="#FF6035" />
                <path d="M80.8173 10.0586V6.10156H66.1635C58.0708 6.10156 51.5098 12.6626 51.5098 20.7553C51.5098 28.8481 58.0708 35.4091 66.1635 35.4091H80.8173V30.0607H66.1635C61.0236 30.0607 56.8581 25.8952 56.8581 20.7553C56.8581 15.6154 61.0236 11.4499 66.1635 11.4499H75.4689V18.079H62.2065L65.1253 23.4274H67.4485C74.8307 23.4274 80.8173 17.4408 80.8173 10.0586Z" fill="#FF6035" />
                <path d="M102.095 6.10156H86.1602V35.4048H91.5085V11.4499H110.115V35.4048H115.463V19.4704C115.463 12.0882 109.477 6.10156 102.095 6.10156Z" fill="#FF6035" />
                <path d="M134.187 35.4048H150.122V6.10156H144.773V30.0565H126.167V6.10156H120.818V22.036C120.818 29.4182 126.805 35.4048 134.187 35.4048Z" fill="#FF6035" />
                <path d="M184.661 6.10156H144.771V11.4499H168.726V35.4048H174.075V11.4499H192.681V35.4048H198.03V19.4704C198.03 12.0882 192.043 6.10156 184.661 6.10156Z" fill="#FF6035" />
              </g>
              <defs>
                <clipPath id="clip0_1189_1803">
                  <rect width="197.213" height="40" fill="white" transform="translate(0.816406 0.75)" />
                </clipPath>
              </defs>
            </svg>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2 ">
              <div>
                <h3 className="text-[#767676] mb-4 text-lg font-bold font-['Archivo']">Product</h3>
                <ul className="space-y-1 font-normal text-base font-['Archivo']">
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
                <h3 className="text-[#767676] mb-4 text-lg font-bold font-['Archivo']">Company</h3>
                <ul className="space-y-1 font-normal text-base font-['Archivo']">
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
              <Image src="/layout/footer-circle.webp" width={420} height={450} alt="footer-circle" className="" />
              <div className="flex flex-col items-center justify-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <h3 className="text-3xl font-normal mb-1 font-['Archivo']">Got a project?</h3>
                <p className="text-3xl font-normal mb-7 font-['Archivo']">Want to collaborate?</p>
                <ArrowButton text={"Discuss your project"} />
              </div>
            </div>
          </div>

          {/* Right Links */}
          <div className=" mt-[9%] ">
            <div className="flex  gap-x-8 gap-y-2">
              <div>
                <h3 className="text-[#767676] mb-4 text-lg font-bold font-['Archivo']">Legal</h3>
                <ul className="space-y-1 text-base font-['Archivo']">
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
                <h3 className="text-[#767676] mb-4 text-lg font-bold font-['Archivo']">Follow Us</h3>
                <ul className="space-y-1 text-base font-['Archivo']">
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
          <p className="text-[13px] text-white text-center relative  bottom-6 font-['Archivo']">© 2025 Plenum. All rights reserved.</p>
        </div>


        {/* ARROW REDIRECT TO TOP */}
        <button
          onClick={scrollToTop}
          className="arrow-for-top absolute bottom-6 right-6 md:right-20 z-50 hover:scale-110 transition-transform duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path d="M8.5 18.4805L8.5 0.980468M8.5 0.980468L16 8.48047M8.5 0.980468L1 8.48047" stroke="#CB5919" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>
    </footer>
  )
}
