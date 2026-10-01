"use client";
import React from "react";
import { FaPaintBrush, FaBoxes, FaWhatsapp } from "react-icons/fa";
import { IconType } from "react-icons";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface Benefit {
  icon: IconType;
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const benefits: Benefit[] = [
    {
      icon: FaPaintBrush,
      title: "Custom branding",
      description: "Your logo moulded, printed or engraved on every product — Pantone matched.",
    },
    {
      icon: FaBoxes,
      title: "Bulk orders",
      description: "Quantities for teams, events, campaigns and client gifting, from MOQ 25.",
    },
    {
      icon: FaWhatsapp,
      title: "Quick enquiries",
      description: "Enquire on WhatsApp or send one list for all your products — no checkout.",
    },
  ];

  return (
    <section ref={ref} id="benefits" className={`bg-background py-20 section-animate ${isVisible ? "animate" : ""}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Why EVAKEY</span>
          <h2 className="mt-3 font-playfair text-3xl font-bold text-primary lg:text-4xl">
            Why businesses choose us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-line bg-surface p-7 text-center transition hover:shadow-[0_28px_54px_-40px_rgba(24,34,32,0.5)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent-1 text-primary">
                <Icon className="text-2xl" />
              </div>
              <h3 className="mt-5 font-playfair text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

