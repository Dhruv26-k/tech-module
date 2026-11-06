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
      {/* 3D Isometric TM Cube Mark (Guaranteed Mobile Rendering) */}
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 min-w-[36px] min-h-[36px] shrink-0">
        <svg
          viewBox="0 0 200 200"
          width="36"
          height="36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_4px_12px_rgba(0,102,255,0.4)]"
        >
          {/* Top Isometric Roof: Bright Electric Blue */}
          <path
            d="M 100 24 L 166 60 L 145 72 L 100 48 L 55 72 L 34 60 Z"
            fill="#38BDF8"
          />

          {/* Left Block: Letter 'T' in Vivid Royal Blue */}
          <path
            d="M 28 80 L 86 80 L 86 98 L 68 98 L 68 140 L 98 158 L 98 178 L 48 148 L 48 98 L 28 98 Z"
            fill="#0066FF"
          />

          {/* Left Block Inner Highlight Facet */}
          <path
            d="M 48 98 L 68 98 L 68 140 L 48 128 Z"
            fill="#2563EB"
          />

          {/* Right Block: Letter 'M' Outer Shape (High-Contrast Slate Navy) */}
          <path
            d="M 102 96 L 126 122 L 150 96 L 168 96 L 168 150 L 150 162 L 150 126 L 126 150 L 102 126 L 102 178 L 102 96 Z"
            fill="#475569"
          />

          {/* Letter 'M' Center Shading Facet */}
          <path
            d="M 126 122 L 150 96 L 150 126 L 126 150 Z"
            fill="#64748B"
          />

          {/* Bottom Isometric Shadow Anchor */}
          <path
            d="M 98 178 L 102 178 L 102 186 L 98 186 Z"
            fill="#0066FF"
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