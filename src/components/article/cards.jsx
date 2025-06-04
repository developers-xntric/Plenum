'use client'
import { articles } from '@/data/article'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Cards = () => {
    return (
        <section className='py-20'>
            {/* <div className='2xl:max-w-[1440px] max-w-[90%] mx-auto'>
                <div className='grid grid-cols-1  md:grid-cols-2  gap-6 '>
                    {articles.map((article) => (
                        <div key={article.id}>
                            <div className="flex flex-col h-full">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-[300px] xl:h-[400px]"
                                    />
                                </div>

                                <div className="mt-3">
                                    <p className="text-xs text-gray-400 mb-1">{article.date}</p>
                                    <h3 className="font-semibold mb-1 line-clamp-2 text-xl">
                                        {article.title}
                                    </h3>

                                    <motion.div
                                        className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
                                        whileHover="hover"
                                        initial="rest"
                                        animate="rest"
                                        variants={{
                                            rest: {},
                                            hover: {},
                                        }}
                                    >
                                        <Link
                                            href={`/article/${article.id}`}
                                            className="inline-flex items-center"
                                            aria-label={`Read more about ${article.title}`}
                                        >
                                            Read More
                                            <motion.div
                                                className="ml-1"
                                                variants={{
                                                    rest: { x: 0, y: 0 },
                                                    hover: {
                                                        x: [0, 6, 0],
                                                        y: [0, -6, 0],
                                                        transition: {
                                                            duration: 1,
                                                            ease: "easeInOut",
                                                            repeat: Infinity,
                                                        },
                                                    },
                                                }}
                                            >
                                                <ArrowUpRight className="h-4 w-4" />
                                            </motion.div>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </section>
    )
}

export default Cards
