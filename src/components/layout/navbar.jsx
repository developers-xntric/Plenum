"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Button from "../common/button"

const Navbar = () => {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false)
    const [showProductsDropdown, setShowProductsDropdown] = useState(false)
    const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false)
    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false)

    const servicesRef = useRef(null)
    const productsRef = useRef(null)
    const industriesRef = useRef(null)
    const resourcesRef = useRef(null)

    const timeoutRef = useRef(null)

    const servicesMenuItems = [
        {
            title: "ERP consulting and implementation",
            isExpanded: true,
            link: "/service/ERP-consulting",
            subMenus: [
                {
                    title: "Oracle ERP Solutions",
                    isExpanded: true,
                    link: "/service/oracle",
                    items: [
                        { title: "Net Suite", link: "/service/oracle-net-suite" },
                        { title: "Fusion Cloud", link: "/service/oracle-cloud-fusion" },
                    ],
                },
                {
                    title: "Microsoft Dynamics ERP Solutions",
                    isExpanded: true,
                    link: "/service/microsoft-dynamics",
                    items: [
                        { title: "Business Central", link: "/service/business-central" },
                        { title: "Finance and Operations", link: "/service/finance-operations" },
                    ],
                },
            ],
        },
        {
            title: "Managed Cloud Services",
            isExpanded: false,
            link: "/service",
        },
        {
            title: "AI consulting, governance and implementation",
            isExpanded: false,
            link: "/service",
        },
        {
            title: "Digital Experiences",
            isExpanded: false,
            link: "/service",
        },
    ]

    const productsMenuItems = [
        {
            title: "Momentum AI",
            isExpanded: true,
            link: "/product",
        },
        {
            title: "Vertical Builds",
            isExpanded: false,
            link: "/product",
        }
    ]

    const industriesMenuItems = [
        {
            title: "Healthcare Industry",
            isExpanded: true,
            link: "/industries",
        },
        {
            title: "BioTech Industries",
            isExpanded: false,
            link: "/industries",
        },
        {
            title: "Consumer Banking",
            isExpanded: false,
            link: "/industries",
        },
        {
            title: "Construction Industry",
            isExpanded: false,
            link: "/industries",
        },
        {
            title: "Agriculture & Food Industries",
            isExpanded: false,
            link: "/industries",
        },
        {
            title: "Business & Enterprise Banking",
            isExpanded: false,
            link: "/industries",
        },
    ]

    const resourcesMenuItems = [
        {
            title: "Case Studies",
            isExpanded: true,
            link: "/case-studies",
        },
        {
            title: "Blog",
            isExpanded: false,
            link: "/blog",
        },
        {
            title: "News",
            isExpanded: false,
            link: "/case-studies",
        },
        {
            title: "Video & Podcasts",
            isExpanded: false,
            link: "/case-studies",
        },
    ]

    const closeAllDropdowns = () => {
        setShowServicesDropdown(false)
        setShowProductsDropdown(false)
        setShowIndustriesDropdown(false)
        setShowResourcesDropdown(false)
    }

    const handleMouseEnter = (setShowDropdown) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        closeAllDropdowns()
        setShowDropdown(true)
    }

    const handleMouseLeave = (setShowDropdown) => {
        timeoutRef.current = setTimeout(() => {
            setShowDropdown(false)
        }, 300)
    }

    const renderDropdown = (showDropdown, menuItems, setShowDropdown) => (
        <div
            className={`absolute top-10 left-0 bg-[#4C4C4CE5] text-white p-6 w-[340px] shadow-lg z-[1000]  transition-all duration-300 ease-in-out ${showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            onMouseEnter={() => handleMouseEnter(setShowDropdown)}
            onMouseLeave={() => handleMouseLeave(setShowDropdown)}
        >
            <ul className="space-y-3">
                {menuItems.map((item, index) => (
                    <li key={index} className="space-y-2 text-[14px]">
                        <Link
                            href={item.link || "#"}
                            className="flex items-center text-left w-full hover:text-[#FF6035] transition-colors"
                        >
                            <ArrowRight className="mr-2" size={16} />
                            <span>{item.title}</span>
                        </Link>
                        {item.isExpanded && item.subMenus && (
                            <ul className="ml-6 space-y-2">
                                {item.subMenus.map((subMenu, subIndex) => (
                                    <li key={subIndex} className="space-y-2">
                                        <Link
                                            href={subMenu.link || "#"}
                                            className="flex items-center text-left w-full hover:text-[#FF6035] transition-colors"
                                        >
                                            <ArrowRight className="mr-2" size={16} />
                                            {subMenu.title}
                                        </Link>
                                        {subMenu.isExpanded && subMenu.items && (
                                            <ul className="ml-6 space-y-2">
                                                {subMenu.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="hover:text-[#FF6035] transition-colors">
                                                        <Link href={item.link} className="block w-full">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <header className='z-[999] border-[#E2E2E2] border 2xl:w-[1200px] lg:w-[85%] xl:w-[85%] font-normal font-["Archivo"] mx-auto hidden lg:block fixed -translate-x-1/2 left-1/2 top-6 bg-[#FFFFFF] rounded-[13px]'>
            <div className="xl:px-[18px] xl:py-2 py-1.5 px-3">
                <div className="flex justify-between items-center">
                    <Link href={"/"} className="w-[100px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="19" viewBox="0 0 89 19" fill="none">
                            <g clipPath="url(#clip0_1140_1867)">
                                <path
                                    d="M86.9279 1.54094C87.0142 1.54094 87.0755 1.57161 87.1388 1.63295C87.202 1.57161 87.2634 1.54094 87.3496 1.54094H87.5969V1.67128H87.2135V2.5396H87.0621V1.67128H86.6807V1.54094H86.9279Z"
                                    fill="#FF6035"
                                />
                                <path
                                    d="M87.8729 1.63103V2.53768H87.7214V1.54094H87.9112C87.9687 1.54094 88.0147 1.57736 88.0415 1.6272C88.2026 1.93389 88.122 1.78054 88.285 2.08915L88.5284 1.6272C88.5552 1.57928 88.6012 1.54286 88.6568 1.54286H88.8466V2.5396H88.6952V1.63295L88.308 2.369H88.2639L87.8729 1.63295V1.63103Z"
                                    fill="#FF6035"
                                />
                                <path
                                    d="M9.00916 2.54036H6.02276C2.69708 2.54036 0.00012207 5.23732 0.00012207 8.563V18.1509H2.40956V4.9498H9.01108C11.3266 4.9498 13.2032 6.82636 13.2032 9.14188C13.2032 11.4574 11.3266 13.334 9.01108 13.334H3.61524L6.02468 15.7434H9.01108C12.6569 15.7434 15.6126 12.7877 15.6126 9.14188C15.6126 5.49609 12.6569 2.54036 9.01108 2.54036H9.00916Z"
                                    fill="#FF6035"
                                />
                                <path d="M20.4296 0.130859H18.0201V15.7414H20.4296V0.130859Z" fill="#FF6035" />
                                <path
                                    d="M36.0401 4.323V2.54036H29.4386C25.7928 2.54036 22.837 5.49609 22.837 9.14188C22.837 12.7877 25.7928 15.7434 29.4386 15.7434H36.0401V13.334H29.4386C27.123 13.334 25.2465 11.4574 25.2465 9.14188C25.2465 6.82636 27.123 4.9498 29.4386 4.9498H33.6306V7.9362H27.6559L28.9709 10.3456H30.0174C33.3431 10.3456 36.0401 7.64868 36.0401 4.323Z"
                                    fill="#FF6035"
                                />
                                <path
                                    d="M45.6261 2.54036H38.4476V15.7415H40.8571V4.9498H49.2393V15.7415H51.6488V8.563C51.6488 5.23732 48.9518 2.54036 45.6261 2.54036Z"
                                    fill="#FF6035"
                                />
                                <path
                                    d="M60.0827 15.7415H67.2612V2.54036H64.8517V13.332H56.4695V2.54036H54.0601V9.71884C54.0601 13.0445 56.757 15.7415 60.0827 15.7415Z"
                                    fill="#FF6035"
                                />
                                <path
                                    d="M82.822 2.54036H64.8518V4.9498H75.6435V15.7415H78.0529V4.9498H86.4352V15.7415H88.8446V8.563C88.8446 5.23732 86.1476 2.54036 82.822 2.54036Z"
                                    fill="#FF6035"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1140_1867">
                                    <rect width="88.8445" height="18.02" fill="white" transform="translate(0 0.130005)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <div className="flex justify-between gap-[30px] xl:gap-[90px]">
                        <ul className="flex justify-between items-center gap-6 xl:gap-8 2xl:gap-10 text-[12px] font-semibold xl:text-[14px] text-black">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li
                                className="relative"
                                ref={servicesRef}
                                onMouseEnter={() => handleMouseEnter(setShowServicesDropdown)}
                                onMouseLeave={() => handleMouseLeave(setShowServicesDropdown)}
                            >
                                <Link href={"/service"} className="flex items-center">
                                    Services
                                </Link>
                                {renderDropdown(showServicesDropdown, servicesMenuItems, setShowServicesDropdown)}
                            </li>
                            <li
                                className="relative"
                                ref={productsRef}
                                onMouseEnter={() => handleMouseEnter(setShowProductsDropdown)}
                                onMouseLeave={() => handleMouseLeave(setShowProductsDropdown)}
                            >
                                <Link href={"/product"} className="flex items-center">
                                    Products
                                </Link>
                                {renderDropdown(showProductsDropdown, productsMenuItems, setShowProductsDropdown)}
                            </li>
                            <li
                                className="relative"
                                ref={industriesRef}
                                onMouseEnter={() => handleMouseEnter(setShowIndustriesDropdown)}
                                onMouseLeave={() => handleMouseLeave(setShowIndustriesDropdown)}
                            >
                                <Link href={"/industries"} className="flex items-center">
                                    Industries
                                </Link>
                                {renderDropdown(showIndustriesDropdown, industriesMenuItems, setShowIndustriesDropdown)}
                            </li>
                            <li
                                className="relative"
                                ref={resourcesRef}
                                onMouseEnter={() => handleMouseEnter(setShowResourcesDropdown)}
                                onMouseLeave={() => handleMouseLeave(setShowResourcesDropdown)}
                            >
                                <Link href={"/case-studies"} className="flex items-center">
                                    Resources
                                </Link>
                                {renderDropdown(showResourcesDropdown, resourcesMenuItems, setShowResourcesDropdown)}
                            </li>
                            <li>
                                <Link href={"/about"}>About Us</Link>
                            </li>
                            <li>
                                <Link href={"/article"}>Book a Demo</Link>
                            </li>
                            <li>
                                <Link href={"/careers"}>Careers</Link>
                            </li>
                        </ul>
                        <Button
                            text={"Contact Us"}
                            link="/contact"
                            className={
                                "bg-[#101010] py-[10px] hover:bg-[#FF6035] transition-all duration-500 px-5 xl:px-10 text-[#FFFFFF]"
                            }
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar