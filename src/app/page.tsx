import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialBanner from "@/components/sections/TestimonialBanner";
import EstimateCalc from "@/components/sections/EstimateCalc";
import AuditBanner from "@/components/sections/AuditBanner";

export const instant = false;

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
      <TestimonialBanner />
      <EstimateCalc />
      <AuditBanner />
    </div>
  );
}