"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaSearch, FaSlidersH, FaTimes } from "react-icons/fa";
import ProductCard from "@/components/catalog/ProductCard";
import { activeCategories, getCategory, products } from "@/lib/catalog";

type SortKey = "featured" | "price-asc" | "name";

type PriceBucket = "u200" | "200-400" | "400+" | "req";

const PRICE_OPTIONS: { value: PriceBucket; label: string }[] = [
  { value: "u200", label: "Under ₹200" },
  { value: "200-400", label: "₹200 – ₹400" },
  { value: "400+", label: "₹400 & above" },
  { value: "req", label: "Price on request" },
];

const matchesPrice = (price: number | undefined, buckets: PriceBucket[]) => {
  if (!buckets.length) return true;
  return buckets.some((b) => {
    if (b === "req") return price == null;
    if (price == null) return false;
    if (b === "u200") return price < 200;
    if (b === "200-400") return price >= 200 && price <= 400;
    return price > 400;
  });
};

const CatalogBrowser: React.FC = () => {
  const params = useSearchParams();
  const initialCategory = params.get("category");

  const [query, setQuery] = useState(params.get("q") ?? "");
  const [cats, setCats] = useState<string[]>(initialCategory ? [initialCategory] : []);
  const [prices, setPrices] = useState<string[]>([]);
  const [branding, setBranding] = useState<string[]>([]);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const allCategories = activeCategories();
  const allBranding = useMemo(
    () =>
      Array.from(new Set(products.flatMap((p) => p.brandingMethods)))
        .filter((b) => b !== "As per item")
        .sort(),
    []
  );

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) =>
    setter((prev) => (prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]));

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => {
      if (cats.length && !cats.includes(p.category)) return false;
      if (!matchesPrice(p.priceFrom, prices as PriceBucket[])) return false;
      if (branding.length && !branding.some((b) => p.brandingMethods.includes(b))) return false;
      if (featuredOnly && !p.featured) return false;
      if (q && !`${p.name} ${p.description} ${getCategory(p.category)?.name}`.toLowerCase().includes(q)) return false;
      return true;
    });
    if (sort === "name") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "price-asc")
      return [...list].sort((a, b) => (a.priceFrom ?? Infinity) - (b.priceFrom ?? Infinity));
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [cats, prices, branding, featuredOnly, query, sort]);

  const activeFilterCount =
    cats.length + prices.length + branding.length + (featuredOnly ? 1 : 0) + (query ? 1 : 0);
  const title = cats.length === 1 ? getCategory(cats[0])?.name ?? "Product catalogue" : "Product catalogue";

  const clearAll = () => {
    setQuery("");
    setCats([]);
    setPrices([]);
    setBranding([]);
    setFeaturedOnly(false);
  };

  const groupCls = "border-t border-line py-4 first:border-t-0 first:pt-0";
  const legendCls = "mb-3 text-sm font-semibold text-ink";
  const optionCls =
    "flex cursor-pointer items-center gap-2.5 py-1 text-sm text-secondary transition hover:text-ink";

  return (
    <section className="bg-background pb-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-3 py-9 lg:py-12">
          <nav aria-label="Breadcrumb" className="text-sm text-secondary">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-1.5">/</span>
            <span className="text-primary">{title}</span>
          </nav>
          <h1 className="font-playfair text-3xl font-bold text-primary lg:text-4xl">{title}</h1>
          <p className="max-w-2xl text-base text-secondary">
            Browse products you can brand with your logo. Add items to your enquiry and we&apos;ll get back with
            pricing, mockups and timelines — no payment online.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[232px_minmax(0,1fr)] lg:gap-8">
          {/* Mobile filter toggle */}
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            aria-expanded={showFilters}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold text-primary lg:hidden"
          >
            <FaSlidersH className="h-4 w-4" />
            {showFilters ? "Hide filters" : "Filters"}
            {activeFilterCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sidebar filters */}
          <aside
            className={`${showFilters ? "block" : "hidden"} h-fit rounded-xl border border-line bg-surface p-5 lg:sticky lg:top-24 lg:block`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Filters</h2>
              {activeFilterCount > 0 && (
                <button type="button" onClick={clearAll} className="text-xs font-medium text-brass hover:underline">
                  Clear all
                </button>
              )}
            </div>

            <div className="mt-2">
              <div className={groupCls}>
                <div className="relative">
                  <label htmlFor="catalog-search" className="sr-only">Search products</label>
                  <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-secondary" />
                  <input
                    id="catalog-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products"
                    className="h-10 w-full rounded-lg border border-line bg-background pl-9 pr-3 text-sm text-ink outline-none transition focus:border-primary"
                  />
                </div>
              </div>

              <fieldset className={groupCls}>
                <legend className={legendCls}>Category</legend>
                {allCategories.map((c) => {
                  const count = products.filter((p) => p.category === c.id).length;
                  return (
                    <label key={c.id} className={optionCls}>
                      <input
                        type="checkbox"
                        checked={cats.includes(c.id)}
                        onChange={() => toggle(setCats, c.id)}
                        className="h-4 w-4 accent-[#0D3E3A]"
                      />
                      {c.name}
                      <span className="ml-auto text-xs text-secondary/60">{count}</span>
                    </label>
                  );
                })}
              </fieldset>

              <fieldset className={groupCls}>
                <legend className={legendCls}>Price</legend>
                {PRICE_OPTIONS.map((o) => (
                  <label key={o.value} className={optionCls}>
                    <input
                      type="checkbox"
                      checked={prices.includes(o.value)}
                      onChange={() => toggle(setPrices, o.value)}
                      className="h-4 w-4 accent-[#0D3E3A]"
                    />
                    {o.label}
                  </label>
                ))}
              </fieldset>

              <fieldset className={groupCls}>
                <legend className={legendCls}>Branding method</legend>
                {allBranding.map((b) => (
                  <label key={b} className={optionCls}>
                    <input
                      type="checkbox"
                      checked={branding.includes(b)}
                      onChange={() => toggle(setBranding, b)}
                      className="h-4 w-4 accent-[#0D3E3A]"
                    />
                    {b}
                  </label>
                ))}
              </fieldset>

              <div className={groupCls}>
                <label className={optionCls}>
                  <input
                    type="checkbox"
                    checked={featuredOnly}
                    onChange={() => setFeaturedOnly((v) => !v)}
                    className="h-4 w-4 accent-[#0D3E3A]"
                  />
                  Featured only
                </label>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-secondary">
                  <b className="text-ink">{results.length}</b> product{results.length === 1 ? "" : "s"}
                </span>
                {cats.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggle(setCats, id)}
                    className="inline-flex h-7 items-center gap-1.5 rounded-full bg-accent-1 px-3 text-xs font-medium text-primary"
                    aria-label={`Remove ${getCategory(id)?.name}`}
                  >
                    {getCategory(id)?.name} <FaTimes className="h-2.5 w-2.5" />
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-sm text-secondary">
                Sort
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="h-9 rounded-lg border border-line bg-surface px-3 text-sm text-ink"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="name">Name (A–Z)</option>
                </select>
              </label>
            </div>

            {results.length ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {results.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-line bg-surface p-12 text-center">
                <p className="text-lg font-semibold text-primary">No products match these filters.</p>
                <p className="mx-auto mt-2 max-w-md text-secondary">
                  Looking for something specific? Tell us in an enquiry — we source custom items too.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-5 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogBrowser;
