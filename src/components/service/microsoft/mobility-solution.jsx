import Image from "next/image"


export default function MobilitySolutions({ solutions, className, card_className, isCenter = false, heading1, heading2, para }) {
  return (
    <section className="py-12 max-w-[90%] 2xl:max-w-[1440px] font-['Archivo'] mx-auto">
      <div className={`mb-8 ${isCenter ? "text-center" : ""}`}>
        <h2 className="text-2xl md:text-[50px] font-semibold text-secondary  home-section-headings leading-[40px]">{heading1 || "Mobility Solutions For"}</h2>
        <h2 className="text-2xl md:text-[50px] font-semibold text-secondary  home-section-headings mb-4">{heading2 || "Microsoft Dynamics"}</h2>
        <p className={`text-[15px] text-[#101010] opacity-60 ${isCenter && "mx-auto max-w-[690px]"} max-w-[540px]`}>
          {para || "Revolutionize your business with turnkey Apps for Dynamics 365, NAV, AX and Business Central provided by Plexian - Certified Microsoft Application Developer."}
        </p>
      </div>

      <div className={`${className} gap-5`}>
        {solutions.map((solution, index) => (
          <div key={index} className={`bg-white px-4 py-6 rounded-sm shadow-sm border border-gray-100 gap-4 justify-center flex flex-col ${card_className}`}>
            <Image
              src={solution.icon || "/placeholder.svg"}
              alt={solution.title}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h3 className="text-[20px] font-semibold text-gray-800">{solution.title}</h3>
            <p className="text-xs text-[#4D4D56]">
              Solution is easy to use and totally customizable to your business needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
