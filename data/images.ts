export type SiteImage = {src:string; alt:string};

const generalServicePhoto: SiteImage = {
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dZNaMFveQwRTFsYxhXPv4MhNrGpVXuHDL28DnNgv1tLHMcG22WpNlV9n&s=10",
  alt: "Atendimento de desentupimento"
};

const teamPhoto: SiteImage = {
  src: "https://i.ibb.co/svFJ5j31/BA7-E7-ECC-15-BD-4-A09-8-C38-F6-DDFF78-F076.png",
  alt: "Equipe da Brava Desentupidora"
};

const servicePhotos = {
  toiletService: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCS17s2dU5IicF_l92AsKR6TEZXgR7mUW2i3CjVKRGN0os6nj_Qmscu08&s=10",
    alt: "Vaso sanitário entupido"
  },
  sinkService: {
    src: "https://desentupidorapaguemenos.com.br/wp-content/uploads/2021/07/desentupimento-de-pia.jpg",
    alt: "Serviço de desentupimento de pia"
  },
  drainService: {
    src: "https://blog.leroymerlin.com.br/wp-content/uploads/2024/08/como_desentupir_ralo_de_banheiro_produtos_e_procedimentos_0c84_original.jpg",
    alt: "Desentupimento de ralo de banheiro"
  },
  greaseTrapService: {
    src: "https://desentupidorasilvaesilva.com.br/wp-content/uploads/2026/05/Limpeza-de-Caixas-de-Gordura.webp",
    alt: "Limpeza de caixa de gordura"
  },
  sewerService: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rgGj-zp9pmLuLcTnVlyNjQJxYGHC6VfL3LmgxEPPLmvRv3-s3x2xsIpa&s=10",
    alt: "Serviço de desentupimento de esgoto"
  }
};

export const images = {
  ...servicePhotos,
  hero: generalServicePhoto,
  sink: teamPhoto,
  pipe: generalServicePhoto,
  drain: servicePhotos.drainService,
  night: generalServicePhoto,
  kitchen: teamPhoto
} satisfies Record<string, SiteImage>;
