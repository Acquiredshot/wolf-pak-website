import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Wolf-Pak Innovations | Elite Cybersecurity & Infrastructure",
  description: "Deploying military-grade cybersecurity and next-gen digital infrastructure. Secure your future with Wolf-Pak Innovations.",
  keywords: ["Cybersecurity", "Wolf-Pak", "Infrastructure", "Tech", "Security", "Web Development", "Defense", "Software Engineering", "IT Consulting", "Cloud Services"],
  authors: [{ name: "Wolf-Pak Innovations" }],
  creator: "Wolf-Pak Innovations",
  openGraph: {
    title: "Wolf-Pak Innovations | Elite Cybersecurity & Infrastructure",
    description: "Deploying military-grade cybersecurity and next-gen digital infrastructure. Secure your future with Wolf-Pak Innovations.",
    url: "https://www.wolf-pakinnovations.com",
    siteName: "Wolf-Pak Innovations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolf-Pak Innovations",
    description: "Deploying military-grade cybersecurity and next-gen digital infrastructure.",
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
        {children}
      </body>
    </html>
  );
}
