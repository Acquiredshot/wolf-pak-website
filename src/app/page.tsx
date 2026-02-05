import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import IndustrySolutions from "@/components/IndustrySolutions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LightningStorm from "@/components/LightningStorm";
import GlowingEyes from "@/components/GlowingEyes";
import TechOverlay from "@/components/TechOverlay";

export default function Home() {
  return (
    <div className="min-h-screen relative text-white">
      <LightningStorm />
      <GlowingEyes />
      <div className="relative z-10">
        <TechOverlay />
        <Navbar />
        <Hero />
        <Services />
        <IndustrySolutions />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
