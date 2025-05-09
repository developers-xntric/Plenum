import Image from "next/image"

export default function Finance_Opearations_Service() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center font-['Archivo'] max-w-[90%] mx-auto 2xl:max-w-[1440px] px-4 lg:px-16 py-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[30px] lg:text-[50px] max-w-[1000px] mx-auto home-section-headings font-['Archivo'] text-secondary font-semibold leading-[34px] lg:leading-[50px]">
            Impact of Oracle Cloud ERP and Oracle Fusion Finance
          </h2>
          <p className="mt-8 text-[15px] 2xl:text-[16px] text-[#101010] font-medium opacity-60 max-w-3xl mx-auto">
            Explore our latest insights on Oracle’s innovation in enterprise resource planning, financial management, and workflow optimization. Stay ahead with fresh perspectives that shape the future of business.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-7xl mx-auto">
          {impactItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 w-full">
              <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left w-full">
                <Image
                  src={item.icon || "/placeholder.svg"}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-10 h-10 md:w-8 md:h-8"
                />
                <div>
                  <h3 className="md:max-w-[50%] text-[25px] md:text-[28px] md:text-start text-center text-secondary font-semibold mb-4 leading-[30px]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] md:max-w-[70%] opacity-60 text-[#101010] font-medium text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    )
}

const impactItems = [
    {
        title: "Improved data security & accessibility",
        description:
            "Oracle Cloud ERP offers enterprise-grade security with built-in governance and compliance features. With multi-layered encryption, role-based access, and global data residency options, your sensitive financial and operational data remains protected—while remaining accessible to authorized users anytime, anywhere.",
        icon: "/service/MD/fao1.svg",
    },
    {
        title: "Cost-effective solution",
        description:
            "By automating manual processes and centralizing your operations on the cloud, Oracle Fusion Finance reduces overhead costs and enhances operational efficiency. Cloud-native architecture minimizes infrastructure expenses, while seamless updates and integrations drive long-term value for your business.",
        icon: "/service/MD/fao2.svg",
    },
    {
        title: "Optimized business operations",
        description:
            "Oracle’s intelligent ERP ecosystem streamlines critical business functions—from finance and supply chain to procurement and HR. With real-time process automation, predictive analytics, and AI-powered workflows, you can make smarter decisions, faster.",
        icon: "/service/MD/fao3.svg",
    },
    {
        title: "Enhanced visibility and control",
        description:
            "With Oracle ERP Cloud, gain real-time insights through unified dashboards and powerful analytics. Consolidate data from across your enterprise and turn it into actionable intelligence, improving planning, forecasting, and executive-level control over every business area.",
        icon: "/service/MD/fao4.svg",
    },
]
