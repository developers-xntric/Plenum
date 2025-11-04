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
      id: 3,
      image: "/about/leader-2.svg",
      name: "Aasim Shaikh",
      postion: "Group CEO"
    },
    {
      id: 4,
      image: "/about/people.svg",
      name: "Nitin Kumar",
      postion: "Head of Delivery"
    },
  ])

  return (
    <section className="py-16 2xl:py-20 mx-auto font-['Archivo']">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#101010]">Our People</h2>
        <p className="text-secondary opacity-[0.6] font-medium max-w-3xl mx-auto text-[15px] md:text-lg px-3 md:px-0">
          Our vision goes beyond just providing IT services; we aim to empower businesses in the Middle East to be
          self-sufficient and prepared for the technological changes in the new age.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8 w-[90%] mx-auto 2xl:max-w-[1440px]">
        {teamMembers.map((member,index) => (
          <div
            key={member.id}
            className="group  rounded-lg overflow-hidden transition-all duration-300 "
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden scale-95">
            <div className="w-full h-2 bg-white"></div>
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 people-image"
              />
            </div>
            <div className="flex mt-4 justify-start md:text-left text-center flex-col gap-1 font-['Archivo'] px-4 pb-4 md:pb-0">
              <h4 className="text-[22px] text-[#000000] font-medium">{member.name}</h4>
              <p className="text-[17px] text-[#000000B2] font-medium">{member.postion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
