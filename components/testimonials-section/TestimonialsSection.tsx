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
    <section ref={ref} id="testimonials" className={`bg-surface py-20 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Client notes</span>
          <h2 className="mt-3 font-playfair text-3xl font-bold text-primary lg:text-4xl">
            What our clients say
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-line bg-background p-8 lg:p-12">
            <div className="absolute left-7 top-7 text-4xl text-brass/25">
              <FaQuoteLeft />
            </div>

            <div className="space-y-7 px-6 text-center lg:px-12">
              <div className="flex justify-center gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-lg text-brass" />
                ))}
              </div>

              <p className="font-playfair text-xl italic leading-relaxed text-ink lg:text-2xl">
                &quot;{currentTestimonial.content}&quot;
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-surface-2">
                  <Image src={currentTestimonial.image} alt={currentTestimonial.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-ink">{currentTestimonial.name}</h4>
                  <p className="text-sm text-secondary">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>

            <div className="absolute left-3 top-1/2 -translate-y-1/2 lg:left-5">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-primary transition hover:border-primary"
              >
                <FaChevronLeft />
              </button>
            </div>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 lg:right-5">
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-primary transition hover:border-primary"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-6 bg-primary" : "w-2 bg-line"
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

