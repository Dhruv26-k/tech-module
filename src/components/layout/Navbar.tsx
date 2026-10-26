"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Sun,
  Moon,
  Play,
  Pause,
  Menu,
  X,
  Home,
  Layers,
  Briefcase,
  Tag,
  UserCheck,
  BookOpen,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/data/navigation";
import { useThemeAnimation } from "@/context/ThemeAnimationContext";
import { buildWhatsAppUrl } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

// Helper to assign icons and badges to navigation links
const getNavMeta = (href: string) => {
  switch (href) {
    case "/":
      return { icon: Home, badge: null };
    case "/services":
      return { icon: Layers, badge: "5" };
    case "/portfolio":
      return { icon: Briefcase, badge: "New" };
    case "/pricing":
      return { icon: Tag, badge: "₹4.9k" };
    case "/about":
      return { icon: UserCheck, badge: null };
    case "/blog":
      return { icon: BookOpen, badge: null };
    case "/contact":
      return { icon: Sparkles, badge: null };
    default:
      return { icon: ArrowRight, badge: null };
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme, isAnimationActive, toggleAnimation } =
    useThemeAnimation();

  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp,
    "Hi Tech Module, I'd like to discuss a website project."
  );

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-sky-500/10 bg-white/80 dark:bg-[#070b14]/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Isometric 3D Logo */}
        <div onClick={handleNavClick} className="cursor-pointer">
          <Logo />
        </div>

        {/* Center Pill Nav (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 dark:border-sky-500/15 bg-slate-100/80 dark:bg-slate-900/60 px-4 py-1.5 backdrop-blur-md shadow-sm">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Controls: Theme Toggle + Animation Stopper + Call Now + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 1. Dark/Light Mode Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-sky-500/20 bg-slate-100 dark:bg-slate-900/70 text-slate-700 dark:text-sky-300 hover:scale-105 active:scale-95 transition-all"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* 2. Animation Stopper / Continuer */}
          <button
            type="button"
            onClick={toggleAnimation}
            aria-label={isAnimationActive ? "Pause animations" : "Resume animations"}
            title={isAnimationActive ? "Pause animations" : "Resume animations"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-sky-500/20 bg-slate-100 dark:bg-slate-900/70 text-slate-700 dark:text-sky-300 hover:scale-105 active:scale-95 transition-all"
          >
            {isAnimationActive ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 fill-current ml-0.5" />
            )}
          </button>

          {/* 3. Call Now Action */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 active:scale-95 transition-all"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          {/* 4. Mobile Hamburger Button (Visible on < lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex lg:hidden items-center justify-center h-9 w-9 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Upgraded Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-sky-500/20 bg-white/95 dark:bg-[#070b14]/98 backdrop-blur-2xl px-5 py-5 shadow-2xl animate-in slide-in-from-top-3 duration-200 transition-colors">
          {/* Availability Status Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80 text-[11px]">
            <span className="text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">
              Navigation Hub
            </span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
              Available for Q4
            </span>
          </div>

          {/* Complete 2-Column Links Grid */}
          <nav className="grid grid-cols-2 gap-2 mt-3">
            {NAV_LINKS.map((item) => {
              const { icon: Icon, badge } = getNavMeta(item.href);
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                    isActive
                      ? "border-sky-500/40 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-sky-400 font-semibold shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/70 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive
                          ? "bg-blue-600/20 text-blue-600 dark:text-sky-400"
                          : "bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-semibold">{item.label}</span>
                  </div>

                  {badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/15 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      {badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Direct WhatsApp & Call Dock */}
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-200 font-semibold active:scale-95 transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
              <span>Direct Call</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#22c55e] text-white text-xs font-semibold shadow-md shadow-emerald-500/20 hover:bg-[#16a34a] active:scale-95 transition-all"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}