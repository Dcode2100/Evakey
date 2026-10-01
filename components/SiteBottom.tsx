"use client";
import React from "react";
import { usePathname } from "next/navigation";
import ContactPage from "@components/contactpage/ContactPage";
import Footer from "@components/footer/Footer";

/**
 * Bottom of every page: the "Let's talk" contact section followed by the footer.
 * The contact form is hidden on /enquiry, which already has its own enquiry form.
 */
const SiteBottom: React.FC = () => {
  const pathname = usePathname();
  const showContact = !pathname.startsWith("/enquiry");

  return (
    <>
      {showContact && <ContactPage />}
      <Footer />
    </>
  );
};

export default SiteBottom;
