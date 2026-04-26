// ============================================================
// CONFIGURACIÓN GLOBAL DEL SITIO
// ------------------------------------------------------------
// Email, redes sociales, links de navegación, frase del footer.
// Estos valores se usan en el header, el footer y formularios.
// ============================================================

export const site = {
  brand: "Sambrizzi Producción",
  founder: "Mathias Sambrizzi",
  founderTitle: "Productor Internacional de Moda",
  founderBadge: "Consejo Argentino de la Moda®",
  countries: "Argentina · Paraguay · Brasil · Bolivia · Perú · España",
  footerQuote: {
    text: 'Cuando las luces se encienden, en mi equipo brillamos todos.',
    highlight: "brillamos todos",
  },
};

export const contact = {
  email: "ms@hotmail.es",
};

export const social = {
  instagram: "https://instagram.com/sambrizziproduccion",
  facebook: "https://www.facebook.com/SambrizziMathias",
  youtube: "https://www.youtube.com/@sambrizziproduccion",
};

export const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Producciones", to: "/producciones" },
  { label: "Experiencia", to: "/experiencia" },
  { label: "Internacional", to: "/internacional" },
  { label: "Contacto", to: "/contacto" },
] as const;

// Opciones del select del formulario de contacto.
// Para agregar/quitar: editá este array.
export const contactProjectTypes: string[] = [
  "Producción exclusiva",
  "Fashion Week",
  "Aplicar al circuito",
  "Casting de modelos",
  "Colaboración de marca",
  "Otro",
];
