import React from 'react';
import AnimatedButton from '../AnimatedButton';
import { useRouter } from 'next/navigation';

function HomeProjectBox({project, index}) {
  const navigate = useRouter();

  return (
    <div className={`rounded-lg overflow-hidden transition-all duration-300
                     flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
                     my-8`}>
      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
        <img 
          src={project.img} 
          alt={project.name} 
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 p-6 md:w-1/2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{project.name}</h3>
        <div className="flex items-start gap-3">
          <div className="bg-red-600 w-1 h-4 mt-1.5 rounded-full flex-shrink-0"></div>
          <p className="text-gray-600 text-sm md:text-base">{project.description}</p>
        </div>
        <div className="mt-4">
          <AnimatedButton onClick={() => navigate(`/project/${project.slug}`)} />
        </div>
      </div>
    </div>
  );
}

export default HomeProjectBox;