import BlogSlider from "../common/blogslider";

export const Blog = ({ heading, para, cardData }) => {
    return (
        <section className='relative py-20'>
            <div className='max-w-[90%] mx-auto 2xl:max-w-[1440px] '>
                <div className="flex flex-col gap-4 w-full md:w-[85%] lg:w-[64%] xl:w-[48%] 2xl:w-[90%]">
                    <h2 className="font-['Archivo'] text-secondary font-semibold home-section-headings text-[50px] leading-[56px] ">{heading}</h2>
                    <p className="font-['Archivo'] 2xl:w-[50%] text-gray-600  text-[15px] font-normal">{para}</p>
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

