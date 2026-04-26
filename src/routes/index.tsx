import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ImpactInternational } from "@/components/ImpactInternational";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Audiences } from "@/components/Audiences";
import { Productions } from "@/components/Productions";
import { Gallery } from "@/components/Gallery";
import { Alliances } from "@/components/Alliances";
import { Calendar2026 } from "@/components/Calendar2026";
import { Press } from "@/components/Press";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { OG_IMAGES, SITE_URL, ogImageUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const image = ogImageUrl(OG_IMAGES.home);
    return {
      meta: [
        { title: "Sambrizzi Producción · Productor de Moda Internacional" },
        {
          name: "description",
          content:
            "Sambrizzi Producción, dirigida por Mathias Sambrizzi. Alta costura, fashion week y experiencias internacionales. LATAMFW, CNFW Brasil, Madrid.",
        },
        { name: "keywords", content: "Sambrizzi, Mathias Sambrizzi, productor de moda, fashion week, alta costura, LATAMFW, CNFW Brasil, Madrid Fashion Week, productor internacional, moda latinoamericana" },
        { property: "og:title", content: "Sambrizzi Producción · Fashion Week Internacional" },
        { property: "og:description", content: "Productor de moda internacional especializado en alta costura, pasarelas y experiencias fashion globales." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/` },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:image", content: image },
        { name: "twitter:title", content: "Sambrizzi Producción · Fashion Week Internacional" },
        { name: "twitter:description", content: "Productor de moda internacional especializado en alta costura, pasarelas y experiencias fashion globales." },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mathias Sambrizzi",
            jobTitle: "Productor Internacional de Moda",
            url: `${SITE_URL}/`,
            image: image,
            sameAs: [
              "https://instagram.com/sambrizziproduccion",
              "https://www.facebook.com/SambrizziMathias",
              "https://www.youtube.com/@sambrizziproduccion",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Sambrizzi Producción",
              url: `${SITE_URL}/`,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sambrizzi Producción",
            url: `${SITE_URL}/`,
            logo: image,
            founder: { "@type": "Person", name: "Mathias Sambrizzi" },
            areaServed: ["Argentina", "Paraguay", "Brasil", "Bolivia", "Perú", "España"],
            sameAs: [
              "https://instagram.com/sambrizziproduccion",
              "https://www.facebook.com/SambrizziMathias",
              "https://www.youtube.com/@sambrizziproduccion",
            ],
          }),
        },
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <ImpactInternational />
      <Experience />
      <Services />
      <Audiences />
      <Productions />
      <Gallery />
      <Alliances />
      <Calendar2026 />
      <Press />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
