import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { testimonials } from "@/data/home-testimonials"
import TestimonialCard from "../common/testimonial-cards"

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="2xl:max-w-[1330px] w-[90%] mx-auto py-12 xl:py-10 space-y-8">
        <div className='space-y-5'>
          <h2 className="text-[50px] leading-[55px] font-['Archivo'] text-secondary font-medium home-section-headings">Trusted by Professionals</h2>
          <p className="text-secondary font-['Archivo'] opacity-75 max-w-[45%]">
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
            <div className="flex absolute gap-4 left-[90%] mb-10">
              <div className="flex items-center gap-1 rela">
                <CarouselPrevious className="h-10 w-10 bg-white border-none cursor-pointer" />
                <p className="relative -left-3 text-secondary font-medium home-section-headings">Prev</p>
              </div>
              <div className="flex items-center">
                <CarouselNext className="h-10 w-10 bg-white border-none cursor-pointer relative left-4" />
                <p className="relative right-13 text-secondary font-medium home-section-headings">Next</p>
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

