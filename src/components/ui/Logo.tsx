"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 select-none transition-transform active:scale-95"
      aria-label="Tech Module Home"
    >
      {/* 3D Isometric TM Mark */}
      <div className="h-10 w-10 shrink-0">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_4px_12px_rgba(0,102,255,0.35)]"
        >
          {/* Top Roof */}
          <path d="M 100 24 L 166 60 L 145 72 L 100 48 L 55 72 L 34 60 Z" fill="#0066FF" />
          {/* Left 'T' */}
          <path d="M 28 80 L 86 80 L 86 98 L 68 98 L 68 140 L 98 158 L 98 178 L 48 148 L 48 98 L 28 98 Z" fill="#0055FF" />
          {/* Right 'M' */}
          <path d="M 102 96 L 126 122 L 150 96 L 168 96 L 168 150 L 150 162 L 150 126 L 126 150 L 102 126 L 102 178 L 102 96 Z" fill="#334155" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="text-lg font-black tracking-tight leading-none text-white">
          TECH <span className="text-[#0066FF]">MODULE</span>
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="h-[1px] w-2.5 bg-[#0066FF] rounded-full" />
          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-slate-400 font-mono">
            Digital Solutions
          </span>
          <span className="h-[1px] w-2.5 bg-[#0066FF] rounded-full" />
        </div>
      </div>
    </Link>
  );
}