"use client";
import React, { useEffect, useState } from "react";
import { Blog } from "../homepage/blog";
import cardData from "@/data/home-blog";
import axios from "axios";
import Image from "next/image";

const DynamicComp = (slug) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://xntric-blog-server-production.up.railway.app/api/v2/blog/${slug.slug}`
        );
        setData(res.data.blog);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [slug]);
  return (
    <div className="font-['Archivo'] pt-34 lg:pt-52">
      {/* Date and Title */}
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
        <div className="lg:max-w-[72%] 2xl:max-w-[60%] py-10">
          {data.publishedDate && (
            <p className="text-[#636363] text-[15px] lg:text-[17px] font-['Archivo'] font-medium">
              {data.publishedDate.slice(0, 10)}
            </p>
          )}
          {data.title && (
            <h1 className="text-secondary font-['Archivo'] leading-[34px] lg:leading-[56px] text-[30px] lg:text-[46px] font-semibold">
              {data.title}
            </h1>
          )}
        </div>
      </div>

      {/* Banner Image */}
      {data.bannerImageURL && (
        <Image
          src={data.bannerImageURL}
          alt="Blog Image"
          width={1000}
          height={1000}
          className="w-full h-60 md:h-full"
        />
      )}

      {/* Main Content */}
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto flex items-center justify-end font-['Archivo']">
        <div className="md:px-6 pb-2 md:pb-12 py-12 space-y-12 lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%]">
          {/* Description */}
          {data.description && (
            <p className="text-[15px] lg:text-lg text-[#6D6E76] font-medium font-['Archivo']">
              {data.description}
            </p>
          )}

          {/* Subsections */}
          {data.subsections &&
            data.subsections.length > 0 &&
            data.subsections.map((subsection, index) => (
              <div key={index} className="space-y-8">
                {/* Subheading */}
                {subsection.subtitle && (
                  <h2 className="text-[25px] lg:text-[36px] font-medium max-w-[80%] 2xl:max-w-[60%] leading-[35px] lg:leading-[42px] font-['Archivo']">
                    {subsection.subtitle}
                  </h2>
                )}

                {/* Sub-descriptions */}
                {subsection.subdescription &&
                  subsection.subdescription.length > 0 && (
                    <div className="space-y-5">
                      {subsection.subdescription.map((desc, descIndex) => (
                        <p
                          key={descIndex}
                          className="text-lg text-[#6D6E76] font-medium font-['Archivo']"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>
                  )}

                {/* Lists */}
                {subsection.lists && subsection.lists.length > 0 && (
                  <div className="space-y-6 mt-6">
                    {subsection.lists.map((list, listIndex) => (
                      <div key={listIndex}>
                        {/* List Title */}
                        <h3 className="text-xl lg:text-2xl font-bold font-['Archivo'] mb-2">
                          {list.listTitle}
                        </h3>

                        {/* List Description if available */}
                        {list.listDescription && (
                          <p className="text-base lg:text-lg text-[#6D6E76] font-medium font-['Archivo'] mb-4">
                            {list.listDescription}
                          </p>
                        )}

                        {/* List items */}
                        {list.items && list.items.length > 0 && (
                          <ul className="list-disc pl-5 space-y-2">
                            {list.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="text-[16px] lg:text-[18px] font-medium leading-[35px] lg:leading-[42px] font-['Archivo']"
                              >
                                {item.title}
                                {item.description && (
                                  <p className="text-base text-[#6D6E76] font-medium font-['Archivo'] mt-1">
                                    {item.description}
                                  </p>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

          {/* Conclusion */}
          {data.conclusion && (
            <div className="space-y-8">
              <h2 className="text-[25px] lg:text-[36px] font-medium leading-[35px] lg:leading-[42px] font-['Archivo']">
                Conclusion
              </h2>
              <p className="text-lg text-[#6D6E76] font-medium font-['Archivo']">
                {data.conclusion}
              </p>
            </div>
          )}

          {/* FAQs */}
          {data.faqs && data.faqs.length > 0 && (
            <div>
              <h2 className="text-[20px] lg:text-[30px] font-medium mb-2 leading-[35px] lg:leading-[42px] font-['Archivo']">
                FAQs:
              </h2>
              {data.faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-[20px] lg:text-[24px] font-medium leading-[35px] lg:leading-[42px] font-['Archivo']">
                    {index + 1}. {faq.question}
                  </h3>
                  <p className="text-lg text-[#6D6E76] font-medium font-['Archivo']">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Blogs */}
      <Blog
        heading="Discover More Blogs"
        para="Stay updated with our ongoing blogs inclusive of tips, case study examples and expert views around the usage of AI, cloud services and ERP solutions to support business growth and operational effectiveness."
        cardData={cardData}
      />
    </div>
  );
};

export default DynamicComp;
