import Link from 'next/link';
import React from 'react';

const Button = ({ text, link, className }) => {
    return (
        <Link href={link}>
            <button className={ ` ${className}  text-[12px] xl:text-[16px] rounded-[8px] align-middle  cursor-pointer`}>
                {text}
            </button>
        </Link >
    )
}

export default Button;
