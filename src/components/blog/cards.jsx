import { cardData } from '@/data/home-blog'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
    return (
        <section className='py-20'>
            <div className='2xl:max-w-[1440px] max-w-[90%] mx-auto'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    {cardData.map((card, index) => (
                        <Link href={`/blog/${card.id}`} className='relative' key={index}>
                            <Link href={`/blog/${card.id}`}>
                                <Image src={card.img} width={300} height={300} alt="blog 1" className='w-full ' />
                                <div className='max-w-[80%] absolute bottom-6 left-6'>
                                    <span className='text-[#D4D4D8] text-[14px]'>{card.date}</span>
                                    <p className='text-white text-[16px]'>{card.para}</p>
                                </div>
                            </Link>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards