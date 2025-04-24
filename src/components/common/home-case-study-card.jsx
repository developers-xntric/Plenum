import Image from "next/image";
import Link from "next/link";

export default function HomeCaseStudyCard({ title, image, link}) {
    return (
        <Link href={link} className="block ">
            <div className="rounded-[12px] border-2 border-[#bfbfbf] overflow-hidden h-full  p-3">
                <div className="relative ">
                    <Image src={image} alt={title} width={1000} height={1000} className="rounded-[12px]" />

                    {/* P LOGO */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="119" height="119" viewBox="0 0 119 119" fill="none" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <g style={{ mixBlendMode: 'overlay' }}>
                            <path d="M68.6679 0H45.9052C20.5565 0 0 20.5565 0 45.9052V118.985H18.365V18.365H68.6825C86.3316 18.365 100.635 32.6684 100.635 50.3175C100.635 67.9666 86.3316 82.27 68.6825 82.27H27.5548L45.9198 100.635H68.6825C96.4711 100.635 119 78.1061 119 50.3175C119 22.5289 96.4711 0 68.6825 0H68.6679Z" fill="white" className={`${title.includes("Consumer") ? ' opacity-[0.05]' : 'opacity-[0.35]' }`}/>
                        </g>
                    </svg>

                </div>
                <div className="pt-3 px-2 flex justify-between items-center">
                    <h3 className="font-['Archivo'] text-[#232522] xl:text-[20px] underline  font-medium">{title}</h3>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                    >
                        <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    )
}