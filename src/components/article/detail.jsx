import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
const ArticleDetail = () => {
    return (
        <section className='pt-40 font-["Archivo"]'>
            <div className='max-w-[90%] mx-auto 2xl:max-w-[1350px]'>
                <div className="flex flex-col md:flex-row">
                    <div className="border-r border-gray-200 px-6 ">
                        <div className="mb-2">
                            <h2 className="text-[16px] font-semibold text-gray-900">Case Study</h2>
                        </div>
                        <Tabs defaultValue="1" orientation="vertical" className="w-full text-[#B2B2B2]">

                            <TabsList className="flex flex-col items-start space-y-1 bg-transparent h-auto">
                                <TabsTrigger
                                    value="1"
                                    className="w-full justify-start px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-left"
                                >
                                    Diving Deeper
                                </TabsTrigger>
                                <TabsTrigger
                                    value="2"
                                    className="w-full justify-start px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-left"
                                >
                                    <span className="mr-2 ">1.</span>Identifying your "one thing"
                                </TabsTrigger>
                                <TabsTrigger
                                    value="3"
                                    className="w-full justify-start px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-left"
                                >
                                    <span className="mr-2 ">2.</span> Teaching opportunities
                                </TabsTrigger>
                                <TabsTrigger
                                    value="4"
                                    className="w-full justify-start px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-left"
                                >
                                    <span className="mr-2 ">3.</span> The role of templates
                                </TabsTrigger>
                                <TabsTrigger
                                    value="5"
                                    className="w-full justify-start px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-left"
                                >
                                    UX Exercise
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="1" className="hidden md:block mt-0">
                                {/* Content will be shown in main area on mobile */}
                            </TabsContent>
                            <TabsContent value="2" className="hidden md:block mt-0">
                                {/* Content will be shown in main area on mobile */}
                            </TabsContent>
                            <TabsContent value="3" className="hidden md:block mt-0">
                                {/* Content will be shown in main area on mobile */}
                            </TabsContent>
                            <TabsContent value="4" className="hidden md:block mt-0">
                                {/* Content will be shown in main area on mobile */}
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className='2xl:max-w-[1440px] max-w-[90%] mx-auto'>

                        {/* Main content area */}
                        <div className="flex-1 px-7">
                            <div className="mb-6">
                                <p className="text-[17px] text-[#636363] mb-2">March 9, 2023</p>
                                <h1 className="text-2xl md:text-[40px] font-semibold mb-6 leading-[48px] xl:max-w-[70%] ">
                                    Why Personalization Became the New Normal — And What's Next with AI
                                </h1>

                                <div className="flex items-center mb-8">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                                        <Image
                                            src="/article/sample.svg"
                                            alt="Ana Santos"
                                            width={32}
                                            height={32}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Ana Santos</p>
                                        <p className="text-xs text-gray-500">101,528</p>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <Image
                                        src="/article/sample.svg"
                                        alt="Digital fingerprint"
                                        width={1000}
                                        height={1000}
                                        className="w-[900px] h-full rounded-md "
                                    />
                                </div>

                                <div className="prose max-w-none xl:max-w-[70%] ">
                                    <p className="text-[#6D6E76] text-[18px] mb-6">
                                        It's hard to imagine the digital world today without personalization. Whether it's the movies we watch,
                                        the playlists we listen to, or the games we play — recommendations tailored to us are everywhere. But it
                                        wasn't always this way. Personalization has come a long way from simple "you might also like" suggestions
                                        to today&#39;s hyper-personalized, AI-driven experiences.
                                    </p>

                                    <h2 className="text-[30px] font-bold mt-10 mb-6">Where It All Started — The Early Days of Personalization</h2>

                                    <p className="text-[#6D6E76] text-[18px] mb-6">
                                        The late '90s marked the start of something big. Amazon pioneered large-scale recommendation systems,
                                        driven by a simple but powerful idea — use what people like to suggest what they might like next. Their
                                        iconic "Customers who bought this also bought..." feature wasn't just smart; it was a game-changer. By
                                        2006, 35% of Amazon&#39;s sales came from these recommendations alone. For the first time, users felt like a
                                        platform knew what they wanted — or at least could make educated guesses.
                                    </p>

                                    <p className="text-gray-700 mb-6">
                                        Back then, personalization was mostly rule-based — if A, then Y. Limited data, limited processing power.
                                        But it worked because it introduced a personal touch, despite its limited understanding.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <Image
                                        src="/article/sample.svg"
                                        alt="Digital fingerprint"
                                        width={1000}
                                        height={1000}
                                        className="w-[900px] h-full rounded-md "
                                    />
                                </div>

                                <div className="prose max-w-none xl:max-w-[70%] ">
                                    <p className="text-[#6D6E76] text-[18px] mb-6">
                                        It's hard to imagine the digital world today without personalization. Whether it's the movies we watch,
                                        the playlists we listen to, or the games we play — recommendations tailored to us are everywhere. But it
                                        wasn't always this way. Personalization has come a long way from simple "you might also like" suggestions
                                        to today&#39;s hyper-personalized, AI-driven experiences.
                                    </p>

                                    <h2 className="text-[30px] font-bold mt-10 mb-6">Where It All Started — The Early Days of Personalization</h2>

                                    <p className="text-[#6D6E76] text-[18px] mb-6">
                                        The late '90s marked the start of something big. Amazon pioneered large-scale recommendation systems,
                                        driven by a simple but powerful idea — use what people like to suggest what they might like next. Their
                                        iconic "Customers who bought this also bought..." feature wasn't just smart; it was a game-changer. By
                                        2006, 35% of Amazon&#39;s sales came from these recommendations alone. For the first time, users felt like a
                                        platform knew what they wanted — or at least could make educated guesses.
                                    </p>

                                    <p className="text-gray-700 mb-6">
                                        Back then, personalization was mostly rule-based — if A, then Y. Limited data, limited processing power.
                                        But it worked because it introduced a personal touch, despite its limited understanding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArticleDetail