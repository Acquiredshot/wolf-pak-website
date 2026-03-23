import Services from "@/components/Services";
import IndustrySolutions from "@/components/IndustrySolutions";
import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Build | Wolf-Pak Innovations",
  description: "Explore our agentic AI services — autonomous agents, multi-agent orchestration, LLM integration, network infrastructure, cyber defense, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24" />
      <Services />
      <IndustrySolutions />
      <About />
    </>
  );
}
