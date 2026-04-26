import { useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Modal } from "@/components/Modal";
import { productions, type Production } from "@/data/productions";

export function Productions() {
  const titleRef = useReveal<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Production | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  };

  return (
    <section id="producciones" className="relative py-32 md:py-44 bg-ink overflow-hidden">
      <div ref={titleRef} className="reveal-up mx-auto max-w-[1600px] px-6 md:px-10 mb-16 flex items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="label-eyebrow">Producciones · Eventos</span>
          </div>
          <h2 className="heading-editorial text-5xl md:text-7xl lg:text-8xl">
            El <span className="italic text-gold-gradient">archivo</span>.
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            className="h-12 w-12 rounded-full border border-gold/40 hover:bg-gold hover:text-ink text-gold transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            className="h-12 w-12 rounded-full border border-gold/40 hover:bg-gold hover:text-ink text-gold transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory px-6 md:px-10"
        style={{ scrollbarWidth: "none" }}
      >
        {productions.map((p, i) => (
          <button
            key={p.slug}
            onClick={() => setActive(p)}
            className="card-luxury relative shrink-0 w-[80vw] md:w-[480px] lg:w-[560px] aspect-[3/4] snap-start text-left"
          >
            <div className={`absolute inset-0 transition-opacity duration-700 ${loadedImages.has(i) ? 'opacity-0' : 'opacity-100'} bg-ink/50`} />
            <img 
              src={p.cover} 
              alt={p.title} 
              className="h-full w-full object-cover"
              loading="lazy" 
              onLoad={() => setLoadedImages(prev => new Set(prev).add(i))}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="card-corner" />

            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="label-meta text-gold">N°{String(i + 1).padStart(2, "0")}</span>
                <span className="label-meta">{p.year}</span>
              </div>
              <div>
                <h3 className="heading-editorial text-3xl md:text-4xl text-foreground">{p.title}</h3>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-px w-6 bg-gold" />
                  <span className="label-meta text-foreground/80">{p.city} · {p.country}</span>
                </div>
                <span className="mt-4 inline-block label-meta text-gold/80">Ver detalle →</span>
              </div>
            </div>
          </button>
        ))}
        <div className="shrink-0 w-6" />
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} size="xl">
        {active && (
          <div className="p-6 md:p-12">
            <div className="grid md:grid-cols-12 gap-8 mb-10">
              <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden">
                <img src={active.cover} alt={active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-gold/30" />
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <span className="label-eyebrow">{active.year} · {active.country}</span>
                <h3 className="heading-editorial text-4xl md:text-5xl mt-4">
                  {active.title}
                </h3>
                <div className="hairline-gold my-6 max-w-[180px]" />
                <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                  <span className="text-gold">{active.role}</span>
                  <br />
                  {active.city} · {active.country} · {active.year}
                </p>

                {(active.designers || active.models) && (
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {active.designers !== undefined && (
                      <div className="border-l border-gold/40 pl-4">
                        <div className="font-display text-3xl text-gold-gradient">{active.designers}+</div>
                        <div className="label-meta mt-1">Diseñadores</div>
                      </div>
                    )}
                    {active.models !== undefined && (
                      <div className="border-l border-gold/40 pl-4">
                        <div className="font-display text-3xl text-gold-gradient">{active.models}+</div>
                        <div className="label-meta mt-1">Modelos</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <p className="font-sans text-base md:text-lg text-foreground/80 leading-loose max-w-3xl">
              {active.description}
            </p>

            {active.highlights && (
              <ul className="mt-8 grid md:grid-cols-3 gap-4">
                {active.highlights.map((h, i) => (
                  <li key={i} className="border-l border-gold/40 pl-4 py-2">
                    <span className="label-meta text-gold">N°{String(i + 1).padStart(2, "0")}</span>
                    <p className="font-display text-lg text-foreground mt-2">{h}</p>
                  </li>
                ))}
              </ul>
            )}

            {active.gallery.length > 1 && (
              <div className="mt-12">
                <span className="label-eyebrow">Galería del proyecto</span>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {active.gallery.map((src, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden">
                      <img src={src} alt={`${active.title} ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 ring-1 ring-gold/20" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
