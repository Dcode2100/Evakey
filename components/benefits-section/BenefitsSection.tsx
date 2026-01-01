"use client";
import React from "react";
import { FaMoneyBillWave, FaUndo, FaHeadset } from "react-icons/fa";
import { IconType } from "react-icons";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface Benefit {
  icon: IconType;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const BenefitsSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const benefits: Benefit[] = [
    {
      icon: FaMoneyBillWave,
      title: "Payment Method",
      description: "We offer flexible payment options, to make easier.",
      bgColor: "bg-purple-100",
      iconColor: "text-primary"
    },
    {
      icon: FaUndo,
      title: "Return policy",
      description: "You can return a product within 30 days.",
      bgColor: "bg-orange-100",
      iconColor: "text-primary"
    },
    {
      icon: FaHeadset,
      title: "Customer Support",
      description: "Our customer support is 24/7.",
      bgColor: "bg-green-100",
      iconColor: "text-primary"
    }
  ];

  return (
    <section ref={ref} id="benefits" className={`py-12 sm:py-16 md:py-20 bg-blue-50 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4 sm:mb-6">
            Benefits for your expediency
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg"
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto ${benefit.bgColor} rounded-lg flex items-center justify-center`}>
                  <IconComponent className={`text-2xl sm:text-3xl ${benefit.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-playfair font-semibold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

