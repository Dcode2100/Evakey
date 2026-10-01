"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaDribbble, FaTwitter, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { activeCategories, whatsappUrl } from "@/lib/catalog";

const Footer: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const socials = [FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaDribbble];

  return (
    <footer ref={ref} className={`border-t border-line bg-surface text-secondary section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 space-y-5">
            <span className="font-playfair text-2xl font-bold tracking-[0.14em] text-primary">EVAKEY</span>
            <p className="max-w-md text-sm leading-relaxed text-secondary">
              Premium custom keychains, drinkware, bags, stationery and corporate gift kits — branded with your logo,
              produced to spec and delivered at scale.
            </p>
            <div className="flex gap-2.5">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-secondary transition hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Catalogue</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products" className="transition-colors hover:text-primary">All products</Link></li>
              {activeCategories().slice(0, 4).map((c) => (
                <li key={c.id}>
                  <Link href={`/products?category=${c.id}`} className="transition-colors hover:text-primary">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Enquiries</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/enquiry" className="transition-colors hover:text-primary">Your enquiry list</Link></li>
              <li><Link href="/#how-it-works" className="transition-colors hover:text-primary">How it works</Link></li>
              <li>
                <a href={whatsappUrl("Hey there, I'd like to enquire about custom branded products.")} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                  WhatsApp us
                </a>
              </li>
              <li><Link href="/#contact" className="transition-colors hover:text-primary">Contact us</Link></li>
            </ul>
          </div>

          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#about" className="transition-colors hover:text-primary">About EVAKEY</Link></li>
              <li><Link href="/products?category=gift-kit" className="transition-colors hover:text-primary">Corporate gifting</Link></li>
              <li><Link href="/products?category=keychain" className="transition-colors hover:text-primary">Custom keychains</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><FaPhone className="h-3.5 w-3.5 text-brass" /> +91 81047 80513</span>
            <span className="flex items-center gap-2"><FaMapMarkerAlt className="h-3.5 w-3.5 text-brass" /> Mumbai, Maharashtra, India</span>
          </div>
          <div className="flex gap-5 text-sm">
            <a href="#" className="transition-colors hover:text-primary">Terms &amp; Conditions</a>
            <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-8 text-center text-xs text-secondary">
          © {new Date().getFullYear()} EVAKEY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

