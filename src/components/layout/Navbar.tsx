"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Sun, Moon, Play, Pause } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/data/navigation";
import { useThemeAnimation } from "@/context/ThemeAnimationContext";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const { isDark, toggleTheme, isAnimationActive, toggleAnimation } =
    useThemeAnimation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-500/10 bg-white/70 dark:bg-[#070b14]/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Isometric 3D Logo */}
        <Logo />

        {/* Center Pill Nav */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 dark:border-sky-500/15 bg-slate-100/80 dark:bg-slate-900/60 px-4 py-1.5 backdrop-blur-md">
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

        {/* Controls: Theme Toggle + Animation Stopper + Call Now */}
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
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 active:scale-95 transition-all"
          >
            <Phone className="h-4 w-4 fill-current" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}