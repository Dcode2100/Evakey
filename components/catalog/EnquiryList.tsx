"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTrash, FaPlus, FaArrowLeft } from "react-icons/fa";
import Modal from "@/components/Modal";
import { describeLine, getProduct, listMessage, whatsappUrl } from "@/lib/catalog";
import { useEnquiry } from "@/lib/enquiry-store";

/** Same SheetDB endpoint the contact form already posts to. */
const SHEETDB_ENDPOINT = "https://sheetdb.io/api/v1/lxgxqk4f57be4";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  neededBy: string;
  message: string;
}

const EMPTY: FormState = { name: "", company: "", email: "", phone: "", city: "", neededBy: "", message: "" };

const inputCls =
  "h-11 w-full rounded-lg border border-secondary/30 bg-white px-3 text-primary outline-none transition focus:border-primary";

const EnquiryList: React.FC = () => {
  const { items, update, remove, clear } = useEnquiry();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const extraDetails = [
    form.company && `Company: ${form.company}`,
    form.city && `Delivery city: ${form.city}`,
    form.neededBy && `Needed by: ${form.neededBy}`,
  ]
    .filter(Boolean)
    .join("\n");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("message", [extraDetails, form.message].filter(Boolean).join("\n\n"));
    data.append("items", items.map(describeLine).join("\n"));
    try {
      const res = await fetch(SHEETDB_ENDPOINT, { method: "POST", body: data });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      setForm(EMPTY);
      clear();
    } catch (err) {
      console.error("Enquiry submit failed", err);
      setStatus("error");
    }
  };

  const sendOnWhatsApp = () => {
    const msg = [listMessage(items, form.name || undefined), extraDetails, form.message]
      .filter(Boolean)
      .join("\n\n");
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-accent-5 pb-20">
      {status === "sent" && (
        <Modal
          message="Thank you! Your enquiry has been sent. We'll get back to you shortly with pricing and mockups."
          onClose={() => setStatus("idle")}
          className="bg-black/40"
        />
      )}

      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-3 py-10 lg:py-14">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary">
            <FaArrowLeft className="h-3 w-3" /> Continue browsing
          </Link>
          <h1 className="font-playfair text-3xl font-bold text-primary lg:text-4xl">Your enquiry list</h1>
          <p className="max-w-2xl text-base text-secondary">
            Review the products and quantities, add your details, and we&apos;ll reply with a quote. This is an
            enquiry only — nothing is charged.
          </p>
        </div>

        {items.length === 0 && status !== "sent" ? (
          <div className="rounded-2xl border border-dashed border-secondary/40 bg-white p-12 text-center">
            <p className="text-xl font-semibold text-primary">Your enquiry list is empty</p>
            <p className="mx-auto mt-2 max-w-md text-secondary">
              Add products from the catalogue to enquire about several items at once, or just message us with what
              you need.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/products" className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 font-semibold text-white">
                <FaPlus className="h-3.5 w-3.5" /> Browse products
              </Link>
              <a
                href={whatsappUrl("Hey there, I'd like to enquire about custom branded products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#25D366] px-6 font-semibold text-white"
              >
                <FaWhatsapp className="h-5 w-5" /> Message us on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_440px]">
            {/* Items */}
            <div className="space-y-4">
              <ul className="divide-y divide-secondary/15 rounded-2xl border border-secondary/20 bg-white">
                {items.map((line) => {
                  const p = getProduct(line.slug);
                  if (!p) return null;
                  return (
                    <li key={line.slug} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                      <Link href={`/products/${p.slug}`} className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-accent-5">
                        <Image src={p.images[0]} alt={p.name} fill sizes="96px" className="object-cover" />
                      </Link>
                      <div className="min-w-0 flex-1 space-y-2">
                        <Link href={`/products/${p.slug}`} className="block font-semibold text-primary hover:underline">
                          {p.name}
                        </Link>
                        <div className="flex flex-wrap gap-2">
                          <label className="sr-only" htmlFor={`branding-${p.slug}`}>Branding method</label>
                          <select
                            id={`branding-${p.slug}`}
                            value={line.branding ?? ""}
                            onChange={(e) => update(p.slug, { branding: e.target.value })}
                            className="h-10 rounded-lg border border-secondary/30 bg-white px-2 text-sm text-primary"
                          >
                            {p.brandingMethods.map((b) => (
                              <option key={b}>{b}</option>
                            ))}
                          </select>
                          {p.colours && (
                            <>
                              <label className="sr-only" htmlFor={`colour-${p.slug}`}>Colour</label>
                              <select
                                id={`colour-${p.slug}`}
                                value={line.colour ?? p.colours[0]}
                                onChange={(e) => update(p.slug, { colour: e.target.value })}
                                className="h-10 rounded-lg border border-secondary/30 bg-white px-2 text-sm text-primary"
                              >
                                {p.colours.map((c) => (
                                  <option key={c}>{c}</option>
                                ))}
                              </select>
                            </>
                          )}
                        </div>
                        {line.quantity < p.moq && (
                          <p className="text-xs text-amber-700">Minimum order for this product is {p.moq}.</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="flex flex-col text-xs font-medium text-secondary">
                          Quantity
                          <input
                            type="number"
                            min={1}
                            value={line.quantity}
                            onChange={(e) => update(p.slug, { quantity: Math.max(1, Number(e.target.value) || 1) })}
                            className="mt-1 h-10 w-24 rounded-lg border border-secondary/30 px-2 text-sm text-primary"
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => remove(p.slug)}
                          aria-label={`Remove ${p.name}`}
                          className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-lg text-secondary transition hover:bg-red-50 hover:text-red-600"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Link href="/products" className="inline-flex h-11 items-center gap-2 text-sm font-semibold text-primary">
                <FaPlus className="h-3.5 w-3.5" /> Add more products
              </Link>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-secondary/20 bg-white p-6 lg:sticky lg:top-24">
              <div>
                <h2 className="text-2xl font-playfair font-bold text-primary">Request a quote</h2>
                <p className="mt-1 text-sm text-secondary">
                  {items.length} product{items.length === 1 ? "" : "s"} in your enquiry.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="space-y-1.5 text-sm font-medium text-primary">
                  Name*<input required className={inputCls} value={form.name} onChange={set("name")} />
                </label>
                <label className="space-y-1.5 text-sm font-medium text-primary">
                  Company<input className={inputCls} value={form.company} onChange={set("company")} />
                </label>
              </div>
              <label className="block space-y-1.5 text-sm font-medium text-primary">
                Email*<input required type="email" className={inputCls} value={form.email} onChange={set("email")} />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="space-y-1.5 text-sm font-medium text-primary">
                  Phone*<input required type="tel" className={inputCls} value={form.phone} onChange={set("phone")} />
                </label>
                <label className="space-y-1.5 text-sm font-medium text-primary">
                  Needed by<input type="date" className={inputCls} value={form.neededBy} onChange={set("neededBy")} />
                </label>
              </div>
              <label className="block space-y-1.5 text-sm font-medium text-primary">
                Delivery city<input className={inputCls} value={form.city} onChange={set("city")} />
              </label>
              <label className="block space-y-1.5 text-sm font-medium text-primary">
                Message
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Occasion, logo details, packaging…"
                  className="w-full resize-none rounded-lg border border-secondary/30 p-3 text-primary outline-none focus:border-primary"
                />
              </label>
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Sorry, the enquiry couldn&apos;t be sent. Please try again or send it on WhatsApp.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending" || items.length === 0}
                className="h-12 w-full rounded-lg bg-primary font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
              <button
                type="button"
                onClick={sendOnWhatsApp}
                disabled={items.length === 0}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] font-semibold text-white transition hover:brightness-95 disabled:opacity-60"
              >
                <FaWhatsapp className="h-5 w-5" /> Send list on WhatsApp instead
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnquiryList;
