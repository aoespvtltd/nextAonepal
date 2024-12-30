import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card, CardContent } from "@/components/ui/card";
  import { useState } from "react";
  import useEmblaCarousel from "embla-carousel-react";
  
  export default function App() {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
  
    const images = [
      "https://files.catbox.moe/2mufju.png",
      "https://files.catbox.moe/4uy87a.png",
      "https://files.catbox.moe/uzh2vw.png",
    ];
  
    const onSelect = () => {
      if (!api) return;
      setCurrent(api.selectedScrollSnap());
    };
  
    return (
      <div className="min-h-screen bg-[#FFF5F5] flex flex-col">
        {/* Main Content */}
        <main className="flex-grow container mx-auto flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-[#DC2626]">
                  megaVend Vending Machine
                </h1>
                <p className="text-lg text-gray-600">मेगावेंड वेंडिंग मशीन</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  Enhancing Recycling & Sustainability With Reverse Vending
                  Machines
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Reverse vending machines (RVMs) are automated systems designed
                  to collect, sort, and sometimes crush used beverage containers.
                  They often provide incentives like cash refunds or rewards to
                  encourage recycling.
                </p>
              </div>
            </div>
  
            {/* Carousel */}
            <div className="relative h-[500px]">
              <Carousel
                setApi={setApi}
                onSelect={onSelect}
                className="w-1/2 max-w-md mx-auto"
              >
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-0 bg-transparent">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <img
                            src={image}
                            alt={`Vending Machine View ${index + 1}`}
                            className="w-full h-auto rounded-lg shadow-xl"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
  
              {/* Carousel Navigation Dots */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      current === index ? "bg-[#DC2626]" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  