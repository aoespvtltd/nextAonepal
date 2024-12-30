"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Loader } from "lucide-react";
import { projects } from "@/components/jsons/projects";
import HomeProjectBox from "@/components/Home/tryouts/HomeProjectBox";

export const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function ProjectBar() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading spinner
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        staggerChildren: 0.4,
      },
    },
  };



  const handleProjectChange = (project) => {
    if (project.slug !== activeProject.slug) {
      setIsLoading(true); // Start loading
      setTimeout(() => {
        setActiveProject(project); // Change project
        setIsLoading(false); // End loading
      }, 500); // Adjust delay for smoother transition
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex items-center justify-centermt-16 h-128"
    >
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        {/* Title Section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center text-center justify-center gap-3 mb-6"
        >
          <motion.div
            className="w-10 h-10 bg-[#A00201] rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Rocket className="w-6 h-6 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold">Our Projects</h1>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex border-b items-center justify-center text-center"
        >
          {projects.map((project) => (
            <motion.button
              key={project.slug}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 text-md relative ${
                activeProject.slug === project.slug
                  ? "text-[#A00201] font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => handleProjectChange(project)}
            >
              {project.shortName}
              {activeProject.slug === project.slug && (
                <motion.div
                  layoutId="activeProjectUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A00201]"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Display Section */}
        <motion.div
          variants={itemVariants}
          className="px-12 mt-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }} // Hide content during loading
          transition={{ duration: 0.3 }}
          style={{ minHeight: "300px" }} // Fixed height to prevent layout shifts
        >
          {isLoading ? (
            <Loader className="w-48 h-48 text-[#A00201] animate-spin 4" />
          ) : (
            <HomeProjectBox project={activeProject} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectBar;
