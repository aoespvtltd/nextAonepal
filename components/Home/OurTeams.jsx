'use client'

import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image: "https://files.catbox.moe/a2y8iu.png",
    },
    {
      name: "David Magar",
      role: "Electrical Technician",
      image: "https://files.catbox.moe/542w4s.png",
    },
    {
      name: "Simon Shrestha",
      role: "Sales and Marketing Head",
      image: "https://files.catbox.moe/r2x9cx.png",
    },
    {
      name: "Biplov Shrestha",
      role: "Project Manager",
      image: "https://files.catbox.moe/ptsgyp.png",
    },
    {
      name: "Tanka Gaire",
      role: "Machanical Engineer",
      image: "https://files.catbox.moe/sx1kul.png",
    },
    {
      name: "Madhav Ghimire",
      role: "Mechanical Engineer",
      image: "https://files.catbox.moe/uu0lyd.png",
    },
    {
      name: "Shashank Pandey",
      role: "Backend Engineer",
      image: "https://files.catbox.moe/m70k7i.png",
    },
  ];

export default function OurTeams() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Team
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative md:w-48 w-32 h-32 md:h-48 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 tracking-wider text-sm">
                  {member.role}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      {/* <div className="flex justify-center gap-2 mt-8">
        <span className="w-2 h-2 rounded-full bg-gray-800"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div> */}
    </section>
  )
}
