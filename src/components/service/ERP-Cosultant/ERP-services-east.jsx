'use client'; // Since we'll use state for tabs, this needs to be a client component

import Image from 'next/image';
import { useState } from 'react';

export default function ERPServicesEast() {
  const [activeTab, setActiveTab] = useState('United Arab Emirates');

  const tabs = ['United Arab Emirates', 'Saudi Arabia', 'Qatar'];

  return (
    <div className="text-center py-5 bg-gray-100">
      {/* Header Section */}
      <div className="mb-5">
        <h1 className="text-4xl font-bold">
          Plenum ERP Services <span className="block text-2xl font-normal">in Middle East</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Our services include a wide variety of areas, including ERP solutions,
          Microsoft Dynamics ERP services, customized IT infrastructure services.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center gap-5 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg pb-1 ${
              activeTab === tab
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-700'
            } focus:outline-none`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Section with Play Button */}
      <div className="relative w-full h-[400px] mx-auto">
        <Image
          src="/images/dubai-skyline.jpg" // Replace with the actual image path
          alt="Dubai Skyline with Burj Khalifa"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg cursor-pointer">
          Play
        </button>
      </div>
    </div>
  );
}