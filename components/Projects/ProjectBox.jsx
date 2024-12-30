import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

function ProjectBox({ project }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white border-gray-150 border-[1px] transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-3/5">
          <img 
            src={project.img} 
            alt={project.name} 
            className="h-48 p-8 w-full object-cover bg-[#f1f1f1] transition-transform duration-300 group-hover:scale-105 sm:h-full"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}
        </div>
        <div className="flex flex-col justify-between p-8 my-8 sm:w-2/5">
          <div>
            <Link 
              to={project.slug}
              className="mb-4 block text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-primary"
            >
              {project.name}
            </Link>
            <p className="mb-4 text-sm text-gray-600 line-clamp-3">{project.description}</p>
          </div>
          <Link
            to={`/project/${project.slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary-dark"
          >
            <Button variant="theme">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from 'lucide-react'

// const ProjectBox = ({ project }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ scale: 1.05 }}
//       className="h-full"
//     >
//       <Card className="h-full flex flex-col overflow-hidden">
//         <motion.div
//           className="relative h-48 overflow-hidden"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <img
//             src={project.img}
//             alt={project.name}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <motion.h3
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="text-white text-2xl font-bold"
//             >
//               {project.name}
//             </motion.h3>
//           </div>
//         </motion.div>
//         <CardHeader>
//           <CardTitle>{project.name}</CardTitle>
//           <CardDescription>{project.description}</CardDescription>
//         </CardHeader>
//         <CardFooter className="mt-auto">
//           <Button variant="outline" className="w-full group">
//             Learn More
//             <motion.span
//               className="ml-2"
//               initial={{ x: 0 }}
//               whileHover={{ x: 5 }}
//             >
//               <ArrowRight className="h-4 w-4" />
//             </motion.span>
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   )
// }

// export default ProjectBox