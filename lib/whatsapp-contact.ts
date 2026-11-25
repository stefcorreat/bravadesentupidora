import type { PageData } from "@/data/pages";

const serviceOpenings: Record<string, string> = {
  "desentupimento-de-pia": "Preciso de ajuda com uma pia entupida",
  "desentupimento-de-vaso-sanitario": "Estou com um vaso sanitário entupido",
  "desentupimento-de-ralo": "Tenho um ralo que não está escoando",
  "desentupimento-de-esgoto": "Preciso de ajuda com a rede de esgoto",
  "desentupimento-de-caixa-de-gordura": "Quero pedir uma avaliação da caixa de gordura",
  "desentupimento-residencial": "Preciso de desentupimento na minha residência",
  "desentupimento-comercial-industrial": "Preciso de desentupimento no meu estabelecimento"
};

const intentOpenings: Record<string, string> = {
  "desentupidora-aberta-agora": "Vocês têm equipe disponível agora?",
  "desentupidora-24-horas": "Quero consultar a disponibilidade do atendimento 24 horas.",
  "desentupidora-urgente": "Preciso de desentupimento urgente. Qual é a previsão de atendimento?",
  "desentupidora-perto-de-mim": "Quero confirmar se vocês atendem meu bairro.",
  "preco-de-desentupidora-em-sao-paulo": "Gostaria de saber quanto custa o desentupimento em São Paulo.",
  "orcamento-de-desentupimento": "Gostaria de solicitar um orçamento de desentupimento.",
  "melhor-desentupidora-em-sao-paulo": "Quero saber como funciona a visita e o orçamento de vocês em São Paulo.",
  "desentupidora-recomendada-em-sao-paulo": "Quero saber quais serviços a Brava oferece em São Paulo.",
  "desentupidora-em-sao-paulo": "Preciso de desentupimento em São Paulo. Vocês atendem meu bairro?"
};

export function contactMessage(page?: PageData, urgent = false) {
  const location = page?.location ?? (page?.kind === "service" || !page ? "São Paulo" : undefined);
  const place = location ? ` em ${location}` : "";
  const serviceSlug = page?.kind === "service"
    ? Object.keys(serviceOpenings).find(slug => page.slug === slug || page.slug.startsWith(`${slug}-`))
    : undefined;

  if (serviceSlug) {
    const question = urgent ? "Tem equipe disponível agora?" : "Podem me orientar sobre o atendimento?";
    return `Olá, Brava! ${serviceOpenings[serviceSlug]}${place}. ${question}`;
  }

  if (urgent) return `Olá, Brava! Preciso de atendimento urgente${place}. Qual é a previsão de chegada?`;
  if (page?.kind === "intent" && intentOpenings[page.slug]) return `Olá, Brava! ${intentOpenings[page.slug]}`;
  if (page?.kind === "article") return `Olá, Brava! Li o guia “${page.h1}” e gostaria de tirar uma dúvida.`;
  return `Olá, Brava! Preciso de atendimento de desentupimento${place}. Podem me ajudar?`;
}
