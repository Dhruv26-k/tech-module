"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Check, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

interface ServiceDetail {
  title: string;
  scope: string;
  duration: string;
}

const DETAILED_SERVICES: ServiceDetail[] = [
// ... rest of the file stays exactly the same
  {
    title: "Website design",
    scope:
      "Research, wireframes, and polished UI in Figma. You approve each stage before we move on.",
    duration: "2–3 weeks",
  },
  {
    title: "Development",
    scope:
      "React, Next.js, or plain HTML and CSS, whichever fits. Accessible, fast, and easy for your team to edit.",
    duration: "2–4 weeks",
  },
  {
    title: "E-commerce",
    scope:
      "Shopify builds and custom stores, with payments, shipping rules, and analytics set up.",
    duration: "4–6 weeks",
  },
  {
    title: "Automation",
    scope:
      "We connect your forms, WhatsApp, payments, and sheets so leads and invoices handle themselves.",
    duration: "1–2 weeks",
  },
  {
    title: "Care and growth",
    scope:
      "Hosting, security updates, and a monthly improvement sprint driven by your analytics.",
    duration: "Monthly",
  },
];

const PACKAGES = [
  {
    name: "Launch",
    price: "From ₹4,999",
    timeline: "2–3 weeks",
    subtitle: "A focused site for a new or small business.",
    features: [
      "Up to 5 pages",
      "Mobile-first design",
      "Contact form and analytics",
    ],
    cta: "Ask about Launch",
    message: "Hi Tech Module, I'm interested in the Launch package (from ₹4,999).",
    highlight: false,
  },
  {
    name: "Growth",
    price: "From ₹9,999",
    timeline: "4–5 weeks",
    subtitle: "For businesses ready to win more leads.",
    features: [
      "Up to 12 pages",
      "Conversion-tested layouts",
      "CMS and CRM integration",
      "90 days of support",
    ],
    cta: "Ask about Growth",
    message: "Hi Tech Module, I'm interested in the Growth package (from ₹9,999).",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Custom quote",
    timeline: "",
    subtitle: "Stores, web apps, and complex builds.",
    features: ["Dedicated team", "Custom features", "Ongoing care plan"],
    cta: "Talk to us",
    message: "Hi Tech Module, I need a custom quote for a larger project.",
    highlight: false,
  },
];

const FAQS = [
  {
    question: "How much does a website cost?",
    answer:
      "Every quote is fixed after our first call. You will know the price before we start, and it will not change unless you add work.",
  },
  {
    question: "Who owns the site when it is done?",
    answer:
      "You do. Code, designs, and accounts are handed over at launch.",
  },
  {
    question: "Can you redesign my existing site?",
    answer:
      "Yes. We audit what you have, keep what converts, and replace what does not.",
  },
  {
    question: "What do you need from me?",
    answer:
      "A brief call, your brand assets, and about an hour a week for feedback during the project.",
  },
];

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(14,165,233,0.18),transparent_70%)]" />

      <div className="mx-auto max-w-5xl">
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Services built around results
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Every project starts with a goal you can measure, such as more enquiries,
            more sales, or more booked calls.
          </p>
        </div>

        {/* Detailed Services Table / Rows */}
        <div className="mt-14 space-y-3">
          {DETAILED_SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-sky-500/15 bg-white/60 dark:bg-slate-900/50 p-6 backdrop-blur-md hover:border-sky-500/30 transition-all"
            >
              <div className="md:w-1/4">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {s.title}
                </h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {s.scope}
                </p>
              </div>
              <div className="md:w-1/4 md:text-right">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                  {s.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Starting Point Pricing Packages */}
        <div className="mt-28">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Pick a starting point
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => {
              const pkgWhatsApp = buildWhatsAppUrl(
                COMPANY_INFO.whatsapp,
                pkg.message
              );

              return (
                <div
                  key={pkg.name}
                  className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all ${
                    pkg.highlight
                      ? "border-2 border-sky-500/50 bg-gradient-to-b from-sky-500/10 via-slate-900/80 to-slate-900/90 shadow-xl shadow-sky-500/10"
                      : "border border-slate-200 dark:border-sky-500/15 bg-white/60 dark:bg-slate-900/60"
                  }`}
                >
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {pkg.name}
                      </h3>
                      {pkg.timeline && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
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
                          <Check className="h-4 w-4 text-emerald-500 shrink-0" />
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
                      className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                        pkg.highlight
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-95"
                          : "border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95"
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

        {/* Common Questions Accordion */}
        <div className="mt-28">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Common questions
          </h2>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 dark:border-sky-500/15 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}