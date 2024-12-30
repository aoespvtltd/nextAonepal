import React from 'react'
import { Button } from '@/components/ui/button'
import FeaturesSection from './FeaturesSection'
import HeroSection from './HeroSection'
import MachineSelector from './MachineSelector'

export default function LandingPage() {
  return (
    <div className="min-h-screen md:px-24 px-6 bg-[#fff8f6] pb-20">
        <div className=' mx-auto  max-w-6xl'>

        <HeroSection />

      <FeaturesSection />
      <MachineSelector />
      </div>
    </div>
  )
}
