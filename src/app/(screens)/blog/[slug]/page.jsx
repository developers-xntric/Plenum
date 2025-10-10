import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Blog } from "../../../../components/homepage/blog";

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `http://69.62.125.12:8000/api/v2/blog/${params.slug}`,
      {
        next: { revalidate: 60 }, // ISR for metadata
      }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { blog } = await res.json();

    return {
      title: blog.metaTitle || blog.title || "Blog | Plenum Tech",
      description:
        blog.metaDescription ||
        blog.description ||
        "Explore insightful blogs from Plenum Tech on AI, Cloud, and ERP solutions.",
      alternates: {
        canonical: `https://plenum-tech.com/blog/${blog.slug}`,
      },
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.description,
        url: `https://plenum-tech.com/blog/${blog.slug}`,
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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blogs",
  description: "Blogs from Plenum Tech",
  provider: {
    "@type": "Organization",
    name: "Plenum Tech Solutions",
    url: "https://plenum-tech.com",
  },
  serviceType: "ERP Consulting",
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
};

export default async function BlogPage({ params }) {
  let data = null;

  try {
    const res = await fetch(
      `https://blog.xntric.me/api/v2/blog/${params.slug}`
    );

    if (!res.ok) {
      console.error(`Failed to load blog: ${res.status}`);
      return (
        <div className="p-10 text-center text-red-500">Blog not found.</div>
      );
    }

    const { blog } = await res.json();
    console.log(blog, "blog");
    data = blog;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load blog content.
      </div>
    );
  }

  // Generate table of contents dynamically
  const tableOfContents = [];
  if (data.title) {
    tableOfContents.push({ id: "main-title", title: data.title });
  }
  if (data.subsections?.length > 0) {
    data.subsections.forEach((subsection, index) => {
      if (subsection.subtitle) {
        tableOfContents.push({
          id: `subsection-${index}`,
          title: subsection.subtitle,
        });
      }
    });
  }
  if (data.conclusion) {
    tableOfContents.push({ id: "conclusion", title: "Conclusion" });
  }
  if (data.faqs?.length > 0) {
    tableOfContents.push({ id: "faqs", title: "Frequently Asked Questions" });
  }

  return (
    <>
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Script
        id="schema-author"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Shaikh Zubaer Aasim",
          }),
        }}
      />

      <style>{`
        .blog-content a {
          color: #FF6035;
        }
        
        .table-of-contents {
          background: #f8f9fa;
          
          padding: 20px;
        }
        
        .table-of-contents h3 {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 8px;
        }
        
        .toc-list {
          list-style: none;
          border-left: 2px solid #FF6035; 
          padding: 0;
          margin: 0;
        }
        
        .toc-item {
          margin-bottom: 8px;
        }
        
        .toc-link {
          display: block;
          color: #495057;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 4px;
          transition: all 0.2s ease;
          font-weight: 500;
          line-height: 1.4;
        }
        
        .toc-link:hover {
          background-color: #FF6035;
          color: white;
          transform: translateX(4px);
        }
        
        .toc-link.active {
          background-color: #FF6035;
          color: white;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Add scroll offset for fixed headers */
        [id] {
          scroll-margin-top: 100px;
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
            <h1
              id="main-title"
              className="text-secondary leading-[34px] lg:leading-[56px] text-[30px] lg:text-[46px] font-semibold"
            >
              {data.title}
            </h1>
          </div>
        </div>

        {data.bannerImageURL && (
          <Image
            src={data.bannerImageURL}
            alt={data.title}
            title={data.title}
            width={1000}
            height={1000}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-60 md:h-full"
          />
        )}

        <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="lg:w-[30%] lg:sticky lg:top-20 lg:self-start mt-10">
                <div className="table-of-contents">
                  <h3>Table of Content</h3>
                  <ul className="toc-list">
                    {tableOfContents.map((item, index) => (
                      <li key={item.id} className="toc-item">
                        <Link href={`#${item.id}`} className="toc-link">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="lg:w-[70%]">
              <div className="md:px-6 pb-2 md:pb-12 py-12 space-y-12">
                {data.description && (
                  <div
                    className="text-[15px] lg:text-lg text-[#6D6E76] font-medium blog-content"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                )}

                {data.subsections?.map((subsection, index) => (
                  <div key={index} className="space-y-8">
                    {subsection.subtitle && (
                      <h2
                        id={`subsection-${index}`}
                        className="text-[25px] lg:text-[36px] font-medium leading-[35px] lg:leading-[42px]"
                      >
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
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 blog-content" dangerouslySetInnerHTML={{ __html: list.listTitle }} />

                       
                        {list.listDescription && (
                          <div
                            className="text-base lg:text-lg text-[#6D6E76] font-medium mb-4 blog-content"
                            dangerouslySetInnerHTML={{
                              __html: list.listDescription,
                            }}
                          />
                        )}
                        {list.items?.length > 0 && (
                          <ul className="list-disc pl-5 space-y-2">
                            {list.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="text-[16px] lg:text-[18px] font-medium leading-[35px] lg:leading-[42px]"
                              >
                                <div className="blog-content" dangerouslySetInnerHTML={{ __html: item.title }}/>
                                {item.description && (
                                  <div
                                    className="text-base text-[#6D6E76] font-medium mt-1 blog-content"
                                    dangerouslySetInnerHTML={{
                                      __html: item.description,
                                    }}
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
                    <h2
                      id="conclusion"
                      className="text-[25px] lg:text-[36px] font-medium leading-[35px] lg:leading-[42px]"
                    >
                      Conclusion
                    </h2>
                    <div
                      className="text-lg text-[#6D6E76] font-medium blog-content"
                      dangerouslySetInnerHTML={{ __html: data.conclusion }}
                    />
                  </div>
                )}

                {data.faqs && data.faqs.length > 0 && (
                  <div className="space-y-6">
                    <h2
                      id="faqs"
                      className="text-[20px] lg:text-[30px] font-medium mb-2 leading-[35px] lg:leading-[42px]"
                    >
                      Frequently Asked Questions
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
                <div className="w-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/blog/asim.webp"
                        alt="Shaikh zubaer Aasim"
                        width={55}
                        height={55}
                        className="rounded-full bg-center"
                      />
                      <h4 className="md:text-xl ">Shaikh Zubaer Aasim</h4>
                    </div>
                    <div>
                      <div className="w-fit h-fit bg-black rounded-[8px] p-1 ps-1">
                        <Link target="_blank" href="https://www.linkedin.com/in/aasimzshaikh">
                          <LinkedinIcon color="white" size={24} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-justify text-sm md:text-base">
                      With over two decades of driving marketing transformation
                      across the GCC, Aasim brings a rare blend of brand
                      leadership, digital innovation, and business foresight. He
                      has demonstrated a unique ability to align with evolving
                      customer and market demands whilst predicting and leading
                      best practice in digital and customer experiences. His
                      journey spans across building multi-million-dirham
                      portfolios, launching modern marketing campaigns, building
                      AI enablled Tech platforms and leading award-winning teams
                      across both client and agency environments. His
                      appointment to the MMA Board of Director reinforces a
                      larger belief: Modern marketing demands more than strategy
                      it demands ideas that are unafraid to build what’s next.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Blog
          heading="Discover More Blogs"
          para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness."
        />
      </div>
    </>
  );
}
