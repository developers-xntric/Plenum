import { articles } from '@/data/article'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
    return (
        <section className='py-20'>
            <div className='2xl:max-w-[1440px] max-w-[90%] mx-auto'>
                <div className='grid grid-cols-1  md:grid-cols-2  gap-6 '>
                    {articles.map((article, index) => {
                        return (
                            <div
                                key={article.id}
                            >
                                <Link href={`/article/${article.id}`}>
                                    <div className="flex flex-col h-full">
                                        <div>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={article.image || "/placeholder.svg"}
                                                    alt={article.title}
                                                    width={1000}
                                                    height={1000}
                                                    className="w-full h-[300px] xl:h-[400px]"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <p className="text-xs text-gray-400 mb-1">{article.date}</p>
                                            <h3 className={"font-semibold mb-1 line-clamp-2 text-xl"}>
                                                {article.title}
                                            </h3>
                                            <Link
                                                href="/"
                                                className="text-primary inline-flex items-center text-sm hover:underline"
                                                aria-label={`Read more about ${article.title}`}
                                            >
                                                Read More <ChevronRight className="h-4 w-4 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default Cards