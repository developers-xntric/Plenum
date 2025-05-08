"use client"

import { useState } from "react"
import Image from "next/image"

export default function OurPeopleSection() {
  const [teamMembers] = useState([
    {
      id: 1,
      image: "/about/Nindi.png",
    },
    {
      id: 2,
      image: "/about/P2.png",
    },
    {
      id: 3,
      image: "/about/P3.png",
    },
    {
      id: 4,
      image: "/about/P4.png",
    },
  ])

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto font-['Archivo']">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#101010]">Our People</h2>
        <p className="text-secondary opacity-[0.6] font-medium max-w-3xl mx-auto text-lg">
          Our vision goes beyond just providing IT services; we aim to empower businesses in the Middle East to be
          self-sufficient and prepared for the technological changes in the new age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt="Team member"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority={member.id <= 2}
                quality={90}
              />
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}
