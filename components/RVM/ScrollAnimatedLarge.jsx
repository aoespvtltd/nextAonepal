import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollAnimatedLarge() {

  const sectionRef = useRef(null); // Ref to track the container

  // Use useScroll with ref to target specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Trigger starts at the top of the container and ends at its bottom
  });

  // Map scroll position to image's horizontal position
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.65, 0.8, 1], // Progress values specific to the container
    ['70%', '10%', '10%', '70%',"70%", '70%']
  );

  return (
    <div ref={sectionRef} className="h-[300vh]  max-w-6xl mx-auto hidden md:flex flex-col items-center relative">
      {/* First Page: Title */}
      <div className="h-screen flex flex-col absolute w-full">
        <h1 className="top-[50%] left-[10%] text-red px-4 relative text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          MegaVend
        </h1>
      </div>

      {/* Sticky container for the image */}
      <div className="sticky z-100 top-0 h-screen flex justify-center items-center overflow-hidden w-full">
        {/* Motion image */}
        <motion.div
          className="absolute"
          style={{
            x,
          }}
        >
          <img
            src="https://files.catbox.moe/x21jz8.svg"
            alt="Scrolling"
            className="h-[50vh] sm:h-[60vh] md:h-[70vh] w-auto shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Second Page: Labels */}
      <div className="h-screen flex flex-col justify-center items-start px-6 sm:px-8 md:px-16  w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose MegaVend?
        </h2>
        <ul className="list-disc pl-4 text-lg sm:text-xl md:text-2xl text-gray-700 space-y-4">
          <li>Innovative vending machine technology.</li>
          <li>Customizable solutions for every business.</li>
          <li>Seamless integration with modern payment systems.</li>
          <li>24/7 support for reliable operations.</li>
        </ul>
      </div>

      {/* Third Page: Another Image */}
      <div className="h-screen flex flex-row items-center w-full px-6 sm:px-8 md:px-24">
        <img
          src="https://files.catbox.moe/ujsx0n.svg"
          alt="MegaVend Showcase"
          className="h-[50vh] sm:h-[60vh] md:h-[70vh] absolute top-3/2 shadow-2xl"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 absolute top-3/2 left-[46%]">
          V/S
        </h1>
      </div>
    </div>
  );
};
