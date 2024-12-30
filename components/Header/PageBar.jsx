import { CircleDot } from 'lucide-react';
import React from 'react';

function PageBar({ leftText }) {
  return (
    <div
      style={{
        backgroundImage: `url("https://files.catbox.moe/zum0zr.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative flex items-center justify-between h-64 sm:h-80 w-full px-6 md:px-12 lg:px-24 text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full items-center justify-between space-y-4 lg:space-y-0 px-4">
        {/* Left Text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center lg:text-left">
          {leftText}
        </h1>

        {/* Right Text */}
        <h2 className="text-sm sm:text-lg md:text-xl font-medium flex items-center gap-2 sm:gap-4 text-center lg:text-right">
          Home <CircleDot className="h-4 w-4 sm:h-5 sm:w-5" /> {leftText}
        </h2>
      </div>
    </div>
  );
}

export default PageBar;
