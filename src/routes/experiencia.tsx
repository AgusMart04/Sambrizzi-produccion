import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Experience } from "@/components/Experience";
import { Press } from "@/components/Press";
import { Footer } from "@/components/Footer";
import { OG_IMAGES, SITE_URL, ogImageUrl } from "@/lib/seo";

export const Route = createFileRoute("/experiencia")({
  head: () => {
    const image = ogImageUrl(OG_IMAGES.experiencia);
    return {
      meta: [
        { title: "Experiencia Sambrizzi · Dirección Creativa" },
        { name: "description", content: "La filosofía Sambrizzi: cada pasarela una narrativa, cada producción una conexión." },
        { property: "og:title", content: "Experiencia · Sambrizzi" },
        { property: "og:description", content: "Curaduría, dirección y storytelling visual al nivel de las grandes capitales de la moda." },
        { property: "og:url", content: `${SITE_URL}/experiencia` },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:image", content: image },
        { name: "twitter:title", content: "Experiencia · Sambrizzi" },
        { name: "twitter:description", content: "Curaduría, dirección y storytelling visual al nivel de las grandes capitales de la moda." },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/experiencia` }],
    };
  },
  component: ExperienciaPage,
});

function ExperienciaPage() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <div className="pt-32" />
      <Experience />
      <Press />
      <Footer />
    </main>
  );
}
