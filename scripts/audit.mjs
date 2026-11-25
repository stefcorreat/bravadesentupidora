import fs from "node:fs";
const source=fs.readFileSync(new URL("../data/pages.ts",import.meta.url),"utf8");
const expansion=fs.readFileSync(new URL("../data/expansion.ts",import.meta.url),"utf8");
const home=fs.readFileSync(new URL("../app/page.tsx",import.meta.url),"utf8");
const shared=fs.readFileSync(new URL("../components/Site.tsx",import.meta.url),"utf8");
const required=["Santo Amaro","Campo Belo","Brooklin","Moema","Jabaquara","Interlagos","Socorro","Cidade Ademar","Vila Mariana","Saúde","Diadema","Taboão da Serra","São Bernardo do Campo","Embu das Artes","São Caetano do Sul","Santo André","Osasco","Itapecerica da Serra","Cotia","Carapicuíba","Mauá","Barueri","Embu-Guaçu","Ribeirão Pires","Santana de Parnaíba","Jandira"];
const missing=required.filter(name=>!source.includes(`\"${name}\"`));
if(missing.length){console.error("Localidades ausentes:",missing);process.exit(1)}
for(const term of ["desentupidora-perto-de-mim","desentupidora-aberta-agora","melhor-desentupidora-em-sao-paulo","desentupidora-recomendada-em-sao-paulo"]){if(!source.includes(term)){console.error("Intenção ausente:",term);process.exit(1)}}
for(const term of ["preco-de-desentupidora-em-sao-paulo","Como desentupir vaso sanitário com segurança","Quanto custa desentupir um vaso em São Paulo?"]){if(!source.includes(term)){console.error("Conteúdo SEO ausente:",term);process.exit(1)}}
const santoAndreCount=(expansion.match(/santoAndreNeighborhoods = \[([\s\S]*?)\] as const/)?.[1].match(/\"/g)?.length||0)/2;
const saoBernardoCount=(expansion.match(/saoBernardoNeighborhoods = \[([\s\S]*?)\] as const/)?.[1].match(/\"/g)?.length||0)/2;
if(santoAndreCount!==112||saoBernardoCount!==34){console.error(`Expansão territorial incompleta: Santo André ${santoAndreCount}/112; São Bernardo ${saoBernardoCount}/34`);process.exit(1)}
if(!fs.readFileSync(new URL("../lib/site.ts",import.meta.url),"utf8").includes("https://desentupidorabrava24h.com.br")){console.error("Domínio canônico incorreto");process.exit(1)}
if(!home.includes("Desentupidora em São Paulo 24 horas")){console.error("Homepage não está focada em São Paulo");process.exit(1)}
if(source.includes("/creditos-de-imagens/")||shared.includes("Créditos das imagens")){console.error("Créditos de imagens ainda estão públicos");process.exit(1)}
for(const phrase of ["DOMINAÇÃO LOCAL","território principal","SEGUNDO NÚCLEO","atendimento forte","cobertura reforçada","cobertura aprofundada","páginas territoriais","Esta área está preparada"]){
  if(`${home}\n${source}\n${shared}`.toLowerCase().includes(phrase.toLowerCase())){console.error("Comunicação interna exposta ao cliente:",phrase);process.exit(1)}
}
console.log(`Auditoria concluída: ${required.length} localidades principais, ${santoAndreCount} bairros de Santo André e ${saoBernardoCount} bairros de São Bernardo presentes.`);

