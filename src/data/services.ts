// ============================================================
// SERVICIOS · Datos editables
// ============================================================
import s1 from "@/assets/production-1.jpg";
import s2 from "@/assets/production-3.jpg";
import s3 from "@/assets/production-4.jpg";
import s4 from "@/assets/production-5.jpg";

export type Service = {
  n: string;
  title: string;
  promise: string;
  image: string;
  description: string;
  includes: string[];
  ideal: string;
};

export const services: Service[] = [
  {
    n: "01",
    title: "Producción de desfiles",
    promise: "Creamos escenarios donde la moda se convierte en espectáculo.",
    image: s1,
    description:
      "Desde la dirección artística hasta el último detalle de backstage. Coordinamos casting, escenografía, iluminación, sonido, regieduría y prensa para que cuando se enciendan las luces, todo marche en perfecta sincronía.",
    includes: [
      "Dirección artística y editorial",
      "Casting de modelos local e internacional",
      "Backstage profesional · 260+ personas en red",
      "Iluminación, sonido y escenografía",
      "Cobertura de prensa y vínculo con medios",
    ],
    ideal: "Diseñadores y marcas que quieren impacto editorial real.",
  },
  {
    n: "02",
    title: "Eventos fashion",
    promise: "Diseñamos experiencias que conectan marcas con audiencias premium.",
    image: s2,
    description:
      "Lanzamientos, after-shows, presentaciones de colección, alfombras rojas. Curamos cada momento como una pieza editorial para que tu marca quede asociada a un universo de excelencia.",
    includes: [
      "Lanzamientos de colección y producto",
      "After-shows y eventos privados",
      "Curaduría de invitados premium",
      "Alfombra roja y red carpet",
      "Activaciones de marca en pasarela",
    ],
    ideal: "Marcas que buscan asociarse al universo de la alta costura.",
  },
  {
    n: "03",
    title: "Modelos & diseñadores",
    promise: "Vinculamos talento con plataformas internacionales reales.",
    image: s3,
    description:
      "Reclutamos diseñadores emergentes y modelos para distribuirlos entre los principales fashion weeks del mundo. Manejamos sus agendas, casting y representación durante cada temporada.",
    includes: [
      "Booking en 19 paradas internacionales 2026",
      "Manejo de agenda de temporada",
      "Casting curado por Sambrizzi",
      "Acompañamiento backstage",
      "Vínculo con consejos oficiales (CONAM, CPM, CBM)",
    ],
    ideal: "Talento emergente con proyección internacional real.",
  },
  {
    n: "04",
    title: "Dirección audiovisual",
    promise: "Capturamos la esencia de cada momento en piezas editoriales.",
    image: s4,
    description:
      "Fashion films, after-movies, contenido para redes y editorial fotográfico. Producimos piezas con estética de revista internacional, listas para prensa y portfolio.",
    includes: [
      "Fashion films para redes y prensa",
      "After-movies de evento",
      "Editorial fotográfico de pasarela",
      "Cobertura backstage estilo documental",
      "Contenido vertical para Instagram/TikTok",
    ],
    ideal: "Marcas y diseñadores que necesitan archivo editorial premium.",
  },
];
