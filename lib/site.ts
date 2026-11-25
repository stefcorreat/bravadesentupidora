export const site = {
  name: "Brava Desentupidora SP",
  shortName: "Brava Desentupidora",
  domain: process.env.SITE_URL || "https://bravadesentupidora.com.br",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(11) 99999-0000",
  phone: process.env.NEXT_PUBLIC_PHONE || "+5511999990000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5511999990000",
  city: "São Paulo",
  state: "SP",
  hours: "24 horas",
  indexing: process.env.SITE_INDEXING !== "false" && process.env.VERCEL_ENV !== "preview"
};

export const absoluteUrl = (path = "/") => new URL(path, site.domain).toString();

export const whatsappUrl = (message = "Olá! Preciso de atendimento de desentupidora. Pode me ajudar?") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

