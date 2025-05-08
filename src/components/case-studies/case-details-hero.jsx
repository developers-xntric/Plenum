const CaseDetailHero = ({ tags, heading, para, heading_className, para_className }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/casestudy/casestudy-hero1.png')" }}
    >
      <div className="w-full h-full min-h-[600px] md:min-h-screen xl:min-h-[900px] 2xl:min-h-[1000px] flex items-center">
        <div className="container mx-auto px-6 md:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-8">
              <button className="px-6 py-1.5 text-white text-lg bg-[rgba(114,114,114,0.50)] hover:bg-white/30 border border-white/70 rounded-full transition-colors font-[Archivo] font-medium">
                {tags}
              </button>
            </div>

            <div className="max-w-3xl xl:max-w-4xl">
              <h1 className={`text-[30px] md:text-5xl lg:text-6xl xl:text-7xl tracking-[-1px] leading-[1.15] md:tracking-[-2.954px] md:leading-[1.1] text-white mb-6 font-semibold font-['Chakra'] ${heading_className}`}>
                {heading}
              </h1>

              <p className={`text-white max-w-[480px] text-[15px] md:text-xl font-normal font-['Archivo'] leading-relaxed ${para_className}`}>
                {para}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseDetailHero

