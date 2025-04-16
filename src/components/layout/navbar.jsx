import Link from "next/link"
import Button from "../common/button"

const Navbar = () => {
    return (
        // Main Header
        <header className='z-50 2xl:w-[1300px] w-[80%] xl:w-[85%] font-normal font-["Archivo"] mx-auto fixed -translate-x-1/2 left-1/2 top-8 bg-[#FFFFFF] rounded-[13px]'>
            {/* Wrapper */}
            <div className='xl:px-[18px] xl:py-2 py-2 px-3'>
                {/* Inner Row Whole Div */}
                <div className='flex justify-between items-center'>
                    {/* Logo Div */}
                    <Link href={"/"} className='w-[100px]'>
                        {/* Logo Svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 89 19" fill="none">
                            <g clipPath="url(#clip0_1037_613)">
                                <path d="M86.927 1.53503C87.0132 1.53503 87.0746 1.5657 87.1378 1.62704C87.2011 1.5657 87.2624 1.53503 87.3487 1.53503H87.5959V1.66538H87.2126V2.5337H87.0611V1.66538H86.6797V1.53503H86.927Z" fill="#101010" />
                                <path d="M87.8702 1.62512V2.53178H87.7188V1.53503H87.9085C87.966 1.53503 88.012 1.57145 88.0389 1.62129C88.1999 1.92798 88.1194 1.77464 88.2823 2.08324L88.5257 1.62129C88.5526 1.57337 88.5986 1.53695 88.6542 1.53695H88.8439V2.5337H88.6925V1.62704L88.3053 2.3631H88.2612L87.8702 1.62704V1.62512Z" fill="#101010" />
                                <path d="M9.00904 2.53766H6.02264C2.69696 2.53766 0 5.23462 0 8.5603V18.1482H2.40944V4.9471H9.01096C11.3265 4.9471 13.203 6.82366 13.203 9.13918C13.203 11.4547 11.3265 13.3313 9.01096 13.3313H3.61512L6.02456 15.7407H9.01096C12.6567 15.7407 15.6125 12.785 15.6125 9.13918C15.6125 5.49339 12.6567 2.53766 9.01096 2.53766H9.00904Z" fill="#101010" />
                                <path d="M20.4251 0.127808H18.0156V15.7384H20.4251V0.127808Z" fill="#101010" />
                                <path d="M29.4375 2.5459C25.7917 2.5459 22.8359 5.50163 22.8359 9.14742C22.8359 12.7932 25.7917 15.7489 29.4375 15.7489H36.039V13.3395H29.4375C27.1219 13.3395 25.2454 11.4629 25.2454 9.14742C25.2454 6.8319 27.1219 4.95534 29.4375 4.95534H33.6295V7.94174H27.6548V10.3512H36.0371V2.5459H29.4355H29.4375Z" fill="#101010" />
                                <path d="M45.6316 2.53772H38.4531V15.7388H40.8626V4.94716H49.2448V15.7388H51.6542V8.56036C51.6542 5.23468 48.9573 2.53772 45.6316 2.53772Z" fill="#101010" />
                                <path d="M60.0851 15.747H67.2636V2.5459H64.8542V13.3376H56.4719V2.5459H54.0625V9.72438C54.0625 13.0501 56.7595 15.747 60.0851 15.747Z" fill="#101010" />
                                <path d="M82.8217 2.5459H64.8516V4.95534H75.6432V15.747H78.0527V4.95534H86.4349V15.747H88.8444V8.56854C88.8444 5.24286 86.1474 2.5459 82.8217 2.5459Z" fill="#101010" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1037_613">
                                    <rect width="88.8445" height="18.02" fill="white" transform="translate(0 0.130005)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    {/* Links And Button Div */}
                    <div className='flex justify-between gap-[30px] xl:gap-[90px]'>
                        {/* Whole Links */}
                        <ul className='flex justify-between items-center gap-8 2xl:gap-10 text-[12px] xl:text-[14px] text-secondary'>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>Services</Link>
                            <Link href={"/"}>Products</Link>
                            <Link href={"/"}>Industries</Link>
                            <Link href={"/"}>Resources</Link>
                            <Link href={"/"}>About Us</Link>
                            <Link href={"/"}>Book a Demo</Link>
                            <Link href={"/"}>Careers</Link>
                        </ul>
                        {/* Button */}
                        <Button text={"Contact Us"} link="/contact" className={"bg-secondary py-[10px]  px-7 xl:px-10 text-[#FFFFFF]"} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar