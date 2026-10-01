import { Suspense } from "react";
import type { Metadata } from "next";
import CatalogBrowser from "@/components/catalog/CatalogBrowser";

export const metadata: Metadata = {
  title: "Product Catalogue | EVAKEY",
  description:
    "Custom keychains, bottles, bags, stationery and corporate gift kits branded with your logo. Send an enquiry for pricing.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-accent-5" />}>
      <CatalogBrowser />
    </Suspense>
  );
}
