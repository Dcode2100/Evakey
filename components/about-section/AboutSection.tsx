"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const AboutSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} id="about" className={`bg-white py-20 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-7">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Our studio</span>
              <h2 className="font-playfair text-3xl font-bold text-primary lg:text-4xl">
                Designed and made in-house
              </h2>
            </div>

            <p className="text-base leading-relaxed text-secondary">
              At EVAKEY, we believe in the power of personalised branding. Every product is crafted with
              attention to detail so your brand is conveyed beautifully and effectively — from custom keychains
              to complete corporate gift kits, we turn your vision into high-quality products that leave lasting
              impressions.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <span>Explore our products</span>
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {["/rubberkeychain/rubber3.jpg", "/rubberkeychain/metal1.jpg"].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-accent-5">
                  <Image src={src} alt="EVAKEY custom keychain" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-8">
              {["/rubberkeychain/rubber9.jpg", "/assets/card.jpg"].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-accent-5">
                  <Image src={src} alt="EVAKEY branded merchandise" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

