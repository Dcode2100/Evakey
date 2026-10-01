
import type { Metadata } from "next";
import "@styles/globals.css";

import Navbar from "@components/Navbar";
import SiteBottom from "@components/SiteBottom";
import { EnquiryProvider } from "@/lib/enquiry-store";

export const metadata: Metadata = {
  title: "EVAKEY - Premium Keychains & Promotional Products",
  description: "Custom keychains, bottles, bags, stationery and corporate gifts branded with your logo. Browse the catalogue and send an enquiry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <EnquiryProvider>
        <div className="relative w-full overflow-x-clip">
          <Navbar />
          {children}
          <SiteBottom />
        </div>
        </EnquiryProvider>
      </body>
    </html>
  );
}
