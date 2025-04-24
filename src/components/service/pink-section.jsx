import React from 'react'
import ArrowButton from '../common/arrow-button'

const PinkSection = ({ heading, text, show_button = false }) => {
    return (
        <div className='bg-pink-100 md:h-[280px]'>
            <div className='2xl:max-w-[1300px] h-full w-[90%] mx-auto space-y-20 py-16'>
                <div className='w-[913px] mx-auto my-auto h-[141px]'>
                    <h2 className='text-secondary text-[45px] font-["Archivo"] font-bold text-center'>{heading}</h2>
                    <p className='text-secondary opacity-60 text-[18px] font-normal text-center font-["Archivo"] mt-4'>{text}</p>
                </div>
                <div className='w-full flex justify-center mt-4'>
                    {show_button && <ArrowButton text={"Request A Demo"} />}
                </div>
            </div>
        </div>
    )
}

export default PinkSection
