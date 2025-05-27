'use client';
import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Image from 'next/image';
import Link from 'next/link';

const BlogSlider = ({  }) => {
    const cardData = [
        {
            img: "/blog/blog_1.jpg",
            date: "May 26, 2025",
            para: "ERP vs CRM: What’s the Difference and Which Do You Need?",
            id: 1,
            link: '/blog/ERP-CRM'
        },
        {
            img: "/blog/blog_2.jpg",
            date: "May 26, 2025",
            para: "Dynamics vs NetSuite: Comparing Microsoft and Oracle ERP Solutions",
            id: 2,
            link: '/blog/dynamics-netsuite'
        },
        {
            img: "/blog/blog_3.jpg",
            date: "May 26, 2025",
            para: "Oracle NetSuite vs Salesforce: CRM and ERP Compared",
            id: 3,
            link: '/blog/oracle-netsuite-salesforce'
        },
        {
            img: "/blog/blog_1.jpg",
            date: "May 26, 2025",
            para: "Oracle NetSuite vs SAP: Which ERP Solution Fits Your Business Best?",
            id: 4,
            link: '/blog/oracle-netsuite-sap'
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
                            <Image src={card.img} width={300} height={300} alt="blog 1" className='w-full ' />
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
