import Image from "next/image";
import Link from "next/link";

export default function HomeCaseStudyCard({ title, image, link }) {
    return (
        <Link href={link} className="block ">
            <div className="rounded-[12px] border-2 border-[#bfbfbf] overflow-hidden h-full transition-shadow hover:shadow-md p-3">
                <div className="relative ">
                    <Image src={image} alt={title} width={450} height={1000} className="rounded-[12px]" />
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