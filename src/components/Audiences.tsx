// Datos editables: src/data/audiences.ts
import { useReveal } from "@/hooks/use-reveal";
import { audiences } from "@/data/audiences";

export function Audiences() {
  const titleRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 md:py-44 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div ref={titleRef} className="reveal-up max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="label-eyebrow">Para quién es Sambrizzi</span>
          </div>
          <h2 className="heading-editorial text-5xl md:text-7xl lg:text-8xl">
            Para quienes <br />
            <span className="italic text-gold-gradient">no esperan</span> el momento. <br />
            Lo crean.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20">
          {audiences.map((a, i) => (
            <div
              key={a.n}
              className="bg-background p-8 md:p-10 group hover:bg-ink transition-colors duration-700"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-display text-gold text-3xl">{a.n}</span>
                <span className="label-meta">Audiencia</span>
              </div>

              <h3 className="heading-editorial text-3xl md:text-4xl text-foreground mb-8 group-hover:text-gold-gradient transition-all">
                {a.label}
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="label-meta mb-2 text-destructive/70">El problema</div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">{a.problem}</p>
                </div>
                <div className="hairline-gold" />
                <div>
                  <div className="label-meta mb-2 text-gold">Tu solución</div>
                  <p className="font-sans text-sm text-foreground leading-relaxed">{a.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
