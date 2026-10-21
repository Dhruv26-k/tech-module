import { TECH_STACK } from "@/data/services";

export default function TechMarquee() {
  // Duplicating the array ensures an unbroken, continuous loop
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="animate-marquee flex items-center gap-3">
        {duplicatedTech.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="flex-shrink-0 rounded-full border border-sky-500/15 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md transition-colors hover:border-sky-400 hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}