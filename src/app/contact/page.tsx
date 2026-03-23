import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Wolf-Pak Innovations",
  description: "Get in touch with Wolf-Pak Innovations. Ready to deploy your agent system? Let's talk.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-24" />
      <Contact />
    </>
  );
}
