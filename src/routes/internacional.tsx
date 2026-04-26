import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { ImpactInternational } from "@/components/ImpactInternational";
import { Alliances } from "@/components/Alliances";
import { Calendar2026 } from "@/components/Calendar2026";
import { Footer } from "@/components/Footer";
import { OG_IMAGES, SITE_URL, ogImageUrl } from "@/lib/seo";

export const Route = createFileRoute("/internacional")({
  head: () => {
    const image = ogImageUrl(OG_IMAGES.internacional);
    return {
      meta: [
        { title: "Internacional · Sambrizzi Producción" },
        { name: "description", content: "Presencia en LATAMFW, CNFW Brasil, Madrid. La plataforma que conecta la moda latinoamericana con el mundo." },
        { property: "og:title", content: "Internacional · Sambrizzi" },
        { property: "og:description", content: "+28 países, +30 Fashion Weeks, +850 producciones. Calendario oficial 2026." },
        { property: "og:url", content: `${SITE_URL}/internacional` },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:image", content: image },
        { name: "twitter:title", content: "Internacional · Sambrizzi" },
        { name: "twitter:description", content: "+28 países, +30 Fashion Weeks, +850 producciones. Calendario oficial 2026." },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/internacional` }],
    };
  },
  component: InternacionalPage,
});

function InternacionalPage() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <div className="pt-32" />
      <ImpactInternational />
      <Alliances />
      <Calendar2026 />
      <Footer />
    </main>
  );
}
