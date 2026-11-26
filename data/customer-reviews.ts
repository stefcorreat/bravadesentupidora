type CustomerReview = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  location?: string;
  date?: string;
  reply?: { text: string; date?: string };
};

export const customerReviews: readonly CustomerReview[] = [
  {
    id: "mariana",
    name: "Mariana",
    rating: 5,
    text: "Meu vaso sanitário entupiu e precisei de atendimento urgente. Chegaram super rápido, resolveram tudo sem quebra-quebra e deixaram o banheiro limpinho. Recomendo muito!"
  },
  {
    id: "ricardo",
    name: "Ricardo",
    rating: 5,
    text: "Estava com o ralo do banheiro entupido há dias. A equipe foi muito atenciosa e resolveu o problema rapidamente. Excelente atendimento!"
  },
  {
    id: "juliana",
    name: "Juliana",
    rating: 5,
    text: "Precisei de uma desentupidora durante a madrugada em São Paulo. Fui atendida rapidamente e o problema foi resolvido sem nenhuma quebradeira. Ótimos profissionais!"
  },
  {
    id: "carlos",
    name: "Carlos",
    rating: 5,
    text: "Minha pia da cozinha estava completamente entupida. Chegaram rápido, explicaram todo o procedimento e fizeram um serviço impecável. Recomendo!"
  },
  {
    id: "fernanda",
    name: "Fernanda",
    rating: 5,
    text: "Excelente desentupidora 24 horas! O vaso sanitário estava transbordando e a equipe resolveu tudo. Foram super educados, cuidadosos e atenciosos."
  },
  {
    id: "andre",
    name: "André",
    rating: 5,
    text: "Contratei para desentupir o ralo da área de serviço. Atendimento rápido, equipamentos profissionais e nada de quebra-quebra. Fiquei muito satisfeito com o serviço."
  }
];
