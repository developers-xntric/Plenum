'use client';

import TabImageGallery from './Tabs-images';
export default function ERPServicesEast({ heading, para, classNamePara, activeState }) {

  return (
    <div className="text-center py-16 bg-white">
      {/* WRAPPER */}
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-10 md:space-y-16">
        {/* Headings */}
        <div className="space-y-6">
          <h2 className={`text-[30px] max-w-[65%] ${classNamePara} mx-auto md:text-[40px] lg:text-[50px] leading-[40px] md:leading-[50px] lg:leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings`}>
            {heading || "Plenum Managed Cloud Services"}
          </h2>
          <p className="text-secondary font-medium font-['Archivo'] opacity-75 mx-auto md:w-[75%] lg:w-[60%] xl:max-w-[50%]">
            {para || "We’ve carefully structured our service offerings to cater to both technical and business teams, ensuring clarity, usability, and long-term value."}
          </p>
        </div>
        <TabImageGallery activeState={activeState} />
      </div>
    </div>
  );
}