import Button from '@/components/common/button';
import IconsSlider from '@/components/common/icons-slider';
import { finance_opearations_services } from '@/data/brand-slider-icons-data';
import Image from 'next/image';
import CustomerStats from '../customer-stats';

const New_Service_Inner_Hero = ({ heading, para, is_space_in_image = true, image, image_className, button_text, button_className, isSlider = false }) => {
    return (
        <div className='overflow-hidden bg-cover xl:h-auto' style={{ backgroundImage: "url('/service/FAO/FAO_hero_bg.svg')" }}>
            {/* Wrapper */}
            <div className='2xl:max-w-[1440px] h-full w-[90%] mx-auto my-auto space-y-20 py-16 md:pt-36 md:pb-0'>
                <div className='flex w-full justify-between'>
                    {/* Left Section Heading Text And Buttons */}
                    <div className='w-[540px] space-y-8 mt-12'>
                        {/* Heading */}
                        <h1 className='text-secondary md:text-[35px] xl:text-[48px] font-["Chakra"] md:leading-10 xl:leading-[52px] font-medium home-section-headings'>{heading}</h1>
                        {/* Paragraph */}
                        <p className='text-secondary font-normal md:text-[14px] xl:text-[18px] opacity-60 w-[70%]'>{para}</p>
                        {/* Button */}
                        <Button text={button_text || "Let's Talk"} link={"/contact"} className={button_className ? button_className : "px-10 py-2 bg-primary text-white"} />
                    </div>
                    {/* Right Side Image */}
                    <div className={`${image_className ? image_className : "md:w-[600px] md:h-[400px] xl:w-[813px] xl:h-[663px]"} ${is_space_in_image ? "" : "relative left-[5.55%]"}`}>
                        {/* Image */}
                        <Image src={image} alt='ERPC' width={1500} height={1500} />
                    </div>
                </div>
            </div>
            {/* Slider */}
            {isSlider && <div className='2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 py-14 xl:pb-14 xl:pt-0'>
                <IconsSlider
                    text={"Trusted by world's most exciting brands"}
                    brand_icons={finance_opearations_services} />
            </div>}

            {!isSlider && <CustomerStats />}
        </div>
    )
}

export default New_Service_Inner_Hero;
