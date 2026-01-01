"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [ref, isVisible] = useScrollAnimation();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Marketing Director, TechCorp",
      content: "Evakey delivered exceptional quality custom keychains for our corporate event. The attention to detail and fast turnaround exceeded our expectations. Highly recommended!",
      rating: 5,
      image: "/assets/abs.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "CEO, StartupXYZ",
      content: "The promotional items from Evakey helped us create a strong brand presence at trade shows. Professional service and premium quality products.",
      rating: 5,
      image: "/assets/card.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Event Manager, GlobalEvents",
      content: "Working with Evakey was seamless from start to finish. They understood our vision perfectly and delivered products that perfectly represented our brand.",
      rating: 5,
      image: "/assets/p754503.avif"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Brand Manager, RetailPlus",
      content: "The custom merchandise from Evakey has become a cornerstone of our customer loyalty program. Quality and creativity that sets them apart.",
      rating: 5,
      image: "/assets/f1.png"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} id="testimonials" className={`min-h-screen bg-gray-50 py-20 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about their experience with Evakey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
            <div className="absolute top-8 left-8 text-6xl text-primary/20">
              <FaQuoteLeft />
            </div>
            
            <div className="text-center space-y-8">
              <div className="flex justify-center space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                &quot;{currentTestimonial.content}&quot;
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FaChevronLeft className="text-primary" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FaChevronRight className="text-primary" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

