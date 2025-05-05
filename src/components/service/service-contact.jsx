import WorldMap from "../common/world-map"
import { ContactForm } from "./contact-form"

export default function ServiceContact() {

    return (

        <div className="bg-white">
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto py-20">
                <div className="flex flex-col lg:flex-row  justify-between gap-y-10 lg:gap-y-0">

                    {/* Left side - Map and Stats */}
                    <div className="lg:w-[60%] ">

                        {/* World Map */}
                        <div className="relative mb-16">
                            <div className="world-map mr-[10%]">
                                <WorldMap />
                            </div>
                        </div>
                        {/* Stats */}
                        <div className="grid grid-cols-4 gap-8 font-['Archivo']">
                            <div className="stat ">
                                <h2 className="text-[28px] md:text-[48px] xl:text-[60px] font-semibold font-['Archivo'] text-[#202020] opacity-[0.8]">
                                    5000<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                    Projects
                                    <br />
                                    Delivered
                                </p>
                            </div>

                            <div className="stat ">
                                <h2 className="text-[28px] md:text-[48px] xl:text-[60px] font-semibold font-['Archivo'] text-[#202020] opacity-[0.8]">
                                    700<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                    Global
                                    <br />
                                    Employees
                                </p>
                            </div>

                            <div className="stat ">
                                <h2 className="text-[28px] md:text-[48px] xl:text-[60px] font-semibold font-['Archivo'] text-[#202020] opacity-[0.8]">
                                    1000<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                    Companies
                                    <br />
                                    Served
                                </p>
                            </div>

                            <div className="stat ">
                                <h2 className="text-[28px] md:text-[48px] xl:text-[60px] font-semibold font-['Archivo'] text-[#202020] opacity-[0.8]">
                                    20<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Archivo'] font-medium">
                                    Global Awards
                                    <br />
                                    Won
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact Form */}
                    <div className="lg:w-[40%]">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
