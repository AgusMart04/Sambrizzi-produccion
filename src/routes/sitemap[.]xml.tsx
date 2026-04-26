import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

const routes = ["/", "/producciones", "/experiencia", "/internacional", "/contacto"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const urls = routes
          .map(
            (path) =>
              `  <url><loc>${SITE_URL}${path}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
