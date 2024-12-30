// import React from 'react'
// import { projects } from '../jsons/projects'
// import ProjectBox from './ProjectBox'

// function ProjectList() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="mb-6 text-3xl font-bold text-gray-800">Our Projects</h2>
//       <div className="grid gap-16 md:grid-cols-2 grid-cols-1">
//         {projects.map((project, index) => (
//           <ProjectBox key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ProjectList

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import ProjectBox from './ProjectBox'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Zap } from 'lucide-react'
import { projects } from '../jsons/projects'

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = projects.filter(project =>
      project.name.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term)
    )
    setFilteredProjects(filtered)
  }

  const shuffleProjects = () => {
    const shuffled = [...filteredProjects].sort(() => Math.random() - 0.5)
    setFilteredProjects(shuffled)
  }

  return (
    <div className="container mx-auto px-4 py-8 my-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Our Exciting Projects
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-4 mb-16">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Button onClick={shuffleProjects} className="flex items-center gap-2" variant="theme">
          <Zap className="h-4 w-4" />
          Shuffle Projects
        </Button>
      </div>
      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectBox project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-8"
        >
          No projects found. Try a different search term.
        </motion.p>
      )}
    </div>
  )
}

export default ProjectList