// ============================================================
// HERO — Texto, secuencia animada y CTAs
// ------------------------------------------------------------
// `wordSequence`: las 3 palabras grandes que aparecen una a una.
// `tagline`: línea dorada bajo el título principal.
// `ctas`: botones de acción.
// ============================================================

export const heroContent = {
  eyebrow: "Mathias Sambrizzi · Productor de Moda Internacional",
  wordSequence: ["GLOBAL", "FASHION", "PRODUCTION"],
  brand: "Sambrizzi",
  brandItalic: "Producción",
  tagline: "Alta Costura · Fashion Week · Experiencias Internacionales",
  stats: "14 años · 28 países · 30 Fashion Weeks · 850+ producciones",
  ctas: {
    primary: { label: "Ver Producciones", to: "/producciones" as const },
    secondary: { label: "Aplicar para participar", to: "/contacto" as const },
    tertiary: { label: "Solicitar producción exclusiva", to: "/contacto" as const },
  },
};
