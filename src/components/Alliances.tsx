// Datos editables: src/data/alliances.ts
import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { alliances, alliancesQuote } from "@/data/alliances";

export function Alliances() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 bg-ink border-y border-border overflow-hidden">
      <div ref={ref} className="reveal-up mx-auto max-w-[1600px] px-6 md:px-10 text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gold" />
          <span className="label-eyebrow">Alianzas Internacionales</span>
          <div className="h-px w-12 bg-gold" />
        </div>
        <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-foreground/90 max-w-3xl mx-auto leading-relaxed">
          {alliancesQuote}
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...alliances, ...alliances].map((a, i) => (
            <Link
              key={i}
              to="/producciones"
              className="flex items-center gap-16 shrink-0 group"
              aria-label={`Ver producciones · ${a}`}
            >
              <span className="font-display italic text-3xl md:text-4xl text-foreground/60 group-hover:text-gold transition-colors whitespace-nowrap">
                {a}
              </span>
              <span className="text-gold text-2xl">✦</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link to="/producciones" className="label-meta text-gold/70 hover:text-gold transition-colors">
          Ver producciones · Eventos →
        </Link>
      </div>
    </section>
  );
}
