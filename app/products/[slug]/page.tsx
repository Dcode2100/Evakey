import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/catalog/ProductDetail";
import { getProduct, products } from "@/lib/catalog";

// Static export: every product page is generated at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found | EVAKEY" };
  return {
    title: `${product.name} | EVAKEY`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductDetail slug={product.slug} />;
}
