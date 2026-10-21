"use client";

import { useState, useMemo, FormEvent } from "react";
import { MessageCircle, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

const DATES = [
  { label: "Thu, 22 Oct", value: "Thursday, 22 Oct" },
  { label: "Fri, 23 Oct", value: "Friday, 23 Oct" },
  { label: "Sat, 24 Oct", value: "Saturday, 24 Oct" },
  { label: "Mon, 26 Oct", value: "Monday, 26 Oct" },
  { label: "Tue, 27 Oct", value: "Tuesday, 27 Oct" },
];

const TIMES = ["11:00 AM", "03:00 PM", "06:00 PM"];

const SERVICE_OPTIONS = [
  "A new website",
  "Website redesign",
  "E-commerce store",
  "Automation & CRM",
  "Monthly maintenance & care",
];

export default function ContactPage() {
  // Slot Picker State
  const [selectedDate, setSelectedDate] = useState(DATES[0].value);
  const [selectedTime, setSelectedTime] = useState(TIMES[0]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    need: SERVICE_OPTIONS[0],
    goals: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Dynamic WhatsApp Link for Selected Slot
  const slotWhatsAppUrl = useMemo(() => {
    const text = `Hi Tech Module, I'd like to book a free 20-minute call on ${selectedDate} at ${selectedTime}.`;
    return buildWhatsAppUrl(COMPANY_INFO.whatsapp, text);
  }, [selectedDate, selectedTime]);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `New Project Inquiry:
- Name: ${formData.name}
- Email: ${formData.email}
- URL: ${formData.url || "N/A"}
- Service: ${formData.need}
- Goals: ${formData.goals || "N/A"}`;

    const url = buildWhatsAppUrl(COMPANY_INFO.whatsapp, message);
    setFormSubmitted(true);
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Glow Backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(14,165,233,0.15),transparent_70%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Project Intake Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-sky-500/15 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Tell us about your project
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              We reply within one working day, with a plan and a fixed quote after a short call.
            </p>

            <form onSubmit={handleFormSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Website URL <span className="text-slate-500 font-normal">(for the free audit)</span>
                </label>
                <input
                  type="url"
                  placeholder="https://"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  What do you need?
                </label>
                <select
                  value={formData.need}
                  onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Tell us a little about your goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe what you want to achieve..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-98 transition-all"
              >
                <span>Send project inquiry</span>
                <Send className="h-4 w-4" />
              </button>

              {formSubmitted && (
                <p className="flex items-center justify-center gap-2 text-xs text-sky-400 font-medium">
                  <CheckCircle2 className="h-4 w-4" />
                  Inquiry forwarded directly via WhatsApp!
                </p>
              )}
            </form>
          </div>

          {/* Right Column: 20-min Call Slot Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-sky-500/20 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-white">Prefer to talk?</h2>
              <p className="mt-1 text-xs text-slate-400">
                Book a free 20-minute call. No pitch, just honest advice.
              </p>

              {/* Day Selector */}
              <div className="mt-6">
                <span className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Select Date
                </span>
                <div className="flex flex-wrap gap-2">
                  {DATES.map((date) => {
                    const isSelected = selectedDate === date.value;
                    return (
                      <button
                        key={date.value}
                        type="button"
                        onClick={() => setSelectedDate(date.value)}
                        className={`rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                            : "border border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        {date.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selector */}
              <div className="mt-5">
                <span className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Select Time
                </span>
                <div className="flex flex-wrap gap-2">
                  {TIMES.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                            : "border border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={slotWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-98 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Request this slot on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Contact & Studio Hours */}
            <div className="rounded-2xl border border-sky-500/10 bg-slate-900/40 p-5 backdrop-blur-md space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-400 hover:text-sky-400">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300 pt-2 border-t border-slate-800/60">
                <Clock className="h-4 w-4 text-sky-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Studio hours</p>
                  <p className="text-slate-400">Monday to Friday, 10am to 6pm IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}