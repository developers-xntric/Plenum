"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

// Sample testimonial data (unchanged)
const testimonials = [
  {
    id: 1,
    quote:
      "The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what  what we do.",
    author: "Maroun Najjar",
    position: "Head of Design",
    socialLink: "https://linkedin.com",
  },
  {
    id: 2,
    quote:
      "The talent bar at Plenum is extremely high, and there is something electric and deeply fulfilling about working with a team that is so passionate about our mission and what we do.",
    author: "Maroun Najjar",
    position: "Head of Design",
    socialLink: "https://linkedin.com",
  },
  {
    id: 3,
    quote:
      "Plenum's approach to design and innovation has transformed how we operate. Their team consistently delivers exceptional results.",
    author: "Sarah Johnson",
    position: "Director of Operations",
    socialLink: "https://linkedin.com",
  },
  {
    id: 4,
    quote:
      "Working with Plenum has been a game-changer for our business. Their insight-driven approach has helped us reach new heights.",
    author: "Michael Chen",
    position: "Chief Marketing Officer",
    socialLink: "https://linkedin.com",
  },
]

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

function TestimonialCard({ quote, author, position, socialLink }) {
  return (
    <div className="bg-[#EFEFEF] p-6 rounded-lg relative transition-all duration-300 ease-in-out h-full">
      <blockquote className="mb-6">
        <p className="text-secondary font-['Archivo'] opacity-75">{`"${quote}"`}</p>
      </blockquote>
      <div className="flex items-center justify-between">
        <div className="-space-y-3">
          <p className="leading-[55px] font-['Archivo'] text-[20px] text-secondary font-medium home-section-headings">{author}</p>
          <p className="text-sm text-secondary font-['Archivo'] opacity-75">{position}</p>
        </div>
        <Link href={socialLink} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M24.893 0.113281H4.10777C2.13939 0.113281 0.525391 1.72745 0.525391 3.6956V24.4809C0.525391 26.4491 2.13939 28.0633 4.10777 28.0633H24.893C26.8616 28.0633 28.4754 26.4491 28.4754 24.481V3.6956C28.4754 1.72745 26.8616 0.113281 24.893 0.113281ZM10.1332 13.6115V22.2404H6.34831V14.2553V11.3515H10.1332V13.6115ZM8.23319 9.72855C7.18023 9.72855 6.32583 8.87479 6.32583 7.82119C6.32583 6.76742 7.18023 5.91471 8.23319 5.91471C9.2876 5.91471 10.1412 6.76748 10.1412 7.82119C10.1412 8.87479 9.28766 9.72855 8.23319 9.72855ZM22.6525 16.301V22.2404H19.3916V16.9512C19.3916 15.6847 19.2545 14.0558 17.5188 14.0558C15.7566 14.0558 15.4903 15.4347 15.4903 16.8599V22.2404H12.3459V13.4547V11.3515H15.3738V12.8072H15.4061C15.8577 11.992 16.9641 11.3503 18.6117 11.3503C21.3876 11.3503 22.3309 12.663 22.589 14.7167C22.6503 15.1987 22.6739 15.7187 22.6739 16.301H22.6525Z" fill="#1A1A1A" />
          </svg>
        </Link>
      </div>
    </div>
  )
}