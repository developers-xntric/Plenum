import Link from 'next/link';
import React from 'react';

const Button = ({ text, link, className }) => {
    return (
        <Link href={link}>
            <button className={`px-10 text-[16px] py-[10px] rounded-[8px] align-middle ${className} cursor-pointer`}>
                {text}
            </button>
        </Link >
    )
}

export default Button;
