import { Blog } from "@/components/homepage/blog";
import { cardData } from "@/data/home-blog";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className=" font-['Archivo'] pt-34 lg:pt-52">

        {/* HEADING AND DATE */}
        <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
          <div className="lg:max-w-[72%] 2xl:max-w-[60%] py-10">
            <p className="text-[#636363] text-[15px] lg:text-[17px] font-['Archivo'] font-medium">March 9 2023</p>
            <h2 className="text-secondary font['Archivo'] leading-[34px] lg:leading-[56px] text-[30px] lg:text-[46px] font-semibold">Why Personalization Became the New Normal — And What’s Next with AI</h2>
          </div>
        </div>

        {/* IMAGE */}
        <Image src="/images/blog/blog-detail.png" alt="Blog Image" width={1000} height={1000} className="w-full h-60 md:h-full" />



        {/* CONTENT */}
        <div className="2xl:max-w-[1440px] w-[90%] mx-auto flex items-center justify-end font-['Archivo']">
          <div className="md:px-6 pb-2 md:pb-12 py-12  space-y-12 lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%]">
            <p className="text-[15px] lg:text-lg text-[#6D6E76] font-medium font-['Archivo']">
              It’s hard to imagine the digital world today without personalization. Whether it’s the movies we stream, the playlists we listen to, or the games we play — recommendations tailored to us are everywhere. But it wasn’t always this way. Personalization has come a long way from simple “you might also like” suggestions to today’s hyper-personalized, AI-driven experiences.
            </p>

            <div className="space-y-8">
              <h2 className="text-[25px] lg:text-[36px] font-medium max-w-[80%] 2xl:max-w-[60%] leading-[35px] lg:leading-[42px] font-['Archivo']">Where It All Started — The Early Days of Personalization</h2>
              <div className="space-y-5">
                <p className="text-[17px] lg:text-lg text-[#6D6E76] font-medium font-['Archivo']">
                  The late ‘90s marked the start of something big. Amazon pioneered large-scale recommendation systems, driven by a simple but powerful idea — use what people like to suggest what they might love next. Their iconic “Customers who bought this also bought…” feature wasn’t just smart; it was a game-changer. By 2006, 35% of Amazon’s sales came from these recommendations alone. For the first time, users felt like a platform knew what they wanted — or at least could guess.
                </p>
                <p className="text-lg text-[#6D6E76] font-medium font-['Archivo']">
                  Back then, personalization was mostly rule-based — if X, then Y. Limited data, limited processing power. But it worked because it introduced a powerful idea: people like feeling understood.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-[25px] lg:text-[36px] font-medium leading-[35px] lg:leading-[42px] font-['Archivo']">The Rise of Data and Recommendation Engines</h2>
              <div className="space-y-5">
                <p className="text-lg text-[#6D6E76] font-medium font-['Archivo']">
                  As the 2000s rolled in, platforms got better at collecting data. Netflix became a household name not just for its content, but for its collaborative filtering algorithm, Cinematch — learning from what you watched to suggest what you might like next.
                </p>
                <p className="text-lg text-[#6D6E76] font-medium font-['Archivo']">
                  In 2006, they launched the Netflix Prize — offering $1 million to anyone who could improve Cinematch by 10%. It wasn’t just a stunt; it sparked a global leap in machine learning research. And Netflix proved just how valuable getting personalization right could be.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[25px] lg:text-[36px] font-medium mb-6 leading-[35px] lg:leading-[42px] font-['Archivo']">
                Personalization Gets Smarter — and Spreads Everywhere
              </h2>
              <div className="space-y-5">
                <p className="text-lg text-[#6D6E76] font-medium font-['Archivo']">
                  By the mid-2000s, personalization was moving beyond products to content, search, and even social connections.
                </p>
                <p className="text-lg text-[#6D6E76] font-medium font-['Archivo']">
                  Google’s personalized search for logged-in users rolled out in 2005, expanding further by 2007. By personalizing search results, it made every query feel a little more like it "just knew" what you meant. YouTube’s early recommendation system evolved rapidly, shifting from simple views and likes to deeply analyzing watch time and engagement — driving over 60% of video clicks by 2012.
                </p>
                <p className="text-lg text-[#6D6E76] font-medium font-['Archivo']">Social platforms caught on fast. Facebook’s News Feed, launched in 2006, transformed how we consume content — bringing the most relevant updates directly to users. Engagement skyrocketed. Pinterest, meanwhile, pioneered visual discovery, using image recognition to recommend pins based on what users were drawn to — not just what they searched for.</p>
              </div>
            </div>
          </div>
        </div>

        <Blog heading='Discover Our Blog Articles' para="Explore our latest posts for insights on design, branding, and innovation. Stay updated with fresh ideas and trends in the creative world" cardData={cardData} />

      </div>
    </>
  );
}
