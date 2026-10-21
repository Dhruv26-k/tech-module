export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  timeline?: string;
  detailsHref?: string;
}

export const TRUSTED_CLIENTS = [
  "Kiln & Co",
  "Aarav Dental",
  "Northfold",
  "Tessera Labs",
  "Greenpath Foods",
];

export const TECH_STACK = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Shopify",
  "WordPress",
  "Figma",
  "n8n",
  "Zapier",
  "WhatsApp API",
  "Vercel",
  "Next.js",
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "web-design",
    title: "Website design",
    description: "Layouts built around one goal: getting the right visitor to take the next step.",
  },
  {
    id: "development",
    title: "Development",
    description: "Hand-coded, accessible sites that load in under two seconds.",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Shopify and custom stores with checkout flows tuned to sell.",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Lead capture, WhatsApp follow-ups, and reports that run without you.",
  },
  {
    id: "care-growth",
    title: "Care and growth",
    description: "Hosting, updates, and monthly improvements based on real data.",
  },
];

export const PROJECT_STEPS = [
  {
    step: "1",
    title: "Discover",
    description: "A 20-minute call, then a short brief on your goals and customers.",
  },
  {
    step: "2",
    title: "Design",
    description: "Wireframes first, then full designs you can click through.",
  },
  {
    step: "3",
    title: "Build",
    description: "We code it, connect your tools, and test on real devices.",
  },
  {
    step: "4",
    title: "Launch",
    description: "Go live, check the numbers, and tune what is not working.",
  },
];