"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "", showTagline = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-4 group select-none ${className}`}
    >
      {/* 3D Isometric 'TM' Hexagonal Logo Icon */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <defs>
            {/* Left 'T' & Top Chevron Royal-to-Bright Blue Gradient */}
            <linearGradient id="tmBlueGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2979FF" />
              <stop offset="50%" stopColor="#0052D4" />
              <stop offset="100%" stopColor="#002171" />
            </linearGradient>
            
            {/* Right 'M' High-Contrast 3D Dark Navy Gradient */}
            <linearGradient id="tmNavyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>

          {/* Isometric Top Cap (Cover) */}
          <path
            d="M50 14 L78 29.5 L67.5 35 L50 25 L32.5 35 L22 29.5 Z"
            fill="url(#tmBlueGrad)"
          />

          {/* Isometric Left 'T' Face */}
          <path
            d="M22 35 L48 50 L48 58 L37.5 52 L37.5 73.5 L48 79.5 L48 86 L29.5 75.5 L29.5 50.5 L22 46 Z"
            fill="url(#tmBlueGrad)"
          />

          {/* Isometric Right 'M' Face */}
          <path
            d="M52.5 51 L60 55.5 L60 77 L52.5 72.5 Z"
            fill="url(#tmNavyGrad)"
            className="dark:fill-sky-950"
          />
          <path
            d="M62.5 57 L78 66 L78 35.5 L66.5 29 L62.5 31.5 Z"
            fill="url(#tmNavyGrad)"
            className="dark:fill-slate-100"
          />
          <path
            d="M65.5 45.5 L78 52.5 L78 61.5 L65.5 54.5 L65.5 79.5 L58 75.5 L58 52.5 Z"
            fill="url(#tmNavyGrad)"
            className="dark:fill-slate-300"
          />
        </svg>
      </div>

      {/* Brand & Subtext block */}
      <div className="flex flex-col">
        {/* TECH MODULE typography with mode-adaptive color splitting */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-black tracking-wider text-[#0F172A] dark:text-white transition-colors duration-200">
            TECH
          </span>
          <span className="text-xl font-black tracking-wider text-[#0052D4] dark:text-blue-500 transition-colors duration-200">
            MODULE
          </span>
        </div>

        {/* Tagline Ribbon with Horizontal Separators */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-px w-3 bg-[#0052D4]/70 dark:bg-sky-500/50" />
            <span className="text-[8.5px] font-bold tracking-widest text-[#0F172A]/80 dark:text-slate-300 uppercase whitespace-nowrap">
              DIGITAL SOLUTIONS FOR SMART BUSINESSES
            </span>
            <span className="h-px w-3 bg-[#0052D4]/70 dark:bg-sky-500/50" />
          </div>
        )}
      </div>
    </Link>
  );
}