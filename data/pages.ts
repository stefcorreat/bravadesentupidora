import {images} from "./images";
import {santoAndreNeighborhoods,saoBernardoNeighborhoods,serviceAreaTargets} from "./expansion";

export type FAQ = {q:string; a:string};
export type PageKind = "location"|"service"|"intent"|"article"|"institutional";
export type PageData = {
  path:string; slug:string; kind:PageKind; title:string; description:string; h1:string;
  eyebrow:string; intro:string; image:keyof typeof images; sections:{heading:string;text:string}[];
  faq?:FAQ[]; related?:string[]; location?:string;
};

const slugify = (value:string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

const locationSeed = [
  ["Santo Amaro","santo-amaro","núcleo comercial e residencial da Zona Sul, com atendimento também no Centro Histórico, Largo Treze e eixos próximos às avenidas Santo Amaro e Nações Unidas"],
  ["Campo Belo","campo-belo","região residencial próxima a Congonhas, com condomínios, comércios e acessos movimentados"],
  ["Brooklin","brooklin","região entre grandes eixos empresariais, condomínios e vias próximas à Berrini e à Marginal Pinheiros"],
  ["Moema","moema","bairro de alta densidade residencial e comercial, com edifícios, restaurantes e atendimento em condomínios"],
  ["Jabaquara","jabaquara","região próxima ao terminal e a importantes corredores da Zona Sul"],
  ["Interlagos","interlagos","região residencial e comercial próxima às avenidas Interlagos e Atlântica"],
  ["Socorro","socorro","região próxima à Marginal Pinheiros, à Ponte do Socorro e a áreas comerciais"],
  ["Cidade Ademar","cidade-ademar","território residencial atendido pelas avenidas Cupecê e Yervant Kissajikian"],
  ["Vila Mariana","vila-mariana","região de edifícios, clínicas, restaurantes e comércio com grande circulação"],
  ["Saúde","saude","bairro residencial e comercial próximo às avenidas Jabaquara e Ricardo Jafet"],
  ["Campo Grande","campo-grande-sp","distrito da Subprefeitura de Santo Amaro, próximo às avenidas Nossa Senhora do Sabará e Interlagos"],
  ["Jardim Aeroporto","jardim-aeroporto","bairro do distrito de Campo Belo, próximo ao Aeroporto de Congonhas"],
  ["Jardim Petrópolis","jardim-petropolis","bairro residencial do distrito de Santo Amaro"],
  ["Jardim dos Estados","jardim-dos-estados","área residencial arborizada do distrito de Santo Amaro"],
  ["Alto da Boa Vista","alto-da-boa-vista","região residencial próxima a escolas, condomínios e à Linha 5-Lilás"],
  ["Granja Julieta","granja-julieta","bairro próximo à Marginal Pinheiros, à Chácara Santo Antônio e a condomínios"],
  ["Chácara Santo Antônio","chacara-santo-antonio","região empresarial e residencial próxima à Marginal Pinheiros"],
  ["Vila Kóstka","vila-kostka","bairro do distrito de Santo Amaro com atendimento residencial e comercial"],
  ["Vila Campo Grande","vila-campo-grande","bairro residencial do distrito de Campo Grande"],
  ["Vila Sabará","vila-sabara","região próxima à Avenida Nossa Senhora do Sabará e ao comércio local"],
  ["Jardim Aliança","jardim-alianca","bairro residencial pertencente à região de Campo Grande"],
  ["Jardim Beatriz","jardim-beatriz","bairro da área administrativa de Santo Amaro com atendimento local"],
  ["Jardim Bélgica","jardim-belgica","região residencial próxima a Campo Grande e aos eixos da Zona Sul"],
  ["Parque Industrial Taquaral","parque-industrial-taquaral","área com imóveis comerciais e industriais na região de Campo Grande"],
  ["Diadema","diadema","município do ABC com atendimento residencial, comercial e para condomínios"],
  ["Taboão da Serra","taboao-da-serra","município da Grande São Paulo conectado à capital pela Rodovia Régis Bittencourt"],
  ["São Bernardo do Campo","sao-bernardo-do-campo","cidade do ABC com residências, comércios, indústrias e condomínios"],
  ["Embu das Artes","embu-das-artes","município da Grande São Paulo com áreas residenciais e comerciais"],
  ["São Caetano do Sul","sao-caetano-do-sul","cidade do ABC com forte presença de condomínios e estabelecimentos comerciais"],
  ["Santo André","santo-andre","segundo núcleo territorial da Brava, com cobertura reforçada para bairros, condomínios, comércios e indústrias do ABC"],
  ["Osasco","osasco","município da região metropolitana com alta concentração residencial e comercial"],
  ["Itapecerica da Serra","itapecerica-da-serra","município conectado à Zona Sul e à Rodovia Régis Bittencourt"],
  ["Cotia","cotia","município atendido ao longo da Rodovia Raposo Tavares e bairros próximos"],
  ["Carapicuíba","carapicuiba","cidade da região oeste da Grande São Paulo com áreas residenciais densas"],
  ["Mauá","maua","município do ABC com residências, comércios e áreas industriais"],
  ["Barueri","barueri","cidade da região oeste com condomínios, empresas e áreas residenciais"],
  ["Embu-Guaçu","embu-guacu","município ao sul da região metropolitana com atendimento mediante consulta de disponibilidade"],
  ["Ribeirão Pires","ribeirao-pires","município do ABC com áreas residenciais, comerciais e vias de acesso regional"],
  ["Santana de Parnaíba","santana-de-parnaiba","município da região oeste com condomínios residenciais e centros empresariais"],
  ["Jandira","jandira","município da região oeste da Grande São Paulo com atendimento residencial e comercial"]
] as const;

const locationFaq = (name:string):FAQ[] => [
  {q:`A Brava atende ${name} 24 horas?`,a:`Sim. O atendimento em ${name} pode ser solicitado a qualquer hora, inclusive à noite, aos domingos e feriados. A disponibilidade e a previsão são confirmadas no contato.`},
  {q:`Quanto custa uma desentupidora em ${name}?`,a:"O valor depende do ponto entupido, do acesso, da extensão da tubulação e do equipamento necessário. A visita é gratuita e o orçamento deve ser aprovado antes do serviço."},
  {q:"Como pedir atendimento mais rápido?",a:"Envie o endereço, explique se o problema está na pia, vaso, ralo, esgoto ou caixa de gordura e informe se há retorno de água ou risco de transbordamento."}
];

export const locationPages:PageData[] = locationSeed.map(([name,slug,context],index)=>({
  path:`/desentupidora-${slug}/`, slug:`desentupidora-${slug}`, kind:"location", location:name,
  title:`Desentupidora em ${name} 24h | Brava Desentupidora`,
  description:`Desentupidora em ${name} com atendimento 24 horas, visita gratuita e orçamento para pia, vaso, ralo, esgoto e caixa de gordura. Ligue ou chame no WhatsApp.`,
  h1:`Desentupidora em ${name} 24 horas`, eyebrow:"ATENDIMENTO LOCAL 24 HORAS",
  intro:`Entupiu em ${name}? A Brava atende residências, condomínios, comércios e empresas. Explique o problema, envie o endereço e solicite uma visita gratuita pelo WhatsApp ou telefone.`,
  image:index%4===0?"drain":index%4===1?"sink":index%4===2?"pipe":"kitchen",
  sections:[
    {heading:`Atendimento de desentupimento em ${name}`,text:`A cobertura inclui ${context}. Antes do deslocamento, informe o ponto afetado e sinais como água voltando, mau cheiro, escoamento lento ou transbordamento. Esses detalhes ajudam a organizar o atendimento e indicar o equipamento adequado.`},
    {heading:"Pia, vaso, ralo, esgoto e caixa de gordura",text:`O serviço pode atender obstruções em cozinhas, banheiros, áreas de serviço, redes de esgoto e caixas de gordura. Em imóveis comerciais e condomínios de ${name}, informe se o problema afeta mais de uma unidade ou uma coluna compartilhada.`},
    {heading:"Visita gratuita e orçamento antes do serviço",text:"A avaliação inicial é gratuita. Depois de identificar o acesso e a provável extensão do entupimento, a equipe apresenta o orçamento. O serviço só deve começar depois da sua autorização."},
    {heading:`Desentupidora aberta agora em ${name}`,text:"A Brava recebe solicitações 24 horas. Para ocorrências urgentes, avise se existe risco de alagamento, retorno de esgoto ou interrupção da atividade do estabelecimento. A previsão depende do endereço e da disponibilidade no momento."}
  ], faq:locationFaq(name), related:["/servicos/","/desentupidora-aberta-agora/","/desentupidora-santo-amaro/"]
}));

const neighborhoodPage = (name:string,city:string,citySlug:string,index:number):PageData => {
  const localLabel = `${name}, ${city}`;
  const cityPage = `/desentupidora-${citySlug}/`;
  return {
    path:`/desentupidora-${slugify(name)}-${citySlug}/`,
    slug:`desentupidora-${slugify(name)}-${citySlug}`,
    kind:"location",
    location:localLabel,
    title:`Desentupidora em ${name}, ${city} 24h | Brava`,
    description:`Desentupidora no bairro ${name}, em ${city}, com atendimento 24 horas para pia, vaso, ralo, esgoto e caixa de gordura. Visita gratuita.`,
    h1:`Desentupidora no bairro ${name}, em ${city}`,
    eyebrow:`ATENDIMENTO LOCAL EM ${city.toUpperCase()}`,
    intro:`Precisa de desentupidora no bairro ${name}? A Brava recebe chamados 24 horas em ${city} para imóveis residenciais, comerciais e condomínios, com visita gratuita e orçamento antes da execução.`,
    image:index%4===0?"drain":index%4===1?"sink":index%4===2?"pipe":"night",
    sections:[
      {heading:`Atendimento de desentupimento no bairro ${name}`,text:`A equipe recebe solicitações para ${name} e verifica a disponibilidade a partir do endereço completo. Informe se o problema está em casa, apartamento, condomínio, restaurante, loja, galpão ou outro tipo de imóvel em ${city}.`},
      {heading:`Serviços disponíveis em ${name}`,text:"O atendimento cobre entupimentos em pia, vaso sanitário, ralo, rede de esgoto e caixa de gordura. Sinais como água voltando, borbulhamento, mau cheiro e transbordamento ajudam a identificar a urgência do chamado."},
      {heading:"Visita gratuita e orçamento antes da execução",text:`A avaliação inicial em ${localLabel} é gratuita. Depois de verificar o acesso, a tubulação e a provável extensão da obstrução, o orçamento é apresentado para aprovação antes do início do serviço.`},
      {heading:`Desentupidora 24 horas em ${localLabel}`,text:"Os canais de WhatsApp e telefone recebem solicitações durante o dia, à noite, aos domingos e feriados. A previsão de chegada depende da localização exata e da disponibilidade operacional no momento."}
    ],
    faq:locationFaq(localLabel),
    related:[cityPage,"/desentupidora-aberta-agora/","/servicos/"]
  };
};

export const santoAndreNeighborhoodPages:PageData[] = santoAndreNeighborhoods.map((name,index)=>neighborhoodPage(name,"Santo André","santo-andre",index));
export const saoBernardoNeighborhoodPages:PageData[] = saoBernardoNeighborhoods.map((name,index)=>neighborhoodPage(name,"São Bernardo do Campo","sao-bernardo-do-campo",index));
export const allLocationPages:PageData[] = [...locationPages,...santoAndreNeighborhoodPages,...saoBernardoNeighborhoodPages];

const serviceSeed = [
  ["desentupimento-de-pia","Desentupimento de pia","pia de cozinha ou banheiro","sink"],
  ["desentupimento-de-vaso-sanitario","Desentupimento de vaso sanitário","vaso sanitário com escoamento lento, transbordamento ou retorno","kitchen"],
  ["desentupimento-de-ralo","Desentupimento de ralo","ralos de banheiro, quintal e área de serviço","drain"],
  ["desentupimento-de-esgoto","Desentupimento de esgoto","rede de esgoto com retorno, mau cheiro ou extravasamento","night"],
  ["desentupimento-de-caixa-de-gordura","Desentupimento de caixa de gordura","caixa de gordura com acúmulo, retorno ou transbordamento","pipe"],
  ["desentupimento-residencial","Desentupimento residencial","casas e apartamentos","kitchen"],
  ["desentupimento-comercial-industrial","Desentupimento comercial e industrial","comércios, restaurantes, condomínios, galpões e indústrias","night"]
] as const;

export const servicePages:PageData[] = serviceSeed.map(([slug,name,target,image])=>({
  path:`/${slug}/`,slug,kind:"service",title:`${name} 24h em São Paulo | Brava`,
  description:`${name} em São Paulo e Grande SP. Atendimento 24 horas, visita gratuita e orçamento antes do serviço. WhatsApp e telefone.`,
  h1:`${name} em São Paulo`,eyebrow:"SERVIÇO 24 HORAS",image,
  intro:`Atendimento para ${target}, com avaliação do acesso e da situação antes da execução. Ligue ou envie uma mensagem para solicitar a visita gratuita.`,
  sections:[
    {heading:`Quando solicitar ${name.toLowerCase()}`,text:`Procure ajuda quando houver escoamento lento, retorno de água, barulhos na tubulação, mau cheiro persistente ou risco de transbordamento. Evite insistir em produtos corrosivos sem saber a causa da obstrução.`},
    {heading:"Avaliação e equipamento adequado",text:"O profissional verifica o ponto afetado, as condições de acesso e os sinais apresentados. O método depende da tubulação e da extensão do bloqueio; por isso, o diagnóstico deve vir antes da execução."},
    {heading:"Orçamento transparente",text:"A visita inicial é gratuita. O preço é apresentado após a avaliação e deve ser autorizado antes do início. Pergunte o que está incluído e tire suas dúvidas durante o atendimento."},
    {heading:"Atendimento residencial, comercial e para condomínios",text:"A Brava recebe chamados de casas, apartamentos, restaurantes, bares, lojas, condomínios, galpões e indústrias em São Paulo e cidades da região metropolitana."}
  ],
  faq:[
    {q:`Quanto custa ${name.toLowerCase()}?`,a:"O preço depende do acesso, da extensão da obstrução e do equipamento necessário. A visita é gratuita e o orçamento é informado antes do serviço."},
    {q:"O atendimento funciona à noite e nos feriados?",a:"Sim. A Brava recebe chamados 24 horas, inclusive à noite, aos domingos e feriados, conforme disponibilidade para o endereço."},
    {q:"Posso tentar resolver com produto químico?",a:"Produtos inadequados podem danificar tubulações ou causar acidentes. Se houver retorno, transbordamento ou recorrência, interrompa o uso do ponto e solicite avaliação profissional."}
  ],related:["/servicos/","/desentupidora-santo-amaro/","/desentupidora-santo-andre/"]
}));

export const serviceAreaPages:PageData[] = serviceSeed.flatMap(([serviceSlug,serviceName,target,image],serviceIndex)=>
  serviceAreaTargets.map(([location,locationSlug],locationIndex)=>({
    path:`/${serviceSlug}-${locationSlug}/`,
    slug:`${serviceSlug}-${locationSlug}`,
    kind:"service" as const,
    location,
    title:`${serviceName} em ${location} 24h | Brava`,
    description:`${serviceName} em ${location} para ${target}. Atendimento 24 horas, visita gratuita, WhatsApp e telefone.`,
    h1:`${serviceName} em ${location}`,
    eyebrow:"SERVIÇO LOCAL 24 HORAS",
    intro:`Atendimento de ${serviceName.toLowerCase()} em ${location} para ${target}. Informe o endereço e os sinais observados para consultar disponibilidade e solicitar a visita gratuita.`,
    image:(serviceIndex+locationIndex)%3===0?image:(serviceIndex+locationIndex)%3===1?"pipe":"drain",
    sections:[
      {heading:`Quando solicitar ${serviceName.toLowerCase()} em ${location}`,text:`Escoamento lento, retorno de água, borbulhamento, mau cheiro ou transbordamento indicam que o ponto precisa ser avaliado. Interrompa o uso se houver risco de alagamento ou contato com esgoto.`},
      {heading:`Atendimento local em ${location}`,text:`A Brava atende casas, apartamentos, condomínios, restaurantes, lojas, galpões e empresas em ${location}. O endereço completo ajuda a confirmar a cobertura e a previsão de atendimento.`},
      {heading:"Diagnóstico antes da execução",text:"O método depende do acesso, do tipo de tubulação e da extensão da obstrução. A equipe avalia o local antes de indicar o procedimento e evita prometer uma solução sem verificar a situação."},
      {heading:"Visita gratuita e orçamento claro",text:`A visita inicial em ${location} é gratuita. O orçamento de ${serviceName.toLowerCase()} é apresentado antes da execução e o serviço só começa depois da autorização do cliente.`}
    ],
    faq:[
      {q:`Quanto custa ${serviceName.toLowerCase()} em ${location}?`,a:"O preço depende do acesso, da extensão do bloqueio e do equipamento necessário. A visita é gratuita e o orçamento é informado antes da execução."},
      {q:`A Brava atende ${location} agora?`,a:"Os canais recebem solicitações 24 horas. A disponibilidade e a previsão são confirmadas a partir do endereço completo."},
      {q:"Quais informações devo enviar?",a:`Informe o endereço em ${location}, o ponto afetado, os sinais observados e se o problema atingiu outros pontos do imóvel.`}
    ],
    related:[`/${serviceSlug}/`,`/desentupidora-${locationSlug}/`,"/orcamento-de-desentupimento/"]
  })));

const intentSeed = [
  ["desentupidora-perto-de-mim","Desentupidora perto de mim","atendimento por localização em São Paulo e Grande SP"],
  ["desentupidora-aberta-agora","Desentupidora aberta agora","atendimento disponível 24 horas"],
  ["desentupidora-24-horas","Desentupidora 24 horas","chamados durante o dia, à noite, aos domingos e feriados"],
  ["desentupidora-urgente","Desentupidora urgente","situações com retorno, transbordamento ou risco de alagamento"],
  ["melhor-desentupidora-em-sao-paulo","Melhor desentupidora em São Paulo","critérios para escolher atendimento com clareza e segurança"],
  ["desentupidora-recomendada-em-sao-paulo","Desentupidora recomendada em São Paulo","o que conferir antes de autorizar o serviço"],
  ["orcamento-de-desentupimento","Orçamento de desentupimento","visita gratuita e proposta antes da execução"],
  ["desentupidora-em-sao-paulo","Desentupidora em São Paulo","cobertura na capital, Zona Sul, ABC e Grande São Paulo"]
] as const;

export const intentPages:PageData[] = intentSeed.map(([slug,h1,focus],index)=>({
  path:`/${slug}/`,slug,kind:"intent",title:`${h1} | Atendimento Brava 24h`,
  description:`${h1}: ${focus}. Solicite visita gratuita pelo WhatsApp ou telefone.`,h1,eyebrow:"RESPOSTA RÁPIDA",intro:`Precisa de ${h1.toLowerCase()}? A Brava oferece ${focus}. Informe o endereço e o ponto afetado para consultar a disponibilidade.`,
  image:index%2?"pipe":"hero",
  sections:[
    {heading:"Explique o problema no primeiro contato",text:"Diga se o entupimento está na pia, vaso, ralo, esgoto ou caixa de gordura. Informe há quanto tempo começou, se a água está retornando e se outros pontos do imóvel também foram afetados."},
    {heading:"Confira atendimento, previsão e orçamento",text:"Antes de autorizar, confirme a disponibilidade para o endereço, a previsão informada e como será feita a avaliação. A visita é gratuita e o orçamento é apresentado antes da execução."},
    {heading:"Como escolher uma desentupidora",text:"Considere clareza na explicação, identificação do problema, método compatível com a tubulação e autorização prévia do valor. Desconfie de promessas absolutas feitas sem avaliação do local."},
    {heading:"Atendimento na capital e Grande São Paulo",text:"A Brava atende a Zona Sul, Santo Amaro, Santo André, cidades do ABC e outros municípios da região metropolitana, conforme disponibilidade para cada endereço."}
  ],faq:[
    {q:"A visita é realmente gratuita?",a:"Sim. A avaliação inicial é gratuita. O orçamento é apresentado antes do serviço e precisa ser aprovado pelo cliente."},
    {q:"A Brava atende agora?",a:"Os canais recebem solicitações 24 horas. A previsão de chegada é confirmada conforme o endereço e a disponibilidade operacional."},
    {q:"Quais informações devo enviar?",a:"Envie o endereço, o tipo de ponto entupido, os sinais observados e, se possível, uma foto simples do local sem se expor a risco."}
  ],related:["/areas-atendidas/","/servicos/","/contato/"]
}));

const articles = [
  ["como-evitar-entupimento-de-pia","Como evitar entupimento de pia","Cuidados com gordura, restos de alimentos e uso diário da cozinha."],
  ["sinais-de-esgoto-entupido","Sinais de esgoto entupido","Retorno, mau cheiro, borbulhamento e escoamento lento em vários pontos."],
  ["o-que-fazer-quando-o-vaso-entupir","O que fazer quando o vaso sanitário entupir","Medidas seguras antes de solicitar atendimento profissional."],
  ["quanto-custa-desentupimento","Quanto custa um desentupimento?","Entenda o que influencia o orçamento sem cair em promessas genéricas."],
  ["caixa-de-gordura-entupida","Caixa de gordura entupida: sinais e prevenção","Como reconhecer acúmulo e reduzir recorrências."],
  ["desentupidora-para-condominio","Quando chamar desentupidora para condomínio","Como organizar informações quando mais de uma unidade é afetada."]
] as const;

export const articlePages:PageData[] = articles.map(([slug,h1,description],i)=>({
  path:`/blog/${slug}/`,slug:`blog/${slug}`,kind:"article",title:`${h1} | Guia Brava`,description,h1,eyebrow:"GUIA BRAVA",intro:description,image:i%2?"drain":"sink",
  sections:[
    {heading:"Observe os sinais antes de agir",text:"Escoamento lento, ruídos, retorno de água e mau cheiro ajudam a identificar que existe uma obstrução. Se vários pontos apresentarem o mesmo sintoma, o problema pode estar em uma tubulação compartilhada."},
    {heading:"Evite soluções que possam agravar o problema",text:"Não misture produtos químicos nem introduza objetos rígidos na tubulação. Além do risco de acidente, essas tentativas podem danificar conexões ou empurrar a obstrução para uma parte mais difícil de acessar."},
    {heading:"Quando pedir avaliação profissional",text:"Solicite atendimento quando houver recorrência, transbordamento, retorno de esgoto, mau cheiro persistente ou interrupção do uso do imóvel. Informe o que aconteceu e quais pontos foram afetados."},
    {heading:"Prepare as informações do chamado",text:"Tenha o endereço, o tipo de imóvel, o ponto entupido e uma descrição dos sinais. Em condomínios e comércios, verifique se outras unidades também perceberam o problema."}
  ],related:["/blog/","/servicos/","/orcamento-de-desentupimento/"]
}));

export const institutionalPages:PageData[] = [
  {path:"/servicos/",slug:"servicos",kind:"institutional",title:"Serviços de desentupimento em São Paulo | Brava",description:"Conheça os serviços da Brava para pia, vaso, ralo, esgoto, caixa de gordura, residências, comércios e condomínios.",h1:"Serviços de desentupimento",eyebrow:"SOLUÇÕES BRAVA",intro:"Atendimento 24 horas para diferentes pontos e tipos de imóvel, com visita gratuita e orçamento antes da execução.",image:"pipe",sections:[{heading:"Soluções conforme o ponto afetado",text:"Cada entupimento exige avaliação do acesso, da tubulação e dos sinais apresentados. Escolha o serviço abaixo ou fale com a equipe para explicar o problema."}],related:servicePages.map(p=>p.path)},
  {path:"/areas-atendidas/",slug:"areas-atendidas",kind:"institutional",title:"Áreas atendidas pela Brava Desentupidora | SP",description:"Desentupidora em Santo Amaro, Santo André, Zona Sul, ABC e cidades da Grande São Paulo.",h1:"Áreas atendidas em São Paulo e Grande SP",eyebrow:"COBERTURA",intro:"Consulte a página da sua região e solicite atendimento por WhatsApp ou ligação.",image:"drain",sections:[{heading:"Santo Amaro e Santo André como núcleos",text:"Santo Amaro concentra a cobertura aprofundada na Zona Sul. Santo André funciona como segundo núcleo para o ABC, sem deixar de atender as demais localidades listadas."}],related:locationPages.map(p=>p.path)},
  {path:"/sobre/",slug:"sobre",kind:"institutional",title:"Sobre a Brava Desentupidora SP",description:"Conheça a Brava Desentupidora SP, atendimento 24 horas para residências, comércios, condomínios e indústrias.",h1:"Sobre a Brava Desentupidora SP",eyebrow:"QUEM SOMOS",intro:"Atendimento técnico, comunicação clara e orçamento antes da execução.",image:"hero",sections:[{heading:"Atendimento para diferentes imóveis",text:"A Brava recebe solicitações residenciais, comerciais, condominiais e industriais em São Paulo e região metropolitana."},{heading:"Atendimento 24 horas",text:"Os canais funcionam durante o dia, à noite, aos domingos e feriados, conforme disponibilidade para cada endereço."},{heading:"Visita gratuita",text:"O local e o problema são avaliados antes da apresentação do orçamento. O serviço deve ser autorizado pelo cliente."}],related:["/servicos/","/areas-atendidas/","/contato/"]},
  {path:"/contato/",slug:"contato",kind:"institutional",title:"Telefone e WhatsApp da Brava Desentupidora",description:"Fale com a Brava Desentupidora por WhatsApp ou telefone. Atendimento 24 horas e visita gratuita.",h1:"Telefone e WhatsApp da Brava",eyebrow:"ATENDIMENTO 24H",intro:"Informe o endereço e explique o que está entupido para consultar atendimento e previsão.",image:"sink",sections:[{heading:"O que informar",text:"Envie o endereço, o tipo de imóvel, o ponto afetado e os sinais observados. Avise se existe retorno de esgoto, transbordamento ou risco de alagamento."},{heading:"Antes de autorizar",text:"Confirme o orçamento, o que está incluído e a forma de pagamento. A avaliação inicial é gratuita."}],related:["/servicos/","/areas-atendidas/"]},
  {path:"/blog/",slug:"blog",kind:"institutional",title:"Guia Brava | Dúvidas sobre desentupimento",description:"Orientações sobre pia, vaso, ralo, esgoto, caixa de gordura, orçamento e prevenção de entupimentos.",h1:"Guia sobre desentupimento e prevenção",eyebrow:"CONTEÚDO ÚTIL",intro:"Informação clara para reconhecer sinais, reduzir riscos e saber quando chamar ajuda profissional.",image:"kitchen",sections:[{heading:"Dúvidas frequentes, respostas diretas",text:"Escolha um conteúdo para entender sinais de obstrução, cuidados seguros e informações necessárias para solicitar atendimento."}],related:articlePages.map(p=>p.path)},
  {path:"/politica-de-privacidade/",slug:"politica-de-privacidade",kind:"institutional",title:"Política de privacidade | Brava Desentupidora",description:"Saiba como a Brava trata informações enviadas pelo site, WhatsApp e telefone.",h1:"Política de privacidade",eyebrow:"TRANSPARÊNCIA",intro:"Esta política explica como informações podem ser utilizadas no atendimento.",image:"pipe",sections:[{heading:"Dados fornecidos",text:"Podemos receber nome, telefone, endereço do atendimento, mensagens, fotografias enviadas voluntariamente e informações necessárias para avaliar o serviço."},{heading:"Finalidades",text:"Os dados são utilizados para responder solicitações, avaliar cobertura, preparar orçamento, organizar atendimento e cumprir obrigações legais."},{heading:"Compartilhamento",text:"Informações necessárias podem ser compartilhadas com profissionais envolvidos no atendimento e plataformas de comunicação ou hospedagem, conforme suas políticas."},{heading:"Direitos do titular",text:"Nos termos da LGPD, o titular pode solicitar acesso, correção e outras medidas aplicáveis por meio dos canais da empresa."}],related:["/termos-de-uso/"]},
  {path:"/termos-de-uso/",slug:"termos-de-uso",kind:"institutional",title:"Termos de uso | Brava Desentupidora",description:"Condições de navegação, solicitação de visita, orçamento e atendimento da Brava Desentupidora.",h1:"Termos de uso",eyebrow:"CONDIÇÕES DO SITE",intro:"Conheça as condições para utilizar o site e solicitar atendimento.",image:"pipe",sections:[{heading:"Solicitação não é contratação automática",text:"O envio de mensagem ou a ligação inicia uma consulta. O serviço depende de disponibilidade, avaliação e aprovação do orçamento."},{heading:"Informações corretas",text:"O cliente deve informar endereço, ponto afetado, condições de acesso e sinais relevantes. Informações incompletas podem exigir nova avaliação."},{heading:"Preço e autorização",text:"O valor e as condições devem ser informados antes do início. O serviço somente deve ser executado após autorização do cliente."},{heading:"Segurança",text:"Não se exponha a esgoto, água contaminada ou produtos químicos. Em caso de risco elétrico, estrutural ou à saúde, afaste-se da área e procure o serviço de emergência adequado."}],related:["/politica-de-privacidade/"]},
  {path:"/creditos-de-imagens/",slug:"creditos-de-imagens",kind:"institutional",title:"Créditos de imagens | Brava Desentupidora",description:"Fontes e créditos das fotografias gratuitas utilizadas no site da Brava.",h1:"Créditos das imagens",eyebrow:"FONTES VISUAIS",intro:"Fotografias provisórias selecionadas em bancos com licença gratuita, substituíveis por imagens reais da Brava.",image:"hero",sections:Object.values(images).map(img=>({heading:img.credit,text:`Fonte: ${img.source}`})),related:["/sobre/"]}
];

export const allPages = [...institutionalPages,...servicePages,...serviceAreaPages,...allLocationPages,...intentPages,...articlePages];
export const findPage = (path:string) => allPages.find(p=>p.path===path);

export const priorityLocations = locationPages.filter(p=>["Santo Amaro","Campo Belo","Brooklin","Moema","Jabaquara","Interlagos","Socorro","Cidade Ademar","Vila Mariana","Saúde"].includes(p.location||""));
export const featuredMetroLocations = locationPages.filter(p=>["Diadema","Taboão da Serra","São Bernardo do Campo","Embu das Artes","São Caetano do Sul","Santo André","Osasco","Itapecerica da Serra","Cotia","Carapicuíba","Mauá","Barueri","Embu-Guaçu","Ribeirão Pires","Santana de Parnaíba","Jandira"].includes(p.location||""));

