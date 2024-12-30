import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <main className="container mx-auto flex flex-col lg:flex-row items-center py-24 gap-16">
      {/* Left Column */}
      <div className="flex-1 space-y-8">
        <div className="flex items-center gap-4">
          <img
            src="https://files.catbox.moe/nls5ig.png"
            alt="Paisa Card Logo"
            className="h-32 w-32"
          />
          <div className="gap-2 flex flex-col">
            <h2 className="text-orange-700 text-4xl font-bold">
              lphaVend Vending Machine
            </h2>

            <span className="text-gray-500 flex font-semibold">
              <ChevronRight /> फोहोर बाट मोहर
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Find Vending Solutions to Satisfy your Needs.
          </h2>

          <p className="text-sm md:text-base mt-3 text-gray-600 leading-relaxed">
            Reverse vending machines (RVMs) are automated systems designed to
            collect, sort and crush used beverage containers. We provide
            incentives like cash/rewards to encourage recycling.
          </p>
        </div>
      </div>

      {/* Right Column - Phone Mockup */}
      <div className="flex-1 flex justify-center lg:justify-end h-[32rem] max-w-96">
        <img
          src="https://files.catbox.moe/07nrkw.png"

          alt=""
          className="shadow-2xl shadow-orange-300"
        />
      </div>
    </main>
  );
}
