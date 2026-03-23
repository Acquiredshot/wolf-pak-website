import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightningStorm from "@/components/LightningStorm";
import TechOverlay from "@/components/TechOverlay";
import Terminal from "@/components/Terminal";
import StatusDashboard from "@/components/StatusDashboard";
import OrbAssistant from "@/components/OrbAssistant";
import ConsoleEasterEgg from "@/components/ConsoleEasterEgg";
import MiloIntro from "@/components/MiloIntro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Wolf-Pak Innovations | Agentic Systems & Intelligent Automation",
  description: "Pioneering agentic AI systems that think, adapt, and execute. Wolf-Pak Innovations builds autonomous agents and intelligent infrastructure for the next era of technology.",
  keywords: ["Agentic Systems", "AI Agents", "Wolf-Pak", "Autonomous AI", "Intelligent Automation", "LLM Orchestration", "Multi-Agent Systems", "Software Engineering", "AI Infrastructure", "Machine Intelligence"],
  authors: [{ name: "Wolf-Pak Innovations" }],
  creator: "Wolf-Pak Innovations",
  openGraph: {
    title: "Wolf-Pak Innovations | Agentic Systems & Intelligent Automation",
    description: "Pioneering agentic AI systems that think, adapt, and execute. Wolf-Pak Innovations builds autonomous agents and intelligent infrastructure for the next era of technology.",
    url: "https://www.wolf-pakinnovations.com",
    siteName: "Wolf-Pak Innovations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolf-Pak Innovations",
    description: "Pioneering agentic AI systems that think, adapt, and execute.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen relative">
          <MiloIntro />
          <ConsoleEasterEgg />
          <LightningStorm />
          <div className="relative z-10">
            <TechOverlay />
            <Navbar />
            {children}
            <Footer />
          </div>
          <Terminal />
          <StatusDashboard />
          <OrbAssistant />
        </div>
      </body>
    </html>
  );
}
