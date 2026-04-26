// Datos editables: src/data/site.ts
import { Link } from "@tanstack/react-router";
import logo from "@/assets/sambrizzi-logo.jpg";
import { site, contact, social, navLinks } from "@/data/site";

export function Footer() {
  const quoteParts = site.footerQuote.text.split(site.footerQuote.highlight);

  return (
    <footer className="relative bg-ink border-t border-gold/20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src={logo} alt={site.brand} className="h-14 w-auto mb-6" />
            <p className="font-display italic text-2xl text-foreground/70 max-w-md leading-snug">
              "{quoteParts[0]}<span className="text-gold">{site.footerQuote.highlight}</span>{quoteParts[1]}"
            </p>
            <p className="label-meta mt-6">{site.founder} · {site.founderTitle}</p>
            <p className="label-meta mt-2 text-foreground/60">{site.founderBadge}</p>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow mb-6">Navegación</div>
            <ul className="space-y-3 font-sans">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-foreground/70 hover:text-gold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded px-2 py-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="label-eyebrow mb-6">Conectar</div>
            <ul className="space-y-3 font-sans">
              <li>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-foreground/70 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded px-2 py-1">
                  <span className="h-px w-8 bg-gold/40" /> Instagram
                </a>
              </li>
              <li>
                <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-foreground/70 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded px-2 py-1">
                  <span className="h-px w-8 bg-gold/40" /> Facebook
                </a>
              </li>
              <li>
                <a href={social.youtube} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-foreground/70 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded px-2 py-1">
                  <span className="h-px w-8 bg-gold/40" /> YouTube
                </a>
              </li>
              <li className="pt-4">
                <a href={`mailto:${contact.email}`} className="text-gold hover:text-gold-bright transition-colors font-display text-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded px-2 py-1">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 items-center">
          <span className="label-meta">© {new Date().getFullYear()} {site.brand} ®</span>
          <span className="label-meta text-foreground/60">{site.countries}</span>
        </div>
      </div>
    </footer>
  );
}
