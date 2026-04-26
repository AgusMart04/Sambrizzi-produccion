// Datos editables: src/data/calendar.ts
import { useReveal } from "@/hooks/use-reveal";
import { calendar2026, calendarQuote } from "@/data/calendar";

export function Calendar2026() {
  const titleRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 md:py-44 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div ref={titleRef} className="reveal-up grid md:grid-cols-12 gap-8 items-end mb-16 border-b border-gold/30 pb-10">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="label-eyebrow">Calendario Oficial · Temporada 2026</span>
            </div>
            <h2 className="heading-editorial text-5xl md:text-7xl lg:text-8xl">
              {calendar2026.length} paradas. <br />
              <span className="italic text-gold-gradient">Un solo</span> productor.
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="font-sans text-foreground/70 leading-relaxed">
              La agenda mundial de Sambrizzi Producción para 2026.
              De Buenos Aires a Mumbai, pasando por París, Cannes y Nueva York.
            </p>
          </div>
        </div>

        <div ref={listRef} className="reveal-up divide-y divide-gold/15">
          {calendar2026.map((c, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 gap-4 py-5 md:py-6 items-baseline hover:bg-ink/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <span className="col-span-2 md:col-span-1 label-meta text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl text-foreground group-hover:text-gold-gradient transition-all">
                {c.city}
              </h3>
              <span className="col-span-5 md:col-span-3 label-meta text-foreground/60">
                {c.country}
              </span>
              <span className="col-span-7 md:col-span-4 font-sans text-sm text-foreground/80 md:text-right">
                {c.event}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-gold/30">
          <p className="font-display italic text-xl md:text-2xl text-foreground/80 max-w-xl">
            "{calendarQuote.text.replace(calendarQuote.highlight, "")}
            <span className="text-gold not-italic">{calendarQuote.highlight}</span>."
          </p>
          <span className="label-meta text-gold">— {calendarQuote.author}</span>
        </div>
      </div>
    </section>
  );
}
