// Datos editables: src/data/hero.ts
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-runway.jpg";
import { heroContent } from "@/data/hero";

export function Hero() {
  const sequence = heroContent.wordSequence;
  const [index, setIndex] = useState(1);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    if (index < sequence.length - 1) {
      const t = setTimeout(() => setIndex(index + 1), 100);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowBrand(true), 50);
    return () => clearTimeout(t);
  }, [index, sequence.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sambrizzi Producción — Pasarela de alta costura"
          className="h-full w-full object-cover scale-110 animate-[float-slow_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-spotlight)" }} />
      </div>

      <div className="pointer-events-none absolute left-[12%] top-[40%] h-2 w-2 rounded-full bg-white animate-flash" style={{ animationDelay: "0s", boxShadow: "0 0 40px 10px white" }} />
      <div className="pointer-events-none absolute right-[18%] top-[55%] h-2 w-2 rounded-full bg-white animate-flash" style={{ animationDelay: "1.2s", boxShadow: "0 0 30px 8px white" }} />
      <div className="pointer-events-none absolute left-[25%] bottom-[28%] h-2 w-2 rounded-full bg-white animate-flash" style={{ animationDelay: "2.4s", boxShadow: "0 0 50px 12px white" }} />
      <div className="pointer-events-none absolute right-[8%] bottom-[40%] h-2 w-2 rounded-full bg-white animate-flash" style={{ animationDelay: "3s", boxShadow: "0 0 35px 10px white" }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-12 bg-gold" />
          <span className="label-eyebrow">{heroContent.eyebrow}</span>
        </div>

        <div className="mb-6 flex flex-col gap-1 md:gap-2">
          {sequence.map((word, i) => (
            <h2
              key={word}
              className={`heading-editorial text-5xl md:text-7xl lg:text-8xl xl:text-9xl transition-all duration-500 ${
                i <= index ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
              } text-foreground/50${showBrand ? " italic" : ""}`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {word}
            </h2>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-1500 ${
            showBrand ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="hairline-gold mb-8 max-w-md" />
          <h1 className="heading-editorial text-6xl md:text-8xl lg:text-9xl text-foreground">
            {heroContent.brand} <span className="italic text-gold-gradient">{heroContent.brandItalic}</span>
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base md:text-lg text-foreground/70 leading-relaxed">
            {heroContent.tagline}
            <br />
            <span className="text-gold/80 text-sm">{heroContent.stats}</span>
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to={heroContent.ctas.primary.to} className="btn-luxury focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink">
              {heroContent.ctas.primary.label}
              <span className="text-base">→</span>
            </Link>
            <Link to={heroContent.ctas.secondary.to} className="btn-ghost-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink">
              {heroContent.ctas.secondary.label}
            </Link>
            <Link
              to={heroContent.ctas.tertiary.to}
              className="hidden lg:inline-flex items-center gap-2 label-meta text-gold hover:text-gold-bright transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded px-2 py-1"
            >
              <span className="h-px w-8 bg-gold" />
              {heroContent.ctas.tertiary.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="label-meta text-[0.55rem]">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
