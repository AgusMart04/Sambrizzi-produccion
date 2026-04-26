// Datos editables: src/data/site.ts (contactProjectTypes, social)
import { useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { contactProjectTypes, social } from "@/data/site";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState(contactProjectTypes[0]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleApplyCircuit = () => {
    if (!formRef.current) return;
    setProjectType("Aplicar al circuito");
    if (formRef.current.reportValidity()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contacto" className="relative py-32 md:py-44 bg-ink overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30"
           style={{ background: "radial-gradient(ellipse at center, var(--gold) 0%, transparent 50%)" }} />

      <div ref={ref} className="reveal-up relative mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="label-eyebrow">Contacto Premium</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="heading-editorial text-5xl md:text-7xl lg:text-8xl">
            Hablemos en <br />
            <span className="italic text-gold-gradient">privado.</span>
          </h2>
          <p className="mt-8 font-sans text-foreground/60 max-w-xl mx-auto">
            Sambrizzi trabaja con un número limitado de proyectos por temporada.
            Aplicaciones revisadas personalmente.
          </p>
        </div>

        {!submitted ? (
          <form ref={formRef} onSubmit={onSubmit} className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="md:col-span-1">
              <label className="label-meta block mb-3">Nombre</label>
              <input
                required
                type="text"
                className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 text-foreground font-display text-xl outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-1">
              <label className="label-meta block mb-3">Email</label>
              <input
                required
                type="email"
                className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 text-foreground font-display text-xl outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-2">
              <label className="label-meta block mb-3">Tipo de proyecto</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 text-foreground font-display text-xl outline-none transition-colors appearance-none cursor-pointer"
              >
                {contactProjectTypes.map((opt) => (
                  <option key={opt} className="bg-ink">{opt}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="label-meta block mb-3">Cuéntanos tu visión</label>
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 text-foreground font-display text-lg outline-none transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-4 mt-6 justify-center">
              <button type="submit" className="btn-luxury focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink">Solicitar producción exclusiva</button>
              <button type="button" onClick={handleApplyCircuit} className="btn-ghost-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink">Aplicar al circuito</button>
            </div>
            <div className="md:col-span-2 text-center mt-4">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 label-meta text-gold hover:text-gold-bright transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink rounded px-2 py-1"
              >
                <span className="h-px w-8 bg-gold" />
                Conversar por Instagram DM
                <span className="h-px w-8 bg-gold" />
              </a>
            </div>
          </form>
        ) : (
          <div className="text-center py-20 max-w-xl mx-auto">
            <div className="font-display text-7xl text-gold-gradient mb-6">✦</div>
            <h3 className="heading-editorial text-4xl mb-4">Recibido.</h3>
            <p className="text-foreground/70">
              Tu solicitud está siendo revisada por el equipo de Sambrizzi.
              Te contactaremos en menos de 48 horas.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
