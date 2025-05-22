"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, ArrowDown, X, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const getScrollThreshold = () => {
      const width = window.innerWidth;
      if (width <= 375) return 670;
      if (width == 344) return 10;
      return 700; 
    };

    const handleScroll = () => {
      const threshold = getScrollThreshold();
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "/service",
      subItems: [
        {
          name: "ERP consulting and implementation",
          link: "/service/ERP-consulting",
          subItems: [
            {
              name: "Microsoft Dynamics ERP Solutions",
              link: "/service/microsoft-dynamics",
              subItems: [
                { name: "Business Central", link: "/service/business-central" },
                { name: "Finance and Operations", link: "/service/finance-operations" },
              ],
            },
            {
              name: "Oracle ERP Solutions",
              link: "/service/oracle",
              subItems: [
                { name: "Net Suite", link: "/service/oracle-net-suite" },
                { name: "Fusion Cloud", link: "/service/oracle-cloud-fusion" },
              ],
            },
          ],
        },
        { name: "Managed Cloud Services", link: "/service/manage-cloud" },
        { name: "AI consulting, governance and implementation", link: "/service/ai-consulting" },
        { name: "Digital Experiences", link: "/service/digital-experiences" },
      ],
    },
    {
      name: "Products",
      link: "/product",
      subItems: [
        { name: "Momentum AI", link: "/product/momentum-ai" },
        { name: "Vertical Builds", link: "/product/vertical-builds" },
      ],
    },
    {
      name: "Industries",
      link: "/industries",
      subItems: [
        // { name: "Healthcare Industry", link: "/industries" },
        // { name: "BioTech Industries", link: "/industries" },
        // { name: "Consumer Banking", link: "/industries" },
        // { name: "Construction Industry", link: "/industries" },
        // { name: "Agriculture & Food Industries", link: "/industries" },
        // { name: "Business & Enterprise Banking", link: "/industries" },
      ],
    },
    {
      name: "Resources",
      link: "/case-studies",
      subItems: [
        { name: "Case Studies", link: "/case-studies" },
        { name: "Blog", link: "/blog" },
        // { name: "Article", link: "/article" },
        // { name: "News", link: "/case-studies" },
        // { name: "Video & Podcasts", link: "/case-studies" },
      ],
    },
    { name: "About Us", link: "/about" },
    // { name: "Book a Demo", link: "/article" },
    { name: "Careers", link: "/careers" },
  ]

  const toggleExpand = (itemName) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }))
  }

  const renderSubItems = (items, level = 0) => {
    if (!items) return null

    return (
      <ul className={`pl-${level * 4 + 4}`}>
        {items.map((item, index) => (
          <li key={index} className="py-2 group">
            <div className="flex items-center">
              {item.subItems && (
                <span className="mr-1 cursor-pointer" onClick={() => toggleExpand(item.name)}>
                  {expandedItems[item.name] ? (
                    <ArrowDown size={16} className="text-[#101010] group-hover:text-[#FF6035]" />
                  ) : (
                    <ArrowRight size={16} className="text-[#101010] group-hover:text-[#FF6035]" />
                  )}
                </span>
              )}
              {!item.subItems && <span className="w-4 mr-1"></span>}
              <Link
                href={item.link}
                className={`text-[15px] text-[#101010] ${item.subItems ? (expandedItems[item.name] ? 'text-[#FF6035]' : 'opacity-100') : 'opacity-100'} group-hover:text-[#FF6035]`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </div>
            {item.subItems && (
              <div
                className={`overflow-hidden pl-1 transition-all duration-300 ease-in-out ${expandedItems[item.name] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {renderSubItems(item.subItems, level + 1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    )
  }

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false)
    }
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="relative font-['Archivo'] lg:hidden z-[999]">
      <header className={` font-normal transition-colors duration-500 font-['Archivo'] mx-auto p-4 fixed -translate-x-1/2 left-1/2 top-0 ${scrolled ? "bg-[#272727]" : "bg-white border-[#E2E2E2] border"} rounded-[13px] w-[90%] 2xl:w-[1300px]`}>
        <div className="flex justify-between items-center">
          <Link href={"/"} className="w-[100px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="89" height="19" viewBox="0 0 89 19" fill="none">
              <g clipPath="url(#clip0_2316_23867)">
                <path d="M86.927 1.41016C87.0132 1.41016 87.0746 1.44083 87.1378 1.50216C87.2011 1.44083 87.2624 1.41016 87.3487 1.41016H87.5959V1.5405H87.2126V2.40882H87.0611V1.5405H86.6797V1.41016H86.927Z" fill="#FF6035" />
                <path d="M87.8721 1.50025V2.4069H87.7207V1.41016H87.9105C87.968 1.41016 88.014 1.44658 88.0408 1.49641C88.2018 1.8031 88.1213 1.64976 88.2842 1.95837L88.5277 1.49641C88.5545 1.44849 88.6005 1.41207 88.6561 1.41207H88.8459V2.40882H88.6944V1.50216L88.3072 2.23822H88.2632L87.8721 1.50216V1.50025Z" fill="#FF6035" />
                <path d="M9.00904 2.41016H6.02264C2.69696 2.41016 0 5.10712 0 8.4328V18.0207H2.40944V4.8196H9.01096C11.3265 4.8196 13.203 6.69616 13.203 9.01167C13.203 11.3272 11.3265 13.2038 9.01096 13.2038H3.61512L6.02456 15.6132H9.01096C12.6567 15.6132 15.6125 12.6575 15.6125 9.01167C15.6125 5.36589 12.6567 2.41016 9.01096 2.41016H9.00904Z" fill="#FF6035" />
                <path d="M20.429 0H18.0195V15.6106H20.429V0Z" fill="#FF6035" />
                <path d="M36.0409 4.1928V2.41016H29.4394C25.7936 2.41016 22.8379 5.36589 22.8379 9.01167C22.8379 12.6575 25.7936 15.6132 29.4394 15.6132H36.0409V13.2038H29.4394C27.1239 13.2038 25.2473 11.3272 25.2473 9.01167C25.2473 6.69616 27.1239 4.8196 29.4394 4.8196H33.6315V7.806H27.6568L28.9717 10.2154H30.0183C33.344 10.2154 36.0409 7.51847 36.0409 4.1928Z" fill="#FF6035" />
                <path d="M45.6257 2.41016H38.4473V15.6113H40.8567V4.8196H49.2389V15.6113H51.6484V8.4328C51.6484 5.10712 48.9514 2.41016 45.6257 2.41016Z" fill="#FF6035" />
                <path d="M60.0832 15.6113H67.2617V2.41016H64.8522V13.2018H56.47V2.41016H54.0605V9.58864C54.0605 12.9143 56.7575 15.6113 60.0832 15.6113Z" fill="#FF6035" />
                <path d="M82.8217 2.41016H64.8516V4.8196H75.6432V15.6113H78.0527V4.8196H86.4349V15.6113H88.8444V8.4328C88.8444 5.10712 86.1474 2.41016 82.8217 2.41016Z" fill="#FF6035" />
              </g>
              <defs>
                <clipPath id="clip0_2316_23867">
                  <rect width="88.8445" height="18.02" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Menu className="cursor-pointer text-[#FF6035]" onClick={() => setIsOpen(!isOpen)} size={24} />
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white overflow-y-auto transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="p-6 pt-8">
          <div className="flex justify-between items-center borde p-3 border-[#E2E2E2 rounded-[13px] mb-8 bg-[#272727]">
            <Link href={"/"} className="w-[100px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="89" height="19" viewBox="0 0 89 19" fill="none">
                <g clipPath="url(#clip0_2316_23867)">
                  <path d="M86.927 1.41016C87.0132 1.41016 87.0746 1.44083 87.1378 1.50216C87.2011 1.44083 87.2624 1.41016 87.3487 1.41016H87.5959V1.5405H87.2126V2.40882H87.0611V1.5405H86.6797V1.41016H86.927Z" fill="#FF6035" />
                  <path d="M87.8721 1.50025V2.4069H87.7207V1.41016H87.9105C87.968 1.41016 88.014 1.44658 88.0408 1.49641C88.2018 1.8031 88.1213 1.64976 88.2842 1.95837L88.5277 1.49641C88.5545 1.44849 88.6005 1.41207 88.6561 1.41207H88.8459V2.40882H88.6944V1.50216L88.3072 2.23822H88.2632L87.8721 1.50216V1.50025Z" fill="#FF6035" />
                  <path d="M9.00904 2.41016H6.02264C2.69696 2.41016 0 5.10712 0 8.4328V18.0207H2.40944V4.8196H9.01096C11.3265 4.8196 13.203 6.69616 13.203 9.01167C13.203 11.3272 11.3265 13.2038 9.01096 13.2038H3.61512L6.02456 15.6132H9.01096C12.6567 15.6132 15.6125 12.6575 15.6125 9.01167C15.6125 5.36589 12.6567 2.41016 9.01096 2.41016H9.00904Z" fill="#FF6035" />
                  <path d="M20.429 0H18.0195V15.6106H20.429V0Z" fill="#FF6035" />
                  <path d="M36.0409 4.1928V2.41016H29.4394C25.7936 2.41016 22.8379 5.36589 22.8379 9.01167C22.8379 12.6575 25.7936 15.6132 29.4394 15.6132H36.0409V13.2038H29.4394C27.1239 13.2038 25.2473 11.3272 25.2473 9.01167C25.2473 6.69616 27.1239 4.8196 29.4394 4.8196H33.6315V7.806H27.6568L28.9717 10.2154H30.0183C33.344 10.2154 36.0409 7.51847 36.0409 4.1928Z" fill="#FF6035" />
                  <path d="M45.6257 2.41016H38.4473V15.6113H40.8567V4.8196H49.2389V15.6113H51.6484V8.4328C51.6484 5.10712 48.9514 2.41016 45.6257 2.41016Z" fill="#FF6035" />
                  <path d="M60.0832 15.6113H67.2617V2.41016H64.8522V13.2018H56.47V2.41016H54.0605V9.58864C54.0605 12.9143 56.7575 15.6113 60.0832 15.6113Z" fill="#FF6035" />
                  <path d="M82.8217 2.41016H64.8516V4.8196H75.6432V15.6113H78.0527V4.8196H86.4349V15.6113H88.8444V8.4328C88.8444 5.10712 86.1474 2.41016 82.8217 2.41016Z" fill="#FF6035" />
                </g>
                <defs>
                  <clipPath id="clip0_2316_23867">
                    <rect width="88.8445" height="18.02" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <X className="cursor-pointer text-[#FF6035] " onClick={() => setIsOpen(!isOpen)} size={24} />
          </div>

          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 border-b border-[#E2E2E2] last:border-0 group">
                {item.subItems?.length > 0 && item.subItems ? (
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.link}
                      className={`text-[18px] text-[#101010] font-semibold ${expandedItems[item.name] ? 'opacity-100' : 'opacity-60'} group-hover:text-[#FF6035]`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <span className="cursor-pointer" onClick={() => toggleExpand(item.name)}>
                      {expandedItems[item.name] ? (
                        <ArrowDown size={18} className="text-[#FF6035]" />
                      ) : (
                        <ArrowRight size={18} className="text-[#101010]" />
                      )}
                    </span>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className="flex items-center justify-between"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[18px] text-[#101010] font-semibold opacity-60 group-hover:text-[#FF6035]">{item.name}</span>
                    <ArrowRight size={18} className="text-[#101010] group-hover:text-[#FF6035]" />
                  </Link>
                )}
                {item.subItems && (
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedItems[item.name] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {renderSubItems(item.subItems)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav