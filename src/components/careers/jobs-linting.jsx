import Link from "next/link"
import Button from "../common/button"

export default function JobListings() {
    const jobs = [
        {
            title: "Engineering Manager, Machine Learning",
            location: "Remote",
            id: "ml-manager",
        },
        {
            title: "Engineering Manager, Frontend",
            location: "San Francisco",
            id: "frontend-manager",
        },
        {
            title: "Member of Technical Staff, Backend",
            location: "Remote",
            id: "backend-staff",
        },
        {
            title: "Sales Operations Associate",
            location: "London",
            id: "sales-ops",
        },
        {
            title: "Business Affairs",
            location: "Remote",
            id: "business-affairs",
        },
    ]

    return (
        <section className="bg-[#282526] text-white p-8 md:p-12">
            <div className="2xl:max-w-[1440px] mx-auto w-[95%]">
                <div className="mb-8">
                    <p className="text-[18px] font-normal text-white opacity-60 mb-1">Open roles</p>
                    <h2 className="text-3xl md:text-[50px] tracking-tight font-['Archivo] font-medium leading-tight">
                        Help us rebalance
                        <br />
                        the planet
                    </h2>
                </div>

                <div className="space-y-px">
                    {jobs.map((job) => (
                        <div key={job.id} className="flex items-center justify-between py-5 border-t border-gray-700">
                            <h3 className="text-[24px] font-medium w-[450px]">{job.title}</h3>
                            <span className="text-white w-[250px] text-[16px]">{job.location}</span>
                            <div className="flex items-center gap-8">
                                <Button text={"View Job"} link={"/careers"} className={"px-8 py-2 bg-[#FF5533] hover:bg-[#FF6644] text-white text-[15px]"} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 text-[18px] text-white">
                    <p>Don&apos;t see your role?</p>
                    <p className="mt-1">
                        Send an email to{" "}
                        <a href="mailto:recruiting@system.com" className="underline hover:text-white">
                            recruiting@system.com
                        </a>{" "}
                        and we&apos;ll let you know if there&apos;s a fit.
                    </p>
                </div>
            </div>
        </section>
    )
}
