/**
 * EVAKEY product catalog — the single place to add, edit or remove products.
 *
 * This is an ENQUIRY website: nothing here is sold online. `priceFrom` is an
 * optional indicative starting price; leave it out to show "Price on request".
 *
 * TODO (EVAKEY team): confirm the MOQ, lead time and branding options for each
 * product, and replace PLACEHOLDER_IMAGE with real product photos where used.
 */

export type CategoryId =
  | "keychain"
  | "drinkware"
  | "bag"
  | "stationery"
  | "tech"
  | "accessory"
  | "promotional"
  | "gift-kit";

export interface Category {
  id: CategoryId;
  name: string;
  blurb: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategoryId;
  images: string[];
  description: string;
  /** Short selling points shown on the product page */
  highlights: string[];
  /** Indicative starting price per unit in ₹ (optional) */
  priceFrom?: number;
  /** Minimum order quantity */
  moq: number;
  /** e.g. "10–12 working days" */
  leadTime: string;
  brandingMethods: string[];
  colours?: string[];
  specs: { label: string; value: string }[];
  featured?: boolean;
  tag?: string;
}

/** Neutral "Photo coming soon" image for products without a real photo yet. */
export const PLACEHOLDER_IMAGE = "/placeholder-product.svg";
export const hasRealPhoto = (p: Product) => p.images[0] !== PLACEHOLDER_IMAGE;

export const categories: Category[] = [
  { id: "keychain", name: "Keychains", blurb: "PVC, rubber & metal keychains" },
  { id: "drinkware", name: "Bottles & Drinkware", blurb: "Bottles, mugs & sippers" },
  { id: "bag", name: "Bags & Totes", blurb: "Totes, pouches & backpacks" },
  { id: "stationery", name: "Stationery", blurb: "Pens, notebooks & diaries" },
  { id: "tech", name: "Tech Gadgets", blurb: "USB drives & accessories" },
  { id: "accessory", name: "Office Accessories", blurb: "Card holders & desk items" },
  { id: "promotional", name: "Promotional Items", blurb: "Event & campaign giveaways" },
  { id: "gift-kit", name: "Corporate Gift Kits", blurb: "Curated, branded gift sets" },
];

export const products: Product[] = [
  {
    slug: "custom-logo-rubber-keychain",
    name: "Custom Logo Rubber Keychain",
    category: "keychain",
    images: [
      "/rubberkeychain/rubber3.jpg",
      "/rubberkeychain/rubber6.jpg",
      "/rubberkeychain/rubber2.png",
    ],
    description:
      "Soft PVC rubber keychain moulded in the shape of your logo or mascot. Durable, colourful and ideal for giveaways.",
    highlights: ["Any shape, any colour", "2D or 3D moulding", "Weatherproof soft PVC"],
    priceFrom: 150,
    moq: 100,
    leadTime: "10–12 working days",
    brandingMethods: ["2D moulded", "3D moulded", "Printed insert"],
    colours: ["Multi-colour (Pantone matched)"],
    specs: [
      { label: "Material", value: "Soft PVC rubber" },
      { label: "Size", value: "Up to 60 mm (custom)" },
      { label: "Fitting", value: "Metal split ring / hook" },
      { label: "Packaging", value: "Individual poly bag" },
    ],
    featured: true,
    tag: "Bestseller",
  },
  {
    slug: "character-rubber-keychain",
    name: "Character & Mascot Keychain",
    category: "keychain",
    images: [
      "/rubberkeychain/rubber9.jpg",
      "/rubberkeychain/rubber8.jpg",
      "/rubberkeychain/image-removebg-preview.png",
    ],
    description:
      "Detailed rubber keychains of your brand mascot, product or character — great for fan merchandise and campaigns.",
    highlights: ["Fine detail moulding", "Double-sided designs", "Pantone colour matching"],
    moq: 100,
    leadTime: "12–15 working days",
    brandingMethods: ["2D moulded", "3D moulded"],
    specs: [
      { label: "Material", value: "Soft PVC rubber" },
      { label: "Size", value: "40–70 mm (custom)" },
      { label: "Fitting", value: "Split ring / lobster clasp" },
    ],
    featured: true,
  },
  {
    slug: "metal-keychain",
    name: "Metal Logo Keychain",
    category: "keychain",
    images: ["/rubberkeychain/metal1.jpg"],
    description:
      "Premium metal keychain with your logo engraved, embossed or enamel-filled. A lasting gift for clients and employees.",
    highlights: ["Premium weighty feel", "Engraving or enamel fill", "Gift box available"],
    moq: 100,
    leadTime: "12–15 working days",
    brandingMethods: ["Laser engraving", "Soft enamel", "Embossing"],
    colours: ["Silver", "Gold", "Gunmetal"],
    specs: [
      { label: "Material", value: "Zinc alloy" },
      { label: "Finish", value: "Polished / matte" },
      { label: "Packaging", value: "Poly bag or gift box" },
    ],
    featured: true,
    tag: "Premium",
  },
  {
    slug: "promotional-keyrings",
    name: "Promotional Keyrings",
    category: "keychain",
    images: ["/assets/promotional-keyrings.png", "/assets/f1.png"],
    description:
      "Budget-friendly printed keyrings for high-volume events, launches and campaigns.",
    highlights: ["Low cost per unit", "Full-colour print", "Fast turnaround"],
    moq: 250,
    leadTime: "7–10 working days",
    brandingMethods: ["Full-colour print", "Screen print"],
    specs: [
      { label: "Material", value: "Acrylic / PVC" },
      { label: "Print", value: "One or both sides" },
    ],
    featured: true,
  },
  {
    slug: "steel-water-bottle",
    name: "Steel Water Bottle",
    category: "drinkware",
    images: [PLACEHOLDER_IMAGE],
    description:
      "Insulated stainless steel bottle with your logo — a practical everyday gift for teams, events and onboarding kits.",
    highlights: ["Double-wall insulated", "Leak-proof cap", "Multiple colours"],
    moq: 50,
    leadTime: "7–10 working days",
    brandingMethods: ["Laser engraving", "Screen print", "UV print"],
    colours: ["Black", "White", "Silver", "Navy"],
    specs: [
      { label: "Material", value: "Stainless steel" },
      { label: "Capacity", value: "500 ml / 750 ml" },
    ],
    tag: "New",
  },
  {
    slug: "custom-mug",
    name: "Custom Printed Mug",
    category: "drinkware",
    images: [PLACEHOLDER_IMAGE],
    description: "Ceramic mug printed with your logo or artwork — a classic desk gift.",
    highlights: ["Full-wrap printing", "Dishwasher safe print", "Gift box optional"],
    priceFrom: 250,
    moq: 50,
    leadTime: "7 working days",
    brandingMethods: ["Sublimation (full wrap)", "Screen print"],
    colours: ["White", "Black", "Colour inside"],
    specs: [
      { label: "Material", value: "Ceramic" },
      { label: "Capacity", value: "330 ml" },
    ],
  },
  {
    slug: "promotional-tote-bag",
    name: "Promotional Tote Bag",
    category: "bag",
    images: [PLACEHOLDER_IMAGE],
    description: "Eco-friendly cotton/canvas tote bag with your branding — perfect for events and conferences.",
    highlights: ["Eco-friendly", "Large print area", "Strong handles"],
    priceFrom: 300,
    moq: 100,
    leadTime: "7–10 working days",
    brandingMethods: ["Screen print", "DTF print"],
    colours: ["Natural", "Black", "Navy"],
    specs: [
      { label: "Material", value: "Cotton / canvas" },
      { label: "Size", value: "Approx. 38 × 42 cm" },
    ],
  },
  {
    slug: "branded-backpack",
    name: "Branded Backpack",
    category: "bag",
    images: ["/assets/p754503.avif", "/assets/f2.png"],
    description: "Everyday backpack with your logo printed or embroidered — a useful gift for employees, events and students.",
    highlights: ["Durable, padded straps", "Logo print or embroidery", "Multiple colour options"],
    moq: 50,
    leadTime: "10–12 working days",
    brandingMethods: ["Screen print", "Embroidery"],
    colours: ["Navy / blue", "Black", "Grey"],
    specs: [
      { label: "Material", value: "Polyester" },
      { label: "Capacity", value: "Approx. 20 L" },
    ],
    featured: true,
  },
  {
    slug: "branded-pen-set",
    name: "Branded Pen Set",
    category: "stationery",
    images: [PLACEHOLDER_IMAGE],
    description: "Professional pen set with your logo — ideal for corporate gifting and conferences.",
    highlights: ["Smooth writing", "Gift case", "Logo on pen and box"],
    priceFrom: 100,
    moq: 100,
    leadTime: "7 working days",
    brandingMethods: ["Laser engraving", "Pad print"],
    specs: [
      { label: "Material", value: "Metal body" },
      { label: "Packaging", value: "Gift case" },
    ],
  },
  {
    slug: "usb-drive-keychain",
    name: "USB Drive Keychain",
    category: "tech",
    images: [PLACEHOLDER_IMAGE],
    description: "Practical USB drive that doubles as a keychain, branded with your logo.",
    highlights: ["Multiple capacities", "Preloaded data option", "Keyring attached"],
    priceFrom: 400,
    moq: 50,
    leadTime: "10 working days",
    brandingMethods: ["Laser engraving", "UV print"],
    specs: [
      { label: "Capacity", value: "8 GB – 64 GB" },
      { label: "Interface", value: "USB 2.0 / 3.0" },
    ],
  },
  {
    slug: "metal-business-card-holder",
    name: "Metal Business Card Holder",
    category: "accessory",
    images: [PLACEHOLDER_IMAGE],
    description: "Elegant metal business card holder engraved with your logo.",
    highlights: ["Slim metal case", "Engraved logo", "Executive gift"],
    priceFrom: 200,
    moq: 50,
    leadTime: "7–10 working days",
    brandingMethods: ["Laser engraving"],
    colours: ["Silver", "Black"],
    specs: [{ label: "Material", value: "Stainless steel" }],
  },
  {
    slug: "corporate-welcome-kit",
    name: "Corporate Welcome Kit",
    category: "gift-kit",
    images: ["/assets/card.jpg", "/assets/f3.png"],
    description:
      "A curated, branded kit for new joiners or clients — mix and match bottle, notebook, pen, keychain and tote.",
    highlights: ["Fully customisable contents", "Branded packaging", "Delivery to multiple addresses"],
    moq: 25,
    leadTime: "12–15 working days",
    brandingMethods: ["As per item"],
    specs: [
      { label: "Typical contents", value: "Bottle, notebook, pen, keychain, tote" },
      { label: "Packaging", value: "Branded gift box" },
    ],
    featured: true,
    tag: "Gift kit",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getCategory = (id: string) => categories.find((c) => c.id === id);

/** Categories that currently have at least one product */
export const activeCategories = () =>
  categories.filter((c) => products.some((p) => p.category === c.id));

export const formatPrice = (p?: number) =>
  p ? `From ₹${p.toLocaleString("en-IN")} / unit` : "Price on request";

/* ---------------- WhatsApp enquiry helpers ---------------- */

const DEFAULT_WHATSAPP = "918104780513";

/** wa.me needs the number with country code and digits only. */
export const whatsappNumber = () => {
  const raw = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP).replace(/\D/g, "");
  return raw.length === 10 ? `91${raw}` : raw;
};

export interface EnquiryLine {
  slug: string;
  quantity: number;
  branding?: string;
  colour?: string;
  note?: string;
}

export const describeLine = (line: EnquiryLine) => {
  const product = getProduct(line.slug);
  if (!product) return "";
  const parts = [
    `${product.name} — Qty: ${line.quantity}`,
    line.branding ? `Branding: ${line.branding}` : "",
    line.colour ? `Colour: ${line.colour}` : "",
    line.note ? `Note: ${line.note}` : "",
  ].filter(Boolean);
  return parts.join(" | ");
};

/** Message format from Requirements.md */
export const singleProductMessage = (line: EnquiryLine, pageUrl?: string) => {
  const product = getProduct(line.slug);
  if (!product) return "";
  return [
    `Hey there, I want to enquire about the product ${product.name}.`,
    ``,
    `Product details:`,
    `• Category: ${getCategory(product.category)?.name ?? product.category}`,
    `• Quantity: ${line.quantity}`,
    line.branding ? `• Branding: ${line.branding}` : "",
    line.colour ? `• Colour: ${line.colour}` : "",
    line.note ? `• Note: ${line.note}` : "",
    pageUrl ? `• Link: ${pageUrl}` : "",
  ]
    .filter((l) => l !== "")
    .join("\n");
};

export const listMessage = (lines: EnquiryLine[], name?: string) =>
  [
    `Hey there${name ? `, this is ${name}` : ""}. I want to enquire about the following products:`,
    ``,
    ...lines.map((l, i) => `${i + 1}. ${describeLine(l)}`),
  ].join("\n");

export const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber()}?text=${encodeURIComponent(message)}`;
