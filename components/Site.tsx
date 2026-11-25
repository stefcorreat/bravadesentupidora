import Link from "next/link";
import {images} from "@/data/images";
import {allPages,allLocationPages,featuredMetroLocations,priorityLocations,santoAndreNeighborhoodPages,saoBernardoNeighborhoodPages,servicePages,type FAQ,type PageData} from "@/data/pages";
import {site,whatsappUrl} from "@/lib/site";

export function Logo(){return <Link className="logo" href="/" aria-label="Brava Desentupidora - início"><span className="logo-mark">B</span><span><strong>BRAVA</strong><small>DESENTUPIDORA SP</small></span></Link>}

export function Header(){return <header className="header"><div className="topline"><div className="container top-inner"><span>Atendimento 24 horas</span><span>Visita gratuita</span><a href={`tel:${site.phone}`}>Ligue: {site.phoneDisplay}</a></div></div><div className="container nav"><Logo/><nav className="desktop-nav" aria-label="Principal"><Link href="/servicos/">Serviços</Link><Link href="/areas-atendidas/">Áreas atendidas</Link><Link href="/blog/">Guia</Link><Link href="/sobre/">Sobre</Link></nav><div className="nav-actions"><a className="call-link" href={`tel:${site.phone}`}>Ligar agora</a><a className="button small" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a></div><details className="mobile-menu"><summary>Menu</summary><div><Link href="/servicos/">Serviços</Link><Link href="/areas-atendidas/">Áreas atendidas</Link><Link href="/blog/">Guia</Link><Link href="/sobre/">Sobre</Link><a href={`tel:${site.phone}`}>Ligar agora</a></div></details></div></header>}

export function Footer(){return <footer className="footer"><div className="container footer-grid"><div><Logo/><p>Desentupimento 24 horas em São Paulo e Grande SP. Visita gratuita e orçamento antes da execução.</p></div><div><h2>Atendimento</h2><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a><Link href="/contato/">Informações de contato</Link></div><div><h2>Informações</h2><Link href="/areas-atendidas/">Áreas atendidas</Link><Link href="/politica-de-privacidade/">Política de privacidade</Link><Link href="/termos-de-uso/">Termos de uso</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Brava Desentupidora SP</span><span>Site desenvolvido por <a href="https://midiaemarketingdigital.com.br/" target="_blank" rel="noopener noreferrer">Mídia &amp; Marketing Digital</a></span></div></footer>}

export function CTAs({location,compact=false}:{location?:string;compact?:boolean}){const place=location?` em ${location}`:"";return <div className={`ctas ${compact?"compact":""}`}><a className="button" href={whatsappUrl(`Olá! Preciso de atendimento de desentupidora${place}. Pode me ajudar?`)} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a><a className="button secondary" href={`tel:${site.phone}`}>Ligar {site.phoneDisplay}</a></div>}

export function Photo({name,className=""}:{name:keyof typeof images;className?:string}){const photo=images[name];return <figure className={`photo ${className}`}><img src={photo.src} alt={photo.alt} loading={name==="hero"?"eager":"lazy"}/></figure>}

export function ServiceGrid({limit}:{limit?:number}){const items=limit?servicePages.slice(0,limit):servicePages;return <div className="card-grid">{items.map((p,i)=><Link className="service-card" href={p.path} key={p.path}><img src={images[p.image].src} alt={images[p.image].alt} loading="lazy"/><div><span>0{i+1}</span><h3>{p.h1.replace(" em São Paulo","")}</h3><p>{p.description.split(".")[0]}.</p><b>Conhecer serviço →</b></div></Link>)}</div>}

type LocationGroup="priority"|"metro"|"santo-andre"|"sao-bernardo"|"all";
export function LocationLinks({all=false,group="priority"}:{all?:boolean;group?:LocationGroup}){const selected=all?"all":group;const items=selected==="all"?allLocationPages:selected==="metro"?featuredMetroLocations:selected==="santo-andre"?santoAndreNeighborhoodPages:selected==="sao-bernardo"?saoBernardoNeighborhoodPages:priorityLocations;return <div className="pills">{items.map(p=><Link href={p.path} key={p.path}>{p.location?.replace(", Santo André","").replace(", São Bernardo do Campo","")}</Link>)}</div>}

export function FAQList({items}:{items:FAQ[]}){return <div className="faq">{items.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>}

export function TrustSection(){return <section className="section pale"><div className="container"><div className="section-head"><span className="eyebrow">POR QUE ESCOLHER A BRAVA</span><h2>Atendimento claro do início ao fim</h2><p>Você explica o problema, recebe a avaliação e conhece o orçamento antes de autorizar o serviço.</p></div><div className="trust-grid"><article><strong>24h</strong><h3>Atendimento todos os dias</h3><p>Solicitações durante o dia, à noite, aos domingos e feriados.</p></article><article><strong>R$ 0</strong><h3>Visita gratuita</h3><p>Avaliação inicial e orçamento apresentados antes do serviço.</p></article><article><strong>2 canais</strong><h3>WhatsApp e ligação</h3><p>Escolha como prefere falar com a equipe e solicitar atendimento.</p></article></div></div></section>}

export function MarketPriceTable(){const rows=[
  ["São Paulo capital","R$ 250–450","R$ 280–500","R$ 350–700","R$ 400–800"],
  ["Zona Sul e Santo Amaro","R$ 250–450","R$ 280–500","R$ 350–700","R$ 400–800"],
  ["ABC Paulista","R$ 280–480","R$ 300–520","R$ 350–700","R$ 400–800"],
  ["Outras cidades da Grande SP","R$ 280–500","R$ 300–550","R$ 400–750","R$ 450–900"]
];return <section className="market-prices"><h2>Faixas de preço de desentupimento por região</h2><p>Valores de referência encontrados em levantamentos de mercado publicados em 2026. Não são preços fixos da Brava: o orçamento final depende da avaliação gratuita do local.</p><div className="table-scroll"><table><thead><tr><th>Região</th><th>Pia ou ralo</th><th>Vaso sanitário</th><th>Caixa de gordura</th><th>Esgoto ou coluna</th></tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((cell,index)=>index===0?<th scope="row" key={cell}>{cell}</th>:<td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div><small>Referências consultadas: guias de preço Loqal, Vistobra e tabelas publicadas por empresas de desentupimento de São Paulo e do ABC em 2026. Serviços noturnos, acesso difícil e equipamentos especiais podem alterar os valores.</small></section>}

export function Related({paths=[]}:{paths?:string[]}){const pages=paths.map(path=>allPages.find(p=>p.path===path)).filter(Boolean) as PageData[];if(!pages.length)return null;return <aside className="related"><h2>Veja também</h2><div>{pages.slice(0,12).map(p=><Link href={p.path} key={p.path}>{p.h1}</Link>)}</div></aside>}

export function EmergencyBar(){return <div className="emergency"><div><strong>Problema urgente?</strong><span>Atendimento 24 horas em São Paulo e Grande SP</span></div><CTAs compact/></div>}

