"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const AboutSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} id="about" className={`min-h-screen bg-white py-20 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary">
                Our Own Creation
              </h2>
              <p className="text-xl text-gray-600">
                Designed in our studio
              </p>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              At Evakey, we believe in the power of personalized branding. Every product we create is crafted with attention to detail, ensuring that your brand message is conveyed beautifully and effectively. From custom keychains to promotional items, we transform your vision into tangible, high-quality products that leave lasting impressions.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-primary font-semibold">More</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/4"></div>
              </div>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors">
                  <FaArrowRight className="text-blue-600 rotate-180" />
                </button>
                <button className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors">
                  <FaArrowRight className="text-pink-600" />
                </button>
              </div>
            </div>
            
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
              <span>Explore All Rooms</span>
              <FaArrowRight />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-6 h-32 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Room 1</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 h-32 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Room 2</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gray-100 rounded-lg p-6 h-32 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Room 3</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 h-32 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Room 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

