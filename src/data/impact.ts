// ============================================================
// IMPACTO INTERNACIONAL — Stats + Mapa
// ------------------------------------------------------------
// `stats`: las 4 cifras grandes (counter animado).
// `cities`: ciudades del mapa SVG. x/y van de 0 a 100 (porcentaje
//   sobre el SVG cuadrado). Mové los valores para reposicionar.
// ============================================================

export type Stat = {
  value: number;
  label: string;
  suffix: string; // ej: "+", "" 
};

export const stats: Stat[] = [
  { value: 28, label: "Países", suffix: "" },
  { value: 30, label: "Fashion Weeks", suffix: "" },
  { value: 850, label: "Actividades", suffix: "+" },
  { value: 260, label: "Equipo Global", suffix: "+" },
];

export type City = { name: string; x: number; y: number };

export const cities: City[] = [
  { name: "Buenos Aires", x: 47, y: 78 },
  { name: "São Paulo", x: 60, y: 65 },
  { name: "Asunción", x: 50, y: 60 },
  { name: "Lima", x: 30, y: 48 },
  { name: "Bogotá", x: 32, y: 28 },
  { name: "Madrid", x: 78, y: 18 },
  { name: "París", x: 80, y: 14 },
  { name: "Milán", x: 82, y: 20 },
  { name: "Nueva York", x: 16, y: 18 },
  { name: "Dubai", x: 90, y: 32 },
  { name: "Singapur", x: 95, y: 50 },
  { name: "México DF", x: 18, y: 22 },
];

export const impactCopy = {
  eyebrow: "Impacto Internacional",
  headline:
    "13 años posicionando la Alta Costura argentina entre la élite mundial.",
  description:
    "Única productora de Alta Costura de la República Argentina con presencia activa en los principales calendarios oficiales de Fashion Week del mundo.",
};
