// ============================================================
// PRODUCCIONES / EVENTOS
// ------------------------------------------------------------
// Para AGREGAR una nueva producción: copia uno de los bloques
// de abajo y modifícalo. Para EDITAR, simplemente cambia los
// valores. El cover es la imagen principal y `gallery` son las
// imágenes que se muestran dentro del modal.
// ============================================================

import p1 from "@/assets/production-1.jpg";
import p2 from "@/assets/production-3.jpg";
import p3 from "@/assets/production-4.jpg";
import p4 from "@/assets/production-5.jpg";
import p5 from "@/assets/production-6.jpg";
import p6 from "@/assets/production-2.jpg";
import e1 from "@/assets/editorial-1.jpg";
import e2 from "@/assets/editorial-2.jpg";
import hero from "@/assets/hero-runway.jpg";

export type Production = {
  slug: string;
  title: string;
  city: string;
  country: string;
  year: string;
  role: string;            // Rol de Sambrizzi en el evento
  designers?: number;      // Diseñadores convocados
  models?: number;         // Modelos
  description: string;     // Texto del modal
  highlights?: string[];   // Bullets opcionales
  cover: string;           // Imagen principal (carrusel)
  gallery: string[];       // Imágenes del modal
};

export const productions: Production[] = [
  {
    slug: "latamfw-buenos-aires-2024",
    title: "LATAMFW",
    city: "Buenos Aires",
    country: "Argentina",
    year: "2024",
    role: "Producción general · Dirección de pasarela",
    designers: 24,
    models: 80,
    description:
      "Edición consagratoria de Latinoamérica Fashion Week en Buenos Aires. Sambrizzi Producción coordinó casting internacional, dirección artística y backstage de seis países en simultáneo, posicionando a la marca como uno de los hubs más relevantes del circuito latinoamericano.",
    highlights: [
      "6 países representados en una sola edición",
      "Cobertura de prensa internacional",
      "Casting curado por Sambrizzi",
    ],
    cover: p1,
    gallery: [p1, e1, hero, e2],
  },
  {
    slug: "asuncion-fashion-week-2024",
    title: "Asunción Fashion Week",
    city: "Asunción",
    country: "Paraguay",
    year: "2024",
    role: "Comandante · Consejo Paraguayo de la Moda®",
    designers: 18,
    models: 60,
    description:
      "Como cabeza del Consejo Paraguayo de la Moda, Sambrizzi articuló la edición 2024 de Asunción Fashion Week, un evento que conectó a diseñadores emergentes paraguayos con el circuito Latam y prensa especializada de la región.",
    highlights: [
      "Coordinación de 260+ personas en seis países",
      "Diseñadores emergentes paraguayos",
      "Pasarela editorial en vivo",
    ],
    cover: p2,
    gallery: [p2, e2, p4],
  },
  {
    slug: "iii-pasarela-latinoamericana-madrid-2024",
    title: "III Pasarela Latinoamericana",
    city: "Madrid",
    country: "España",
    year: "2024",
    role: "Producción internacional · Curaduría",
    designers: 22,
    models: 70,
    description:
      "Mathias Sambrizzi llevó a la capital española una edición sin precedentes del circuito Latam. Diseñadores de seis países desplegaron una narrativa visual que redefinió lo que significa producir moda latinoamericana hoy.",
    highlights: [
      "Madrid como ciudad sede",
      "Cover Story en prensa internacional",
      "Cruce Latam · Europa",
    ],
    cover: p3,
    gallery: [p3, e1, hero, p1],
  },
  {
    slug: "venice-fashion-week-2023",
    title: "Venice Fashion Week",
    city: "Venecia",
    country: "Italia",
    year: "2023",
    role: "Producción de delegación Latam",
    designers: 12,
    models: 40,
    description:
      "Presencia de la firma en una de las plazas más codiciadas del circuito europeo. Sambrizzi gestionó la delegación latinoamericana en Venecia: agendas, casting y backstage de talento emergente con proyección global.",
    cover: p4,
    gallery: [p4, e2, p5],
  },
  {
    slug: "andes-fashion-week-2023",
    title: "Andes Fashion Week",
    city: "Santiago",
    country: "Chile",
    year: "2023",
    role: "Coordinación regional Cono Sur",
    designers: 16,
    models: 55,
    description:
      "Andes Fashion Week reunió en Santiago a las miradas más interesantes del Cono Sur. Sambrizzi participó en la curaduría de modelos y diseñadores, articulando alianzas con la prensa especializada chilena.",
    cover: p5,
    gallery: [p5, p6, e1],
  },
  {
    slug: "durango-fashion-week-2023",
    title: "Durango Fashion Week",
    city: "Durango",
    country: "México",
    year: "2023",
    role: "Producción internacional · Rueda de prensa",
    designers: 14,
    models: 45,
    description:
      "Edición mexicana del circuito con foco en talento joven. Sambrizzi participó de la rueda de prensa oficial y coordinó la presencia de modelos latinoamericanos sobre la pasarela.",
    cover: p6,
    gallery: [p6, p2, e2],
  },
];
