"use client"
import React from "react";
import { motion } from "framer-motion";
import VisionMissionCard from "./VisionMissionCard";


const GoalAndObj = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <VisionMissionCard
          title="Our Vision"
          description="To create industrial-grade solution across all sectors, solving real-world problems with innovative solutions proudly made in Nepal."
          direction="left"
        />
        <VisionMissionCard
          title="Our Mission"
          description="To design and produce high-quality, affordable products in Nepal, promoting self-reliance, innovation, and sustainable growth across sectors."
          direction="right"
        />
        <VisionMissionCard
          title="Our Commitment"
          description="Transforming Nepal's industries through innovation, quality, affordability, and local, sustainable solutions for global competitiveness."
          direction="up"
        />
        <VisionMissionCard
          title="Our Values"
          description="Innovation, integrity, and customer-centricity are at the heart of everything we do."
          direction="down"
        />
      </div>
    </div>
  );
};

export default GoalAndObj;
