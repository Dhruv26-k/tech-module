"use client";

import { MessageCircle, HelpCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function FloatingCTAs() {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp, // uses 916239125526
    "Hi Tech Module, I'm visiting your website and would like to inquire about a project."
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Ask Us Direct WhatsApp Link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-slate-900/80 px-3.5 py-2 text-xs font-medium text-slate-300 backdrop-blur-md shadow-lg hover:border-sky-500/40 hover:text-white transition-all"
      >
        <HelpCircle className="h-3.5 w-3.5 text-sky-400" />
        <span>Ask us</span>
      </a>

      {/* Main WhatsApp Pill Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="h-4 w-4 fill-current" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}