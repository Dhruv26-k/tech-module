"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring, type Variants } from "motion/react";
import {
  Phone,
  Sun,
  Moon,
  Play,
  Pause,
  Home,
  Layers,
  Briefcase,
  Tag,
  UserCheck,
  BookOpen,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Radio,
} from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/data/navigation";
import { useThemeAnimation } from "@/context/ThemeAnimationContext";
import { buildWhatsAppUrl } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

// Metadata mapping for navigation icons & badges
const getNavMeta = (href: string) => {
  switch (href) {
    case "/":
      return { icon: Home, badge: null };
    case "/services":
      return { icon: Layers, badge: "5" };
    case "/portfolio":
      return { icon: Briefcase, badge: "Live" };
    case "/pricing":
      return { icon: Tag, badge: "₹4.9k" };
    case "/about":
      return { icon: UserCheck, badge: null };
    case "/blog":
      return { icon: BookOpen, badge: null };
    case "/contact":
      return { icon: Sparkles, badge: "24h Quote" };
    default:
      return { icon: ArrowRight, badge: null };
  }
};

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.25,
      ease: [0.32, 0.72, 0, 1],
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, y: -10, scale: 0.96 },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 24 },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme, isAnimationActive, toggleAnimation } =
    useThemeAnimation();

  // Top Scroll Progress Line
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
      {/* 1. Neon Top Progress Laser */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 origin-left z-[100] shadow-[0_0_12px_rgba(56,189,248,0.8)]"
      />

      <header className="sticky top-0 z-50 w-full border-b border-sky-200/70 dark:border-sky-500/10 bg-[#e8f3fe]/85 dark:bg-[#070b14]/90 backdrop-blur-xl transition-colors duration-300">
        {/* ========================================================
            DESKTOP HEADER (Single Row, Visible on lg and up)
           ======================================================== */}
        <div className="hidden lg:flex mx-auto max-w-7xl items-center justify-between px-6 lg:px-8 py-3">
          <div onClick={handleNavClick} className="cursor-pointer shrink-0">
            <Logo />
          </div>

          {/* Gliding Spring Nav Pill */}
          <nav className="flex items-center gap-1 rounded-full border border-sky-200/80 dark:border-sky-500/15 bg-white/70 dark:bg-slate-900/60 px-4 py-1.5 backdrop-blur-md shadow-sm">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-desktop-pill"
                      className="absolute inset-0 rounded-full bg-blue-600 shadow-md shadow-blue-500/30 z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Controls */}
          <div className="flex items-center gap-2.5">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-200 dark:border-sky-500/20 bg-white/80 dark:bg-slate-900/70 text-slate-700 dark:text-sky-300 shadow-sm transition-colors"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-blue-600" />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              type="button"
              onClick={toggleAnimation}
              aria-label={isAnimationActive ? "Pause animations" : "Resume animations"}
              title={isAnimationActive ? "Pause animations" : "Resume animations"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-200 dark:border-sky-500/20 bg-white/80 dark:bg-slate-900/70 text-slate-700 dark:text-sky-300 shadow-sm transition-colors"
            >
              {isAnimationActive ? (
                <Pause className="h-4 w-4 text-blue-600 dark:text-sky-300" />
              ) : (
                <Play className="h-4 w-4 fill-current ml-0.5 text-blue-600 dark:text-sky-300" />
              )}
            </motion.button>

            <motion.a
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 1.04 }}
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/30 hover:bg-blue-500 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>Call Now</span>
            </motion.a>
          </div>
        </div>

        {/* ========================================================
            UNIQUE CYBER TWO-TIER MOBILE HEADER (< lg)
           ======================================================== */}
        <div className="flex flex-col w-full lg:hidden">
          {/* TIER 1: Brand Space + Pulsing Radar Beacon */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-sky-200/60 dark:border-slate-800/60 bg-[#e8f3fe]/70 dark:bg-[#070b14]/60">
            <div onClick={handleNavClick} className="cursor-pointer shrink-0">
              <Logo />
            </div>

            {/* Radar Pulse Badge */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-mono font-bold tracking-tight uppercase">
                Ready Q4
              </span>
            </div>
          </div>

          {/* TIER 2: Floating Dynamic Control Strip */}
          <div className="flex items-center justify-between px-3.5 py-2 bg-[#dbeafe]/70 dark:bg-slate-950/80 backdrop-blur-xl border-b border-sky-200/50 dark:border-slate-800/50">
            {/* Morphing Animated Menu Capsule */}
            <motion.button
              whileTap={{ scale: 0.93 }}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all shadow-sm ${
                mobileMenuOpen
                  ? "border-sky-500/50 bg-sky-500/15 text-blue-700 dark:text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                  : "border-sky-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200"
              }`}
            >
              {/* Morphing Hamburger SVG */}
              <div className="relative w-4 h-3.5 flex flex-col justify-between items-center">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="w-full h-[2px] bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-[2px] bg-current rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="w-full h-[2px] bg-current rounded-full origin-center"
                />
              </div>
              <span className="text-xs font-bold tracking-tight">
                {mobileMenuOpen ? "Close" : "Menu"}
              </span>
            </motion.button>

            {/* Quick Micro-Actions */}
            <div className="flex items-center gap-2">
              <motion.a
                whileTap={{ scale: 0.93 }}
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-1.5 rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm"
              >
                <Phone className="h-3 w-3 text-blue-500" />
                <span>Call</span>
              </motion.a>

              {/* Glowing Pulse WhatsApp CTA */}
              <motion.a
                whileTap={{ scale: 0.93 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-[0_4px_14px_rgba(34,197,94,0.3)]"
              >
                <MessageCircle className="h-3.5 w-3.5 fill-white" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* ========================================================
            ANIMATED CYBER HUD DRAWER (Adaptive Light & Dark)
           ======================================================== */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden w-full border-t border-sky-300/40 dark:border-sky-500/20 bg-[#e8f3fe]/95 dark:bg-[#070b14]/98 backdrop-blur-2xl shadow-[0_20px_50px_rgba(14,165,233,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:hidden transition-colors"
            >
              <div className="px-4 py-4 space-y-3.5">
                {/* HUD Header Bar: Status & Hardware Micro-Switches */}
                <div className="flex items-center justify-between pb-3 border-b border-sky-200/70 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 animate-pulse" />
                    <span className="text-[11px] font-mono tracking-wider uppercase text-slate-600 dark:text-slate-400 font-semibold">
                      Tech Module HUD
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Dark/Light Switch */}
                    <motion.button
                      whileTap={{ scale: 0.88, rotate: 180 }}
                      type="button"
                      onClick={toggleTheme}
                      aria-label="Toggle Theme"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-sky-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] font-medium shadow-sm"
                    >
                      {isDark ? (
                        <Sun className="h-3 w-3 text-amber-400" />
                      ) : (
                        <Moon className="h-3 w-3 text-blue-600" />
                      )}
                      <span>{isDark ? "Light" : "Dark"}</span>
                    </motion.button>

                    {/* Animation Switch */}
                    <motion.button
                      whileTap={{ scale: 0.88 }}
                      type="button"
                      onClick={toggleAnimation}
                      aria-label="Toggle Animation"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-sky-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] font-medium shadow-sm"
                    >
                      {isAnimationActive ? (
                        <>
                          <Pause className="h-3 w-3 text-blue-600 dark:text-sky-400" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 fill-current text-emerald-600 dark:text-emerald-400 ml-0.5" />
                          <span>Play</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Staggered Navigation Grid */}
                <nav className="grid grid-cols-2 gap-2">
                  {NAV_LINKS.map((item) => {
                    const { icon: Icon, badge } = getNavMeta(item.href);
                    const isActive = pathname === item.href;
                    const isContact = item.href === "/contact";

                    return (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        whileTap={{ scale: 0.95 }}
                        className={isContact ? "col-span-2" : "col-span-1"}
                      >
                        <Link
                          href={item.href}
                          onClick={handleNavClick}
                          className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                            isContact
                              ? "border-sky-400/60 dark:border-sky-500/50 bg-gradient-to-r from-blue-600/15 via-sky-500/10 to-transparent dark:from-blue-600/25 dark:via-sky-600/15 text-slate-900 dark:text-white shadow-sm"
                              : isActive
                              ? "border-blue-500/50 dark:border-sky-400/60 bg-blue-500/10 dark:bg-blue-600/20 text-blue-600 dark:text-sky-300 font-semibold shadow-sm"
                              : "border-sky-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 hover:border-sky-400"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isContact
                                  ? "bg-blue-600 text-white shadow-sm"
                                  : isActive
                                  ? "bg-blue-500/20 text-blue-600 dark:text-sky-300"
                                  : "bg-sky-100 dark:bg-slate-800 text-blue-600 dark:text-slate-400"
                              }`}
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div className="flex flex-col text-left">
                              <span className="text-xs font-semibold leading-tight text-slate-900 dark:text-white">
                                {isContact ? "Contact Us" : item.label}
                              </span>
                              {isContact && (
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                                  Instant response • Fixed quote
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
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 dark:bg-sky-500/20 text-blue-600 dark:text-sky-300 border border-blue-500/20 dark:border-sky-500/30 shrink-0">
                                {badge}
                              </span>
                            )
                          )}
                        </Link>
                      </motion.div>
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