// Datos editables: src/data/gallery.ts
import { useCallback, useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { gallery } from "@/data/gallery";


export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const titleRef = useReveal<HTMLDivElement>();
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, next, prev]);

  return (
    <section className="relative py-32 md:py-44 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div ref={titleRef} className="reveal-up text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="label-eyebrow">Galería Inmersiva</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="heading-editorial text-5xl md:text-7xl">
            Una revista <span className="italic text-gold-gradient">en movimiento.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="card-luxury relative aspect-[3/4]"
            >
              <div className={`absolute inset-0 transition-opacity duration-700 ${loadedImages.has(i) ? 'opacity-0' : 'opacity-100'} bg-ink/50`} />
              <img 
                src={src} 
                alt={`Editorial ${i + 1}`} 
                className="h-full w-full object-cover"
                loading="lazy" 
                onLoad={() => setLoadedImages(prev => new Set(prev).add(i))}
              />
              <div className="card-corner" />
              <div className="absolute inset-0 bg-ink/0 hover:bg-ink/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-6 right-6 h-12 w-12 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-colors flex items-center justify-center z-10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
            aria-label="Cerrar"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-colors flex items-center justify-center text-2xl z-10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
            aria-label="Anterior"
          >
            ←
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-colors flex items-center justify-center text-2xl z-10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
            aria-label="Siguiente"
          >
            →
          </button>

          <img
            src={gallery[lightbox]}
            alt={`Editorial ${lightbox + 1} de ${gallery.length}`}
            className="max-h-[90vh] max-w-[90vw] object-contain ring-1 ring-gold/30"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 label-meta text-gold">
            {String(lightbox + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </section>
  );
}
