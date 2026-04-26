// ============================================================
// CALENDARIO OFICIAL · TEMPORADA 2026
// ------------------------------------------------------------
// Para AGREGAR una parada: copiá una línea y modificala.
// Para QUITAR: borrá la línea.
// El orden del array es el orden en que aparecen.
// ============================================================

export type CalendarStop = {
  city: string;
  country: string;
  event: string;
};

export const calendar2026: CalendarStop[] = [
  { city: "Buenos Aires", country: "Argentina", event: "Latinoamérica Fashion Week" },
  { city: "Asunción", country: "Paraguay", event: "Latinoamérica Fashion Week" },
  { city: "São Paulo", country: "Brasil", event: "Latinoamérica Fashion Week" },
  { city: "São Paulo", country: "Brasil", event: "Fashion Week Brasil · Oficiales" },
  { city: "Dubai", country: "EAU", event: "Fashion Week Dubai" },
  { city: "Podgorica", country: "Montenegro", event: "Fashion Week Montenegro" },
  { city: "México DF", country: "México", event: "México Fashion Week · Oficiales" },
  { city: "Bogotá", country: "Colombia", event: "Colombia Fashion Week" },
  { city: "Nueva York", country: "EE. UU.", event: "Fashion Week New York" },
  { city: "Washington", country: "EE. UU.", event: "Fashion Week Washington" },
  { city: "Montecarlo", country: "Mónaco", event: "España Week Montecarlo" },
  { city: "Madrid", country: "España", event: "España Fashion Week · Oficiales" },
  { city: "París", country: "Francia", event: "Fashion Week París · Films Oficial" },
  { city: "Londres", country: "Reino Unido", event: "Fashion Week Londres" },
  { city: "Milán", country: "Italia", event: "Fashion Week Italia · Oficiales" },
  { city: "Venecia", country: "Italia", event: "Fashion Week Venice" },
  { city: "Cannes", country: "Francia", event: "Festival de Cannes · Red Carpet + Films" },
  { city: "Budapest", country: "Hungría", event: "Fashion Week Budapest" },
  { city: "Mumbai", country: "India", event: "Fashion Week India" },
];

// Frase de cierre debajo del calendario
export const calendarQuote = {
  text: "Argentina sigue recibiendo eventos mundiales a través de nuestra firma y el Consejo Argentino de la Moda.",
  highlight: "Consejo Argentino de la Moda",
  author: "Mathias Sambrizzi",
};
