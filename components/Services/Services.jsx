import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Cpu, Radio, Microscope, Cog, Wifi, Server, Shield, ChevronRight, Bolt, Plug, Microchip } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from 'react-router-dom'

const servicesData = {
  hero: {
    title: "Our Electronic Engineering Services",
    subtitle: "Powering Innovation in Electronics",
    description: "We specialize in cutting-edge electronic solutions, backed by essential IT support to bring your ideas to life."
  },
  services: 
  [
    {
      icon: <Plug className="h-8 w-8" />,
      title: "Automation & Control",
      description: "Reliable automation and control systems for industrial and utility processes.",
      features: [
        { name: "PLC Programming", description: "Automation solutions for industrial processes to optimize control." },
        { name: "SCADA Systems", description: "Smart monitoring and control for factories and utilities, enabling real-time data-driven decisions." },
        { name: "RTU/RMU for Automation", description: "Project-based systems designed for IoT and automation, enhancing remote monitoring and control." }
      ]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Embedded Systems",
      description: "Custom embedded solutions designed for unique client needs.",
      features: [
        { name: "Custom Embedded Solutions", description: "Tailored embedded systems to address specific challenges and client requirements." },
        { name: "Microcontroller Programming / Firmware Development", description: "Efficient coding for embedded applications, ensuring system reliability and performance." },
        { name: "Real-Time Systems", description: "Systems engineered for time-sensitive applications requiring critical performance." }
      ]
    },
    {
      icon: <Microchip className="h-8 w-8" />,
      title: "PCB Design",
      description: "Advanced PCB design for complex, high-performance systems.",
      features: [
        { name: "Multi-layer PCBs", description: "Advanced designs to accommodate complex system requirements." },
        { name: "Flexible PCBs", description: "Space-saving, flexible designs for compact devices and devices with limited space." },
        { name: "High-Speed Designs", description: "Optimized PCB layouts for high-speed data transmission and minimal signal interference." }
      ]
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "IoT Solutions",
      description: "End-to-end solutions for IoT systems, enhancing connectivity and performance.",
      features: [
        { name: "Sensor Integration", description: "Seamless integration of sensors for real-time data collection and analysis." },
        { name: "Low-Power Design", description: "Energy-efficient designs for prolonged use in IoT applications." },
        { name: "IoT Protocols", description: "Secure and efficient communication protocols like Modbus, MQTT, and CAN for connected devices." }
      ]
    },
    {
      icon: <Bolt className="h-8 w-8" />,
      title: "Power Electronics",
      description: "Advanced power systems for energy conversion and efficient control.",
      features: [
        { name: "Efficient Power Systems", description: "Designs for optimal energy conversion, storage, and control." },
        { name: "DC-DC Converters", description: "Compact, efficient power converters that suit various applications." },
        { name: "Motor Drives", description: "High-performance motor control systems for precise and efficient operation." },
        { name: "Solar Inverters", description: "Optimized solutions for converting DC from solar panels into AC for grid or standalone use." }
      ]
    }
    
  ],
  cta: {
    title: "Ready to Electrify Your Projects?",
    description: "Let our expert team bring your electronic engineering vision to reality.",
    buttonText: "Get a Free Consultation"
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const ServiceCard = ({ service }) => (
  <motion.div {...fadeInUp}>
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {service.icon}
          <CardTitle>{service.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{service.description}</CardDescription>
        <Accordion type="single" collapsible className="w-full">
          {service.features.map((feature, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
              <AccordionTrigger className="text-sm hover:no-underline py-2 [&[data-state=open]>div>svg]:rotate-90">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary transition-transform duration-200" />
                  {feature.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pl-6">
                {feature.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  </motion.div>
)

const OurServices = () => {
  return (
    <div className="container mx-auto lg:px-16 sm:px-8 px-6 py-16">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">{servicesData.hero.title}</h1>
        <p className="text-lg text-muted-foreground mb-2">{servicesData.hero.subtitle}</p>
        <p className="max-w-2xl text-md mx-auto">{servicesData.hero.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {servicesData.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <motion.div 
        className="bg-gradient-to-r bg-[#600100] text-white rounded-lg p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">{servicesData.cta.title}</h2>
        <p className="mb-6">{servicesData.cta.description}</p>
        <Button size="lg" variant="theme" className="bg-white text-black hover:bg-blue-50">
          <Link to="/contacts">
          {servicesData.cta.buttonText}
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}

export default OurServices