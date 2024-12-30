import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Zap, Shield, Lightbulb } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { name: "Smart Circuit Board", icon: <Cpu className="w-6 h-6" />, description: "Advanced PCB with integrated IoT capabilities" },
  { name: "Power Management System", icon: <Zap className="w-6 h-6" />, description: "Efficient power distribution and monitoring" },
  { name: "Secure Embedded System", icon: <Shield className="w-6 h-6" />, description: "Tamper-resistant hardware for sensitive applications" },
  { name: "Intelligent Sensor Array", icon: <Lightbulb className="w-6 h-6" />, description: "Multi-functional sensor system with AI processing" },
]

const HeroSection = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#822221] to-[#FF3B36]">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center z-10 text-white"
    >
      <h1 className="text-5xl sm:text-7xl font-bold mb-4">Innovating Tomorrow's Electronics</h1>
      <p className="text-xl sm:text-2xl mb-8">Pushing the boundaries of technology with cutting-edge solutions</p>
      <Button size="lg" variant="secondary" className="bg-white text-[#822221] hover:bg-[#FFECEC] hover:text-[#B80500]">
        Discover Our Innovations
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
    >
      <img 
        src="/placeholder.svg?height=1080&width=1920&text=Circuit+Board+Background" 
        alt="Circuit Board Background" 
        className="w-full h-full object-cover opacity-20"
      />
    </motion.div>
  </section>
)

const ProductsSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFECEC]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Cutting-Edge Products</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our range of innovative electronic solutions designed to power the future</p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full border-[#822221] border-opacity-20 hover:border-opacity-100 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-[#822221]">
                {product.icon}
                <span className="ml-2">{product.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-[#822221] text-[#822221] hover:bg-[#822221] hover:text-white">Learn More</Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
)

const ObjectivesSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#822221] mb-4">Our Objectives</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">Driving innovation and excellence in the world of electronics</p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Technological Advancement", description: "Pushing the boundaries of what's possible in electronics" },
        { title: "Sustainable Solutions", description: "Developing eco-friendly products for a greener future" },
        { title: "Customer-Centric Innovation", description: "Creating products that solve real-world problems" },
      ].map((objective, index) => (
        <motion.div
          key={objective.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-[#FFECEC] p-6 rounded-lg border border-[#822221] border-opacity-20"
        >
          <h3 className="text-xl font-bold mb-2 text-[#822221]">{objective.title}</h3>
          <p className="text-gray-700">{objective.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const GoalsSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#822221] to-[#FF3B36] text-white">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Goals</h2>
      <p className="text-xl max-w-2xl mx-auto">Shaping the future of electronics with clear, ambitious targets</p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        { title: "Market Leadership", description: "Become the top choice for innovative electronic solutions" },
        { title: "R&D Excellence", description: "Invest 20% of revenue in cutting-edge research and development" },
        { title: "Global Expansion", description: "Establish presence in 50+ countries within the next 5 years" },
        { title: "Sustainability", description: "Achieve carbon neutrality in our operations by 2030" },
      ].map((goal, index) => (
        <motion.div
          key={goal.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20"
        >
          <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
          <p>{goal.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ObjectivesSection />
      <GoalsSection />
    </div>
  )
}

export default HomePage