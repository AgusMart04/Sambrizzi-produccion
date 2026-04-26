// Cambiá SITE_URL a tu dominio definitivo cuando lo conectes (ej: "https://sambrizzi.com")
export const SITE_URL = "https://project--7e988da3-0bee-4e42-82e7-4e87285f6704.lovable.app";

import heroRunway from "@/assets/hero-runway.jpg";
import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import production1 from "@/assets/production-1.jpg";
import mathiasPortrait from "@/assets/mathias-portrait.jpg";

export const OG_IMAGES = {
  home: heroRunway,
  producciones: production1,
  experiencia: mathiasPortrait,
  internacional: editorial1,
  contacto: editorial2,
};

export const ogImageUrl = (img: string) => `${SITE_URL}${img}`;
