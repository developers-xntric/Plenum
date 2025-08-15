import Image from "next/image"

export default function Section2({ heading, heading_className, image, case_studies }) {
  return (
    <div className="2xl:max-w-[1440px] w-[90%] mx-auto space-y-20 py-16 xl:py-24">
      {/* TEXT HEADING 1 */}
      <div className=" text-[30px] lg:text-[50px] leading-[40px] lg:leading-[55px] font-semibold font-['Archivo'] relative z-20 bg-[linear-gradient(to_right,_#101010,_#9b9999,_#101010,_#9b9999)] bg-clip-text text-transparent">
        <div className={`text-start pt-12 ${heading_className}`}>
          <h2>{heading}</h2>
        </div>
      </div>
      {/* Two Cols */}
      <div>
        {/* Make thi image center align */}
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={image || "/casestudy/Group.png"}
            alt="Group"
            width={3000}
            height={3000}
            priority
            className="h-full w-full"
          />
        </div>
        {/* THREE FEATURE BOXES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Feature 1 */}
          <div className="bg-zinc-100 rounded-[20px] p-6 shadow-sm">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Image src={"/casestudy/Icon.svg"} alt="" width={50} priority height={50} />
            </div>
            <h2 className="text-xl font-semibold mb-3">Business Challenges</h2>
            <ul className="space-y-2">
              {case_studies[0].map((val, index) => <li key={index} className="flex items-center gap-5 text-[16px]"><div className="min-w-4 h-1 rounded-2xl bg-primary opacity-100"></div>{val}</li>)}
            </ul>
          </div>
          {/*  */}
          {/* Feature 2 */}
          <div className="bg-zinc-100 rounded-[20px] p-6 shadow-sm">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Image src={"/casestudy/Icon.svg"} alt="" width={50} priority height={50} />
            </div>
            <h2 className="text-xl font-semibold mb-3">Plenum’s Solution</h2>
            <ul className="space-y-2">
              {case_studies[1].map((val, index) => <li key={index} className="flex items-center gap-5 text-[16px]"><div className="min-w-4 h-1 rounded-2xl bg-primary opacity-100"></div>{val}</li>)}
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-zinc-100 rounded-[20px] p-6 shadow-sm">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Image src={"/casestudy/Icon.svg"} alt="" width={50} priority height={50} />
            </div>
            <h2 className="text-xl font-semibold mb-3">Key Capabilities Used</h2>
            <ul className="space-y-2">
              {case_studies[2].map((val, index) => <li key={index} className="flex items-center gap-5 text-[16px]"><div className="min-w-4 h-1 rounded-2xl bg-primary"></div>{val}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
