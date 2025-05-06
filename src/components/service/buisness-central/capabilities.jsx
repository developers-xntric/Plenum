'use client'
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useState } from "react"

const capabilities = [
  {
    id: 1,
    title: "Financial Management",
    image: "/images/service/business-central/financial-managment.webp",
    description:
      "Digitalize your financial operations and enhance service with Dynamics Business Central's capabilities. Empower your team for personalized experiences and customer satisfaction.",
  },
  {
    id: 2,
    title: "Sales & Service Management",
    image: "/images/service/business-central/sales-and-service.webp",
    description:
      "Gain complete financial control with features like general ledger, accounts receivable and payable, budgeting, cash flow management, and financial reporting.",
  },
  {
    id: 3,
    title: "Project Management",
    image: "/images/service/business-central/project-management.webp",
    description:
      "Efficiently plan, execute, and monitor your projects, ensuring successful delivery by meticulously tracking resources, costs, and timelines. Stay in control and achieve project excellence.",
  },
  {
    id: 4,
    title: "Supply Chain Management",
    image: "/images/service/business-central/supply-chain.webp",
    description:
      "Enhance your chain with Dynamics Business Central. Streamline inventory, procurement, and collaboration with suppliers for seamless operations and timely customer delivery.",
  },
  {
    id: 5,
    title: "Operations Management",
    image: "/images/service/business-central/operations-management.webp",
    description:
      "Boost your organization with Dynamics Business Central's operations management capabilities to streamline workflows, automate processes, and improve productivity.",
  },
  {
    id: 6,
    title: "Reporting & Analytics",
    image: "/images/service/business-central/reporting-analytics.webp",
    description:
      "Drive growth with Dynamics Business Central's powerful reporting and analytics. Create interactive reports, visualize data, and identify growth opportunities through advanced analytics.",
  },
]

export default function Capabilities() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % capabilities.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current

    if (diff > 50) {
      // Swipe left
      setCurrent((prev) => (prev + 1) % capabilities.length)
    } else if (diff < -50) {
      // Swipe right
      setCurrent((prev) => (prev - 1 + capabilities.length) % capabilities.length)
    }
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-2 lg:space-y-6">
          <h2 className="text-[34px] lg:text-[50px] leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">
            Core Capabilities
          </h2>
          <p className="text-secondary font-['Archivo'] font-medium opacity-75 xl:max-w-[45%] md:max-w-[70%] lg:max-w-[50%] 2xl:max-w-[40%] mx-auto">
            Dynamics 365 Business Central encompasses a wide range of core capabilities to support your business operations
          </p>
        </div>

        {/* Grid layout on medium and up */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {capabilities.map((capability) => (
            <div key={capability.id} className="flex flex-col items-center">
              <div className="relative w-full h-[120px] lg:h-[160px] mb-4">
                <Image
                  src={capability.image || "/placeholder.svg"}
                  alt={capability.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className=" xl:max-w-[70%]">
                <h2 className="text-[18px] lg:text-[22px] font-semibold text-secondary text-center mb-2 xl:max-w-[60%] mx-auto leading-7">
                  {capability.title}
                </h2>
                <p className="text-secondary font-medium font-['Archivo'] opacity-75 text-center text-sm">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel on small screens */}
        <div
          className="md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col items-center">
            <div className="relative w-full h-[160px] mb-4">
              <Image
                src={capabilities[current]?.image || "/placeholder.svg"}
                alt={capabilities[current]?.title || ""}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="max-w-[90%] mx-auto space-y-4">
              <h3 className="text-[22px] font-semibold text-secondary text-center leading-7">
                {capabilities[current]?.title}
              </h3>
              <p className="text-secondary font-medium font-['Archivo'] opacity-75 text-center text-sm">
                {capabilities[current]?.description}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {capabilities.map((_, index) => (
              <button
                key={index}
                className={`w-[6px] h-[6px] rounded-full ${index === current ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrent(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
