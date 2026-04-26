// Datos editables: src/data/impact.ts
import { useEffect, useState } from "react";
import { useReveal, useCountUp } from "@/hooks/use-reveal";
import { stats, cities, impactCopy } from "@/data/impact";

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [start, setStart] = useState(false);
  const containerRef = useReveal<HTMLDivElement>(0.4);
  const numberRef = useCountUp(end, 2200, start);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [containerRef]);

  return (
    <div ref={containerRef} className="reveal-up">
      <div className="font-display text-6xl md:text-7xl lg:text-8xl text-gold-gradient leading-none">
        <span ref={numberRef}>0</span>
        <span>{suffix}</span>
      </div>
    </div>
  );
}

export function ImpactInternational() {
  const titleRef = useReveal<HTMLDivElement>();

  return (
    <section id="internacional" className="relative py-32 md:py-44 bg-ink overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full opacity-20 blur-3xl"
           style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }} />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div ref={titleRef} className="reveal-up max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="label-eyebrow">{impactCopy.eyebrow}</span>
          </div>
          <h2 className="heading-editorial text-5xl md:text-7xl lg:text-8xl text-foreground">
            13 años posicionando <br />
            la <span className="italic text-gold-gradient">Alta Costura</span> argentina <br />
            entre la élite mundial.
          </h2>
          <p className="mt-8 font-sans text-foreground/70 max-w-2xl leading-relaxed">
            {impactCopy.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="grid grid-cols-2 gap-x-8 gap-y-14">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-gold/30 pl-6">
                <Counter end={s.value} suffix={s.suffix} />
                <div className="mt-3 label-meta text-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="relative aspect-square w-full max-w-[560px] mx-auto">
            <div className="absolute inset-0 rounded-full opacity-30 blur-2xl"
                 style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }} />

            <svg viewBox="0 0 100 100" className="relative w-full h-full">
              <path
                d="M 30,18 Q 22,22 20,30 Q 17,38 22,46 Q 25,55 30,62 Q 35,72 40,82 Q 45,90 50,92 Q 55,90 56,80 Q 58,70 55,60 Q 60,55 62,45 Q 65,35 60,25 Q 55,18 45,16 Q 38,15 30,18 Z"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="0.3"
                opacity="0.4"
              />
              {cities.slice(1).map((c, i) => (
                <line
                  key={i}
                  x1={cities[0].x}
                  y1={cities[0].y}
                  x2={c.x}
                  y2={c.y}
                  stroke="var(--gold)"
                  strokeWidth="0.15"
                  opacity="0.5"
                  strokeDasharray="0.5 0.5"
                />
              ))}
              {cities.map((c, i) => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r="2.5" fill="var(--gold)" opacity="0.3">
                    <animate attributeName="r" values="1.5;4;1.5" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                  </circle>
                  <circle cx={c.x} cy={c.y} r="0.8" fill="var(--gold-bright)" />
                </g>
              ))}
            </svg>

            <div className="absolute inset-0 pointer-events-none">
              {cities.map((c) => (
                <div
                  key={c.name}
                  className="absolute label-meta text-[0.55rem] text-foreground/70 -translate-x-1/2 mt-3"
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                >
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
