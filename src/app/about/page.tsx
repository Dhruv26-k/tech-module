"use client";

import Link from "next/link";
import { Quote, ArrowRight, CheckCircle2, Shield, Users, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

const TEAM_PILLARS = [
  {
    role: "Strategy & Development",
    title: "Founder & Lead",
    description:
      "Hand-coding fast, accessible web architectures that load in under two seconds and scale with your business.",
    icon: Zap,
  },
  {
    role: "UI & Brand Design",
    title: "Design & UX",
    description:
      "Wireframes and conversion-focused layouts built around one goal: making it effortless for visitors to take action.",
    icon: Users,
  },
  {
    role: "Integrations & Workflows",
    title: "Automation",
    description:
      "Connecting lead capture, CRM systems, and WhatsApp automation so inquiries and operations run autonomously.",
    icon: Shield,
  },
];

const TESTIMONIALS = [
  {
    quote: "The site was live in three weeks and enquiries doubled.",
    author: "Meera S.",
    company: "Aarav Dental",
  },
  {
    quote: "Our online orders now run without us touching a spreadsheet.",
    author: "Rohan K.",
    company: "Kiln & Co",
  },
  {
    quote: "Clear quotes, clear updates, no jargon.",
    author: "Simran T.",
    company: "Northfold",
  },
];

export default function AboutPage() {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp,
    "Hi Tech Module, I'd like to talk about working together."
  );

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(14,165,233,0.18),transparent_70%)]" />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Built for smart businesses
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We operate as one accountable, agile team delivering fixed-price,
            high-converting web solutions without agency bloat or technical jargon.
          </p>
        </div>

        {/* Pillars / Roles */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.role}
                className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-lg transition-all hover:border-sky-500/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-600 dark:text-sky-400 mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                  {pillar.title}
                </span>
                <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                  {pillar.role}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* What Clients Say Section */}
        <div className="mt-28">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              What clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-lg transition-all hover:border-sky-500/40"
              >
                <div>
                  <Quote className="h-8 w-8 text-sky-500/30 mb-4" />
                  <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-white leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Bar */}
        <div className="mt-20 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-blue-600/10 via-slate-900/60 to-blue-600/10 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Ready to build something that performs?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Book a quick 20-minute call to discuss your goals and get a straightforward fixed quote.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-95 transition-all"
            >
              <span>Talk to us on WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}