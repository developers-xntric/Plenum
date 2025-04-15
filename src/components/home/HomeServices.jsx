import BrandSlider from "../common/BrandSlider";
import Button from "../common/button";

const servicesData = [
  {
    id: 1,
    title: "Managed Cloud Services",
  },
  {
    id: 2,
    title: "ERP consulting and implementation",
  },
  {
    id: 3,
    title: "AI consulting, governance and implementation",
  },
  {
    id: 4,
    title: "Digital Experiences",
  }
]

export default function HomeServices({ }) {

  return (
    <div className=" bg-white ">
      {/* Main content */}
      <div className="container 2xl:max-w-[1300px] w-[90%] mx-auto space-y-20 px-4 py-16 md:py-24">

        {/* BRAND ICONS SLIDER */}
        <BrandSlider />

        <div className="flex flex-col space-y-16">
          {/* UPPER column - Headline */}
          {/* <div className="xl:w-[70%]">
            <h1 className="text-[52px] font-bold font-['Archivo'] text-secondary">Why AI enabled Enterprise with Plenum? With Plenum gain the tools to unlock deeper insights, automate complex workflows</h1>
          </div> */}

          <div className="xl:w-[75%] 2xl:w-[70%]">
            <h2 className="text-[52px] leading-[60px] font-bold font-['Archivo'] text-secondary bg-smoke-image">
              Why AI enabled Enterprise with Plenum? With Plenum gain the tools to unlock deeper insights, automate
              complex workflows
            </h2>
          </div>


          {/* BOTTOM column - Services */}
          <div className="flex  justify-between max-w-[90%]">

            {/* LEFT */}
            <div className="space-y-6 w-[35%] ">
              <div>
                <h2 className="text-[50px] text-secondary font-bold font-['Archivo'] bg-smoke-image">Our</h2>
                <h2 className="text-[50px] text-secondary font-bold font-['Archivo'] bg-smoke-image">Services</h2>
              </div>
              <div className="space-y-2 ">
                <p className="text-sm text-secondary leading-[20px] font-['Archivo']">
                  Plenum offers AI solutions to automate workflows, enhance decisions, and boost efficiency. We tailor
                  services to your needs and help you scale confidently.
                </p>
                <Button link={"/services"} text={"Explore More"} className={" px-6 font-normal font-['Archivo'] py-2 border-2 border-primary text-[#404040] rounded text-sm transition-colors"} />
              </div>
            </div> 

            {/* RIGHT */}
            <div className="space-y-">
              {servicesData.map((item, index) => (
                <div
                  key={index}
                  className="group border-t-[2.5px] border-[#e7e7e7] py-3 flex items-center gap-3 text-secondary text-[21px] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    className="stroke-current group-hover:text-[#FF6035] transition-colors duration-500"
                  >
                    <path
                      d="M16.9722 7.62439L24.5462 14.8954L16.9722 22.1665M23.6373 14.8954H4.55078"
                      strokeWidth="1.81776"
                      strokeLinecap="square"
                    />
                  </svg>
                  <p className="group-hover:text-[#FF6035] font-bold transition-colors duration-500  font-['Archivo']">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
