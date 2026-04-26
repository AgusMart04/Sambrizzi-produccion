import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Modal } from "@/components/Modal";
import { Link } from "@tanstack/react-router";
import { services, type Service } from "@/data/services";

export function Services() {
  const titleRef = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section className="relative py-32 md:py-44 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div ref={titleRef} className="reveal-up flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="label-eyebrow">Servicios · Valor</span>
            </div>
            <h2 className="heading-editorial text-5xl md:text-7xl lg:text-8xl">
              Lo que <span className="italic text-gold-gradient">creamos.</span>
            </h2>
          </div>
          <p className="md:max-w-md text-foreground/60 font-sans">
            No vendemos servicios. Construimos plataformas, narrativas y momentos
            que posicionan a marcas y talentos en el circuito internacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <button
              key={s.n}
              onClick={() => setActive(s)}
              className="card-luxury relative aspect-[4/3] md:aspect-[5/4] group text-left"
            >
              <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-display text-gold/70 text-2xl">{s.n}</span>
                  <span className="label-meta text-foreground/60">Servicio</span>
                </div>
                <div>
                  <h3 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-foreground/70 font-sans text-sm md:text-base leading-relaxed">
                    {s.promise}
                  </p>
                  <span className="mt-6 inline-block label-meta text-gold">Ver detalle →</span>
                </div>
              </div>

              <div className="card-corner" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-700 mix-blend-overlay pointer-events-none" />
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} size="xl">
        {active && (
          <div className="p-6 md:p-12">
            <div className="grid md:grid-cols-12 gap-8 mb-10">
              <div className="md:col-span-6 relative aspect-[4/5] overflow-hidden">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-gold/30" />
              </div>
              <div className="md:col-span-6 flex flex-col justify-center">
                <span className="label-eyebrow">Servicio {active.n}</span>
                <h3 className="heading-editorial text-4xl md:text-5xl mt-4">
                  {active.title}
                </h3>
                <div className="hairline-gold my-6 max-w-[180px]" />
                <p className="font-display italic text-xl text-gold/90 leading-snug">
                  "{active.promise}"
                </p>
                <p className="font-sans text-base text-foreground/80 leading-relaxed mt-6">
                  {active.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 border-t border-gold/20 pt-10">
              <div className="md:col-span-7">
                <span className="label-eyebrow">Qué incluye</span>
                <ul className="mt-6 space-y-3">
                  {active.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 font-sans text-foreground/80">
                      <span className="text-gold mt-1.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5">
                <span className="label-eyebrow">Ideal para</span>
                <p className="font-display text-2xl text-foreground mt-4 leading-snug">
                  {active.ideal}
                </p>
                <Link
                  to="/contacto"
                  onClick={() => setActive(null)}
                  className="btn-luxury mt-8 inline-flex"
                >
                  Solicitar este servicio →
                </Link>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
