"use client"

import { useState } from "react"
import Image from "next/image"

export default function OurPeopleSection() {
  const [teamMembers] = useState([
    {
      id: 1,
      image: "/about/Nindi.png",
      name: "Nindi Sharma",
      postion: "Head Of Government Partnerships & Special Projects"
    },
    {
      id: 2,
      image: "/about/P2.png",
      name: "Sarvesh Gaokar",
      postion: "Marketing Manager"
    },
    {
      id: 3,
      image: "/about/P4.png",
      name: "Sammas Sulaiman",
      postion: "Senior Sales Executive"
    },
    {
      id: 4,
      image: "/about/people.svg",
      name: "Nitin Kumar",
      postion: "Head of Delivery"
    },
  ])

  return (
    <section className="py-16  mx-auto font-['Archivo']">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#101010]">Our People</h2>
        <p className="text-secondary opacity-[0.6] font-medium max-w-3xl mx-auto text-lg">
          Our vision goes beyond just providing IT services; we aim to empower businesses in the Middle East to be
          self-sufficient and prepared for the technological changes in the new age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto 2xl:max-w-[1440px] gap-4 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group bg-white rounded-lg overflow-hidden transition-all duration-300"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt="Team member"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 350vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority={member.id <= 2}
                quality={90}
              />
            </div>
            <div className="md:flex mt-4 justify-start hidden flex-col gap-1 font-['Archivo']">
              <h4 className="text-[22px] text-[#000000] font-medium">{member.name}</h4>
              <p className="text-[17px] max-w-[90%] text-[#000000B2] font-medium">{member.postion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
