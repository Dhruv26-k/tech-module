"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layout,
  Code2,
  ShoppingCart,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Clock,
  Compass,
  PencilRuler,
  Cpu,
  Rocket,
} from "lucide-react";

interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  icon: React.ElementType;
}

const SERVICES: ServiceData[] = [
  {
    id: "web-design",
    title: "Website design",
    shortDesc: "Layouts built around one goal: getting the right visitor to take the next step.",
    fullDesc:
      "Research, wireframes, and polished UI in Figma. You approve each stage before we move on.",
    duration: "2–3 weeks",
    icon: Layout,
  },
  {
    id: "development",
    title: "Development",
    shortDesc: "Hand-coded, accessible sites that load in under two seconds.",
    fullDesc:
      "React, Next.js, or plain HTML and CSS, whichever fits. Accessible, fast, and easy for your team to edit.",
    duration: "2–4 weeks",
    icon: Code2,
  },
  {
    id: "digital-marketing",
    title: "Digital marketing",
    shortDesc: "Targeted campaigns, SEO, and paid ad funnels that generate qualified leads.",
    fullDesc:
      "Search visibility, Google & Meta ad funnels, and conversion tracking configured to drive measurable inbound inquiries.",
    duration: "Ongoing / Sprint",
    icon: TrendingUp,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    shortDesc: "Shopify and custom stores with checkout flows tuned to sell.",
    fullDesc:
      "Shopify builds and custom stores, with payments, shipping rules, and analytics set up.",
    duration: "4–6 weeks",
    icon: ShoppingCart,
  },
  {
    id: "automation",
    title: "Automation",
    shortDesc: "Lead capture, WhatsApp follow-ups, and reports that run without you.",
    fullDesc:
      "We connect your forms, WhatsApp, payments, and sheets so leads and invoices handle themselves.",
    duration: "1–2 weeks",
    icon: Zap,
  },
  {
    id: "care-growth",
    title: "Care and growth",
    shortDesc: "Hosting, updates, and monthly improvements based on real data.",
    fullDesc:
      "Hosting, security updates, and a monthly improvement sprint driven by your analytics.",
    duration: "Monthly",
    icon: ShieldCheck,
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Discover",
    desc: "A 20-minute call, then a short brief on your goals and customers.",
    icon: Compass,
  },
  {
    step: "2",
    title: "Design",
    desc: "Wireframes first, then full designs you can click through.",
    icon: PencilRuler,
  },
  {
    step: "3",
    title: "Build",
    desc: "We code it, connect your tools, and test on real devices.",
    icon: Cpu,
  },
  {
    step: "4",
    title: "Launch",
    desc: "Go live, check the numbers, and tune what is not working.",
    icon: Rocket,
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("web-design");

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(14,165,233,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What we do for you
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Tailored capabilities, one accountable team. Pick one or combine them.
          </p>
        </div>

        {/* Interactive Services Rows */}
        <div className="mt-12 space-y-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isSelected = activeTab === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`group cursor-pointer rounded-2xl border p-5 sm:p-6 transition-all duration-200 backdrop-blur-md ${
                  isSelected
                    ? "border-sky-500/50 bg-white/90 dark:bg-slate-900/90 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500/30"
                    : "border-slate-200 dark:border-sky-500/15 bg-white/60 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-sky-500/30 hover:bg-white/80 dark:hover:bg-slate-900/70"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Icon & Service Info */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        isSelected
                          ? "border-blue-500/40 bg-blue-600/20 text-blue-500 dark:text-sky-400"
                          : "border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 group-hover:text-sky-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                          {service.title}
                        </h3>
                        <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-sky-500/20 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-medium text-sky-600 dark:text-sky-400">
                          <Clock className="h-3 w-3" />
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                        {isSelected ? service.fullDesc : service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Right: Details Link */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-center shrink-0">
                    <span className="sm:hidden inline-flex items-center gap-1 rounded-full border border-sky-500/20 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-medium text-sky-600 dark:text-sky-400">
                      <Clock className="h-3 w-3" />
                      {service.duration}
                    </span>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-sky-400 hover:text-blue-500 dark:hover:text-sky-300 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How a Project Runs Sub-Section */}
        <div className="mt-28">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              How a project runs
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Fixed timelines, weekly updates, no jargon.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => {
              const StepIcon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative rounded-2xl border border-slate-200 dark:border-sky-500/15 bg-white/60 dark:bg-slate-900/40 p-5 backdrop-blur-md transition-all hover:border-sky-500/30 hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-xs font-bold text-sky-600 dark:text-sky-400">
                      {item.step}
                    </div>
                    <StepIcon className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}