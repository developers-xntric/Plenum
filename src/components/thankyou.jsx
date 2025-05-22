"use client"
export default function ThankYou({ confirmStatus, setConfirmStatus }) {

    return (
        <div className="bg-black/70  mx-auto fixed z-[999] inset-0 flex items-center justify-center">


            <div className=" flex flex-col items-center justify-center  w-[80%] h-[70%] mx-auto bg-white p-4 font-['Archivo']">
                <div className=" md:mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="126"
                        height="126"
                        viewBox="0 0 126 126"
                        fill="none"
                        className="mx-auto w-[80px] md:w-[126px]"
                    >
                        <g clipPath="url(#clip0_1_198)">
                            <path
                                d="M104.743 104.757C127.805 81.6955 127.805 44.3049 104.743 21.243C81.6814 -1.81884 44.2907 -1.81883 21.2289 21.243C-1.83299 44.3049 -1.83299 81.6955 21.2289 104.757C44.2907 127.819 81.6814 127.819 104.743 104.757Z"
                                fill="#FF6035"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M121.212 73.0199C117.009 97.6096 97.6079 117.01 73.0189 121.213L41.2234 89.4171C33.6149 83.1381 28.7656 73.6356 28.7656 63.0005C28.7656 44.0933 44.0923 28.7666 62.9995 28.7666C73.6347 28.7666 83.1371 33.6161 89.4162 41.2244L121.212 73.0199Z"
                                fill="#E83100"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M46.9753 65.0332L56.7251 73.9866C58.1473 75.2958 60.3486 75.2262 61.6861 73.847L79.0797 57.1936C80.4945 55.8332 80.5374 53.5825 79.1765 52.1669C77.8156 50.7536 75.566 50.7093 74.1512 52.0697L59.0849 66.495L51.7919 59.798C50.3471 58.4686 48.096 58.5619 46.7659 60.0082C45.436 61.453 45.5298 63.7026 46.9753 65.0332ZM62.9995 28.7666C81.9066 28.7666 97.2333 44.0933 97.2333 63.0005C97.2333 81.9076 81.9066 97.2343 62.9995 97.2343C44.0923 97.2343 28.7656 81.9076 28.7656 63.0005C28.7656 44.0933 44.0923 28.7666 62.9995 28.7666Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_198">
                                <rect width="126" height="126" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <h2 className="text-[20px] lg:text-[45px] font-semibold text-black mb-2 text-center">
                    THANK YOU FOR CONTACTING PLENUM!
                </h2>

                <p className="text-[15px] lg:text-[22px] text-black text-center max-w-[730px]">
                    We truly appreciate your interest in our services. One of our team members
                    will get back to you shortly.
                </p>

                <button onClick={() => setConfirmStatus(!confirmStatus)} className="mt-4 text-[14px]  md:text-base sm:mt-6 bg-[#FF6035] hover:bg-orange-600 text-white font-semibold py-2 px-2 md:px-8 rounded-[10px] transition-all duration-500 cursor-pointer">
                    Go back
                </button>
            </div>
        </div>
    );
}
