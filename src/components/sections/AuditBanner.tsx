"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function AuditBanner() {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    // Send the URL inquiry straight to WhatsApp
    const message = `Hi Tech Module, I would like a free video audit for my website: ${url}`;
    const whatsappLink = buildWhatsAppUrl(COMPANY_INFO.whatsapp, message);

    setSubmitted(true);
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-sky-500/20 bg-gradient-to-b from-slate-900/90 to-[#070e22]/90 p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Not sure what is holding your site back?
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Send us your URL. Within three working days you get a short video audit
          with the five fixes that matter most. It is free.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
        >
          <input
            type="url"
            required
            placeholder="https://yourwebsite.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full sm:flex-1 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-98 transition-all whitespace-nowrap"
          >
            <span>Get my free audit</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {submitted && (
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-sky-400 font-medium">
            <CheckCircle2 className="h-4 w-4" />
            Audit request opened in WhatsApp!
          </p>
        )}
      </div>
    </section>
  );
}