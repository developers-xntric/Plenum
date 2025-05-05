import Image from "next/image"

export default function Finance_Opearations_Service() {
    return (
        <section className="py-20 lg:px-16 2xl:max-w-[1440px] font-['Archivo'] max-w-[90%] mx-auto">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-[30px] md:text-[50px] text-secondary font-semibold home-section-headings leading-[40px]">Impact of Dynamics 365 Finance and Operations</h2>
                <p className="mt-8 text-[15px] text-[#101010] opacity-60 max-w-xl mx-auto">
                    Explore our latest insights for insights in design, workflow, and innovation. Stay updated with fresh
                    perspectives in the industry world.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {impactItems.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="flex flex-col gap-4 items-center md:items-start justify-center">
                            <Image
                                src={item.icon || "/placeholder.svg"}
                                alt={item.title}
                                width={32}
                                height={32}
                                className="w-14 h-14 md:w-8 md:h-8"
                            />
                            <div className="">
                                <h3 className="md:max-w-[70%] text-[25px] md:text-[28px] md:text-start text-center text-secondary font-semibold home-section-headings mb-4 leading-[30px]">{item.title}</h3>
                                <p className="text-[15px] opacity-60 text-[#101010] text-center md:text-secondary">{item.description}</p>
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
            "Microsoft Dynamics 365 Finance and Operations provides a secure and accessible platform for all of your business needs. With built-in security controls, you can rest assured that your data is protected while remaining accessible to users.",
        icon: "/service/MD/fao1.svg",
    },
    {
        title: "Cost-effective solution",
        description:
            "Dynamics 365 Finance and Operations streamlines operations by automating manual processes and reducing costs through cloud-based solutions. It enables collaboration and integration, saving organizations time and resources.",
        icon: "/service/MD/fao2.svg",
    },
    {
        title: "Optimized business operations",
        description:
            "Microsoft Dynamics 365 Finance and Operations helps businesses streamline operations through automated processes, offering real-time insights and improved decision-making capabilities.",
        icon: "/service/MD/fao3.svg",
    },
    {
        title: "Enhanced visibility and control",
        description:
            "With Dynamics 365, you gain deeper insights, consolidating data across your organization. Real-time dashboards and reports enable better visibility and enhanced decision-making capabilities.",
        icon: "/service/MD/fao4.svg",
    },
]
