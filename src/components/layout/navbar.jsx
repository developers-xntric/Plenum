"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Button from "../common/button"
// import { link } from "fs"

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
                    title: "Microsoft Dynamics ERP Solutions",
                    isExpanded: true,
                    link: "/service/microsoft-dynamics",
                    items: [
                        { title: "Business Central", link: "/service/business-central" },
                        { title: "Finance and Operations", link: "/service/finance-operations" },
                    ],
                },
                {
                    title: "Oracle ERP Solutions",
                    isExpanded: true,
                    link: "/service/oracle",
                    items: [
                        { title: "Net Suite", link: "/service/oracle-net-suite" },
                        { title: "Fusion Cloud", link: "/service/oracle-cloud-fusion" },
                    ],
                },
                //  {
                //     title: "Managed Cloud Services",
                //     link:"/service/manage-cloud",
                //     // isExpanded: true,
                //     // link: "/service/oracle",
                //     // items: [
                //     //     { title: "Net Suite", link: "/service/oracle-net-suite" },
                //     //     { title: "Fusion Cloud", link: "/service/oracle-cloud-fusion" },
                //     // ],
                // },
                // {
                //     title:"AI Consulting, Governance and Implementation",
                //     link: "/service/ai-consulting",
                // },
                // {
                //     title:"Digital Experiences",
                //     link:"service/digital-experiences",
                // }
            ],
        },
        {
            title: "Managed Cloud Services",
            isExpanded: false,
            link: "/service/manage-cloud",
        },
        {
            title: "AI consulting, governance and implementation",
            isExpanded: false,
            link: "/service/ai-consulting",
        },
        {
            title: "Digital Experiences",
            isExpanded: false,
            link: "/service/digital-experiences",
        },

    ]

    const productsMenuItems = [
        {
            title: "Momentum AI",
            isExpanded: true,
            link: "/product/momentum-ai",
        },
        {
            title: "Vertical Builds",
            isExpanded: false,
            link: "/product/vertical-builds",
        }
    ]

    const industriesMenuItems = [
        // {
        //     title: "Healthcare Industry",
        //     isExpanded: true,
        //     link: "/industries",
        // },
        // {
        //     title: "BioTech Industries",
        //     isExpanded: false,
        //     link: "/industries",
        // },
        // {
        //     title: "Consumer Banking",
        //     isExpanded: false,
        //     link: "/industries",
        // },
        // {
        //     title: "Construction Industry",
        //     isExpanded: false,
        //     link: "/industries",
        // },
        // {
        //     title: "Agriculture & Food Industries",
        //     isExpanded: false,
        //     link: "/industries",
        // },
        // {
        //     title: "Business & Enterprise Banking",
        //     isExpanded: false,
        //     link: "/industries",
        // },
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

        //     title: "News",
        //     isExpanded: false,
        //     link: "/case-studies",
        // },
        // {
        //     title: "Video & Podcasts",
        //     isExpanded: false,
        //     link: "/case-studies",
        // },
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
            className={`absolute top-9 xl:top-11 left-0 bg-[#4C4C4C] backdrop-blur-[20px] text-white p-6 w-[340px] shadow-lg z-[1000]  transition-all duration-300 ease-in-out ${showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            onMouseEnter={() => handleMouseEnter(setShowDropdown)}
            onMouseLeave={() => handleMouseLeave(setShowDropdown)}
        >
            <ul className="space-y-3">
                {menuItems.map((item, index) => (
                    <li key={index} className="space-y-2 text-[14px] ">
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
                                                    <li key={itemIndex} className="hover:text-[#FF6035] pl-3 transition-colors">
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
        <header className='z-[999] border-[#E2E2E2]border 2xl:w-[1200px] lg:w-[80%]  font-normal font-["Archivo"] mx-auto hidden lg:block fixed -translate-x-1/2 left-1/2 top-6 bg-[#FF6035] rounded-[13px]'>
            <div className="xl:px-[18px] xl:py-2 py-1.5 px-3">
                <div className="flex justify-between items-center">
                    <Link href={"/"} className="w-[100px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="19" viewBox="0 0 89 19" fill="none">
                            <g clipPath="url(#clip0_2888_3658)">
                                <path d="M86.927 1.54102C87.0132 1.54102 87.0746 1.57168 87.1378 1.63302C87.2011 1.57168 87.2624 1.54102 87.3487 1.54102H87.5959V1.67136H87.2126V2.53968H87.0611V1.67136H86.6797V1.54102H86.927Z" fill="black" />
                                <path d="M87.8721 1.63111V2.53776H87.7207V1.54102H87.9105C87.968 1.54102 88.014 1.57744 88.0408 1.62727C88.2018 1.93396 88.1213 1.78062 88.2842 2.08923L88.5277 1.62727C88.5545 1.57935 88.6005 1.54293 88.6561 1.54293H88.8459V2.53968H88.6944V1.63302L88.3072 2.36908H88.2632L87.8721 1.63302V1.63111Z" fill="black" />
                                <path d="M9.00904 2.54102H6.02264C2.69696 2.54102 0 5.23798 0 8.56366V18.1516H2.40944V4.95045H9.01096C11.3265 4.95045 13.203 6.82702 13.203 9.14253C13.203 11.458 11.3265 13.3346 9.01096 13.3346H3.61512L6.02456 15.7441H9.01096C12.6567 15.7441 15.6125 12.7883 15.6125 9.14253C15.6125 5.49675 12.6567 2.54102 9.01096 2.54102H9.00904Z" fill="black" />
                                <path d="M20.429 0.130859H18.0195V15.7414H20.429V0.130859Z" fill="black" />
                                <path d="M36.0409 4.32366V2.54102H29.4394C25.7936 2.54102 22.8379 5.49675 22.8379 9.14253C22.8379 12.7883 25.7936 15.7441 29.4394 15.7441H36.0409V13.3346H29.4394C27.1239 13.3346 25.2473 11.458 25.2473 9.14253C25.2473 6.82702 27.1239 4.95045 29.4394 4.95045H33.6315V7.93686H27.6568L28.9717 10.3463H30.0183C33.344 10.3463 36.0409 7.64933 36.0409 4.32366Z" fill="black" />
                                <path d="M45.6257 2.54102H38.4473V15.7421H40.8567V4.95045H49.2389V15.7421H51.6484V8.56366C51.6484 5.23798 48.9514 2.54102 45.6257 2.54102Z" fill="black" />
                                <path d="M60.0832 15.7421H67.2617V2.54102H64.8522V13.3327H56.47V2.54102H54.0605V9.7195C54.0605 13.0452 56.7575 15.7421 60.0832 15.7421Z" fill="black" />
                                <path d="M82.8217 2.54102H64.8516V4.95045H75.6432V15.7421H78.0527V4.95045H86.4349V15.7421H88.8444V8.56366C88.8444 5.23798 86.1474 2.54102 82.8217 2.54102Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2888_3658">
                                    <rect width="88.8445" height="18.02" fill="white" transform="translate(0 0.130859)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <div className="flex justify-between items-center gap-[5px] xl:gap-[40px] mx-auto">
                        <ul className="flex justify-end items-center gap-6 2xl:gap-8 text-[12px] font-semibold xl:text-[14px] text-black">
                            <li className="hover:text-[#fff] transition-colors">
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li
                                className="relative hover:text-[#fff] transition-colors"
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
                                className="relative hover:text-[#fff] transition-colors"
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
                                <Link href={"/industries"} className="flex items-center hover:text-[#fff] transition-colors">
                                    Industries
                                </Link>
                                {industriesMenuItems.length > 0 && renderDropdown(showIndustriesDropdown, industriesMenuItems, setShowIndustriesDropdown)}
                            </li>
                            <li
                                className="relative hover:text-[#fff] transition-colors"
                                ref={resourcesRef}
                                onMouseEnter={() => handleMouseEnter(setShowResourcesDropdown)}
                                onMouseLeave={() => handleMouseLeave(setShowResourcesDropdown)}
                            >
                                <Link href={"/case-studies"} className="flex items-center">
                                    Resources
                                </Link>
                                {renderDropdown(showResourcesDropdown, resourcesMenuItems, setShowResourcesDropdown)}
                            </li>
                            <li className="hover:text-[#fff] transition-colors">
                                <Link href={"/about"}>About Us</Link>
                            </li>
                            <li className="hover:text-[#fff] transition-colors">
                                <Link href={"/article"}>Articles</Link>
                            </li>
                            <li className="hover:text-[#fff] transition-colors">
                                <Link href={"/careers"}>Careers</Link>
                            </li>
                        </ul>
                    </div>
                    <Button
                        text={"Contact Us"}
                        link="/contact"
                        className={
                            "hover:bg-[#fff] hover:text-[#101010] py-[10px] bg-[#101010] transition-all duration-500 px-8 xl:px-10 text-[#FFFFFF]"
                        }
                    />
                </div>
            </div>
        </header>
    )
}

export default Navbar