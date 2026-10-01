"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "@/components/catalog/ProductCard";
import { products } from "@/lib/catalog";

/**
 * Home-page product section: featured products from the shared catalog.
 * Hovering a card for 2 seconds shows the WhatsApp "Enquire" overlay
 * (see ProductCard). The full, filterable catalogue lives at /products.
 */
const ProductSection: React.FC = () => {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="products" className="bg-background py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Selected pieces</span>
            <h2 className="font-playfair text-3xl font-bold text-primary lg:text-4xl">Signature products</h2>
            <p className="max-w-xl text-base text-secondary">
              A sample of what teams order most — every piece made to order and branded to your identity.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex h-11 items-center gap-2 self-start rounded-lg border border-line bg-surface px-5 text-sm font-semibold text-primary transition hover:border-primary sm:self-auto"
          >
            View all products <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
