"use client";

import { useState, useEffect, useRef } from "react";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

const PACKAGES = [
  {
    name: "Launch Package",
    price: "From ₹4,999",
    timeline: "2–3 weeks",
    subtitle: "A focused, high-speed website for a new or small business.",
    features: [
      "Up to 5 custom pages",
      "Mobile-first responsive design",
      "Contact form and analytics setup",
      "Fast 2-second load speed",
    ],
    cta: "Ask about Launch",
    message: "Hi Tech Module, I'm interested in the Launch package (from ₹4,999).",
    highlight: false,
  },
  {
    name: "Growth Package",
    price: "From ₹9,999",
    timeline: "4–5 weeks",
    subtitle: "For businesses ready to convert traffic into booked calls.",
    features: [
      "Up to 12 responsive pages",
      "Conversion-tested layouts",
      "CRM & WhatsApp automation",
      "90 days priority support",
    ],
    cta: "Select Growth Plan",
    message: "Hi Tech Module, I'm interested in the Growth package (from ₹9,999).",
    highlight: true,
  },
  {
    name: "Custom Architecture",
    price: "Custom quote",
    timeline: "Tailored",
    subtitle: "Stores, web applications, portals, and complex integrations.",
    features: [
      "Dedicated tech lead",
      "Custom database & API design",
      "Full e-commerce / custom logic",
      "Ongoing maintenance & care",
    ],
    cta: "Talk to Us",
    message: "Hi Tech Module, I need a custom quote for a larger project.",
    highlight: false,
  },
];

export default function PricingSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Auto-rotate every 4 seconds on mobile
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % PACKAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Synchronize horizontal scroll position
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;

    const cardWidth = card.offsetWidth + 12;
    el.scrollTo({
      left: activeSlide * cardWidth,
      behavior: "smooth",
    });
  }, [activeSlide]);

  const handleManualScroll = () => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;

    const cardWidth = card.offsetWidth + 12;
    const newIndex = Math.round(el.scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < PACKAGES.length && newIndex !== activeSlide) {
      setActiveSlide(newIndex);
    }
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + PACKAGES.length) % PACKAGES.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % PACKAGES.length);
  };

  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[500px] bg-[radial-gradient(ellipse_75%_50%_at_50%_50%,rgba(14,165,233,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-6xl">
        {/* Header with Mobile Carousel Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400">
              Clear Investment
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Pick a starting point
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Fixed quotes, clear deliverables, and zero surprise charges.
            </p>
          </div>

          {/* Mobile Chevrons */}
          <div className="flex md:hidden items-center gap-2 self-end">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Package"
              className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white active:scale-90 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Package"
              className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white active:scale-90 transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 1. MOBILE AUTO-ROTATING SNAP CAROUSEL (Visible on mobile/tablet) */}
        <div className="block md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleManualScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] [scrollbar-color:rgba(56,189,248,0.3)_transparent]"
          >
            {PACKAGES.map((pkg) => {
              const pkgWhatsApp = buildWhatsAppUrl(
                COMPANY_INFO.whatsapp,
                pkg.message
              );

              return (
                <div
                  key={pkg.name}
                  className={`w-[85%] shrink-0 snap-center rounded-2xl p-5 backdrop-blur-xl transition-all ${
                    pkg.highlight
                      ? "border-2 border-sky-500/70 bg-gradient-to-b from-sky-500/15 via-slate-950/90 to-slate-950/95 shadow-xl shadow-sky-500/15"
                      : "border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {pkg.name}
                    </span>
                    {pkg.highlight ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold">
                        POPULAR
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {pkg.timeline}
                      </span>
                    )}
                  </div>

                  <div className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white">
                    <span className={pkg.highlight ? "text-blue-600 dark:text-sky-400" : ""}>
                      {pkg.price}
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  <div className="my-4 h-px bg-slate-200 dark:bg-slate-800/80" />

                  <ul className="space-y-2 text-[11px] text-slate-700 dark:text-slate-300">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={pkgWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all active:scale-95 ${
                      pkg.highlight
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500"
                        : "border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-white"
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Carousel Progress Indicators */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {PACKAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeSlide === i ? "w-6 bg-blue-600 dark:bg-sky-400" : "w-2 bg-slate-300 dark:bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 2. DESKTOP 3-COLUMN GRID */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => {
            const pkgWhatsApp = buildWhatsAppUrl(
              COMPANY_INFO.whatsapp,
              pkg.message
            );

            return (
              <div
                key={pkg.name}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
                  pkg.highlight
                    ? "border-2 border-sky-500/60 bg-white/90 dark:bg-slate-950/80 shadow-2xl shadow-sky-500/10 scale-[1.02]"
                    : "border border-slate-200 dark:border-sky-500/20 bg-white/60 dark:bg-slate-950/60 hover:border-sky-500/40"
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{pkg.name}</h3>
                    {pkg.timeline && (
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {pkg.timeline}
                      </span>
                    )}
                  </div>

                  <div className="mt-3">
                    <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-sky-400">
                      {pkg.price}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  <div className="my-6 h-px bg-slate-200 dark:bg-slate-800" />

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={pkgWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all active:scale-95 ${
                      pkg.highlight
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500"
                        : "border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:border-sky-500/40 hover:text-white"
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}