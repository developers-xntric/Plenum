import Button from '@/components/common/button'
import IconsSlider from '@/components/common/icons-slider'
import { finance_opearations_services } from '@/data/brand-slider-icons-data'
import Image from 'next/image'
import CustomerStats from '../customer-stats'

const New_Service_Inner_Hero = ({
    heading,
    para,
    is_space_in_image = true,
    image,
    image_className,
    button_text,
    button_className,
    isSlider = false,
    heading_className,
    para_className,
    image_alt = "ERP NetSuite banner"
}) => {
    return (
        <div
            className="overflow-hidden bg-cover xl:h-auto"
            style={{ backgroundImage: "url('/service/FAO/FAO_hero_bg.svg')" }}
        >
            <div className="2xl:max-w-[1440px] h-full w-[90%] mx-auto my-auto space-y-20 py-16 md:pt-36 lg:pb-0">
                <div className="flex lg:flex-row flex-col w-full items-center justify-between lg:gap-0 gap-10">

                    {/* Text Content */}
                    <div className="space-y-8 mt-12 md:text-left text-center">
                        <h1
                            className={`text-secondary text-[45px] lg:text-[48px] font-["Chakra"] leading-11 xl:leading-[52px] font-semibold home-section-headings ${heading_className}`}
                        >
                            {heading}
                        </h1>

                        <p
                            className={`text-secondary font-medium font-["Archivo"] md:text-[14px] xl:text-[18px] opacity-60 ${para_className || "lg:w-[45%]"}`}
                        >
                            {para}
                        </p>

                        {/* Primary CTA */}
                        <Button
                            text={button_text || "Let's Talk"}
                            link="/contact"
                            ariaLabel="Contact us for Oracle NetSuite services"
                            className={
                                button_className ||
                                "px-10 py-2.5 bg-[#FF6035] hover:bg-[#101010] transition-all duration-700 text-white md:block hidden"
                            }
                        />
                    </div>

                    {/* Hero Image */}
                    <div
                        className={`${image_className || "md:w-[600px] md:h-[400px] xl:w-[813px] xl:h-[663px]"
                            } ${is_space_in_image ? "" : "relative left-[5.55%]"}`}
                    >
                        <Image
                            src={image}
                            alt={image_alt}
                            width={1500}
                            height={1500}
                            priority // <-- critical for LCP performance
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Mobile CTA */}
                    <Button
                        text={button_text || "Let's Talk"}
                        link="/contact"
                        ariaLabel="Contact us for Oracle NetSuite services"
                        className={
                            button_className ||
                            "px-10 py-2.5 bg-[#FF6035] hover:bg-[#101010] transition-all duration-700 text-white md:hidden block"
                        }
                    />
                </div>
            </div>

            {/* Trusted brands / customer stats */}
            {isSlider ? (
                <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 py-8 md:py-14 xl:pb-14 xl:pt-12">
                    <IconsSlider
                        text="Trusted by the world's most exciting brands"
                        brand_icons={finance_opearations_services}
                    />
                </div>
            ) : (
                <CustomerStats />
            )}
        </div>
    )
}

export default New_Service_Inner_Hero
