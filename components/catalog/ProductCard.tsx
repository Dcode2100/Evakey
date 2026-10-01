"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaPlus } from "react-icons/fa";
import { Product, formatPrice, getCategory, hasRealPhoto } from "@/lib/catalog";
import { useEnquiry } from "@/lib/enquiry-store";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { add, has, remove } = useEnquiry();
  const inList = has(product.slug);
  const realPhoto = hasRealPhoto(product);
  const monogram = product.name.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase() || "E";

  const toggleList = () => {
    if (inList) remove(product.slug);
    else add({ slug: product.slug, quantity: product.moq, branding: product.brandingMethods[0] });
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_26px_50px_-38px_rgba(24,34,32,0.5)]">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-gradient-to-br from-surface to-surface-2"
      >
        {realPhoto ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 220px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-secondary">
            <span className="font-playfair text-4xl leading-none text-primary/30">{monogram}</span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-secondary/60">Photo soon</span>
          </div>
        )}
        {product.tag && (
          <span className="absolute left-2.5 top-2.5 rounded-md bg-brass px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {product.tag}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-1 p-3.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brass">
          {getCategory(product.category)?.name}
        </span>
        <h3 className="text-[13.5px] font-semibold leading-snug text-ink">
          <Link href={`/products/${product.slug}`} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="text-[11.5px] text-secondary">
          MOQ {product.moq} · {product.leadTime}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2.5">
          <span className="font-playfair text-[13.5px] text-ink">{formatPrice(product.priceFrom)}</span>
          <button
            type="button"
            onClick={toggleList}
            aria-pressed={inList}
            className={`inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
              inList ? "bg-surface-2 text-primary" : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            {inList ? <FaCheck className="h-3 w-3" /> : <FaPlus className="h-3 w-3" />}
            {inList ? "Added" : "Enquire"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
