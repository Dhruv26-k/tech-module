"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Check, Calculator } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

const PROJECT_TYPES = [
  { id: "business", label: "Business website", basePrice: 4999, baseWeeks: 2 },
  { id: "store", label: "Online store", basePrice: 9999, baseWeeks: 4 },
  { id: "automation", label: "Automation only", basePrice: 3999, baseWeeks: 1 },
  { id: "webapp", label: "Custom web app", basePrice: 14999, baseWeeks: 5 },
];

const EXTRAS = [
  { id: "seo", label: "SEO setup", price: 1500 },
  { id: "crm", label: "WhatsApp and CRM automation", price: 2500 },
  { id: "copy", label: "Copywriting", price: 2000 },
];

export default function EstimateCalc() {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [pages, setPages] = useState<number>(5);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(["seo", "crm"]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Real-time calculation based on project type, pages, and extras
  const calculation = useMemo(() => {
    const pageMultiplier = Math.max(0, pages - 3) * 600;
    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      const found = EXTRAS.find((e) => e.id === extraId);
      return sum + (found ? found.price : 0);
    }, 0);

    const minEstimate = selectedType.basePrice + pageMultiplier + extrasTotal;
    const maxEstimate = Math.round(minEstimate * 1.25);

    const extraWeeks = pages > 8 ? 1 : 0;
    const durationMin = selectedType.baseWeeks + extraWeeks;
    const durationMax = durationMin + 1;

    return {
      priceRange: `₹${minEstimate.toLocaleString("en-IN")} – ₹${maxEstimate.toLocaleString("en-IN")}`,
      timeline: `${durationMin}–${durationMax} weeks`,
      minEstimate,
      maxEstimate,
    };
  }, [selectedType, pages, selectedExtras]);

  // Pre-filled WhatsApp quotation text
  const quoteWhatsAppUrl = useMemo(() => {
    const activeExtrasLabels = EXTRAS.filter((e) =>
      selectedExtras.includes(e.id)
    )
      .map((e) => e.label)
      .join(", ");

    const text = `Hi Tech Module, I configured an estimate on your site:
- Type: ${selectedType.label}
- Pages/Screens: ${pages}
- Extras: ${activeExtrasLabels || "None"}
- Ballpark: ${calculation.priceRange} (${calculation.timeline})

Can I get an exact quote for this?`;

    return buildWhatsAppUrl(COMPANY_INFO.whatsapp, text);
  }, [selectedType, pages, selectedExtras, calculation]);

  return (
    <section id="estimate" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Controls Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Get an instant estimate
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Pick what you need and see a ballpark price and timeline. No sign-up.
                </p>
              </div>

              {/* 1. Project Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                  What are we building?
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = selectedType.id === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                            : "border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                        }`}
                      >
                        {type.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Interactive Pages Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Pages or screens:
                  </label>
                  <span className="rounded-lg bg-sky-500/10 border border-sky-500/30 px-3 py-1 text-xs font-extrabold text-blue-600 dark:text-sky-400">
                    {pages}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={pages}
                  onChange={(e) => setPages(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 page</span>
                  <span>10 pages</span>
                  <span>20+ screens</span>
                </div>
              </div>

              {/* 3. Extras Checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                  Extras
                </label>
                <div className="space-y-2.5">
                  {EXTRAS.map((extra) => {
                    const isChecked = selectedExtras.includes(extra.id);
                    return (
                      <label
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className="flex items-center gap-3 cursor-pointer select-none group"
                      >
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-md border transition-all ${
                            isChecked
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-800"
                          }`}
                        >
                          {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                          {extra.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-b from-blue-600/10 via-slate-900/40 to-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-lg text-center space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Estimated investment
                  </span>
                  <div className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {calculation.priceRange}
                  </div>
                  <span className="inline-block mt-1 text-xs text-slate-500 dark:text-slate-400">
                    About {calculation.timeline}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={quoteWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-95 transition-all"
                  >
                    <span>Get an exact quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}