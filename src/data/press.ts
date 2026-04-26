// ============================================================
// PRENSA · COVER STORY (modal expandible)
// ------------------------------------------------------------
// Editá `cover` para cambiar la nota destacada y `pressStrip`
// para los 3 bloques inferiores con etiquetas.
// ============================================================

import press1 from "@/assets/production-3.jpg";
import press2 from "@/assets/editorial-1.jpg";
import press3 from "@/assets/editorial-2.jpg";

export const press = {
  edition: "N° 04 · Edición Internacional",
  brandLine: "Sambrizzi · Press",
  location: "Madrid · 2024",
  cover: {
    image: press1,
    caption: "Fashion Week Latam · Madrid 2024",
    eyebrow: "Cover Story",
    title: '"Cuando Latinoamérica camina en Madrid."',
    titleItalic: "camina",
    intro:
      "Mathias Sambrizzi llevó a la capital española una edición sin precedentes del circuito Latam. Diseñadores de seis países, una pasarela editorial y una narrativa visual que redefinió lo que significa producir moda latinoamericana hoy.",
  },
  modal: {
    subtitle: "III Pasarela Latinoamericana",
    paragraphs: [
      "La III Pasarela Latinoamericana en Madrid marcó un antes y un después para la firma. Sambrizzi Producción articuló la presencia de diseñadores de seis países sobre una misma pasarela europea, con casting curado y dirección artística propia.",
      '"Argentina sigue recibiendo eventos mundiales a través de nuestra firma y el Consejo Argentino de la Moda", afirmó Mathias Sambrizzi durante la rueda de prensa oficial. La edición confirmó el rol de la productora como puente entre Latinoamérica y las semanas de la moda externas a la oficial.',
    ],
    galleryImages: [press2, press3],
    stats: [
      { value: "6", label: "Países representados" },
      { value: "22+", label: "Diseñadores en pasarela" },
      { value: "70+", label: "Modelos convocados" },
    ],
    closingQuote:
      '"Cuando las luces se encienden, en mi equipo brillamos todos."',
  },
  pressStrip: [
    { tag: "PRESENTE", text: "LATAMFW · Buenos Aires" },
    { tag: "PARTE DEL", text: "Circuito CNFW Brasil" },
    { tag: "EDICIÓN", text: "Madrid · São Paulo · Asunción" },
  ],
};
