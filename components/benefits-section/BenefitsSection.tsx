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
    <section ref={ref} id="benefits" className={`py-20 bg-blue-50 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Benefits for your expediency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg"
              >
                <div className={`w-20 h-20 mx-auto ${benefit.bgColor} rounded-lg flex items-center justify-center`}>
                  <IconComponent className={`text-3xl ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
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

