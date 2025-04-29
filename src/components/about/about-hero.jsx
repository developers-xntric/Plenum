"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hideFixed, setHideFixed] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroRef = useRef(null);

  const textArray = [
    "accelerate business solutions",
    "innovate with confidence",
    "scale effortlessly"
  ];

  useEffect(() => {
    // Scroll to hero section on initial load
    heroRef.current?.scrollIntoView({ behavior: 'auto' })

    // Disable scroll
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setIsLoaded(true)

      const hideTimer = setTimeout(() => {
        setHideFixed(true)
        document.body.style.overflow = '' // Re-enable scroll
      }, 3000)

      return () => clearTimeout(hideTimer)
    }, 400)

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(textInterval)
      document.body.style.overflow = '' // Cleanup scroll restriction
    }
  }, [])

  return (
    <section ref={heroRef} className="flex flex-col items-center justify-center py-12 px-4 text-center h-screen relative overflow-hidden">
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <div className="flex flex-col justify-start items-start -space-y-3 2xl:-space-y-2 xl:mb-6 2xl:mb-8">
            <span className="text-[25px] font-medium text-[#282526] font-['Archivo'] pl-1 ">Welcome to</span>
            <div className={`transition-all duration-[3000ms] ease-in-out ${isLoaded ? "translate-x-0 text-primary" : "translate-x-40 text-white"} z-[600]`}>
              <h1 className="text-20 md:text-5xl lg:text-[75px] xl:text-[97px] 2xl:text-[110px] z-[600] font-['Chakra'] font-medium  tracking-[-5.096px]">Plenum</h1>
            </div>
          </div>

          <div className="relative xl:mx-4">
            <div className="relative w-32 h-32 lg:w-[190px] xl:w-[260px] lg:h-72 xl:h-72">
              <div className="absolute inset-0 w-full h-full animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text>
                    <textPath xlinkHref="#circlePath" className="text-[10.9px] tracking-[1.5px] font-['Archivo'] text-[#282526] font-light">
                      We Enable | Augment | Empower |
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
                {/* Regular image container */}
                <div className="relative w-24 h-24 lg:w-[120px] xl:w-[166px] lg:h-[120px] xl:h-[166px]">
                  <Image
                    src="/images/about/circle-image.webp"
                    alt="Plenum Logo"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />

                  {/* P LOGO */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 119 119" fill="none" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <g style={{ mixBlendMode: 'overlay' }}>
                      <path d="M68.6679 0H45.9052C20.5565 0 0 20.5565 0 45.9052V118.985H18.365V18.365H68.6825C86.3316 18.365 100.635 32.6684 100.635 50.3175C100.635 67.9666 86.3316 82.27 68.6825 82.27H27.5548L45.9198 100.635H68.6825C96.4711 100.635 119 78.1061 119 50.3175C119 22.5289 96.4711 0 68.6825 0H68.6679Z" fill="white" className="opacity-[0.25]" />
                    </g>
                  </svg>
                </div>

                {/* Fixed scaling container that hides after animation */}
                {!hideFixed && (
                  <div className={`fixed w-screen h-screen flex items-center justify-center pointer-events-none z-[500] transition-all duration-3000 ease-out ${isLoaded
                    ? "scale-100 translate-y-0"
                    : "scale-[50] translate-y-[-2vh]"
                    }`}>
                    <div className="relative w-24 h-24 lg:w-[120px] xl:w-[166px] lg:h-[120px] xl:h-[166px]">
                      <Image
                        src="/images/about/circle-image.webp"
                        alt="Plenum Logo"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />

                      {/* P LOGO */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 119 119" fill="none" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <g style={{ mixBlendMode: 'overlay' }}>
                          <path d="M68.6679 0H45.9052C20.5565 0 0 20.5565 0 45.9052V118.985H18.365V18.365H68.6825C86.3316 18.365 100.635 32.6684 100.635 50.3175C100.635 67.9666 86.3316 82.27 68.6825 82.27H27.5548L45.9198 100.635H68.6825C96.4711 100.635 119 78.1061 119 50.3175C119 22.5289 96.4711 0 68.6825 0H68.6679Z" fill="white" className="opacity-[0.25]" />
                        </g>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Right Heading */}
          <div className={`transition-all duration-[3000ms] ease-in-out ${isLoaded ? "translate-x-0 text-secondary" : "-translate-x-40 text-white"} z-[600]`}>
            <h1 className="text-20 md:text-5xl lg:text-[75px] xl:text-[97px] 2xl:text-[110px] z-[600] font-['Chakra'] font-medium tracking-[-5.096px]">Technologies</h1>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="relative -bottom-16 lg:-bottom-20 xl:-bottom-24 space-y-3">
          <p className="lg:text-[24px] xl:text-[30px] font-['Archivo'] font-normal text-[#282526]">
            Plenum helps you
          </p>
          <div className="inline-block border border-[#101010] rounded-[221px] px-6 overflow-hidden transition-all duration-700 ease-out">
            <span
              key={currentTextIndex}
              className="lg:text-[24px] xl:text-[30px] font-['Archivo'] font-normal text-[#282526] inline-block animate-slide-up"
            >
              {textArray[currentTextIndex]}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}