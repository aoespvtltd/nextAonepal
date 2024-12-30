import { BadgeDollarSign, LeafyGreen } from "lucide-react";
import React from "react";

// Data Array
const features = [
  {
    title: "Proudly Made in Nepal",
    description:
      "Our vending machines are locally designed and manufactured, supporting Nepal's innovation and industrial growth.",
    icon: "🇳🇵",
  },
  {
    title: "Modern and Eye-Catching Design",
    description:
      "Crafted with a sleek, contemporary look to complement any environment, from offices to retail spaces.",
    icon: "✨",
  },
  {
    title: "Seamless Digital Payments",
    description:
      "Integrated with FonePay and other digital payment systems for a fast and secure cashless shopping experience.",
    icon: "💳",
  },
  {
    title: "Durable and Reliable Structure",
    description:
      "Built with high-quality mild steel (MS) and powder-coated for enhanced durability, longevity, and a polished finish.",
    icon: "🏗️",
  },
  {
    title: "Energy Efficient",
    description:
      "Designed to consume minimal energy, ensuring cost-effectiveness and environmental responsibility.",
    icon: "🔋",
  },
  {
    title: "24/7 Availability",
    description:
      "Operates around the clock, ensuring customers can purchase products anytime, hassle-free.",
    icon: "⏰",
  },
  {
    title: "Product Variety",
    description:
      "Supports a wide range of products, from snacks and beverages to essential supplies, catering to diverse customer needs.",
    icon: "🍫",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Equipped with a simple and intuitive touchscreen interface for a smooth and convenient user experience.",
    icon: "📱",
  },
];



const whyChoose = [
  {
    title: "Sleek Material Design",
    description:
      "Enjoy a modern, clean interface that's not only functional but also a pleasure to use.",
    icon: "🎨",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Add, update, and delete transactions with ease, making financial management a breeze.",
    icon: "👉",
  },
  {
    title: "Comprehensive Overview",
    description:
      "Understand your spending habits at a glance with our intuitive dashboard.",
    icon: "🧠",
  },
  {
    title: "Flexible Customization",
    description:
      "Tailor the app to fit your unique financial needs and preferences.",
    icon: "🛠️",
  },
  {
    title: "Data Security",
    description:
      "Keep your financial information safe and accessible only to you.",
    icon: "🔐",
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-[#fff8f6] py-16">
  <div className="container mx-auto px-4 space-y-16">
    {/* Key Features */}
    <section>
      <h2 className="text-orange-700 text-5xl font-bold mb-8 text-center ">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#ffeecd] p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[#1C1917]">
                {feature.title}
              </h3>
            </div>
            <p className="text-[#1C1917]/80 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Paisa */}
    {/* <section>
      <h2 className="text-[#1C1917] text-3xl font-bold mb-8">
        Why Choose Paisa?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChoose.map((reason, index) => (
          <div
            key={index}
            className="bg-[#f5c461] p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{reason.icon}</div>
              <h3 className="text-lg font-semibold text-[#1C1917]">
                {reason.title}
              </h3>
            </div>
            <p className="text-[#1C1917]/80 mt-2">{reason.description}</p>
          </div>
        ))}
      </div>
    </section> */}

    
  </div>
</div>

  );
}
