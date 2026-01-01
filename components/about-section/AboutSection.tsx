"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const AboutSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} id="about" className={`min-h-screen bg-white py-12 sm:py-16 md:py-20 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary">
                Our Own Creation
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Designed in our studio
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              At Evakey, we believe in the power of personalized branding. Every product we create is crafted with attention to detail, ensuring that your brand message is conveyed beautifully and effectively. From custom keychains to promotional items, we transform your vision into tangible, high-quality products that leave lasting impressions.
            </p>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-primary font-semibold text-sm sm:text-base">More</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/4"></div>
              </div>
              <div className="flex space-x-2">
                <button className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-200 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors">
                  <FaArrowRight className="text-blue-600 rotate-180 text-xs sm:text-sm" />
                </button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors">
                  <FaArrowRight className="text-pink-600 text-xs sm:text-sm" />
                </button>
              </div>
            </div>
            
            <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2 text-sm sm:text-base">
              <span>Explore All Rooms</span>
              <FaArrowRight />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <div className="relative rounded-lg overflow-hidden h-24 sm:h-28 md:h-32 bg-gray-100">
                <Image
                  src="/rubberkeychain/rubber1.jpg"
                  alt="Custom Keychain Collection 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-24 sm:h-28 md:h-32 bg-gray-100">
                <Image
                  src="/rubberkeychain/rubber2.png"
                  alt="Custom Keychain Collection 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
              <div className="relative rounded-lg overflow-hidden h-24 sm:h-28 md:h-32 bg-gray-100">
                <Image
                  src="/rubberkeychain/rubber3.jpg"
                  alt="Custom Keychain Collection 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-24 sm:h-28 md:h-32 bg-gray-100">
                <Image
                  src="/rubberkeychain/rubber4.jpg"
                  alt="Custom Keychain Collection 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

