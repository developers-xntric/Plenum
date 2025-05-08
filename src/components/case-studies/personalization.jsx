
export default function Personalization({ heading1, para1, para2, number1, number2, circlePara1, circlePara2 }) {
    return (
        <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 lg:pb-16 overflow-hidden">
            <div className=" w-full flex lg:flex-row flex-col justify-between items-center space-y-6 lg:space-y-0">
                {/* Left Side Content */}
                <div className="flex flex-col space-y-4 lg:w-[40%] w-[95%] text-center md:text-start mx-auto md:ml-0">
                    <h2 className="text-[30px] md:text-[40px] font-semibold opacity-[0.8] text-secondary font-['Archivo'] leading-[35px] md:leading-[50px] tracking-[-1.5px] ">
                        {heading1 || 'Personalization is the with AI'}
                    </h2>
                    <div className="text-[15px] text-secondary  font-normal flex flex-col gap-2">
                        {para1 && (
                            <div className='flex md:gap-3'>
                                <div className='w-7 md:w-5 h-1 mt-2 bg-primary rounded-full '></div>

                                <p className='opacity-60 font-medium font-["Archivo"]'>{para1 || 'At our core is a branded operating system that synthesizes every fiber of your brand, from strategies and business plans.'}</p>
                            </div>
                        )}
                        {para2 && (
                            <div className='flex md:gap-3'>
                                <div className='w-7 md:w-5 h-1 mt-2 bg-primary rounded-full '></div>
                                <p className='opacity-60 font-medium font-["Archivo"]'> {para2 || 'At our core is a branded operating system that synthesizes every fiber of your brand, from strategies and business plans.'}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side Statistic */}
                <div className="flex items-center  gap-5">

                    {/* LEFT CIRCLE */}
                    <div className='md:w-60 w-[50%] h-[130px] md:h-60 overflow-hidden rounded-full blurd-2xl bg-[#F6F6F6] border-[0.9px] border-white relative flex items-center justify-center'>
                        {/* Blurred background */}
                        <div className="absolute md:w-40 w-20 h-20 md:h-40 rounded-full bg-[#FFB9A6] blur-xl opacity-70" />

                        {/* Text content */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center">
                            <p className='text-secondary font-["Archivo"] opacity-[0.8] font-semibold text-[36px] md:text-[60px] leading-none'>{number1 || '100%'}</p>
                            <p className='text-secondary font-["Archivo"] leading-[15px] font-semibold text-[12px] md:text-[15px] mt-2 max-w-[90%]'>
                                {circlePara1 || 'Total number of transactions'}
                            </p>
                        </div>
                    </div>


                    <div className='md:w-60 w-[50%] h-[130px] md:h-60 overflow-hidden rounded-full bg-[#F6F6F6] border-[0.9px] border-white relative flex items-center justify-center'>
                        {/* Blurred background */}
                        <div className="absolute md:w-40 w-20 h-20 md:h-40 rounded-full bg-[#87ECBA] blur-xl opacity-70" />

                        {/* Text content */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center">
                            <p className='text-secondary font-["Archivo"] opacity-[0.8] font-semibold text-[36px] md:text-[60px] leading-none'>{number2 || '100%'}</p>
                            <p className='text-secondary font-["Archivo"] leading-[15px] font-semibold text-[12px] md:text-[15px] mt-2 max-w-[90%]'>
                                {circlePara2 || 'Total number of transactions'}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
