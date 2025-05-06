export default function CustomerStats() {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="2xl:max-w-[1440px] h-full w-[90%] mx-auto font-['Archivo']">
                <div className="flex flex-col md:flex-row lg:items-center justify-between">
                    {/* Left side - Customer count and testimonial */}
                    <div className="mb-8 md:mb-0 text-left">
                        <h2 className="text-3xl md:text-4xl text-gray-900 font-medium font-['Archivo'] mb-4">
                            15,000+ happy
                            <br />
                            customers.
                        </h2>
                        <p className="text-secondary opacity-70">Using Netsuitte everyday and loving it</p>
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                        {/* Stat 1 */}
                        <div className="text-center">
                            <p className="text-[32px] md:text-5xl text-secondary mb-1 font-medium">24K</p>
                            <p className="text-[7px] uppercase tracking-wider font-semibold text-secondary opacity-60">Trusted Reviews</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center">
                            <p className="text-[32px] md:text-5xl text-secondary mb-1 font-medium">96%</p>
                            <p className="text-[7px] uppercase tracking-wider font-semibold text-secondary opacity-60">Customer Satisfaction</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center">
                            <p className="text-[32px] md:text-5xl text-secondary mb-1 font-medium">32K</p>
                            <p className="text-[7px] uppercase tracking-wider font-semibold text-secondary opacity-60">Expenses Saved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
