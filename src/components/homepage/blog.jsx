import BlogSlider from "../common/blogslider";
import Button from "../common/button";

export const Blog = ({ heading, para, cardData }) => {
    return (
        <section className='relative py-14 lg:py-20'>
            <div className='max-w-[90%] mx-auto 2xl:max-w-[1440px] '>
                <div className="flex lg:flex-row flex-col items-center lg:items-start justify-between">
                    <div className="flex flex-col text-center md:text-left gap-4 md:gap-1 lg:gap-4 w-full md:w-[90%] lg:w-[70%] xl:w-[58%] 2xl:w-[100%]">
                        <h2 className="font-['Archivo'] text-secondary font-semibold home-section-headings text-[30px] lg:text-[50px] leading-[34px] md:leading-[56px] ">{heading}</h2>
                        <p className=" 2xl:w-[50%] text-secondary font-['Archivo'] opacity-75 text-[15px] font-medium">Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness.</p>
                    </div>
                    <div className="mb-10 lg:mb-0 lg:w-[15%] mt-5">
                        <Button
                            text={"View All Blogs"}
                            link="/article"
                            className={
                                `bg-[#FF6035] cursor-pointer py-[10px] hover:bg-[#101010] hover:text-white  transition-all duration-500 px-6 xl:px-5 text-[#000]`
                            }
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <BlogSlider
                        cardData={cardData}
                    />
                </div>
            </div>
        </section>
    );
};

