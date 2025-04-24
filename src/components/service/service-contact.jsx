import WorldMap from "../common/world-map"
import { ContactForm } from "./contact-form"

export default function ServiceContact() {

    return (

        <div className="bg-white">
            <div className="2xl:max-w-[1300px] w-[90%] mx-auto py-20">
                <div className="flex flex-col md:flex-row  justify-between">

                    {/* Left side - Map and Stats */}
                    <div className="w-[60%] ">

                        {/* World Map */}
                        <div className="relative mb-16">
                            <div className="world-map mr-[10%]">
                                <WorldMap />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-4 gap-8 font-['Archivo']">
                            <div className="stat ">
                                <h2 className="text-[48px] xl:text-[54px] font-medium font-['Archivo'] opacity-[0.8] text-[#202020]">
                                    5000<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative bottom-2">
                                    Projects
                                    <br />
                                    Delivered
                                </p>
                            </div>

                            <div className="stat">
                                <h2 className="text-[48px] xl:text-[54px] font-medium font-['Archivo'] opacity-[0.8] text-[#202020]">
                                    700<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative bottom-2">
                                    Global
                                    <br />
                                    Employees
                                </p>
                            </div>

                            <div className="stat">
                                <h2 className="text-[48px] xl:text-[54px] font-medium font-['Archivo'] opacity-[0.8] text-[#202020]">
                                    1000<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative bottom-2">
                                    Companies
                                    <br />
                                    Served
                                </p>
                            </div>

                            <div className="stat ">
                                <h2 className="text-[48px] xl:text-[54px] font-medium font-['Archivo'] opacity-[0.8] text-[#202020]">
                                    20<span className="text-primary font-['Archivo'] ">+</span>
                                </h2>
                                <p className="text-secondary opacity-[0.6] relative bottom-2">
                                    Global Awards
                                    <br />
                                    Won
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact Form */}
                    <div className="w-[40%]">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
