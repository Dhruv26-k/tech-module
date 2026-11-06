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
  title: {
    default: "Tech Module | Digital Solutions & Web Development",
    template: "%s | Tech Module",
  },
  description:
    "Fast, conversion-focused websites, smart automation, and continuous ongoing support for growing businesses by Tech Module (TechModule).",
  keywords: [
    "Tech Module",
    "TechModule",
    "techmodule",
    "techmodule.in",
    "Website Design Patiala",
    "Web Development",
    "Business Automation",
    "Next.js Development",
  ],
  authors: [{ name: "Dhruv", url: "https://techmodule.in" }],
  creator: "Tech Module",
  publisher: "Tech Module",
  metadataBase: new URL("https://techmodule.in"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "hT3bWeU5JqhpJopPeolh5xSTxONSOVMBOe80Nr5IbaI",
  },
  openGraph: {
    title: "Tech Module | Digital Solutions for Smart Businesses",
    description:
      "Fast, conversion-focused websites, smart automation, and continuous ongoing care for growing businesses.",
    url: "https://techmodule.in",
    siteName: "Tech Module",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Module | Digital Solutions for Smart Businesses",
    description:
      "Fast, conversion-focused websites, smart automation, and continuous ongoing care for growing businesses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://techmodule.in/#website",
      url: "https://techmodule.in",
      name: "Tech Module",
      alternateName: ["TechModule", "Tech Module India", "techmodule"],
      description:
        "Fast, conversion-focused websites, smart automation, and ongoing maintenance for growing businesses.",
      publisher: {
        "@id": "https://techmodule.in/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://techmodule.in/#organization",
      name: "Tech Module",
      alternateName: ["TechModule", "techmodule"],
      url: "https://techmodule.in",
      logo: "https://techmodule.in/logo.png",
      sameAs: ["https://techmodule.in"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-[#e2effc] dark:bg-[#070b14] text-slate-900 dark:text-slate-100 flex flex-col antialiased transition-colors duration-300 selection:bg-blue-500 selection:text-white`}
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