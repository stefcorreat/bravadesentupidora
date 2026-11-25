export type SiteImage = {src:string; alt:string; credit:string; source:string};

// Fotografias gratuitas. As páginas de origem e os autores ficam registrados aqui
// para auditoria de licença e para facilitar a substituição por fotos reais da Brava.
export const images: Record<string, SiteImage> = {
  hero: {
    src: "https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&fm=webp&q=82&w=1800",
    alt: "Profissional realizando manutenção hidráulica em banheiro",
    credit: "bhagya laxmi / Unsplash",
    source: "https://unsplash.com/photos/a-plumber-repairs-plumbing-in-a-bathroom-jaP5ClBdIyU"
  },
  sink: {
    src: "https://images.pexels.com/photos/7220892/pexels-photo-7220892.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mãos de profissional ajustando a tubulação sob uma pia",
    credit: "cottonbro studio / Pexels",
    source: "https://www.pexels.com/photo/a-person-holding-brown-doorknob-7220892/"
  },
  pipe: {
    src: "https://images.pexels.com/photos/32588548/pexels-photo-32588548.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Profissional trabalhando em tubulação com ferramenta",
    credit: "Bulat843 / Pexels",
    source: "https://www.pexels.com/photo/plumber-repairing-pipe-with-wrench-indoors-32588548/"
  },
  drain: {
    src: "https://images.pexels.com/photos/14308927/pexels-photo-14308927.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Profissional inspecionando um ponto de drenagem urbana",
    credit: "Vi Nguyễn Hoàng Duy / Pexels",
    source: "https://www.pexels.com/photo/plumber-working-on-street-14308927/"
  },
  night: {
    src: "https://images.pexels.com/photos/36842620/pexels-photo-36842620.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Equipe trabalhando em drenagem durante atendimento noturno",
    credit: "Jesus Adrián Saavedra / Pexels",
    source: "https://www.pexels.com/photo/nighttime-street-workers-cleaning-drainage-36842620/"
  },
  kitchen: {
    src: "https://cdn.pixabay.com/photo/2024/08/01/10/34/plumber-8936817_1280.jpg",
    alt: "Profissional reparando encanamento sob uma pia de cozinha",
    credit: "dynamictradies / Pixabay",
    source: "https://pixabay.com/photos/plumber-plumbing-professional-8936817/"
  }
};

