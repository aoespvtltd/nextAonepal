import React from 'react';
import { projects } from '@/components/jsons/projects';
import PageBar from '@/components/Header/PageBar';
import { AnimatedContent } from '@/components/AboutUs/AnimatedContent';

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
      <PageBar leftText={"About Us"} />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedContent projects={projects} />
      </div>
    </div>
  );
}

