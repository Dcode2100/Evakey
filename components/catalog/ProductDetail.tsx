"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaCheck, FaPlus, FaClock, FaBoxes, FaPaintBrush } from "react-icons/fa";
import ProductCard from "@/components/catalog/ProductCard";
import { formatPrice, getCategory, getProduct, hasRealPhoto, products, singleProductMessage, whatsappUrl } from "@/lib/catalog";
import { useEnquiry } from "@/lib/enquiry-store";

const ProductDetail: React.FC<{ slug: string }> = ({ slug }) => {
  const product = getProduct(slug)!;
  const category = getCategory(product.category);
  const { add, has, items } = useEnquiry();
  const saved = items.find((l) => l.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState<number>(saved?.quantity ?? product.moq);
  const [branding, setBranding] = useState(saved?.branding ?? product.brandingMethods[0]);
  const [colour, setColour] = useState(saved?.colour ?? product.colours?.[0] ?? "");
  const [note, setNote] = useState(saved?.note ?? "");
  const [justAdded, setJustAdded] = useState(false);

  const belowMoq = quantity < product.moq;
  const line = { slug, quantity, branding, colour: colour || undefined, note: note.trim() || undefined };

  const addToList = () => {
    add(line);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  const enquireNow = () => {
    const msg = singleProductMessage(line, window.location.href);
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  const related = products.filter((p) => p.slug !== slug && p.category === product.category).slice(0, 3);
  const others = related.length
    ? related
    : products.filter((p) => p.slug !== slug && p.featured).slice(0, 3);

  return (
    <div className="bg-accent-5">
      <div className="container mx-auto px-4 pb-20 lg:px-8">
        <nav aria-label="Breadcrumb" className="py-6 text-sm text-secondary">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/products" className="hover:text-primary">Products</Link>
          <span className="mx-1">/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-primary">
            {category?.name}
          </Link>
          <span className="mx-1">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface to-surface-2">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={hasRealPhoto(product) ? "object-cover" : "object-contain p-10"}
              />
              {product.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow">
                  {product.tag}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-white transition ${
                      i === activeImage ? "border-primary" : "border-transparent hover:border-secondary/40"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="120px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info + enquiry options */}
          <div className="space-y-7">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">{category?.name}</span>
              <h1 className="font-playfair text-3xl font-bold leading-tight text-primary lg:text-4xl">{product.name}</h1>
              <p className="text-base leading-relaxed text-secondary">{product.description}</p>
              <p className="font-playfair text-xl text-primary">{formatPrice(product.priceFrom)}</p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3">
              <li className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm text-primary border border-secondary/20">
                <FaBoxes className="h-5 w-5 shrink-0 text-secondary" /> MOQ {product.moq} units
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm text-primary border border-secondary/20">
                <FaClock className="h-5 w-5 shrink-0 text-secondary" /> {product.leadTime}
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm text-primary border border-secondary/20">
                <FaPaintBrush className="h-5 w-5 shrink-0 text-secondary" /> Branded with your logo
              </li>
            </ul>

            <ul className="space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-secondary">
                  <FaCheck className="h-3.5 w-3.5 text-brass" /> {h}
                </li>
              ))}
            </ul>

            <div className="space-y-6 rounded-2xl border border-secondary/20 bg-white p-6">
              <fieldset className="space-y-3">
                <legend className="mb-3 font-semibold text-primary">Branding method</legend>
                <div className="flex flex-wrap gap-2">
                  {product.brandingMethods.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBranding(b)}
                      aria-pressed={branding === b}
                      className={`h-11 rounded-lg border px-4 text-sm font-medium transition ${
                        branding === b
                          ? "border-primary bg-primary text-white"
                          : "border-secondary/30 text-primary hover:border-primary"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </fieldset>

              {product.colours && product.colours.length > 0 && (
                <fieldset className="space-y-3">
                  <legend className="mb-3 font-semibold text-primary">Colour</legend>
                  <div className="flex flex-wrap gap-2">
                    {product.colours.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setColour(c)}
                        aria-pressed={colour === c}
                        className={`h-11 rounded-lg border px-4 text-sm font-medium transition ${
                          colour === c
                            ? "border-primary bg-accent-1 text-primary"
                            : "border-secondary/30 text-primary hover:border-primary"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              <div className="grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)]">
                <label className="space-y-2">
                  <span className="block font-semibold text-primary">Quantity</span>
                  <input
                    type="number"
                    min={1}
                    step={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                    className="h-11 w-full rounded-lg border border-secondary/30 px-3 text-primary outline-none focus:border-primary"
                  />
                  {belowMoq && (
                    <span className="block text-xs text-amber-700">Minimum order is {product.moq} units.</span>
                  )}
                </label>
                <label className="space-y-2">
                  <span className="block font-semibold text-primary">Notes (optional)</span>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Size, packaging, deadline…"
                    className="h-11 w-full rounded-lg border border-secondary/30 px-3 text-primary outline-none focus:border-primary"
                  />
                </label>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={enquireNow}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#25D366] font-semibold text-white transition hover:brightness-95"
                >
                  <FaWhatsapp className="h-5 w-5" /> Enquire on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={addToList}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-primary font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  {justAdded || has(slug) ? <FaCheck /> : <FaPlus />}
                  {justAdded ? "Added to enquiry list" : has(slug) ? "Update enquiry list" : "Add to enquiry list"}
                </button>
              </div>
              <p className="text-sm text-secondary">
                Enquiring more than one product?{" "}
                <Link href="/enquiry" className="font-medium text-primary underline underline-offset-4">
                  Send your whole list in one go
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Specs */}
        <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-playfair font-bold text-primary">Specifications</h2>
            <dl className="divide-y divide-secondary/15 overflow-hidden rounded-2xl border border-secondary/20 bg-white">
              {[...product.specs, { label: "Minimum order", value: `${product.moq} units` }, { label: "Production time", value: product.leadTime }].map((s) => (
                <div key={s.label} className="grid grid-cols-[160px_minmax(0,1fr)] gap-4 px-5 py-3.5">
                  <dt className="text-secondary">{s.label}</dt>
                  <dd className="text-primary">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-playfair font-bold text-primary">How ordering works</h2>
            <ol className="space-y-4">
              {[
                ["Send an enquiry", "Share the product, quantity and your logo on WhatsApp or through the enquiry form."],
                ["Get a quote & mockup", "We reply with pricing and a digital mockup of your branding."],
                ["Approve & produce", "Once you approve, we start production and keep you updated."],
                ["Delivered to you", "Your branded products are packed and delivered."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-1 font-semibold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-primary">{t}</p>
                    <p className="text-sm text-secondary">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Related */}
        {others.length > 0 && (
          <section className="mt-16 space-y-6">
            <h2 className="text-2xl font-playfair font-bold text-primary">
              {related.length ? `More ${category?.name.toLowerCase()}` : "You may also like"}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
