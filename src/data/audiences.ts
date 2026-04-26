// ============================================================
// PARA QUIÉN ES SAMBRIZZI (4 bloques de conversión)
// ------------------------------------------------------------
// Cada bloque tiene: número, label, problema, solución.
// Mantené 4 bloques para que el grid quede prolijo.
// ============================================================

export type Audience = {
  n: string;
  label: string;
  problem: string;
  solution: string;
};

export const audiences: Audience[] = [
  {
    n: "01",
    label: "Diseñadores",
    problem: "Talento sin la pasarela donde brillar internacionalmente.",
    solution: "Te subimos al circuito LATAMFW · CNFW Brasil con producción premium.",
  },
  {
    n: "02",
    label: "Marcas",
    problem: "Comunicación que no genera deseo ni posicionamiento real.",
    solution: "Creamos experiencias fashion que convierten audiencia en comunidad.",
  },
  {
    n: "03",
    label: "Modelos",
    problem: "Castings locales que no abren puertas al mercado global.",
    solution: "Acceso directo a pasarelas, directores y eventos internacionales.",
  },
  {
    n: "04",
    label: "Organizadores",
    problem: "Producción técnica sin dirección artística de nivel editorial.",
    solution: "Curaduría, casting y dirección creativa al estándar Fashion Week.",
  },
];
