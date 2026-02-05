import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import IndustrySolutions from "@/components/IndustrySolutions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LightningStorm from "@/components/LightningStorm";
import GlowingEyes from "@/components/GlowingEyes";
import TechOverlay from "@/components/TechOverlay";
import Terminal from "@/components/Terminal";
import StatusDashboard from "@/components/StatusDashboard";
import OrbAssistant from "@/components/OrbAssistant";
import ConsoleEasterEgg from "@/components/ConsoleEasterEgg";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen relative text-white">
      <ConsoleEasterEgg />
      <ThemeToggle />
      <LightningStorm />
      <GlowingEyes />
      <div className="relative z-10">
        <TechOverlay />
        <Navbar />
        <Hero />
        <Services />
        <IndustrySolutions />
        <About />
        <Contact />
        <Footer />
      </div>
      {/* Floating Widgets */}
      <Terminal />
      <StatusDashboard />
      <OrbAssistant />
    </div>
  );
}
