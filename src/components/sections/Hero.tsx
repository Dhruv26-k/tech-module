"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Layout,
  Code2,
  Zap,
  ShieldCheck,
  TrendingUp,
  Star,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

const FEATURE_CARDS = [
  {
    icon: Layout,
    color: "bg-blue-600/20 text-blue-400 border-blue-500/30",
    label: "Website Design",
  },
  {
    icon: Code2,
    color: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30",
    label: "Development",
  },
  {
    icon: Zap,
    color: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
    label: "Automation",
  },
  {
    icon: ShieldCheck,
    color: "bg-amber-600/20 text-amber-400 border-amber-500/30",
    label: "Maintenance & Care",
  },
  {
    icon: TrendingUp,
    color: "bg-rose-600/20 text-rose-400 border-rose-500/30",
    label: "Digital Marketing",
  },
];

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp,
    "Hi Tech Module, I'd like to discuss a website project."
  );

  return (
    <section className="relative overflow-hidden pt-12 pb-24 text-center">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[650px] bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(14,165,233,0.2),transparent_75%)]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Top Proof Pill: 15+ Projects & 4.9 Rating */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-slate-300 dark:border-sky-500/20 bg-slate-100/90 dark:bg-slate-900/70 px-5 py-2 text-xs backdrop-blur-md shadow-sm">
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            15+ projects delivered
          </span>
          <span className="h-3.5 w-px bg-slate-300 dark:bg-slate-700" />
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
            ))}
            <span className="font-bold text-slate-800 dark:text-slate-200 ml-1">
              4.9 client rating
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
          Website Design <br />
          <span className="text-blue-600 dark:text-sky-400">Development</span> & Automation <br />
          For Growing Businesses
        </h1>

        {/* Subtitle with Starting Price Pill */}
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Fast websites and smart automations that bring in leads and save you hours every week.{" "}
          <span className="inline-block mt-1 sm:mt-0 font-medium text-slate-800 dark:text-slate-200">
            Get yours starting at{" "}
            <span className="rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 font-bold text-emerald-600 dark:text-emerald-400">
              ₹4,999
            </span>
          </span>
        </p>

        {/* 3 CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-md hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all"
          >
            <Phone className="h-4 w-4 text-blue-500" />
            <span>Call Us</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#22c55e]/25 hover:bg-[#16a34a] active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            href="/pricing"
            className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-md hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all"
          >
            <span>View Pricing</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 5 Feature Service Cards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
          {FEATURE_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-slate-200 dark:border-sky-500/15 bg-white/60 dark:bg-slate-900/60 p-4 backdrop-blur-md shadow-sm hover:scale-105 hover:border-sky-500/40 transition-all cursor-default"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${card.color} shadow-inner transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {card.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}