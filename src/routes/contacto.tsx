import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Audiences } from "@/components/Audiences";
import { Footer } from "@/components/Footer";
import { OG_IMAGES, SITE_URL, ogImageUrl } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => {
    const image = ogImageUrl(OG_IMAGES.contacto);
    return {
      meta: [
        { title: "Contacto · Sambrizzi Producción" },
        { name: "description", content: "Solicitar producción exclusiva o aplicar al circuito internacional Sambrizzi." },
        { property: "og:title", content: "Contacto · Sambrizzi" },
        { property: "og:description", content: "Aplicaciones revisadas personalmente. Cupos limitados por temporada." },
        { property: "og:url", content: `${SITE_URL}/contacto` },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:image", content: image },
        { name: "twitter:title", content: "Contacto · Sambrizzi" },
        { name: "twitter:description", content: "Aplicaciones revisadas personalmente. Cupos limitados por temporada." },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/contacto` }],
    };
  },
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <div className="pt-32" />
      <Contact />
      <Audiences />
      <Footer />
    </main>
  );
}
