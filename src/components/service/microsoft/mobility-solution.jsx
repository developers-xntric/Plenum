import Image from "next/image"


export default function MobilitySolutions() {
  return (
    <section className="py-12 max-w-[90%] 2xl:max-w-[1440px] font-['Archivo'] mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl md:text-[50px] font-medium text-gray-800 leading-[40px]">Mobility Solutions For</h2>
        <h2 className="text-2xl md:text-[50px] font-medium text-secondary  home-section-headings mb-4">Microsoft Dynamics</h2>
        <p className="text-[15px] text-[#101010] opacity-60 max-w-[540px]">
          Revolutionize your business with turnkey Apps for Dynamics 365, NAV, AX and Business Central provided by
          Plexian - Certified Microsoft Application Developer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white px-4 py-6 rounded-sm shadow-sm border border-gray-100 gap-4 justify-center  flex flex-col">
            <Image
              src={solution.icon || "/placeholder.svg"}
              alt={solution.title}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h3 className="text-[20px] font-medium text-gray-800">{solution.title}</h3>
            <p className="text-xs text-[#4D4D56]">
              Solution is easy to use and totally customizable to your business needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const solutions = [
  {
    title: "Dynamics CRM Application",
    icon: "/service/MD/icon1.svg",
  },
  {
    title: "Workflow Approvals Application",
    icon: "/service/MD/icon2.svg",
  },
  {
    title: "Retail Management Application",
    icon: "/service/MD/icon3.svg",
  },
  {
    title: "Warehouse Management Application",
    icon: "/service/MD/icon4.svg",
  },
  {
    title: "Timesheet Application",
    icon: "/service/MD/icon5.svg",
  },
  {
    title: "Expense Application",
    icon: "/service/MD/icon6.svg",
  },
  {
    title: "Loyalty Management Application",
    icon: "/service/MD/icon7.svg",
  },
  {
    title: "Loyalty Management Application",
    icon: "/service/MD/icon7.svg",
  },
]
