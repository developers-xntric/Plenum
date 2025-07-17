import { Blog } from "@/components/homepage/blog";
import { cardData } from "@/data/home-blog";
import Image from "next/image";

export async function generateStaticParams() {
  try {
    const res = await fetch("https://blog.xntric.me/api/v2/blog");
    const blogs = await res.json();
    return blogs.map((blog) => ({ slug: blog.slug }));
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`https://blog.xntric.me/api/v2/blog/${params.slug}`);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const { blog } = await res.json();

    return {
      title: blog.metaTitle || blog.title || "Blog | Plenum Tech",
      description:
        blog.metaDescription ||
        blog.description ||
        "Explore insightful blogs from Plenum Tech on AI, Cloud, and ERP solutions.",
      alternates: {
        canonical: `https://www.plenum-tech.com/blog/${blog.slug}`,
      },
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.description,
        url: `https://www.plenum-tech.com/blog/${blog.slug}`,
        images: blog.bannerImageURL ? [{ url: blog.bannerImageURL }] : [],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Blog Not Found | Plenum Tech",
      description: "The requested blog could not be loaded.",
    };
  }
}

export default async function BlogPage({ params }) {
  let data = null;

  try {
    const res = await fetch(`https://blog.xntric.me/api/v2/blog/${params.slug}`);

    if (!res.ok) {
      console.error(`Failed to load blog: ${res.status}`);
      return <div className="p-10 text-center text-red-500">Blog not found.</div>;
    }

    const { blog } = await res.json();
    data = blog;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return <div className="p-10 text-center text-red-500">Failed to load blog content.</div>;
  }

  return (
    <>
      <style>{`
        .blog-content a {
          color: #FF6035;
        }
      `}</style>

      {/* FAQ Schema for SEO */}
      {data.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: data.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <div className="font-['Archivo'] pt-34 lg:pt-52">
        <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
          <div className="lg:max-w-[72%] 2xl:max-w-[60%] py-10">
            {data.publishedDate && (
              <p className="text-[#636363] text-[15px] lg:text-[17px] font-medium">
                {data.publishedDate.slice(0, 10)}
              </p>
            )}
            <h1 className="text-secondary leading-[34px] lg:leading-[56px] text-[30px] lg:text-[46px] font-semibold">
              {data.title}
            </h1>
          </div>
        </div>

        {data.bannerImageURL && (
          <Image
            src={data.bannerImageURL}
            alt={data.title}
            width={1000}
            height={1000}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-60 md:h-full"
          />
        )}

        <div className="2xl:max-w-[1440px] w-[90%] mx-auto flex items-center justify-end">
          <div className="md:px-6 pb-2 md:pb-12 py-12 space-y-12 lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%]">
            {data.description && (
              <div
                className="text-[15px] lg:text-lg text-[#6D6E76] font-medium blog-content"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            )}

            {data.subsections?.map((subsection, index) => (
              <div key={index} className="space-y-8">
                {subsection.subtitle && (
                  <h2 className="text-[25px] lg:text-[36px] font-medium leading-[35px] lg:leading-[42px]">
                    {subsection.subtitle}
                  </h2>
                )}
                {subsection.subdescription?.map((desc, descIndex) => (
                  <div
                    key={descIndex}
                    className="text-lg text-[#6D6E76] font-medium blog-content"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                ))}
                {subsection.lists?.map((list, listIndex) => (
                  <div key={listIndex}>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2">
                      {list.listTitle}
                    </h3>
                    {list.listDescription && (
                      <div
                        className="text-base lg:text-lg text-[#6D6E76] font-medium mb-4 blog-content"
                        dangerouslySetInnerHTML={{ __html: list.listDescription }}
                      />
                    )}
                    {list.items?.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2">
                        {list.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-[16px] lg:text-[18px] font-medium leading-[35px] lg:leading-[42px]"
                          >
                            {item.title}
                            {item.description && (
                              <div
                                className="text-base text-[#6D6E76] font-medium mt-1 blog-content"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                              />
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {data.conclusion && (
              <div className="space-y-8">
                <h2 className="text-[25px] lg:text-[36px] font-medium leading-[35px] lg:leading-[42px]">
                  Conclusion
                </h2>
                <div
                  className="text-lg text-[#6D6E76] font-medium blog-content"
                  dangerouslySetInnerHTML={{ __html: data.conclusion }}
                />
              </div>
            )}

            {data.faqs && data.faqs.length > 0 && (
              <div>
                <h2 className="text-[20px] lg:text-[30px] font-medium mb-2 leading-[35px] lg:leading-[42px]">
                  FAQs:
                </h2>
                {data.faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-[20px] lg:text-[24px] font-medium leading-[35px] lg:leading-[42px]">
                      {index + 1}. {faq.question}
                    </h3>
                    <div
                      className="text-lg text-[#6D6E76] font-medium blog-content"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Blog
          heading="Discover More Blogs"
          para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness."
          cardData={cardData}
        />
      </div>
    </>
  );
}