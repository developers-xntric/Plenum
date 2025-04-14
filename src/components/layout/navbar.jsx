import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <header className='z-50 2xl:w-[75%] xl:[80%]  w-[85%] font-normal font-["Archivo"] mx-auto absolute -translate-x-1/2 left-1/2 top-8  bg-white rounded-[13px]'>
            <div className='px-4 py-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image
                            src='/layout/logo.webp'
                            alt='logo'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div>
                        <ul className='flex justify-between items-center gap-8 2xl:gap-10 text-[12px] 2xl:text-[14px] text-[#101010]'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Products</li>
                            <li>Industries</li>
                            <li>Resources</li>
                            <li>About Us</li>
                            <li>Book a Demo</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <button className='bg-black px-8 2xl:px-10 text-[15px] py-2 2xl:py-3 rounded-[8px] text-white'>
                        Contact Us
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar