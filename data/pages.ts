import {images} from "./images";
import {santoAndreNeighborhoods,saoBernardoNeighborhoods,serviceAreaTargets} from "./expansion";
import {serviceGuides} from "./service-guides";

export type FAQ = {q:string; a:string};
export type PageKind = "location"|"service"|"intent"|"article"|"institutional";
export type PageData = {
  path:string; slug:string; kind:PageKind; title:string; description:string; h1:string;
  eyebrow:string; intro:string; image:keyof typeof images; sections:{heading:string;text:string}[];
  faq?:FAQ[]; related?:string[]; location?:string;
};

const slugify = (value:string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

const locationSeed = [
  ["Santo Amaro","santo-amaro","região comercial e residencial da Zona Sul, com atendimento também no Centro Histórico, Largo Treze e eixos próximos às avenidas Santo Amaro e Nações Unidas"],
  ["Campo Belo","campo-belo","região residencial próxima a Congonhas, com condomínios, comércios e acessos movimentados"],
  ["Brooklin","brooklin","região entre grandes eixos empresariais, condomínios e vias próximas à Berrini e à Marginal Pinheiros"],
  ["Moema","moema","bairro de alta densidade residencial e comercial, com edifícios, restaurantes e atendimento em condomínios"],
  ["Jabaquara","jabaquara","região próxima ao terminal e a importantes corredores da Zona Sul"],
  ["Interlagos","interlagos","região residencial e comercial próxima às avenidas Interlagos e Atlântica"],
  ["Socorro","socorro","região próxima à Marginal Pinheiros, à Ponte do Socorro e a áreas comerciais"],
  ["Cidade Ademar","cidade-ademar","região residencial próxima às avenidas Cupecê e Yervant Kissajikian"],
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
  ["São Caetano do Sul","sao-caetano-do-sul","cidade do ABC com condomínios, residências e estabelecimentos comerciais"],
  ["Santo André","santo-andre","cidade do ABC com atendimento para bairros, condomínios, comércios e indústrias"],
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
      {heading:`Desentupidora 24 horas em ${localLabel}`,text:"Os canais de WhatsApp e telefone recebem solicitações durante o dia, à noite, aos domingos e feriados. A previsão de atendimento é confirmada de acordo com o endereço e o horário do contato."}
    ],
    faq:locationFaq(localLabel),
    related:[cityPage,"/desentupidora-aberta-agora/","/servicos/"]
  };
};

export const santoAndreNeighborhoodPages:PageData[] = santoAndreNeighborhoods.map((name,index)=>neighborhoodPage(name,"Santo André","santo-andre",index));
export const saoBernardoNeighborhoodPages:PageData[] = saoBernardoNeighborhoods.map((name,index)=>neighborhoodPage(name,"São Bernardo do Campo","sao-bernardo-do-campo",index));
export const allLocationPages:PageData[] = [...locationPages,...santoAndreNeighborhoodPages,...saoBernardoNeighborhoodPages];

const serviceSeed = [
  ["desentupimento-de-pia","Desentupimento de pia","pia de cozinha ou banheiro","sinkService","A água fica parada na cuba ou demora a descer? A equipe verifica o sifão e a tubulação para localizar o bloqueio."],
  ["desentupimento-de-vaso-sanitario","Desentupimento de vaso sanitário","vaso sanitário com escoamento lento, transbordamento ou retorno","toiletService","A água sobe quando você dá descarga ou fica parada no vaso? Avise a equipe se houver risco de transbordamento."],
  ["desentupimento-de-ralo","Desentupimento de ralo","ralos de banheiro, quintal e área de serviço","drainService","O ralo do banheiro, do quintal ou da área de serviço deixou de escoar? Informe se há mau cheiro ou água voltando."],
  ["desentupimento-de-esgoto","Desentupimento de esgoto","rede de esgoto com retorno, mau cheiro ou extravasamento","sewerService","Esgoto voltando pelo ralo ou vários pontos entupidos ao mesmo tempo? A equipe avalia a tubulação no local."],
  ["desentupimento-de-caixa-de-gordura","Desentupimento de caixa de gordura","caixa de gordura com acúmulo, retorno ou transbordamento","greaseTrapService","Mau cheiro na cozinha, pia demorando a escoar ou caixa transbordando? Conte quais sinais apareceram."],
  ["desentupimento-residencial","Desentupimento residencial","casas e apartamentos","kitchen","Atendimento em casas e apartamentos. Diga qual ponto entupiu e se o problema também aparece em outros cômodos."],
  ["desentupimento-comercial-industrial","Desentupimento comercial e industrial","comércios, restaurantes, condomínios, galpões e indústrias","night","Atendimento em lojas, restaurantes, escritórios e outros estabelecimentos. Informe se o entupimento interrompeu a operação."]
] as const;

export const servicePages = serviceSeed.map(([slug,name,,image,serviceSummary]):PageData & {serviceSummary:string}=>({
  path:`/${slug}/`,slug,kind:"service",title:`${name} 24h em São Paulo | Brava`,
  description:`${name} em São Paulo e Grande SP. Atendimento 24 horas, visita gratuita e orçamento antes do serviço. WhatsApp e telefone.`,
  h1:`${name} em São Paulo`,eyebrow:"SERVIÇO 24 HORAS",image,
  serviceSummary,
  intro:`${serviceSummary} Ligue ou mande uma mensagem para pedir a visita gratuita.`,
  sections:[
    ...serviceGuides[slug].sections,
    {heading:"Orçamento transparente",text:"A visita inicial é gratuita. O preço é apresentado após a avaliação e deve ser autorizado antes do início. Pergunte o que está incluído e tire suas dúvidas durante o atendimento."},
    {heading:"Atendimento residencial, comercial e para condomínios",text:"A Brava recebe chamados de casas, apartamentos, restaurantes, bares, lojas, condomínios, galpões e indústrias em São Paulo e cidades da região metropolitana."}
  ],
  faq:[
    {q:`Quanto custa ${name.toLowerCase()}?`,a:"O preço depende do acesso, da extensão da obstrução e do equipamento necessário. A visita é gratuita e o orçamento é informado antes do serviço."},
    {q:"O atendimento funciona à noite e nos feriados?",a:"Sim. A Brava recebe chamados 24 horas, inclusive à noite, aos domingos e feriados, conforme disponibilidade para o endereço."},
    ...serviceGuides[slug].faq
  ],related:["/servicos/","/desentupidora-santo-amaro/","/desentupidora-santo-andre/"]
}));

const santoAmaroToiletSection = {
  heading: "Vaso entupido em Santo Amaro: o que dizer no chamado",
  text: "Se for em apartamento, informe o bloco e se o ralo do box também borbulha quando você dá descarga. Se for em loja ou restaurante perto do Largo Treze, diga se o banheiro está interditado e quem pode liberar o acesso. Se houve queda de algum objeto, mencione isso antes da visita."
};

export const serviceAreaPages:PageData[] = serviceSeed.flatMap(([serviceSlug,serviceName,target,image,serviceSummary],serviceIndex)=>
  serviceAreaTargets.map(([location,locationSlug],locationIndex)=>({
    path:`/${serviceSlug}-${locationSlug}/`,
    slug:`${serviceSlug}-${locationSlug}`,
    kind:"service" as const,
    location,
    title:`${serviceName} em ${location} 24h | Brava`,
    description:`${serviceName} em ${location} para ${target}. Atendimento 24 horas, visita gratuita, WhatsApp e telefone.`,
    h1:`${serviceName} em ${location}`,
    eyebrow:"SERVIÇO LOCAL 24 HORAS",
    intro:`${serviceSummary} Fale com a Brava para pedir uma visita gratuita em ${location}.`,
    image:image.endsWith("Service")?image:(serviceIndex+locationIndex)%3===0?image:(serviceIndex+locationIndex)%3===1?"pipe":"drain",
    sections:[
      ...serviceGuides[serviceSlug].sections,
      ...(serviceSlug==="desentupimento-de-vaso-sanitario" && locationSlug==="santo-amaro" ? [santoAmaroToiletSection] : []),
      {heading:"Visita gratuita e orçamento claro",text:`A visita inicial em ${location} é gratuita. O orçamento de ${serviceName.toLowerCase()} é apresentado antes da execução e o serviço só começa depois da autorização do cliente.`}
    ],
    faq:[
      {q:`Quanto custa ${serviceName.toLowerCase()} em ${location}?`,a:"O preço depende do acesso, da extensão do bloqueio e do equipamento necessário. A visita é gratuita e o orçamento é informado antes da execução."},
      {q:`A Brava atende ${location} agora?`,a:"Os canais recebem solicitações 24 horas. A disponibilidade e a previsão são confirmadas a partir do endereço completo."},
      ...serviceGuides[serviceSlug].faq
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
  ["preco-de-desentupidora-em-sao-paulo","Preço de desentupidora em São Paulo","faixas de mercado para pia, vaso, ralo, esgoto e caixa de gordura"],
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
    {q:"A Brava atende agora?",a:"Os canais recebem solicitações 24 horas. A previsão de atendimento é confirmada de acordo com o endereço e o horário do contato."},
    {q:"Quais informações devo enviar?",a:"Envie o endereço, o tipo de ponto entupido, os sinais observados e, se possível, uma foto simples do local sem se expor a risco."}
  ],related:["/areas-atendidas/","/servicos/","/contato/"]
}));

const articles:{slug:string;h1:string;description:string;sections:{heading:string;text:string}[];faq:FAQ[]}[] = [
  {slug:"como-evitar-entupimento-de-pia",h1:"Como evitar entupimento de pia",description:"Cuidados com gordura, restos de alimentos e uso diário da cozinha.",sections:[
    {heading:"Não descarte óleo e gordura na pia",text:"Óleo, molhos e gordura se acumulam na parede da tubulação e prendem restos de alimentos. Guarde o óleo usado em uma garrafa e encaminhe para descarte adequado."},
    {heading:"Use uma peneira no ralo da pia",text:"A peneira retém arroz, sementes, cascas e outros resíduos antes que entrem no encanamento. Retire o material e descarte no lixo após lavar a louça."},
    {heading:"Limpe o sifão com segurança",text:"Se o escoamento estiver lento e o sifão for acessível, feche a torneira, coloque um balde por baixo e faça a limpeza sem usar produtos corrosivos. Se não tiver segurança, procure atendimento."},
    {heading:"Quando chamar uma desentupidora",text:"Peça avaliação quando a água voltar, houver mau cheiro persistente, o problema se repetir ou outros pontos da cozinha também começarem a escoar devagar."}
  ],faq:[
    {q:"Água quente desentope pia?",a:"Água morna pode ajudar em resíduos leves, mas água fervendo pode danificar algumas tubulações e não resolve obstruções profundas."},
    {q:"Posso jogar soda cáustica na pia?",a:"Não é recomendado. O produto pode causar queimaduras, reagir com outros materiais e danificar componentes da instalação."},
    {q:"Por que a pia volta a entupir?",a:"A recorrência pode indicar gordura acumulada na tubulação, obstrução mais distante ou problema na caixa de gordura."}
  ]},
  {slug:"sinais-de-esgoto-entupido",h1:"Sinais de esgoto entupido",description:"Retorno, mau cheiro, borbulhamento e escoamento lento em vários pontos.",sections:[
    {heading:"Água voltando por ralos ou vasos",text:"O retorno de água ou esgoto é um dos sinais mais claros de obstrução. Interrompa o uso dos pontos afetados para reduzir o risco de transbordamento."},
    {heading:"Mau cheiro e barulho de borbulhamento",text:"Cheiro persistente e ruídos quando a água escoa podem indicar ar preso e passagem reduzida dentro da rede."},
    {heading:"Vários pontos lentos ao mesmo tempo",text:"Quando pia, ralo e vaso apresentam sintomas juntos, o bloqueio pode estar em um ramal compartilhado ou na linha principal do imóvel."},
    {heading:"O que fazer antes do atendimento",text:"Evite contato com a água contaminada, mantenha crianças e animais afastados e informe quais pontos foram afetados ao solicitar a avaliação."}
  ],faq:[
    {q:"Como saber se o entupimento está na rede principal?",a:"A ocorrência simultânea em vários ralos, vasos ou unidades do imóvel pode indicar obstrução em uma tubulação compartilhada."},
    {q:"Mau cheiro sempre significa esgoto entupido?",a:"Não. Também pode haver sifão seco, vedação inadequada ou caixa de gordura suja. Uma avaliação identifica a origem."},
    {q:"Posso continuar usando água?",a:"Se houver retorno ou risco de transbordamento, interrompa o uso dos pontos ligados à rede até a avaliação."}
  ]},
  {slug:"o-que-fazer-quando-o-vaso-entupir",h1:"Como desentupir vaso sanitário com segurança",description:"Passos seguros para um entupimento leve e sinais de que é hora de chamar uma desentupidora.",sections:[
    {heading:"Primeiro, evite dar outra descarga",text:"Se a água estiver alta, uma nova descarga pode causar transbordamento. Feche o registro do vaso, proteja o piso e aguarde o nível baixar."},
    {heading:"Como usar o desentupidor de borracha",text:"Posicione o desentupidor cobrindo toda a saída do vaso, mantenha água suficiente para vedar a borracha e faça movimentos firmes de pressão e sucção. Teste com pouca água antes de usar a descarga completa."},
    {heading:"O que não colocar no vaso",text:"Não misture produtos químicos, não use objetos pontiagudos e não despeje água fervendo. Essas tentativas podem causar acidentes, trincar a louça ou empurrar o objeto para uma parte mais profunda."},
    {heading:"Quando chamar uma desentupidora",text:"Procure atendimento se houver objeto preso, retorno de esgoto, entupimento recorrente, vazamento na base ou se o desentupidor não resolver após tentativas cuidadosas."}
  ],faq:[
    {q:"Detergente e água quente desentopem vaso?",a:"Podem ajudar apenas em obstruções leves de matéria orgânica. Não use água fervendo, pois o choque térmico pode danificar a louça."},
    {q:"Soda cáustica pode ser usada no vaso sanitário?",a:"Não é recomendado. Há risco de queimadura, reação química e dano à tubulação, além de perigo para quem realizará o atendimento."},
    {q:"Quanto custa desentupir um vaso em São Paulo?",a:"As faixas publicadas no mercado em 2026 ficam aproximadamente entre R$ 180 e R$ 400 em casos residenciais. O acesso, o objeto preso, a extensão e o horário podem alterar o valor."},
    {q:"Quando é necessário retirar o vaso?",a:"A retirada pode ser necessária quando existe objeto rígido preso, falha na vedação ou obstrução que não pode ser alcançada pelo ponto de saída."}
  ]},
  {slug:"quanto-custa-desentupimento",h1:"Quanto custa um desentupimento em São Paulo?",description:"Faixas de preço de mercado para pia, vaso, ralo, esgoto e caixa de gordura em São Paulo.",sections:[
    {heading:"Preço médio de desentupimento em São Paulo",text:"Levantamentos de mercado publicados em 2026 apontam que serviços simples de pia, ralo e vaso costumam ficar entre R$ 150 e R$ 400. Redes de esgoto, colunas e caixas de gordura podem exigir equipamentos e apresentar valores maiores."},
    {heading:"O que influencia o orçamento",text:"O preço muda conforme o ponto entupido, a distância até a obstrução, o acesso, o equipamento necessário, o horário e a necessidade de desmontar alguma peça."},
    {heading:"Preço fechado ou cobrança por metro",text:"Algumas empresas cobram um valor fechado; outras usam hora técnica ou metro de cabo inserido. Confirme o critério, o limite e o valor estimado antes de autorizar."},
    {heading:"A tabela é uma referência, não um orçamento",text:"As faixas apresentadas são referências publicadas no mercado de São Paulo e do ABC. O valor da Brava é informado após a avaliação gratuita do local e antes da execução."}
  ],faq:[
    {q:"Qual o preço médio para desentupir uma pia em São Paulo?",a:"As referências consultadas em 2026 indicam aproximadamente R$ 150 a R$ 350, dependendo do acesso e da extensão da obstrução."},
    {q:"Qual o preço para desentupir vaso sanitário?",a:"A faixa publicada para São Paulo costuma ficar entre R$ 180 e R$ 400 em serviços residenciais, podendo variar quando há objeto preso ou retirada do vaso."},
    {q:"Atendimento noturno custa mais?",a:"Algumas empresas aplicam adicional noturno, aos domingos ou feriados. Confirme essa condição antes de autorizar."},
    {q:"A visita da Brava é gratuita?",a:"Sim. A avaliação inicial é gratuita e o orçamento é apresentado antes do serviço."}
  ]},
  {slug:"caixa-de-gordura-entupida",h1:"Caixa de gordura entupida: sinais e prevenção",description:"Como reconhecer acúmulo e reduzir recorrências.",sections:[
    {heading:"Sinais de caixa de gordura cheia",text:"Mau cheiro próximo à tampa, pia escoando lentamente, borbulhamento e extravasamento indicam que a caixa pode estar acumulada ou com a saída obstruída."},
    {heading:"Por que a limpeza periódica é importante",text:"A retirada adequada da gordura reduz o risco de retorno para a cozinha e de obstrução no ramal de esgoto."},
    {heading:"O que não fazer",text:"Não empurre a gordura para a tubulação e não use produtos corrosivos. O resíduo precisa ser retirado e descartado de forma adequada."},
    {heading:"Quando solicitar atendimento",text:"Procure avaliação se houver transbordamento, retorno na pia, cheiro persistente ou se a caixa encher novamente em pouco tempo."}
  ],faq:[
    {q:"Quanto custa limpar uma caixa de gordura?",a:"As faixas publicadas em São Paulo geralmente variam de R$ 250 a R$ 600, conforme volume, acesso e descarte."},
    {q:"Com que frequência devo limpar?",a:"A frequência depende do uso e do tamanho da caixa. Restaurantes e cozinhas com uso intenso precisam de verificação mais frequente."},
    {q:"Posso jogar a gordura no esgoto?",a:"Não. O resíduo deve ser retirado e encaminhado para descarte adequado, sem ser empurrado para a rede."}
  ]},
  {slug:"desentupidora-para-condominio",h1:"Quando chamar desentupidora para condomínio",description:"Como organizar informações quando mais de uma unidade é afetada.",sections:[
    {heading:"Identifique quantas unidades foram afetadas",text:"Verifique se o problema acontece em um apartamento, em várias unidades da mesma coluna ou também nas áreas comuns."},
    {heading:"Avise a administração e interrompa o uso",text:"Quando houver retorno de esgoto ou risco de vazamento, comunique o síndico e peça que os moradores reduzam o uso dos pontos ligados à tubulação afetada."},
    {heading:"Informe os acessos disponíveis",text:"Casa de máquinas, caixas de inspeção, shafts e áreas técnicas podem ser necessários. Organize a liberação desses espaços antes da chegada da equipe."},
    {heading:"Registre orçamento e autorização",text:"Confirme o responsável pela aprovação, o critério de cobrança, o trecho atendido e as condições antes do início do serviço."}
  ],faq:[
    {q:"Quem paga o desentupimento no condomínio?",a:"Depende da origem do problema e das regras do condomínio. Obstruções em área comum costumam ser tratadas pela administração; problemas internos podem ser responsabilidade da unidade."},
    {q:"Como saber se o problema está na coluna?",a:"Quando várias unidades alinhadas apresentam retorno ou escoamento lento, a coluna compartilhada pode estar obstruída."},
    {q:"A Brava atende condomínios 24 horas?",a:"Sim. Os canais recebem solicitações 24 horas e a previsão é confirmada conforme o endereço e o horário."}
  ]}
];

const articleImages: Partial<Record<string, keyof typeof images>> = {
  "como-evitar-entupimento-de-pia": "sinkService",
  "sinais-de-esgoto-entupido": "sewerService",
  "o-que-fazer-quando-o-vaso-entupir": "toiletService",
  "caixa-de-gordura-entupida": "greaseTrapService"
};

export const articlePages:PageData[] = articles.map(article=>({
  path:`/blog/${article.slug}/`,slug:`blog/${article.slug}`,kind:"article",title:`${article.h1} | Guia Brava`,description:article.description,h1:article.h1,eyebrow:"GUIA BRAVA",intro:article.description,image:articleImages[article.slug]??"pipe",
  sections:article.sections,faq:article.faq,related:["/blog/","/servicos/","/orcamento-de-desentupimento/"]
}));

export const institutionalPages:PageData[] = [
  {path:"/servicos/",slug:"servicos",kind:"institutional",title:"Serviços de desentupimento em São Paulo | Brava",description:"Conheça os serviços da Brava para pia, vaso, ralo, esgoto, caixa de gordura, residências, comércios e condomínios.",h1:"Serviços de desentupimento em São Paulo",eyebrow:"ATENDIMENTO 24 HORAS",intro:"Da pia que demora a escoar ao esgoto que volta pelos ralos, a Brava vai ao seu endereço para avaliar o problema e passar o orçamento.",image:"pipe",sections:[{heading:"Escolha o que está entupido",text:"Veja os sinais mais comuns de cada problema e como pedir a visita. Se o entupimento aparece em mais de um ponto, avise a equipe no primeiro contato."}],related:servicePages.map(p=>p.path)},
  {path:"/areas-atendidas/",slug:"areas-atendidas",kind:"institutional",title:"Áreas atendidas pela Brava Desentupidora | SP",description:"Desentupidora na Zona Sul, ABC e cidades da Grande São Paulo. Consulte sua região e solicite atendimento.",h1:"Áreas atendidas em São Paulo e Grande SP",eyebrow:"ONDE ATENDEMOS",intro:"Consulte a página da sua região e solicite atendimento por WhatsApp ou ligação.",image:"drain",sections:[{heading:"Encontre atendimento na sua região",text:"A Brava atende bairros da Zona Sul, cidades do ABC e outros municípios da Grande São Paulo. Selecione uma localidade abaixo para consultar informações e serviços disponíveis."}],related:locationPages.map(p=>p.path)},
  {path:"/sobre/",slug:"sobre",kind:"institutional",title:"Sobre a Brava Desentupidora SP",description:"Conheça a Brava Desentupidora SP, atendimento 24 horas para residências, comércios, condomínios e indústrias.",h1:"Quem é a Brava Desentupidora?",eyebrow:"QUEM SOMOS",intro:"A Brava vai até o seu endereço em São Paulo e região para avaliar o entupimento, explicar o que precisa ser feito e informar o valor do serviço.",image:"hero",sections:[{heading:"Da sua casa ao seu comércio",text:"Atendemos casas, apartamentos, condomínios, lojas, restaurantes e indústrias. Conte como o entupimento está afetando o local para a equipe orientar o atendimento."},{heading:"Pode chamar a qualquer hora",text:"Recebemos chamados durante o dia, à noite e em domingos e feriados. Informe o bairro para consultar a disponibilidade e a previsão de chegada."},{heading:"Você recebe o orçamento antes do serviço",text:"A visita inicial é gratuita. Depois de avaliar a tubulação, o técnico explica o que será feito e informa o valor para você decidir se quer seguir."}],related:["/servicos/","/areas-atendidas/","/contato/"]},
  {path:"/contato/",slug:"contato",kind:"institutional",title:"Telefone e WhatsApp da Brava Desentupidora",description:"Fale com a Brava Desentupidora por WhatsApp ou telefone. Atendimento 24 horas e visita gratuita.",h1:"Telefone e WhatsApp da Brava",eyebrow:"ATENDIMENTO 24H",intro:"Informe o endereço e explique o que está entupido para consultar atendimento e previsão.",image:"sink",sections:[{heading:"O que informar",text:"Envie o endereço, o tipo de imóvel, o ponto afetado e os sinais observados. Avise se existe retorno de esgoto, transbordamento ou risco de alagamento."},{heading:"Antes de autorizar",text:"Confirme o orçamento, o que está incluído e a forma de pagamento. A avaliação inicial é gratuita."}],related:["/servicos/","/areas-atendidas/"]},
  {path:"/blog/",slug:"blog",kind:"institutional",title:"Guia Brava | Dúvidas sobre desentupimento",description:"Orientações sobre pia, vaso, ralo, esgoto, caixa de gordura, orçamento e prevenção de entupimentos.",h1:"Guia sobre desentupimento e prevenção",eyebrow:"CONTEÚDO ÚTIL",intro:"Informação clara para reconhecer sinais, reduzir riscos e saber quando chamar ajuda profissional.",image:"kitchen",sections:[{heading:"Dúvidas frequentes, respostas diretas",text:"Escolha um conteúdo para entender sinais de obstrução, cuidados seguros e informações necessárias para solicitar atendimento."}],related:articlePages.map(p=>p.path)},
  {path:"/politica-de-privacidade/",slug:"politica-de-privacidade",kind:"institutional",title:"Política de privacidade | Brava Desentupidora",description:"Saiba como a Brava trata informações enviadas pelo site, WhatsApp e telefone.",h1:"Política de privacidade",eyebrow:"TRANSPARÊNCIA",intro:"Esta política explica como informações podem ser utilizadas no atendimento.",image:"pipe",sections:[{heading:"Dados fornecidos",text:"Podemos receber nome, telefone, endereço do atendimento, mensagens, fotografias enviadas voluntariamente e informações necessárias para avaliar o serviço."},{heading:"Finalidades",text:"Os dados são utilizados para responder solicitações, avaliar cobertura, preparar orçamento, organizar atendimento e cumprir obrigações legais."},{heading:"Compartilhamento",text:"Informações necessárias podem ser compartilhadas com profissionais envolvidos no atendimento e plataformas de comunicação ou hospedagem, conforme suas políticas."},{heading:"Direitos do titular",text:"Nos termos da LGPD, o titular pode solicitar acesso, correção e outras medidas aplicáveis por meio dos canais da empresa."}],related:["/termos-de-uso/"]},
  {path:"/termos-de-uso/",slug:"termos-de-uso",kind:"institutional",title:"Termos de uso | Brava Desentupidora",description:"Condições de navegação, solicitação de visita, orçamento e atendimento da Brava Desentupidora.",h1:"Termos de uso",eyebrow:"CONDIÇÕES DO SITE",intro:"Conheça as condições para utilizar o site e solicitar atendimento.",image:"pipe",sections:[{heading:"Solicitação não é contratação automática",text:"O envio de mensagem ou a ligação inicia uma consulta. O serviço depende de disponibilidade, avaliação e aprovação do orçamento."},{heading:"Informações corretas",text:"O cliente deve informar endereço, ponto afetado, condições de acesso e sinais relevantes. Informações incompletas podem exigir nova avaliação."},{heading:"Preço e autorização",text:"O valor e as condições devem ser informados antes do início. O serviço somente deve ser executado após autorização do cliente."},{heading:"Segurança",text:"Não se exponha a esgoto, água contaminada ou produtos químicos. Em caso de risco elétrico, estrutural ou à saúde, afaste-se da área e procure o serviço de emergência adequado."}],related:["/politica-de-privacidade/"]}
];

export const allPages = [...institutionalPages,...servicePages,...serviceAreaPages,...allLocationPages,...intentPages,...articlePages];
export const findPage = (path:string) => allPages.find(p=>p.path===path);

export const priorityLocations = locationPages.filter(p=>["Santo Amaro","Campo Belo","Brooklin","Moema","Jabaquara","Interlagos","Socorro","Cidade Ademar","Vila Mariana","Saúde"].includes(p.location||""));
export const featuredMetroLocations = locationPages.filter(p=>["Diadema","Taboão da Serra","São Bernardo do Campo","Embu das Artes","São Caetano do Sul","Santo André","Osasco","Itapecerica da Serra","Cotia","Carapicuíba","Mauá","Barueri","Embu-Guaçu","Ribeirão Pires","Santana de Parnaíba","Jandira"].includes(p.location||""));

export const homeFaq:FAQ[] = [
  {q:"Quanto custa uma desentupidora em São Paulo?",a:"O valor depende do que entupiu, do acesso à tubulação e do equipamento necessário. A Brava faz a visita inicial gratuita e passa o orçamento antes do serviço."},
  {q:"A Brava Desentupidora atende 24 horas?",a:"Sim. Os canais recebem solicitações durante o dia, à noite, aos domingos e feriados. A previsão é confirmada conforme o endereço e o horário do contato."},
  {q:"Quais serviços de desentupimento estão disponíveis?",a:"A Brava atende pia, vaso sanitário, ralo, esgoto, caixa de gordura e demandas residenciais, comerciais e condominiais."},
  {q:"A visita é gratuita?",a:"Sim. A avaliação inicial é gratuita e o serviço só começa depois da apresentação e aprovação do orçamento."},
  {q:"Preciso pagar se o entupimento não for resolvido?",a:"Não. Se o técnico não conseguir desentupir o ponto avaliado, você não paga pelo atendimento."},
  {q:"O serviço de desentupimento tem garantia?",a:"Sim. O desentupimento realizado tem garantia. Consulte com a equipe o prazo e o que ela cobre no seu caso."},
  {q:"Em quanto tempo a equipe chega?",a:"A previsão depende do seu endereço, do horário e da disponibilidade da equipe. Informe seu bairro pelo WhatsApp ou telefone para confirmar."},
  {q:"Como funciona o orçamento pelo WhatsApp?",a:"Conte o que entupiu, onde você está e se é urgente. A equipe orienta você sobre a visita. Depois da avaliação no local, você recebe o valor para decidir se quer seguir com o serviço."},
  {q:"O atendimento é no meu endereço?",a:"Sim. A equipe vai ao endereço informado, após confirmar a cobertura e combinar a visita com você."},
  {q:"Como posso pagar pelo serviço?",a:"Confirme com a equipe as formas de pagamento disponíveis antes de aprovar o orçamento."},
  {q:"Quais regiões são atendidas?",a:"O atendimento abrange bairros de São Paulo, cidades do ABC e outros municípios da Grande São Paulo, conforme disponibilidade para o endereço."},
  {q:"Como solicitar atendimento?",a:"Chame pelo WhatsApp ou telefone e informe o endereço, o ponto entupido, os sinais observados e a urgência."}
];

export const homeRelatedPages = [
  "/desentupidora-24-horas/",
  "/desentupimento-de-pia/",
  "/desentupimento-de-vaso-sanitario/",
  "/desentupimento-de-esgoto/",
  "/preco-de-desentupidora-em-sao-paulo/"
];

export const getPageFaq=(page?:PageData):FAQ[]=>{
  if(!page)return homeFaq;
  if(page.faq?.length)return page.faq;
  if(page.path==="/politica-de-privacidade/")return [
    {q:"Quais dados são enviados pelo formulário?",a:"Nome, bairro ou cidade, serviço desejado, urgência e a descrição que você decidir informar."},
    {q:"Para que os dados são utilizados?",a:"As informações são usadas para responder à solicitação, verificar atendimento e preparar o orçamento."},
    {q:"Como solicitar correção ou exclusão?",a:"Entre em contato pelos canais da Brava e informe qual dado deseja consultar, corrigir ou excluir."}
  ];
  if(page.path==="/termos-de-uso/")return [
    {q:"Enviar o formulário já contrata o serviço?",a:"Não. O envio inicia o atendimento. A contratação depende da avaliação e da aprovação do orçamento."},
    {q:"Quando o serviço pode começar?",a:"Somente depois que o cliente recebe as condições e autoriza o orçamento."},
    {q:"A previsão de atendimento é garantida?",a:"A previsão é confirmada durante o contato e pode variar conforme o endereço, o horário e a demanda."}
  ];
  return [
    {q:"A Brava atende 24 horas?",a:"Sim. Os canais recebem solicitações 24 horas, inclusive aos domingos e feriados."},
    {q:"A visita é gratuita?",a:"Sim. A avaliação inicial é gratuita e o orçamento é apresentado antes do serviço."},
    {q:"Quanto custa o desentupimento?",a:"O valor depende do ponto afetado, do acesso, da extensão da obstrução e do equipamento necessário. O orçamento é informado após a avaliação."}
  ];
};

