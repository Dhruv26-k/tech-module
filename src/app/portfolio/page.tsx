"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2, PhoneCall } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

const CASE_STUDIES = [
  {
    client: "Aarav Dental",
    tagline: "Local Healthcare & Dental Clinic",
    problem:
      "Patients could only book by phone, and the old site was slow on mobile.",
    solution:
      "A faster redesign, a simple online booking flow, and local search setup.",
    result: "Online bookings rose 142% in the first quarter.",
    metrics: "+142% Bookings",
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API", "Local SEO"],
  },
  {
    client: "Kiln & Co",
    tagline: "Artisan Ceramic & E-Commerce Studio",
    problem:
      "Orders were handled manually through spreadsheets and high checkout abandonment on mobile.",
    solution:
      "A fast Shopify custom storefront integrated with automated WhatsApp order confirmation and dispatch notices.",
    result: "2.1x increase in revenue per visitor within 60 days.",
    metrics: "2.1x Revenue",
    tech: ["Shopify", "Tailwind CSS", "n8n Automation"],
  },
  {
    client: "Northfold",
    tagline: "B2B Logistics & Supply Chain",
    problem:
      "Prospective enterprise clients were confused by dense technical PDFs and lacked a direct quote estimation pipeline.",
    solution:
      "Interactive instant cost calculator widget and direct sales calendar scheduling.",
    result: "Sales-qualified leads increased by 85% in 30 days.",
    metrics: "+85% Qualified Leads",
    tech: ["React", "TypeScript", "CRM Automation"],
  },
];

export default function PortfolioPage() {
  const consultUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp,
    "Hi Tech Module, I checked your case studies and would like to build something similar for my business."
  );

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(14,165,233,0.18),transparent_70%)]" />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Proven Client Outcomes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Recent work & case studies
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Real websites and automation pipelines built to solve specific operational bottlenecks.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="mt-14 space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.client}
              className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-lg transition-all hover:border-sky-500/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Case study: {study.client}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {study.tagline}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                  <span>{study.metrics}</span>
                </div>
              </div>

              {/* 3-Column Breakdown: Problem, What We Did, The Result */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/40 p-5">
                  <span className="text-xs font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider">
                    The problem
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/40 p-5">
                  <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
                    What we did
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/40 p-5">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    The result
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {study.result}
                  </p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mt-6 pt-4 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400 mr-1">
                  Stack:
                </span>
                {study.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-blue-600/10 via-slate-900/60 to-blue-600/10 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Have a project in mind?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Let's discuss how we can improve your conversion rates and automate repetitive tasks.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-95 transition-all"
            >
              <span>Discuss your requirements</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}