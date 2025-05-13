"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, ArrowDown, X, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})
  const router = useRouter()

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
        { name: "Momentum AI", link: "/product" },
        { name: "Vertical Builds", link: "/product" },
      ],
    },
    // {
    //   name: "Industries",
    //   link: "/industries",
    //   subItems: [
    //     // { name: "Healthcare Industry", link: "/industries" },
    //     // { name: "BioTech Industries", link: "/industries" },
    //     // { name: "Consumer Banking", link: "/industries" },
    //     // { name: "Construction Industry", link: "/industries" },
    //     // { name: "Agriculture & Food Industries", link: "/industries" },
    //     // { name: "Business & Enterprise Banking", link: "/industries" },
    //   ],
    // },
    {
      name: "Resources",
      link: "/case-studies",
      subItems: [
        { name: "Case Studies", link: "/case-studies" },
        { name: "Blog", link: "/blog" },
        { name: "Article", link: "/article" },
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
                className={`text-[15px] text-[#101010] ${item.subItems ? (expandedItems[item.name] ? 'opacity-100' : 'opacity-60') : 'opacity-100'} group-hover:text-[#FF6035]`}
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
      <header className="border-[#101010] border font-normal font-['Archivo'] mx-auto p-4 fixed -translate-x-1/2 left-1/2 top-6 bg-[#FFFFFF] rounded-[13px] w-[90%] 2xl:w-[1300px]">
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
          <Menu className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} size={24} />
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white overflow-y-auto transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="p-6 pt-8">
          <div className="flex justify-between items-center border p-3 border-[#E2E2E2] rounded-[13px] mb-8">
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
            <X className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} size={24} />
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