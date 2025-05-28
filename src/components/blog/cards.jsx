import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const cardData = [
    {
        img: "/blog/Section-1.jpg",
        date: "May 26, 2025",
        para: "ERP vs CRM: What’s the Difference and Which Do You Need?",
        id: 1,
        link: '/blog/ERP-CRM'
    },
    {
        img: "/blog/Section-2.jpg",
        date: "May 26, 2025",
        para: "Dynamics vs NetSuite: Comparing Microsoft and Oracle ERP Solutions",
        id: 2,
        link: '/blog/dynamics-netsuite'
    },

]
const Cards = () => {
    return (
        <section className='py-20'>
            <div className='2xl:max-w-[1440px] max-w-[90%] mx-auto'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    {cardData.map((card, index) => (
                        <div className='relative hover:opacity-75 transition-opacity ease-in duration-500' key={index}>
                            <div className='absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[20px] opacity-60'></div>
                            <Link href={card.link}>
                                <Image src={card.img} width={300} height={300} alt="blog 1" className='w-full rounded-[20px]' />
                                <div className='max-w-[80%] absolute bottom-6 left-6'>
                                    <span className='text-[#D4D4D8] text-[14px]'>{card.date}</span>
                                    <p className='text-white text-[16px]'>{card.para}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards