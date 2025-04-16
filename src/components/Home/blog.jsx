import BlogSlider from "../common/blogslider";

const Blog = ({ heading, para, cardData }) => {
    return (
        <section className='relative py-20'>
            <div className='max-w-[90%] mx-auto 2xl:max-w-[1300px] '>
                <div className="flex flex-col gap-4 w-full md:w-[85%] lg:w-[57%] xl:w-[48%]">
                    <h2 className="font-['Archivo'] text-black text-[50px] font-bold leading-[56px] ">{heading}</h2>
                    <p className="font-['Archivo'] text-gray-600  text-[15px] font-normal">{para}</p>
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

export default Blog;
