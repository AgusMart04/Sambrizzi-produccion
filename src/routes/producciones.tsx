import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Productions } from "@/components/Productions";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { OG_IMAGES, SITE_URL, ogImageUrl } from "@/lib/seo";

export const Route = createFileRoute("/producciones")({
  head: () => {
    const image = ogImageUrl(OG_IMAGES.producciones);
    return {
      meta: [
        { title: "Producciones · Sambrizzi Producción" },
        { name: "description", content: "Archivo de desfiles, eventos fashion y producciones internacionales de Sambrizzi." },
        { property: "og:title", content: "Producciones · Sambrizzi" },
        { property: "og:description", content: "Archivo editorial de desfiles y eventos fashion internacionales." },
        { property: "og:url", content: `${SITE_URL}/producciones` },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:image", content: image },
        { name: "twitter:title", content: "Producciones · Sambrizzi" },
        { name: "twitter:description", content: "Archivo editorial de desfiles y eventos fashion internacionales." },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/producciones` }],
    };
  },
  component: ProduccionesPage,
});

function ProduccionesPage() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <div className="pt-32" />
      <Productions />
      <Services />
      <Gallery />
      <Footer />
    </main>
  );
}
