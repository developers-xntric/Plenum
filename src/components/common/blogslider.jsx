'use client';
import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';

const BlogSlider = ({ cardData }) => {
    const splideRef = useRef(null);
    useEffect(() => {
        if (splideRef.current) {
            const splide = new Splide(splideRef.current, {
                perPage: 3,
                gap: '16px',
                arrows: false,
                drag: 'free',
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
        }
    }, []);

    return (
        <section ref={splideRef} className="splide" aria-label="Blog Slider">
            <div className="splide__track">
                <ul className="splide__list">
                    {cardData.map((card, index) => (
                        <li className="splide__slide" key={index}>
                            <Image src={card.img} width={300} height={300} alt="blog 1" className='w-full' />
                            <div className='max-w-[80%] absolute bottom-6 left-6'>
                                <span className='text-[#D4D4D8] text-[14px]'>{card.date}</span>
                                <p className='text-white text-[16px]'>{card.para}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BlogSlider;
