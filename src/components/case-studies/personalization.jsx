import Image from 'next/image'

export default function Personalization() {
    return (
        <div className="2xl:max-w-[1440px] w-[85%] mx-auto space-y-20 pb-16">
            <div className=" w-full flex justify-between items-center space-x-16">
                {/* Left Side Content */}
                <div className="flex flex-col space-y-4 w-[40%]">
                    <h1 className="text-[40px] font-semibold text-secondary font-['Archivo'] leading-[50px] max-w-[320px]">
                        Personalization is the new standard in Business
                    </h1>
                    <p className="text-[15px] text-secondary opacity-60 font-normal">
                        At our core is a branded operating system that synthesizes every fiber of your brand, from strategies and business plans.
                    </p>
                </div>

                {/* Right Side Image/Statistic */}
                <div className="flex flex-col items-center space-y-8 w-[40%] h-[280px]">
                    <Image src={"/casestudy/per.png"} alt='' width={1500} height={1500} className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
}
