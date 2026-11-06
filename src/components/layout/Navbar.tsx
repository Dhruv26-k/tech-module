"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
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
      return { icon: Sparkles, badge: "Let's Talk" };
    default:
      return { icon: ArrowRight, badge: null };
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme, isAnimationActive, toggleAnimation } =
    useThemeAnimation();

  // Scroll Progress Physics
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp,
    "Hi Tech Module, I'd like to discuss a website project."
  );

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Dynamic Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 origin-left z-[100] shadow-[0_0_8px_rgba(56,189,248,0.6)]"
      />

      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-sky-500/10 bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md transition-colors">
        {/* ========================================================
            1. DESKTOP HEADER (Single Row, Visible on lg and up)
           ======================================================== */}
        <div className="hidden lg:flex mx-auto max-w-7xl items-center justify-between px-6 lg:px-8 py-3">
          {/* Brand Logo */}
          <div onClick={handleNavClick} className="cursor-pointer shrink-0">
            <Logo />
          </div>

          {/* Center Pill Nav with Gliding Spring Background */}
          <nav className="flex items-center gap-1 rounded-full border border-slate-200 dark:border-sky-500/15 bg-slate-100/80 dark:bg-slate-900/60 px-4 py-1.5 backdrop-blur-md shadow-sm">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-desktop-pill"
                      className="absolute inset-0 rounded-full bg-blue-600 shadow-sm z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            {/* Theme Switcher */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-sky-500/20 bg-slate-100 dark:bg-slate-900/70 text-slate-700 dark:text-sky-300"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.button>

            {/* Animation Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              type="button"
              onClick={toggleAnimation}
              aria-label={isAnimationActive ? "Pause animations" : "Resume animations"}
              title={isAnimationActive ? "Pause animations" : "Resume animations"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-sky-500/20 bg-slate-100 dark:bg-slate-900/70 text-slate-700 dark:text-sky-300"
            >
              {isAnimationActive ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 fill-current ml-0.5" />
              )}
            </motion.button>

            {/* Call Now */}
            <motion.a
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 1.03 }}
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/25 hover:bg-blue-500 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>Call Now</span>
            </motion.a>
          </div>
        </div>

        {/* ========================================================
            2. MOBILE TWO-TIER HEADER (Visible on screens < lg)
           ======================================================== */}
        <div className="flex flex-col w-full lg:hidden">
          {/* TIER 1: Dedicated Brand Logo + Status */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/80 dark:border-slate-800/80">
            <div onClick={handleNavClick} className="cursor-pointer shrink-0">
              <Logo />
            </div>

            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[10.5px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
              Available Q4
            </span>
          </div>

          {/* TIER 2: Navigation & Action Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-50/60 dark:bg-slate-950/50 backdrop-blur-md">
            {/* Menu Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/90 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="h-3.5 w-3.5 text-rose-500" />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <Menu className="h-3.5 w-3.5 text-sky-400" />
                  <span>Navigation</span>
                </>
              )}
            </motion.button>

            {/* Direct Communication Buttons */}
            <div className="flex items-center gap-2">
              <motion.a
                whileTap={{ scale: 0.94 }}
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm"
              >
                <Phone className="h-3 w-3 text-blue-500" />
                <span>Call</span>
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.94 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-[#22c55e] px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="h-3 w-3 fill-white" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. ANIMATED MOBILE DRAWER MENU (AnimatePresence)
           ======================================================== */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden w-full border-t border-slate-200 dark:border-sky-500/20 bg-white/95 dark:bg-[#070b14]/98 backdrop-blur-2xl shadow-2xl lg:hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {/* In-Drawer Controls: Theme & Animation */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Menu & Preferences
                  </span>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      type="button"
                      onClick={toggleTheme}
                      aria-label="Toggle Theme"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {isDark ? (
                        <Sun className="h-3.5 w-3.5 text-amber-400" />
                      ) : (
                        <Moon className="h-3.5 w-3.5 text-sky-400" />
                      )}
                      <span>{isDark ? "Light" : "Dark"}</span>
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      type="button"
                      onClick={toggleAnimation}
                      aria-label="Toggle Animation"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {isAnimationActive ? (
                        <>
                          <Pause className="h-3.5 w-3.5 text-sky-400" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-3.5 w-3.5 fill-current text-emerald-400 ml-0.5" />
                          <span>Play</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* 2-Column Links Grid with Full-Width Contact Link */}
                <nav className="grid grid-cols-2 gap-2">
                  {NAV_LINKS.map((item) => {
                    const { icon: Icon, badge } = getNavMeta(item.href);
                    const isActive = pathname === item.href;
                    const isContact = item.href === "/contact";

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                          isContact
                            ? "col-span-2 border-sky-500/50 bg-gradient-to-r from-blue-600/15 via-sky-600/10 to-transparent text-slate-900 dark:text-white shadow-sm"
                            : isActive
                            ? "border-sky-500/40 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-sky-400 font-semibold"
                            : "border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/70 text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${
                              isContact
                                ? "bg-blue-600 text-white shadow-sm"
                                : isActive
                                ? "bg-blue-600/20 text-blue-600 dark:text-sky-400"
                                : "bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-semibold leading-tight">
                              {isContact ? "Contact Us" : item.label}
                            </span>
                            {isContact && (
                              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                                Get a fixed proposal in 24 hours
                              </span>
                            )}
                          </div>
                        </div>

                        {isContact ? (
                          <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-sky-400 shrink-0">
                            <span>Let&apos;s Talk</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </div>
                        ) : (
                          badge && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/15 dark:bg-sky-500/20 text-blue-600 dark:text-sky-400 border border-sky-500/20 shrink-0">
                              {badge}
                            </span>
                          )
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}