"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import SimpleSlider from "@components/carousel-slider/SimpleSlider";

const BRANDS = ["IPL", "HDFC", "Disney", "ABS", "F1"];

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
            {/* Copy */}
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Corporate gifting &amp; branded merchandise
              </span>
              <h1 className="mt-5 font-playfair text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
                Branded gifts your
                <br className="hidden sm:block" /> clients actually{" "}
                <span className="italic text-secondary">keep.</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-secondary">
                Premium custom keychains, drinkware, bags and complete gift kits —
                matched to your brand and delivered at scale. Browse the catalogue
                and send an enquiry; no checkout, no payment online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToProducts}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-7 font-semibold text-white transition hover:bg-primary/90"
                >
                  Explore products <FaArrowRight className="h-3.5 w-3.5" />
                </button>
                <Link
                  href="/#how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-line bg-surface px-7 font-semibold text-primary transition hover:border-primary"
                >
                  How it works
                </Link>
              </div>

              <div className="mt-10 space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary">
                  Trusted by brand &amp; procurement teams
                </p>
                <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-playfair text-lg tracking-wide text-primary/60">
                  {BRANDS.map((b) => (
                    <span key={b}>{b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Media */}
            <div className="relative lg:pl-6">
              <div className="relative rounded-2xl border border-line bg-surface p-4 shadow-[0_40px_80px_-50px_rgba(24,34,32,0.5)]">
                <SimpleSlider />
                <span className="absolute -bottom-3 left-6 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
                  Custom moulded · Pantone-matched
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands / trust strip */}
      <div className="border-y border-line bg-surface">
        <div className="container mx-auto px-6 py-10 lg:px-8">
          <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Brands that trust us
          </p>
          <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-4">
            {[
              { src: "/assets/ipl.jpg", alt: "IPL" },
              { src: "/assets/abs.jpg", alt: "ABS" },
              { src: "/assets/f1.png", alt: "F1" },
              { src: "/assets/hdfc.png", alt: "HDFC" },
            ].map((logo) => (
              <div key={logo.alt} className="relative h-14 w-24 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
