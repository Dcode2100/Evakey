"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { activeCategories, hasRealPhoto, products } from "@/lib/catalog";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const CategoryStrip: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const cats = activeCategories();

  return (
    <section ref={ref} className={`bg-surface py-20 section-animate ${isVisible ? "animate" : ""}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">The catalogue</span>
            <h2 className="font-playfair text-3xl font-bold text-primary lg:text-4xl">Shop by category</h2>
            <p className="max-w-xl text-base text-secondary">
              Keychains, bottles, bags, stationery and ready-made gift kits — all branded with your logo.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            View full catalogue <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {cats.map((c) => {
            const items = products.filter((p) => p.category === c.id);
            const cover = items.find(hasRealPhoto) ?? items[0];
            return (
              <Link
                key={c.id}
                href={`/products?category=${c.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-secondary/15 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-accent-5 to-accent-1">
                  <Image
                    src={cover.images[0]}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                    {items.length} item{items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 border-t border-secondary/10 p-4">
                  <h3 className="font-opensans text-base font-semibold text-primary transition-colors group-hover:text-primary">
                    {c.name}
                  </h3>
                  <p className="text-sm text-secondary">{c.blurb}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryStrip;
