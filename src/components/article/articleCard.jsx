'use client';

import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ArticleCard({ url, index, slider }) {
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        async function fetchPreview() {
            try {
                const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
                const { data } = await res.json();
                setPreview(data);
            } catch (error) {
                console.error("Failed to fetch preview", error);
            }
        }

        fetchPreview();
    }, [url]);

    if (!preview) return <p>Loading preview...</p>;

    const fallbackImages = [
        "/article/article-1.webp",
        "/article/article-2.webp",
        "/article/article-5.jpeg",
        "/article/article-3.webp",
        "/article/article-4.webp",
    ];

    const forceImageIndexes = [0,2];
    const shouldUseSavedImage = forceImageIndexes.includes(index);
    const fallbackImage = fallbackImages[index] || "/article/article-1.webp";

    const imageToUse = shouldUseSavedImage ? fallbackImage : (preview.image?.url || fallbackImage);

    return (
        <div className={`flex flex-col h-full ${!slider ? 'border border-gray-200 rounded-lg shadow-sm' : ''}  overflow-hidden `}>
            <div className={`relative w-full ${!slider ? 'max-h-[52%] 2xl:max-h-[54%]' : ''}   overflow-hidden `}>
                <Image
                    src={imageToUse}
                    alt={preview.title}
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className={` flex flex-col justify-between ${!slider ? 'flex-grow p-4' : 'py-4'} `}>
                {!slider && (
                    <div>
                        <p className="text-[11px] md:text-xs text-gray-400 mb-1">
                            {preview.publisher || new URL(url).hostname}
                        </p>
                        <h3 className="font-semibold mb-1 line-clamp-2 md:text-xl ">
                            {preview.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mt-4">
                            {preview.description}
                        </p>
                    </div>
                )}

                {slider && (
                    <h3 className="font-semibold mb-1 line-clamp-2 mdtext-xl ">
                        {preview.title}
                    </h3>
                )}

                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 md:mt-0 w-fit text-primary font-semibold text-sm hover:underline"
                >
                    Visit Site
                    <ArrowUpRightIcon className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </div>
    );
}
