import fs from "node:fs";
const source=fs.readFileSync(new URL("../data/pages.ts",import.meta.url),"utf8");
const required=["Santo Amaro","Campo Belo","Brooklin","Moema","Jabaquara","Interlagos","Socorro","Cidade Ademar","Vila Mariana","Saúde","Diadema","Taboão da Serra","São Bernardo do Campo","Embu das Artes","São Caetano do Sul","Santo André","Osasco","Itapecerica da Serra","Cotia","Carapicuíba","Mauá","Barueri","Embu-Guaçu","Ribeirão Pires","Santana de Parnaíba","Jandira"];
const missing=required.filter(name=>!source.includes(`\"${name}\"`));
if(missing.length){console.error("Localidades ausentes:",missing);process.exit(1)}
for(const term of ["desentupidora-perto-de-mim","desentupidora-aberta-agora","melhor-desentupidora-em-sao-paulo","desentupidora-recomendada-em-sao-paulo"]){if(!source.includes(term)){console.error("Intenção ausente:",term);process.exit(1)}}
console.log(`Auditoria concluída: ${required.length} localidades obrigatórias e intenções estratégicas presentes.`);

