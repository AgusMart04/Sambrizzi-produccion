// Datos editables: src/data/press.ts
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Modal } from "@/components/Modal";
import { press } from "@/data/press";

export function Press() {
  const ref1 = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  // Resaltado del título: divide alrededor de la palabra italic
  const titleParts = press.cover.title.split(press.cover.titleItalic);

  return (
    <section className="relative py-32 md:py-44 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div ref={ref1} className="reveal-up grid md:grid-cols-12 gap-8 items-end mb-20 border-b border-gold/30 pb-8">
          <div className="md:col-span-3">
            <span className="label-eyebrow">{press.edition}</span>
          </div>
          <div className="md:col-span-6 text-center">
            <div className="font-display italic text-2xl text-gold">{press.brandLine}</div>
          </div>
          <div className="md:col-span-3 md:text-right">
            <span className="label-meta">{press.location}</span>
          </div>
        </div>

        <article ref={ref2} className="reveal-up grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-7 relative aspect-[4/5] overflow-hidden">
            <img src={press.cover.image} alt={press.cover.caption} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
            <div className="absolute bottom-4 left-4 label-meta text-foreground bg-ink/80 px-3 py-1.5 backdrop-blur">
              {press.cover.caption}
            </div>
          </div>

          <div className="md:col-span-5">
            <span className="label-eyebrow">{press.cover.eyebrow}</span>
            <h3 className="heading-editorial text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1]">
              {titleParts[0]}
              <span className="italic text-gold-gradient">{press.cover.titleItalic}</span>
              {titleParts[1]}
            </h3>

            <div className="hairline-gold my-8 max-w-xs" />

            <p className="font-sans text-base text-foreground/70 leading-loose first-letter:font-display first-letter:text-5xl first-letter:text-gold first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {press.cover.intro}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-10 flex items-center gap-4 w-full text-left group"
            >
              <div className="h-px flex-1 bg-gold/40 group-hover:bg-gold transition-colors" />
              <span className="label-meta text-gold group-hover:text-gold-bright transition-colors">
                Continuar lectura →
              </span>
            </button>
          </div>
        </article>

        <div className="mt-24 grid md:grid-cols-3 gap-6">
          {press.pressStrip.map((p, i) => (
            <div key={i} className="border-l border-gold/30 pl-6 py-4">
              <div className="label-eyebrow">{p.tag}</div>
              <div className="font-display text-2xl mt-3 text-foreground">{p.text}</div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} size="xl">
        <article className="p-6 md:p-12">
          <span className="label-eyebrow">{press.cover.eyebrow} · {press.edition.split("·")[0].trim()}</span>
          <h2 className="heading-editorial text-4xl md:text-6xl mt-4">
            {titleParts[0]}
            <span className="italic text-gold-gradient">{press.cover.titleItalic}</span>
            {titleParts[1]}
          </h2>
          <div className="mt-4 flex items-center gap-4 label-meta text-foreground/60">
            <span>{press.location}</span>
            <span className="h-px w-8 bg-gold/40" />
            <span>{press.modal.subtitle}</span>
          </div>

          <div className="hairline-gold my-10" />

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7 relative aspect-[4/5] overflow-hidden">
              <img src={press.cover.image} alt={press.cover.caption} className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-gold/30" />
            </div>
            <div className="md:col-span-5 space-y-6 font-sans text-foreground/85 leading-loose">
              {press.modal.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:text-gold first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {press.modal.galleryImages.map((src, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden">
                <img src={src} alt={`Editorial ${i + 1}`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-gold/30" />
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 border-t border-gold/30 pt-10">
            {press.modal.stats.map((s, i) => (
              <div key={i} className="border-l border-gold/40 pl-4">
                <div className="font-display text-4xl text-gold-gradient">{s.value}</div>
                <div className="label-meta mt-2">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-12 font-display italic text-2xl text-foreground/80 leading-snug max-w-3xl">
            {press.modal.closingQuote}
            <span className="block label-meta text-gold mt-4 not-italic">— Mathias Sambrizzi</span>
          </p>
        </article>
      </Modal>
    </section>
  );
}
