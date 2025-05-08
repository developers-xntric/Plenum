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
    <section className="py-20 font-['Archivo']">
      <div className="text-center mb-16">
        <h2 className="text-[36px] md:text-[64px] mb-2 md:mb-4">Our People</h2>
        <p className="text-[15px] md:text-[16px] text-[#101010] opacity-60 md:max-w-2xl max-w-[90%] mx-auto text-lg">
          Our vision goes beyond just providing IT services; we aim to empower businesses in the Middle East to be
          self-sufficient and prepared for the technological changes in the new age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-[94%] mx-auto 2xl:max-w-[1440px] gap-4 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative w-full h-[400px]">
            <Image
              src={member.image || "/placeholder.svg"}
              alt="Team member"
              width={310}
              height={400}
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
