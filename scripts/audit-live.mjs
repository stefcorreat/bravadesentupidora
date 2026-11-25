const origin=process.env.AUDIT_ORIGIN||"http://127.0.0.1:3000";
const sitemap=await fetch(`${origin}/sitemap.xml`).then(r=>{if(!r.ok)throw new Error(`Sitemap HTTP ${r.status}`);return r.text()});
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>new URL(x[1]).pathname);
const titles=new Map();
const h1s=new Map();
const errors=[];
for(const path of urls){
  const response=await fetch(origin+path);
  const html=await response.text();
  if(response.status!==200)errors.push(`${path}: HTTP ${response.status}`);
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];
  const h1=html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g,"");
  const canonical=html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if(!title)errors.push(`${path}: sem title`); else if(titles.has(title))errors.push(`${path}: title duplicado com ${titles.get(title)}`); else titles.set(title,path);
  if(!h1)errors.push(`${path}: sem H1`); else if(h1s.has(h1))errors.push(`${path}: H1 duplicado com ${h1s.get(h1)}`); else h1s.set(h1,path);
  if(!canonical||new URL(canonical).pathname!==path)errors.push(`${path}: canonical incorreto`);
  if(!html.includes('application/ld+json'))errors.push(`${path}: sem JSON-LD`);
}
if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log(`Auditoria HTTP concluída: ${urls.length} URLs com HTTP 200, title/H1 únicos, canonical próprio e JSON-LD.`);
