"use client";

import Link from "next/link";

interface LogoProps {
  showTagline?: boolean;
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({
  showTagline = true,
  className = "",
  iconOnly = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 select-none transition-transform active:scale-95 ${className}`}
      aria-label="Tech Module Home"
    >
      {/* 3D Isometric TM Mark (Transparent SVG) */}
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_4px_12px_rgba(0,102,255,0.25)]"
        >
          <defs>
            <linearGradient id="tm-roof" x1="34" y1="24" x2="166" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0066FF" />
              <stop offset="1" stopColor="#0047BA" />
            </linearGradient>

            <linearGradient id="tm-left-t" x1="28" y1="80" x2="98" y2="178" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0055FF" />
              <stop offset="1" stopColor="#003ACC" />
            </linearGradient>

            <linearGradient id="tm-right-m" x1="102" y1="96" x2="168" y2="178" gradientUnits="userSpaceOnUse">
              <stop stopColor="#334155" />
              <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
          </defs>

          {/* Isometric Roof */}
          <path
            d="M 100 24 L 166 60 L 145 72 L 100 48 L 55 72 L 34 60 Z"
            fill="url(#tm-roof)"
          />

          {/* Letter 'T' */}
          <path
            d="M 28 80 L 86 80 L 86 98 L 68 98 L 68 140 L 98 158 L 98 178 L 48 148 L 48 98 L 28 98 Z"
            fill="url(#tm-left-t)"
          />

          {/* Letter 'M' */}
          <path
            d="M 102 96 L 126 122 L 150 96 L 168 96 L 168 150 L 150 162 L 150 126 L 126 150 L 102 126 L 102 178 L 102 96 Z"
            fill="url(#tm-right-m)"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {!iconOnly && (
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center text-base sm:text-lg font-black tracking-tight">
            <span className="text-slate-900 dark:text-white transition-colors">
              TECH
            </span>
            <span className="ml-1 text-[#0066FF] dark:text-[#38bdf8] transition-colors">
              MODULE
            </span>
          </div>

          {showTagline && (
            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-[1px] w-2 bg-[#0066FF] dark:bg-[#38bdf8] rounded-full shrink-0" />
              <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">
                Digital Solutions For Smart Businesses
              </span>
              <span className="h-[1px] w-2 bg-[#0066FF] dark:bg-[#38bdf8] rounded-full shrink-0" />
            </div>
          )}
        </div>
      )}
    </Link>
  );
}