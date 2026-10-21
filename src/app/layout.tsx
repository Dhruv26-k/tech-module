import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTAs from "@/components/layout/FloatingCTAs";
import InteractiveCanvas from "@/components/ui/InteractiveCanvas";
import { ThemeAnimationProvider } from "@/context/ThemeAnimationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Module | Digital Solutions for Smart Businesses",
  description:
    "Fast, conversion-focused websites, automation, and ongoing care for growing businesses. Made by Dhruv.",
  metadataBase: new URL("https://techmodule.in"),
  openGraph: {
    title: "Tech Module | Digital Solutions for Smart Businesses",
    description:
      "Fast, conversion-focused websites, automation, and ongoing care for growing businesses.",
    url: "https://techmodule.in",
    siteName: "Tech Module",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 flex flex-col antialiased transition-colors duration-200`}
      >
        <ThemeAnimationProvider>
          {/* Interactive mouse-reactive particle background */}
          <InteractiveCanvas />

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCTAs />
        </ThemeAnimationProvider>
      </body>
    </html>
  );
}