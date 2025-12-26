// components/GrowthSectionx
import Image from 'next/image';
import Link from 'next/link';

export default function GrowthThird() {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-16 pt-5 ">

      <div className='2xl:max-w-[1440px] w-[90%] mx-auto md:space-y-10 flex flex-col'>
        {/* Top CTA Banner */}
        <div className="bg-black text-white w-full rounded-[20px] p-5 md:p-9 md:h-[100px] flex flex-col sm:flex-row justify-between items-center shadow-md">
          <p className="text-[18px] lg:text-[26px] font-semibold font-['Archivo'] text-left md:w-[280px] lg:w-[450px] leading-[30px] lg:leading-[35px]">
            Ready to Scale Your Business and Unlock New Growth?
          </p>
          <Link href="/contact">

            <button className="mt-4 text-[14px] md:text-base sm:mt-0 bg-[#FF6035] hover:bg-orange-600 text-white font-semibold py-2 px-2 md:px-4 rounded-[11px] transition-all duration-500 ">
              Schedule a call with our expert
            </button>
          </Link>
        </div>


        {/* Center Image Section */}
        <div className="mt-10 relative rounded-lg p-4 max-w-4xl mx-auto lg:w-[700px] ">
          <Image
            src="/images/book-demo/growth-circle.svg"
            alt="Business Growth Graphic"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
