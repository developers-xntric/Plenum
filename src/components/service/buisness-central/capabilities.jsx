import Image from "next/image"

const capabilities = [
  {
    id: 1,
    title: "Financial Management",
    image: "/images/financial-management.jpg",
    description:
      "Digitalize your financial operations and enhance service with Dynamics Business Central's capabilities. Empower your team for personalized experiences and customer satisfaction.",
  },
  {
    id: 2,
    title: "Sales & Service Management",
    image: "/images/sales-service-management.jpg",
    description:
      "Gain complete financial control with features like general ledger, accounts receivable and payable, budgeting, cash flow management, and financial reporting.",
  },
  {
    id: 3,
    title: "Project Management",
    image: "/images/project-management.jpg",
    description:
      "Efficiently plan, execute, and monitor your projects, ensuring successful delivery by meticulously tracking resources, costs, and timelines. Stay in control and achieve project excellence.",
  },
  {
    id: 4,
    title: "Supply Chain Management",
    image: "/images/supply-chain-management.jpg",
    description:
      "Enhance your chain with Dynamics Business Central. Streamline inventory, procurement, and collaboration with suppliers for seamless operations and timely customer delivery.",
  },
  {
    id: 5,
    title: "Operations Management",
    image: "/images/operations-management.jpg",
    description:
      "Boost your organization with Dynamics Business Central's operations management capabilities to streamline workflows, automate processes, and improve productivity.",
  },
  {
    id: 6,
    title: "Reporting & Analytics",
    image: "/images/reporting-analytics.jpg",
    description:
      "Drive growth with Dynamics Business Central's powerful reporting and analytics. Create interactive reports, visualize data, and identify growth opportunities through advanced analytics.",
  },
]

export default function Capabilities() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Core Capabilities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Dynamics 365 Business Central encompasses a wide range of core capabilities to support your business
            operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {capabilities.map((capability) => (
            <div key={capability.id} className="flex flex-col items-center">
              <div className="relative w-full max-w-[280px] h-[160px] mb-4 overflow-hidden rounded-[30px]">
                <Image
                  src={capability.image || "/placeholder.svg"}
                  alt={capability.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{capability.title}</h3>
              <p className="text-gray-600 text-center text-sm">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
