"use client";
import React from "react";
import Link from "next/link";
import { FaListUl, FaWhatsapp, FaPencilRuler, FaTruck } from "react-icons/fa";
import { IconType } from "react-icons";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { whatsappUrl } from "@/lib/catalog";

const steps: { icon: IconType; title: string; text: string }[] = [
  { icon: FaListUl, title: "Pick your products", text: "Browse the catalogue and add items and quantities to your enquiry list." },
  { icon: FaWhatsapp, title: "Send an enquiry", text: "Send the list with your logo on WhatsApp or through the enquiry form." },
  { icon: FaPencilRuler, title: "Get a quote & mockup", text: "We reply with pricing, timelines and a digital mockup for approval." },
  { icon: FaTruck, title: "Produced & delivered", text: "After approval we produce your order and deliver it to you." },
];

const HowItWorks: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="how-it-works"
      className={`bg-primary py-20 text-white section-animate ${isVisible ? "animate" : ""}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-11 max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Simple by design</span>
          <h2 className="font-playfair text-3xl font-bold lg:text-4xl">How enquiries work</h2>
          <p className="text-base text-white/80">
            No online payment, no checkout — just tell us what you need and we&apos;ll take it from there.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="space-y-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-1 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm text-white/60">0{i + 1}</span>
              </div>
              <h3 className="font-opensans text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/products" className="inline-flex h-12 items-center rounded-lg bg-white px-6 font-semibold text-primary transition hover:bg-accent-1">
            Browse products
          </Link>
          <a
            href={whatsappUrl("Hey there, I'd like to enquire about custom branded products.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#25D366] px-6 font-semibold text-white transition hover:brightness-95"
          >
            <FaWhatsapp className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
