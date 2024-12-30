import React from 'react';

function SmallDevice() {
  return (
    <div className="md:hidden flex flex-col space-y-8 px-4 py-6">
      {/* Title */}
      <div className="text-center my-40">
        <h1 className="text-7xl font-bold text-gray-800">Mega Vend</h1>
      </div>

      {/* First Image */}
      <div className="flex justify-center">
        <img
          src="https://files.catbox.moe/x21jz8.svg"
          alt="Mega Vend"
          className="w-full max-w-sm h-auto shadow-xl"
        />
      </div>

      {/* Why Choose Section */}
      <div className=" p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose MegaVend?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
          <li>Innovative vending machine technology.</li>
          <li>Customizable solutions for every business.</li>
          <li>Seamless integration with modern payment systems.</li>
          <li>24/7 support for reliable operations.</li>
        </ul>
      </div>

      {/* Comparison Image */}
      <div className="flex justify-center rounded-lg shadow-lg">
        <img
          src="https://files.catbox.moe/q3qdm2.svg"
          alt="MegaVend Showcase"
          className="w-full h-auto shadow-xl"
        />
      </div>
    </div>
  );
}

export default SmallDevice;