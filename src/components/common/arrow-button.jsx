import React from 'react'

const ArrowButton = ({ text, className }) => {
    return (
        <button className={`bg-white text-black rounded-full py-1 px-5 flex items-center justify-between gap-2 text-sm hover:bg-gray-100 transition-colors ${className}`}>
            <div className="bg-primary text-white rounded-full p-2 relative right-4">
                {/* ARROW ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                        d="M15.4786 13.7214V6.54688H8.30404M15.2672 6.75755L6.61523 15.4095"
                        stroke="white"
                        strokeWidth="1.2661"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <span className="text-sm font-medium font-['Archivo'] relative right-2">{text}</span>
        </button>
    )
}

export default ArrowButton
