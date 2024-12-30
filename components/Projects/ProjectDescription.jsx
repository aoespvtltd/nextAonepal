import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { projects } from '../jsons/projects'
import { Link, useNavigate, useParams } from 'react-router-dom'


const ProjectDescription = () => {
    const {slug} = useParams()
    
    const project = projects.find(project=>project.slug === slug)
  const { name, description, detail, img } = project
  const navigate = useNavigate()

  // Split the detail into paragraphs
  const paragraphs = detail.split('\n').filter(p => p.trim() !== '')

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" className="justify-center items-center" onClick={()=>navigate("/projects")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Button>

      <h1 className="text-4xl font-bold mb-4">{name}</h1>
      
      <p className="text-xl text-gray-600 mb-6">{description}</p>
      
      <div className="mb-8">
        <img 
          src={img} 
          alt={name} 
          className="w-auto h-[400px] rounded-lg shadow-lg mx-auto"
        />
      </div>

      <div className="prose max-w-none">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Project Slug: <span className="font-mono">{slug}</span>
        </p>
      </div>
    </div>
  )
}

export default ProjectDescription