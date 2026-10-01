"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { EnquiryLine, getProduct } from "@/lib/catalog";

/**
 * Enquiry list (replaces the old cart). Visitors collect products they want a
 * quote for, then send them all in one enquiry. Nothing is purchased.
 */

interface EnquiryContextValue {
  items: EnquiryLine[];
  count: number;
  add: (line: EnquiryLine) => void;
  update: (slug: string, patch: Partial<EnquiryLine>) => void;
  remove: (slug: string) => void;
  clear: () => void;
  has: (slug: string) => boolean;
}

const STORAGE_KEY = "evakey-enquiry-list";
const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<EnquiryLine[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: EnquiryLine[] = JSON.parse(raw);
        setItems(parsed.filter((l) => getProduct(l.slug)));
      }
    } catch {
      /* storage unavailable — keep the list in memory only */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, loaded]);

  const add = useCallback((line: EnquiryLine) => {
    setItems((prev) => {
      const existing = prev.find((l) => l.slug === line.slug);
      if (existing) return prev.map((l) => (l.slug === line.slug ? { ...l, ...line } : l));
      return [...prev, line];
    });
  }, []);

  const update = useCallback((slug: string, patch: Partial<EnquiryLine>) => {
    setItems((prev) => prev.map((l) => (l.slug === slug ? { ...l, ...patch } : l)));
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<EnquiryContextValue>(
    () => ({
      items,
      count: items.length,
      add,
      update,
      remove,
      clear,
      has: (slug) => items.some((l) => l.slug === slug),
    }),
    [items, add, update, remove, clear]
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
};

export const useEnquiry = () => {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
};
