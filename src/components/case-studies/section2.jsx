import Image from "next/image"

export default function Section2() {
  return (
    <div>
        {/* Consider using a wrapper which adds space to the sides when we move higher from 1440 px screens width */}
      {/* TEXT HEADING 1 */}
      <div className="text-[39.542px] leading-[40px] font-semibold font-['Archivo'] relative z-20 bg-[linear-gradient(to_right,_#101010,_#9b9999,_#101010,_#9b9999)] bg-clip-text text-transparent px-[100px]">
          <div className="text-start pt-12 w-[700px] ">
          <h1>Unlock Deeper Insights, Automate Workflows, and Drive Efficiency with Plenum’s Cutting-Edge ERP AI Technology.</h1>
          </div>
            </div> 
      {/* Two Cols */}
      <div>
        {/* Make thi image center align */}
        <div className=" flex items-center justify-center m-auto">
            <Image 
            src="/casestudy/Group.png" 
            alt="Group"
            width="200"
            height="200"
            className="xl:w-[200px] xl:h-[200px]"
            />
        </div>
        {/* Make these three divs as provided in the image write same text and make r4esposnive for larger rscr4ens ti small screen websites  */}
  {/* THREE FEATURE BOXES */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-zinc-100 rounded-[20px] p-6 shadow-sm">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-gray-800" />
          </div>
          <h2 className="text-xl font-semibold mb-3">AI-Driven Data Integration</h2>
          <p className="text-gray-700">
            We integrated AI to centralize data across departments, ensuring real-time access to accurate and consistent
            information. This eliminated data silos and improved collaboration, leading to faster and more informed
            decision-making.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-zinc-100 rounded-[20px] p-6 shadow-sm">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-gray-800" />
          </div>
          <h2 className="text-xl font-semibold mb-3">Automated Processes</h2>
          <p className="text-gray-700">
            AI-powered automation streamlined routine tasks like order processing and inventory management. By reducing
            manual labor, we freed up resources and improved efficiency across the organization.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-zinc-100 rounded-[20px] p-6 shadow-sm">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-gray-800" />
          </div>
          <h2 className="text-xl font-semibold mb-3">Business Intelligence Tools</h2>
          <p className="text-gray-700">
            We integrated advanced BI tools to provide real-time insights and analytics. This enabled data-driven
            decision-making, helping managers track performance and adjust strategies proactively.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
