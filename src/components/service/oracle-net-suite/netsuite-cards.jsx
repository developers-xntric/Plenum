import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NetSuiteCards() {
  return (
    <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto md:px-4 md:py-8 space-y-20">
      {/* center heading and text */}
      <div className=' xl:w-[90%] mx-auto my-auto h-[141px]'>
        <h2 className='text-secondary text-[30px] lg:text-[32px] lg:text-4xl xl:text-[45px] font-["Archivo"] md:max-w-[95%] lg:max-w-[80%] xl:max-w-[75%] mx-auto text-center leading-[34px] xl:leading-[55px] font-semibold home-section-headings'>Get Started with Plenum – Your NetSuite Solution Partner</h2>
        <p className='text-secondary opacity-60 text-[14px] md:text-[14px] xl:text-[18px] font-medium text-center md:max-w-[95%] mx-auto lg:max-w-[90%] xl:max-w-[100%] 2xl-max-w-[100%] font-["Archivo"] mt-4'>Ready to upgrade your business operations with Oracle NetSuite? Speak to our experts today to explore how we can tailor an ERP solution that fuels your growth. With years of experience as Oracle NetSuite partners, our approach combines technology, strategy, and hands-on execution to drive digital transformation across your enterprise.</p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-56 md:mt-16 lg:mt-24 xl:mt-32">
        <div className="bg-gray-100 flex md:flex-row flex-col p-6 md:col-span-2 rounded-sm md:text-left text-center">
          <div className="md:w-1/2">
            <div className="flex md:flex-row flex-col items-center mb-4">
              <div className="md:w-[203px] h-8 md:h-[43px] md:mr-3 ">
                <Image
                  src="/service/ONS/icon1.svg"
                  alt="Propertese"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
            </div>

            <p className="text-[15px] text-secondary opacity-60 md:max-w-[80%] 2xl:max-w-[70%] mb-4">
              Cloud-based property management solution that automates leasing, maintenance, and financial workflows, integrating with ERPs like NetSuite for robust financial management. It supports residential and commercial properties with features like tenant/vendor management, subsidiary management, custom templates, and much more.
            </p>

            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-orange-600 mb-4"
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2 h-full flex items-end justify-center">
            <Image
              src="/service/img1.svg"
              alt="Propertese screenshot"
              width={2000}
              height={2000}
              className=" w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-6 col-span-1 rounded-sm md:text-left text-center">
          <div className="flex items-center mb-4">
            <div className="w-[210px] h-8 md:h-[45px] mr-3 flex-shrink-0">
              <Image
                src="/service/ONS/icon2.svg"
                alt="NS AI Assistant"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
          </div>

          <p className="text-[15px] text-secondary opacity-60 mb-4 max-w-[85%] 2xl:max-w-[75%]">
            Effortlessly create sales orders, streamline workflows, visualize saved searches, and master SuiteQL—all
            with a single prompt.
          </p>

          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-orange-600 mb-4"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>

          <div className="relative h-32 w-full">
            <Image
              src="/service/img2.svg"
              alt="NS AI Assistant screenshot"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-6 col-span-1 rounded-sm md:text-left text-center">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="w-[126.13px] h-8 md:h-[43px] mr-3 flex-shrink-0">
              <Image src="/service/ONS/icon3.svg" alt="NOtitch" width={1000} height={1000} className="w-full h-full" />
            </div>
          </div>

          <p className="text-[15px] max-w-[90%] text-secondary opacity-60 mb-4 2xl:max-w-[75%]">
            Custom NetSuite solution, optimizes the Cut-Make-Trim (CMT) process and supports Full Package Production
            (FPP) for outsourced manufacturing, enabling brands to focus on design and distribution.
          </p>

          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 mb-4"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>

          <div className="relative h-32 w-full">
            <Image
              src="/service/img3.svg"
              alt="NOtitch screenshot"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
