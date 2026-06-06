import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zohrif Technology | Software Development & AI Agency",
  description: "Zohrif Technology develops custom web applications, mobile apps, AI agents, SaaS products, and intelligent business automation solutions that help businesses scale.",
  keywords: [
    "AI Agency",
    "Software Development Agency",
    "Agentic AI Solutions",
    "Custom Software",
    "SaaS Development",
    "Web Application Development",
    "Mobile App Development",
    "Business Automation",
    "Next.js Development",
    "Pakistan AI Agency"
  ],
  authors: [{ name: "Zohrif Technology", url: "https://zohrif.com" }],
  creator: "Zohrif Technology",
  publisher: "Zohrif Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zohrif.com",
    title: "Zohrif Technology | Building Intelligent Digital Solutions",
    description: "Zohrif Technology builds intelligent digital solutions including custom software, AI agents, mobile apps, and SaaS platforms.",
    siteName: "Zohrif Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zohrif Technology | AI & Software Development Agency",
    description: "Building intelligent digital solutions for the future. Specialized in custom software, SaaS, mobile, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#070a13] text-[#f8fafc] overflow-x-hidden selection:bg-[#10b981] selection:text-[#070a13]">
        {/* Neon Glow Effects (Global background blobs) */}
        <div className="absolute top-[10%] left-[-10%] neon-glow-1" />
        <div className="absolute top-[40%] right-[-10%] neon-glow-2" />
        <div className="absolute top-[80%] left-[20%] neon-glow-1" />
        
        <Header />
        <main className="flex-grow z-10 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
