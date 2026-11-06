"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Layout,
  Code2,
  Zap,
  ShieldCheck,
  TrendingUp,
  Star,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

const FEATURE_CARDS = [
  {
    icon: Layout,
    color: "bg-blue-600/20 text-blue-400 border-blue-500/30",
    label: "Website Design",
  },
  {
    icon: Code2,
    color: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30",
    label: "Development",
  },
  {
    icon: Zap,
    color: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
    label: "Automation",
  },
  {
    icon: ShieldCheck,
    color: "bg-amber-600/20 text-amber-400 border-amber-500/30",
    label: "Maintenance & Care",
  },
  {
    icon: TrendingUp,
    color: "bg-rose-600/20 text-rose-400 border-rose-500/30",
    label: "Digital Marketing",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsapp,
    "Hi Tech Module, I'd like to discuss a website project."
  );

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10 pb-16 sm:pb-20 text-center">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[650px] bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(14,165,233,0.2),transparent_75%)]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Top Proof Pill: 15+ Projects & 4.9 Rating */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-slate-300 dark:border-sky-500/20 bg-slate-100/90 dark:bg-slate-900/70 px-5 py-2 text-xs backdrop-blur-md shadow-sm"
        >
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            15+ projects delivered
          </span>
          <span className="h-3.5 w-px bg-slate-300 dark:bg-slate-700" />
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
            ))}
            <span className="font-bold text-slate-800 dark:text-slate-200 ml-1">
              4.9 client rating
            </span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
        >
          Website Design <br />
          <span className="text-blue-600 dark:text-sky-400">Development</span> & Automation <br />
          For Growing Businesses
        </motion.h1>

        {/* Subtitle with Starting Price Pill */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Fast websites and smart automations that bring in leads and save you hours every week.{" "}
          <span className="inline-block mt-1 sm:mt-0 font-medium text-slate-800 dark:text-slate-200">
            Get yours starting at{" "}
            <span className="rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 font-bold text-emerald-600 dark:text-emerald-400">
              ₹4,999
            </span>
          </span>
        </motion.p>

        {/* 3 CTA Buttons with Spring Hover & Tap Physics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Phone className="h-4 w-4 text-blue-500" />
            <span>Call Us</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#22c55e]/25 hover:bg-[#16a34a] transition-colors"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>WhatsApp Us</span>
          </motion.a>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/pricing"
              className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span>View Pricing</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* 5 Feature Service Cards: Staggered Entrance + Hover Feedback */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-3.5 max-w-4xl mx-auto"
        >
          {FEATURE_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isLast = idx === FEATURE_CARDS.length - 1;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group flex items-center justify-center gap-2.5 rounded-2xl border border-slate-200 dark:border-sky-500/15 bg-white/60 dark:bg-slate-900/60 p-4 backdrop-blur-md shadow-sm hover:border-sky-500/40 transition-colors cursor-default ${
                  isLast
                    ? "col-span-2 md:col-span-1 flex-row md:flex-col"
                    : "flex-col"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${card.color} shadow-inner transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center">
                  {card.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}