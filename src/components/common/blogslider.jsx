'use client';
import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Image from 'next/image';
import Link from 'next/link';

const BlogSlider = ({ }) => {
    const cardData = [
        {
            img: "/blog/Section-1.jpg",
            date: "May 26, 2025",
            para: "ERP vs CRM: What’s the Difference and Which Do You Need?",
            id: 1,
            link: '/blog/erp-vs-crm'
        },
        {
            img: "/blog/Section-2.jpg",
            date: "May 26, 2025",
            para: "Dynamics vs NetSuite: Comparing Microsoft and Oracle ERP Solutions",
            id: 2,
            link: '/blog/dynamics-vs-netsuite'
        },
        {
            img: "/blog/Article1.1.jpg",
            date: "May 26, 2025",
            para: "How AI Revolutionizes Oracle Cloud Infrastructure for Businesses ",
            id: 3,
            link: '/blog/ai-revolutionizes'
        },
        {
            img: "/blog/Article3.1.jpg",
            date: "May 26, 2025",
            para: "Microsoft Dynamics 365 vs. Traditional CRM: Which is Better?",
            id: 4,
            link: '/blog/dynamics-traditional-crm'
        },
        {
            img: "/blog/Article4.1.jpg",
            date: "May 26, 2025",
            para: "Key Benefits of Microsoft Dynamics 365 for Small Businesses",
            id: 5,
            link: '/blog/key-benefits'
        },
        {
            img: "/blog/Article2.1.jpg",
            date: "May 26, 2025",
            para: "Why Every Business Needs Oracle Database Integration with ERP Systems",
            id: 6,
            link: '/blog/oracle-database'
        },
        {
            img: "/blog/Article5.1.jpg",
            date: "May 27, 2025",
            para: "How Microsoft Dynamics 365 Integrates with Your Business Operations",
            id: 7,
            link: '/blog/erp-software-explained'
        },
        {
            img: "/blog/Article6.1.jpg",
            date: "May 28, 2025",
            para: "The Future of ERP: Exploring ERP Modules in Microsoft Dynamics 365",
            id: 8,
            link: '/blog/future-of-erp'
        },
        {
            img: "/blog/Article7.1.jpg",
            date: "May 29, 2025",
            para: "What is ERP? A Comprehensive Guide ",
            id: 9,
            link: '/blog/what-is-erp'
        },
        {
            img: "/blog/Article9.1.jpg",
            date: "May 30, 2025",
            para: "What is Microsoft Dynamics 365? A Complete Guide",
            id: 10,
            link: '/blog/what-is-microsoft-dynamics-365'
        },
        {
            img: "/blog/Article12.1.jpg",
            date: "June 2, 2025",
            para: "Key Benefits of Microsoft Dynamics 365 for Small Businesses ",
            id: 11,
            link: '/blog/dynamics-365-for-small-businesses'
        },
        {
            img: "/blog/Article13.1.jpg",
            date: "June 3, 2025",
            para: "Common Types of ERP: Understanding the Options Available",
            id: 12,
            link: '/blog/common-types-of-erp'
        },
        {
            img: "/blog/Article14.1.jpg",
            date: "June 4, 2025",
            para: "How to Integrate Microsoft Dynamics 365 with Other Applications",
            id: 13,
            link: '/blog/dynamics-with-other-apps-integration'
        },

    ]
    const splideRef = useRef(null);
    useEffect(() => {
        if (splideRef.current) {
            const splide = new Splide(splideRef.current, {
                perPage: 3,
                gap: '16px',
                arrows: false,
                drag: 'free',
                pagination: true,
                rewind: true,
                paginationKeyboard: true,
                paginationDirection: 'ltr',
                autoplay: true,
                breakpoints: {
                    768: {
                        perPage: 1,
                    },
                    1024: {
                        perPage: 3,
                    },
                },
            });

            splide.mount();
            const paginationContainer = splideRef.current.querySelector('.custom-pagination');
            const pagination = splideRef.current.querySelector('.splide__pagination');
            if (pagination && paginationContainer) {
                paginationContainer.appendChild(pagination);
                pagination.style.display = 'flex';
            }

            return () => splide.destroy();
        }
    }, []);

    return (
        <section ref={splideRef} className="splide" aria-label="Blog Slider">
            <div className="splide__track">
                <ul className="splide__list">
                    {cardData.map((card, index) => (
                        <Link href={card.link} className="splide__slide hover:opacity-75 transition-opacity ease-in-out duration-500" key={index}>
                            <div className='absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[20px] opacity-60'></div>
                            <Image src={card.img} width={300} height={300} alt="blog 1" className='w-full rounded-[20px] ' />
                            <div className='max-w-[80%] absolute bottom-6 left-6'>
                                <span className='text-[#D4D4D8] text-[12px] md:text-[14px]'>{card.date}</span>
                                <p className='text-white text-[16px]'>{card.para}</p>
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="custom-pagination"></div>
        </section>
    );
};

export default BlogSlider;
