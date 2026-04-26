// Datos editables: src/data/site.ts (navLinks)
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/sambrizzi-logo.jpg";
import { navLinks, site } from "@/data/site";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt={site.brand}
            className="h-10 w-auto md:h-12 transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="label-meta text-foreground/80 hover:text-gold transition-colors duration-500 relative focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded"
              activeProps={{ className: "label-meta text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contacto" className="btn-ghost-gold !py-2.5 !px-5 text-[0.62rem] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink">
            Solicitar
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded"
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-gold transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-gold transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-gold transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-2xl transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 pt-20">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-foreground hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded px-4 py-2"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contacto" onClick={() => setOpen(false)} className="btn-luxury mt-6 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink">
            Solicitar producción
          </Link>
        </nav>
      </div>
    </header>
  );
}
