import React from 'react';

import AnimatedButton from '../AnimatedButton';
import { useNavigate } from 'react-router-dom';
import { projects } from '../jsons/projects';
import HomeProjectBox from './HomeProjectBox';

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="md:px-12 max-w-[80rem] px-4 mx-auto my-16">
      <div className='flex justify-between mb-16'>
      <h2 className="text-2xl font-bold text-center">Our Projects</h2>
      <AnimatedButton onClick={() => navigate(`/projects/`)} className="mt-4" />
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <HomeProjectBox project={project} index={index} key={project.slug}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
