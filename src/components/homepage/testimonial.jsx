import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import TestimonialCard from "../common/testimonial-cards"

export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-white">
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto py-12 xl:py-20 space-y-8">
        <div className='space-y-5'>
          <h2 className="text-[50px] leading-[55px] font-['Archivo'] text-secondary font-semibold home-section-headings">Trusted by Professionals</h2>
          <p className="text-secondary font-['Archivo'] opacity-75 lg:max-w-[57%] xl:max-w-[40%]">
            As an ERP company, Plenum is trusted by professionals for insight-driven design, branding, and innovation.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full "
        >
          <div className="flex  justify-end items-center mb-4">
            <div className="flex absolute gap-4 md:left-[95%] mb-10">
              <div className="flex items-center gap-1">
                <CarouselPrevious className="h-10 w-fit hover:bg-transparent border-none cursor-pointer shadow-none" />
                {/* <p className="relative -left-3 text-secondary font-semibold home-section-headings">Prev</p> */}
              </div>
              <div className="flex items-center">
                <CarouselNext className="h-10 w-fit hover:bg-transparent border-none cursor-pointer relative left-4 shadow-none" />
                {/* <p className="relative right-13 text-secondary font-semibold home-section-headings">Next</p> */}
              </div>
            </div>
          </div>

          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  socialLink={testimonial.socialLink}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

