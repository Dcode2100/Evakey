import type { Metadata } from "next";
import EnquiryList from "@/components/catalog/EnquiryList";

export const metadata: Metadata = {
  title: "Your Enquiry List | EVAKEY",
  description: "Send one enquiry for all the branded products you're interested in.",
};

export default function EnquiryPage() {
  return <EnquiryList />;
}
