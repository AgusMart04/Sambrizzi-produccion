import { useReveal } from "@/hooks/use-reveal";
import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import mathias from "@/assets/mathias-portrait.jpg";

export function Experience() {
  const ref1 = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  return (
    <section id="experiencia" className="relative py-32 md:py-44 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div ref={ref1} className="reveal-up text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="label-eyebrow">Experiencia Sambrizzi</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="heading-editorial text-4xl md:text-6xl lg:text-7xl">
            Cada desfile es <span className="italic text-gold-gradient">una obra.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Left image */}
          <div ref={ref2} className="reveal-up md:col-span-5 relative aspect-[3/4] overflow-hidden">
            <img
              src={editorial1}
              alt="Backstage editorial moment"
              className="h-full w-full object-cover grayscale"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
            <div className="absolute -bottom-2 -right-2 h-24 w-24 border-r border-b border-gold" />
          </div>

          {/* Center text */}
          <div className="md:col-span-7 md:pl-8 lg:pl-16">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 italic">
              "Les voy a traer mi <span className="text-gold not-italic">mundo, galaxia, universo</span>.
              Cuando digan Sambrizzi, que <span className="text-gold not-italic">exploten</span> los salones por llegar divinas a la alfombra roja."
            </p>

            <div className="hairline-gold my-12 max-w-xs" />

            <p className="font-sans text-base md:text-lg text-foreground/70 leading-loose max-w-xl">
              Mathias Sambrizzi recluta diseñadores emergentes y modelos para distribuirlos
              entre los principales eventos internacionales. Coordina backstage, equipos técnicos,
              estilistas y agendas para que cuando las luces se enciendan, todo marche en perfecta
              sincronía. <span className="text-gold">Más de 260 personas trabajando en 6 países.</span>
            </p>

            {/* Founder card */}
            <div className="mt-12 flex items-center gap-6 pt-8 border-t border-border">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-gold/40 shrink-0">
                <img src={mathias} alt="Mathias Sambrizzi" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="font-display text-xl text-foreground">Mathias Sambrizzi</div>
                <div className="label-meta mt-1">Productor Internacional de Moda · CONAM®</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tall portrait */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 order-2 md:order-1">
            <span className="label-eyebrow">Curaduría</span>
            <h3 className="heading-editorial text-3xl md:text-5xl lg:text-6xl mt-6">
              Donde el detalle <br /> es el protagonista.
            </h3>
            <p className="font-sans text-base md:text-lg text-foreground/70 leading-loose mt-8 max-w-xl">
              Iluminación, ritmo, casting, escenografía y dirección artística trabajan en una
              sinfonía precisa. La estética editorial de Sambrizzi se reconoce a primera vista:
              sobria, atemporal, dorada en sus matices.
            </p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 relative aspect-[3/4] overflow-hidden">
            <img src={editorial2} alt="Haute couture detail" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
