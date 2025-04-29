import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const data = [
    {
        title: "Brand OS",
        description: "At our core is a brand operating system that synthesizes every fiber of your brand, from strategies and business plans.",
        industry: "Finance",
        deliverables: ["Web Design", "Brand Identity", "Product Design"],
        image: "/casestudy/case1.svg",
        link: "/",
    },
    {
        title: "NovaChem Industries",
        description: "At our core is a brand operating system that synthesizes every fiber of your brand, from strategies and business plans.",
        industry: "Finance",
        deliverables: ["Web Design", "Brand Identity", "Product Design"],
        image: "/casestudy/case2.svg",
        link: "/",
    },
    {
        title: "Lunaris Apparel Co",
        description: "At our core is a brand operating system that synthesizes every fiber of your brand, from strategies and business plans.",
        industry: "Apparel",
        deliverables: ["Web Design", "Brand Identity", "Product Design"],
        image: "/casestudy/case3.svg",
        link: "/",
    },
    {
        title: "GreenHaven Foods",
        description: "At our core is a brand operating system that synthesizes every fiber of your brand, from strategies and business plans.",
        industry: "Foods",
        deliverables: ["Web Design", "Brand Identity", "Product Design"],
        image: "/casestudy/case4.svg",
        link: "/",
    },
]
export default function ListingPage() {
    return (
        <div className="pt-20 font-['Archivo']">
            <div className='2xl:max-w-[1200px] max-w-[90%] mx-auto'>
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col lg:flex-row 2xl:gap-12 gap-8 justify-between mb-[100px]">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full "
                                />
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-3xl sm:text-[32px] font-medium text-[#101010] opacity-[0.9968] mb-3">{item.title}</h2>
                                    <p className="text-[#989898] text-[17px] max-w-[60%] 2xl:max-w-[50%] mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="relative flex justify-between">
                                        {/* Left Side */}
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-[14px] font-['Chakra'] text-[#989898] opacity-[0.9968] ">Industry</p>
                                                <p className="text-[17px] font-normal text-[#101010] opacity-[0.9968] ">{item.industry}</p>
                                            </div>

                                            <Link
                                                href={item.link}
                                                className="inline-flex items-center text-[#FF6035] opacity-[0.9968] text-[20px] font-semibold underline hover:no-underline"
                                            >
                                                View Project <ArrowUpRight className="ml-1 w-4 h-4" />
                                            </Link>
                                        </div>
                                        {/* Right Side */}
                                        <div className="text-right">
                                            <p className="text-[14px] font-['Chakra'] text-[#989898] opacity-[0.9968] ">Deliverables</p>
                                            {item.deliverables.map((deliverable, index) => (
                                                <p key={index} className="text-[17px] font-normal text-[#101010] opacity-[0.9968] ">{deliverable}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}