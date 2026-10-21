"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

interface GuideItem {
  id: string;
  question: string;
  summary: string;
  content: string[];
}

const GUIDES: GuideItem[] = [
  {
    id: "website-cost",
    question: "How much does a business website cost?",
    summary:
      "Cost depends on the number of pages, the features, and whether you sell online. A simple site costs the least, an online store costs more because of payments and shipping, and custom apps cost the most. Always ask for a fixed quote that lists exactly what is included.",
    content: [
      "Cost depends on the number of pages, the features, and whether you sell online. A simple site costs the least, an online store costs more because of payments and shipping, and custom apps cost the most.",
      "Always ask for a fixed quote that lists exactly what is included. Avoid hourly billing agreements where scope creep leads to unexpected invoices.",
      "Factor in maintenance, hosting, and domain renewals so you understand the ongoing cost to keep your site fast and secure.",
    ],
  },
  {
    id: "visitor-conversion",
    question: "Five things that make visitors contact you",
    summary:
      "Speed, clear messaging, social proof, frictionless forms, and mobile accessibility drive user action.",
    content: [
      "1. Clear value proposition above the fold: State what you do and who it's for within 3 seconds of landing.",
      "2. Specific proof: Showcase quantified outcomes, verified client reviews, and identifiable logos instead of generic stock images.",
      "3. Frictionless contact channels: Provide an instant WhatsApp link alongside short 2–3 field contact forms.",
      "4. Sub-2-second load times: Most mobile visitors bounce if an interactive screen takes longer than 3 seconds to render.",
      "5. Transparent expectations: Let visitors know what happens next, whether that is a 24-hour reply time or a fixed ballpark quote.",
    ],
  },
  {
    id: "business-automation",
    question: "What should a business automate first?",
    summary:
      "Automate initial lead notifications, customer intake acknowledgement, and repetitive booking reminders.",
    content: [
      "1. Lead notifications: Instantly push contact form entries directly to your WhatsApp or team Slack channel so you never miss a hot lead.",
      "2. Customer auto-acknowledgements: Send a branded WhatsApp or email confirmation reassuring the lead their request was received.",
      "3. Calendar booking sync: Replace back-and-forth scheduling emails with self-serve 20-minute slot pickers synced with Google Calendar.",
      "4. Review generation: Trigger an automated follow-up request 48 hours after project completion asking for a review.",
    ],
  },
];

export default function BlogPage() {
  const [openGuideIndex, setOpenGuideIndex] = useState<number | null>(0);

  const toggleGuide = (index: number) => {
    setOpenGuideIndex((prev) => (prev === index ? null : index));
  };

  const askUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp,
    "Hi Tech Module, I read your guides and have a question regarding my website."
  );

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(14,165,233,0.18),transparent_70%)]" />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Guides for business owners
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Short, practical reads on websites, leads, and automation.
          </p>
        </div>

        {/* Guides Accordion List */}
        <div className="mt-14 space-y-4">
          {GUIDES.map((guide, index) => {
            const isOpen = openGuideIndex === index;
            return (
              <div
                key={guide.id}
                className="rounded-2xl border border-slate-200 dark:border-sky-500/15 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md overflow-hidden transition-all shadow-sm hover:border-sky-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleGuide(index)}
                  className="flex w-full items-center justify-between p-6 text-left text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-xs font-bold text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      0{index + 1}
                    </span>
                    <span>{guide.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sky-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/60 space-y-3">
                    {guide.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact / Clarification Box */}
        <div className="mt-20 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-blue-600/10 via-slate-900/60 to-blue-600/10 p-8 sm:p-10 text-center backdrop-blur-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Have a question about your tech stack?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Send us a direct message on WhatsApp for straightforward, unbiased advice.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={askUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-95 transition-all"
            >
              <span>Ask us on WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}