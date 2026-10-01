"use client";
import React, { useState } from "react";
import styles from "@styles/Navbar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaClipboardList } from "react-icons/fa";
import { useEnquiry } from "@/lib/enquiry-store";

interface NavItem {
  href: string;
  name: string;
}

const navItems: NavItem[] = [
  { href: "/", name: "Home" },
  { href: "/products", name: "Products" },
  { href: "/#how-it-works", name: "How it works" },
  { href: "/#about", name: "About" },
  { href: "/#contact", name: "Contact" },
];

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const pathname = usePathname();
  const { count } = useEnquiry();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  const EnquiryLink = ({ mobile = false }: { mobile?: boolean }) => (
    <Link
      href="/enquiry"
      onClick={() => setMenuActive(false)}
      className={`${mobile ? styles.mobileLink : styles.link} inline-flex items-center gap-2`}
      aria-label={`Enquiry list, ${count} item${count === 1 ? "" : "s"}`}
    >
      <FaClipboardList className="h-5 w-5" />
      {mobile && <span>Enquiry list</span>}
      {count > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" aria-label="Homepage" className={styles.logo}>
          <span>EVAKEY</span>
        </Link>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${isActive(item.href) ? "text-primary font-semibold" : ""}`}
            >
              {item.name}
            </Link>
          ))}

          <EnquiryLink />

          <Link href="/enquiry" className={styles.ctaButton}>
            Get a quote
          </Link>
        </div>

        <button
          className={`${styles.mobileMenuButton} ${menuActive ? styles.active : ""}`}
          onClick={() => setMenuActive(!menuActive)}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuActive}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuActive ? styles.open : ""}`}>
        <div className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuActive(false)} className={styles.mobileLink}>
              {item.name}
            </Link>
          ))}
          <EnquiryLink mobile />
          <Link href="/enquiry" onClick={() => setMenuActive(false)} className={`${styles.ctaButton} text-center`}>
            Get a quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
