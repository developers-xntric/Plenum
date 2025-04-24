import WorldMap from "../common/world-map"
import { ContactForm } from "./contact-form"

export default function ServiceContact() {

    return (

        <div className="bg-white">
            <div className="2xl:max-w-[1300px] w-[90%] mx-auto py-16">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left side - Map and Stats */}
                    <div className="">
                        <div className="relative mb-16">
                            {/* World Map */}
                            <div className="world-map relative">
                                <WorldMap />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-4 gap-8">
                            <div className="stat">
                                <h2 className="text-5xl font-bold text-gray-700">
                                    5000<span className="text-orange-500">+</span>
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    Projects
                                    <br />
                                    Delivered
                                </p>
                            </div>

                            <div className="stat">
                                <h2 className="text-5xl font-bold text-gray-700">
                                    700<span className="text-orange-500">+</span>
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    Global
                                    <br />
                                    Employees
                                </p>
                            </div>

                            <div className="stat">
                                <h2 className="text-5xl font-bold text-gray-700">
                                    1000<span className="text-orange-500">+</span>
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    Companies
                                    <br />
                                    Served
                                </p>
                            </div>

                            <div className="stat">
                                <h2 className="text-5xl font-bold text-gray-700">
                                    20<span className="text-orange-500">+</span>
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    Global Awards
                                    <br />
                                    Won
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
