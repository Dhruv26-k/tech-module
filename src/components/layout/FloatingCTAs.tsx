"use client";

import { MessageCircle, HelpCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function FloatingCTAs() {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp,
    "Hello Tech Module, I'm interested in discussing a website project."
  );

  return (
    <>
      {/* Bottom-Left: Ask Us */}
      <aside aria-label="Quick questions" className="fixed bottom-5 left-5 z-40">
        <button
          type="button"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "/contact";
            }
          }}
          className="flex items-center gap-2 rounded-full border border-sky-500/20 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-md transition-all hover:border-sky-400 hover:text-white"
        >
          <HelpCircle className="h-4 w-4 text-sky-400" />
          <span>Ask us</span>
        </button>
      </aside>

      {/* Bottom-Right: Direct WhatsApp */}
      <aside aria-label="Direct WhatsApp" className="fixed bottom-5 right-5 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </>
  );
}