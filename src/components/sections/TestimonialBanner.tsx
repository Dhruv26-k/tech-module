import { Quote } from "lucide-react";

export default function TestimonialBanner() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Metric Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-sky-500/20 bg-slate-900/60 p-5 backdrop-blur-md">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Aarav Dental
            </span>
            <p className="mt-1 text-xl sm:text-2xl font-bold text-sky-400">
              +142% online bookings{" "}
              <span className="text-sm font-normal text-slate-300">
                after a full redesign.
              </span>
            </p>
          </div>

          <div className="rounded-2xl border border-sky-500/20 bg-slate-900/60 p-5 backdrop-blur-md">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Kiln & Co
            </span>
            <p className="mt-1 text-xl sm:text-2xl font-bold text-sky-400">
              2.1x revenue{" "}
              <span className="text-sm font-normal text-slate-300">
                per visitor.
              </span>
            </p>
          </div>
        </div>

        {/* Featured Quote Card */}
        <div className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-r from-slate-900/90 to-[#0c142c]/90 p-8 sm:p-10 backdrop-blur-xl">
          <Quote className="h-10 w-10 text-sky-500/20 mb-4" />
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed text-white">
            “They explained every step in plain language, and our enquiries
            doubled within two months.”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
              M
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Meera S.</p>
              <p className="text-xs text-slate-400">Founder, Aarav Dental</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}