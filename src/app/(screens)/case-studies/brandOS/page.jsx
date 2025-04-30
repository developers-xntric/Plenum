import Image from "next/image"
import Section2 from "@/components/case-studies/section2"

export default function BrandOSPage() {
  return (
    <main className="min-h-screen 2xl:max-w-[1440px] mx-auto ">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-10"></div>
        <Image
          src="/casestudy/casestudy-hero1.png"
          alt="Dynamic starburst background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 z-20 my-20">

          <div className="container mx-auto px-4 pt-32 md:pt-40">
          <div className="mb-6">
              <button className="px-8 py-3 text-white text-lg bg-white/20 hover:bg-white/30 border border-white/70 rounded-full transition-colors font-[Archivo] font-medium ">
                Healthcare
              </button>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-white mb-4 max-w-3xl font-bold font-['Chakra] ">
              Turn soft solutions into real results
            </h1>

            <p className="text-white/90 max-w-2xl text-lg md:text-xl  font-bold font-['Chakra] ">
              At Plenum Technologies, we offer cutting-edge AI software platforms tailored to empower data engineers,
              scientists, analysts, and automation engineers.
            </p>
          </div>
        </div>
      </div>
      {/* Section 2  */}
     <Section2/>
     
    </main>
  )
}
