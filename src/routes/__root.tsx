import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sambrizzi Producción · Productor de Moda Internacional" },
      { name: "description", content: "Sambrizzi Producción — alta costura, fashion week y experiencias internacionales por Mathias Sambrizzi." },
      { name: "author", content: "Sambrizzi Producción" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sambrizzi Producción" },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Scripts />
      <Outlet />
    </>
  );
}
