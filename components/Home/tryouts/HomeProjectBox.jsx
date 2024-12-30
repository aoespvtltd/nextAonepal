"use client"
import React, { useState } from 'react';
import AnimatedButton, { NeuButton } from '../../AnimatedButton';
import { useRouter } from 'next/navigation';

function HomeProjectBox({ project, index }) {
  const navigate = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className={`rounded-lg overflow-hidden transition-all duration-300
                     flex flex-col gap-12 md:flex-row ${
                       index % 2 === 0 ? 'md:flex-row-reverse' : ''
                     } my-8 mx-[4vw]`}
    >
      {/* Image Section */}
      <div className="md:w-1/2 h-56 md:h-auto overflow-hidden relative">
        {/* Small Placeholder Image */}
        <img
          src={project.smallImg}
          alt={`${project.name} placeholder`}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            isImageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Full Image */}
        <img
          src={project.img}
          alt={project.name}
          className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-300 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col justify-center gap-4 p-6 md:w-1/2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          {project.name}
        </h3>
        <div className="flex items-center gap-3">
          <div className="bg-[#A00201] w-1 h-full rounded-full flex-shrink-0"></div>
          <p className="text-gray-600 text-sm md:text-base">
            {project.description}
          </p>
        </div>

        <div className="mt-4">
          <NeuButton onClick={() => navigate.push(`/project/${project.slug}`)} text="Explore" />
        </div>
      </div>
    </div>
  );
}

export default HomeProjectBox;
