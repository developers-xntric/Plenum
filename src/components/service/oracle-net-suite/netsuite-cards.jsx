import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NetSuiteCards() {
  return (
    <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto px-4 py-12">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        <div className="bg-gray-100 flex p-6 col-span-2 rounded-sm">
          <div className="w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-[203px] h-[43px] mr-3 ">
                <Image
                  src="/service/ONS/icon1.svg"
                  alt="Propertese"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
            </div>

            <p className="text-sm text-gray-600 max-w-[90%] mb-4">
              Cloud-based property management solution that automates leasing, maintenance, and financial workflows.
              Integrating with ERPs, like NetSuite for robust financial management. It supports residential and commercial
              properties with features like tenant/vendor management, subsidiary management, custom templates, and much
              more.
            </p>

            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-orange-600 mb-4"
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <Image
            src="/service/img1.svg"
            alt="Propertese screenshot"
            width={2000}
            height={2000}
            className=" w-1/2  h-full"
          />
        </div>
        <div className="bg-gray-100 p-6 col-span-1 rounded-sm">
          <div className="flex items-center mb-4">
            <div className="w-[210px] h-[45px] mr-3 flex-shrink-0">
              <Image
                src="/service/ONS/icon2.svg"
                alt="NS AI Assistant"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
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
              className="object-contain object-left"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-6 col-span-1 rounded-sm">
          <div className="flex items-center mb-4">
            <div className="w-[126.13px] h-[43px] mr-3 flex-shrink-0">
              <Image src="/service/ONS/icon3.svg" alt="NOtitch" width={1000} height={1000} className="w-full h-full" />
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
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
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
