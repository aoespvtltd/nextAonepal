'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};


export function AnimatedContent({ projects }) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <motion.div className="text-center" variants={fadeInUp}>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          About <span className="text-primary">AOES</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-md md:mt-5 md:max-w-3xl">
          Pioneering electronic engineering solutions, proudly made in Nepal.
        </p>
      </motion.div>

      <motion.div className="mt-16" variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-md text-gray-500">
          At AOES, we're committed to revolutionizing the electronic engineering landscape in Nepal. Our goal is to deliver high-quality, innovative products that are not only made entirely in Nepal but also significantly more affordable than imported alternatives from India and China.
        </p>
      </motion.div>

      <motion.div className="mt-16" variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900">Why Choose AOES?</h2>
        <motion.div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" variants={staggerChildren}>
          <motion.div className="rounded-lg bg-white p-6 shadow-md" variants={fadeInUp}>
            <h3 className="text-xl font-semibold text-gray-900">100% Made in Nepal</h3>
            <p className="mt-2 text-gray-500 text-sm">Every product is designed, manufactured, and assembled in Nepal, supporting local industry and innovation.</p>
          </motion.div>
          <motion.div className="rounded-lg bg-white p-6 shadow-md" variants={fadeInUp}>
            <h3 className="text-xl font-semibold text-gray-900">Cost-Effective</h3>
            <p className="mt-2 text-gray-500 text-sm">Our local production allows us to offer high-quality products at prices significantly lower than imported alternatives.</p>
          </motion.div>
          <motion.div className="rounded-lg bg-white p-6 shadow-md" variants={fadeInUp}>
            <h3 className="text-xl font-semibold text-gray-900">Innovative Solutions</h3>
            <p className="mt-2 text-gray-500 text-sm">We focus on creating products that address real needs in the Nepalese market, combining global technology trends with local expertise.</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="mt-16" variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
        <motion.div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" variants={staggerChildren}>
          {projects.map((project) => (
            <motion.div key={project.slug} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl" variants={fadeInUp}>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-3">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary-dark"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative overflow-hidden mt-24"
        style={{
          backgroundImage: `url("https://files.catbox.moe/lzii5p.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 mt-8">
          <motion.div className="max-w-2xl" variants={staggerChildren}>
            <motion.h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" variants={fadeInUp}>
              Join the AOES Revolution
            </motion.h2>
            <motion.p className="mt-6 text-md leading-8 text-gray-100" variants={fadeInUp}>
              Experience the future of electronic engineering, made right here in Nepal. Together, let's build a more innovative and self-reliant nation.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contacts"
                className="mt-8 inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

