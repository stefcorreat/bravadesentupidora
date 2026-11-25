const phoneNumber = "11975006171";

export const site = {
  name: "Brava Desentupidora SP",
  shortName: "Brava Desentupidora",
  domain: process.env.SITE_URL || "https://desentupidorabrava24h.com.br",
  phoneDisplay: `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, -4)}-${phoneNumber.slice(-4)}`,
  phone: `+55${phoneNumber}`,
  whatsapp: `55${phoneNumber}`,
  city: "São Paulo",
  state: "SP",
  hours: "24 horas",
  indexing: process.env.SITE_INDEXING !== "false" && process.env.VERCEL_ENV !== "preview"
};

export const absoluteUrl = (path = "/") => new URL(path, site.domain).toString();

export const whatsappUrl = (message = "Olá! Preciso de atendimento de desentupidora. Pode me ajudar?") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

