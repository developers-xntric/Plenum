import React from 'react';
import ArticleCard from './articleCard';

function LinkedSection() {
    const articleUrls = [
        'https://thedailyguardian.com/others/the-future-of-manufacturing-with-microsoft-dynamics-365-is-here-are-you-ready/',
        'https://thearabianpost.com/dynamics-365-business-central-overview-everything-you-need-to-know/',
    ];

    return (
        <div className="bg-[#F5F5F5] py-16">
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {articleUrls.map((url, index) => (
                    <ArticleCard key={index} url={url} index={index} />
                ))}
            </div>
        </div>
    );
}

export default LinkedSection;
