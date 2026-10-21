"use client";

import Link from "next/link";
import { Send, Heart } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/data/navigation";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-sky-500/10 bg-slate-50 dark:bg-[#060a12] text-slate-600 dark:text-slate-400 text-sm transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand Isometric Logo & Details */}
          <div className="space-y-3">
            <Logo showTagline={false} />
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              {COMPANY_INFO.address}
            </p>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-xs text-blue-600 dark:text-sky-400 hover:underline block transition-colors"
            >
              {COMPANY_INFO.email}
            </a>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-600 dark:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">
              Follow
            </h4>
            <ul className="space-y-2 text-xs">
              {COMPANY_INFO.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:text-sky-400 transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Get web tips by email
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-2"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                <span>Subscribe</span>
                <Send className="h-3 w-3" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-400">
            <span>Made with precision by</span>
            <span className="font-bold text-blue-600 dark:text-sky-400">Dhruv</span>
          </p>
        </div>
      </div>
    </footer>
  );
}