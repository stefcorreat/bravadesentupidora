import Link from "next/link";
import {images} from "@/data/images";
import {allPages,allLocationPages,featuredMetroLocations,locationPages,priorityLocations,santoAndreNeighborhoodPages,saoBernardoNeighborhoodPages,servicePages,type FAQ,type PageData} from "@/data/pages";
import {site,whatsappUrl} from "@/lib/site";

export function Logo(){
  return (
    <Link className="logo" href="/" aria-label="Brava Desentupidora - início">
      <img src="https://i.postimg.cc/TPXvKMJ2/5CB6AEBD-1478-45A2-9965-B00450E8E49A.png" alt="Brava Desentupidora 24h" width={220} height={70}/>
    </Link>
  );
}

export function Header({message}:{message:string}){return <header className="header"><div className="topline"><div className="container top-inner"><span>Atendimento 24 horas</span><span>Visita gratuita</span><a href={`tel:${site.phone}`}>Ligue: {site.phoneDisplay}</a></div></div><div className="container nav"><Logo/><nav className="desktop-nav" aria-label="Principal"><Link href="/servicos/">Serviços</Link><Link href="/areas-atendidas/">Áreas atendidas</Link><Link href="/blog/">Guia</Link><Link href="/sobre/">Sobre</Link></nav><div className="nav-actions"><a className="call-link" href={`tel:${site.phone}`}>Ligar agora</a><a className="button small" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">WhatsApp</a></div><details className="mobile-menu"><summary>Menu</summary><div><Link href="/servicos/">Serviços</Link><Link href="/areas-atendidas/">Áreas atendidas</Link><Link href="/blog/">Guia</Link><Link href="/sobre/">Sobre</Link><a href={`tel:${site.phone}`}>Ligar agora</a><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">WhatsApp</a></div></details></div></header>}

const metroPaths = new Set(featuredMetroLocations.map(page => page.path));
const southZoneLocations = locationPages.filter(page => !metroPaths.has(page.path));

function FooterLocations(){
  return (
    <nav className="container footer-areas" aria-labelledby="footer-areas-title">
      <h2 id="footer-areas-title">Áreas atendidas pela Brava</h2>
      <div className="footer-area-grid">
        <div>
          <h3><Link href="/desentupidora-em-sao-paulo/">São Paulo capital</Link></h3>
          <ul>{southZoneLocations.map(page => (
            <li key={page.path}><Link href={page.path}>{page.location}</Link></li>
          ))}</ul>
        </div>
        <div>
          <h3>Grande São Paulo e ABC</h3>
          <ul>{featuredMetroLocations.map(page => (
            <li key={page.path}><Link href={page.path}>{page.location}</Link></li>
          ))}</ul>
        </div>
      </div>
      <Link className="footer-area-index" href="/areas-atendidas/">Ver todas as áreas atendidas</Link>
    </nav>
  );
}

export function Footer({message}:{message:string}){return <footer className="footer"><div className="container footer-grid"><div><Logo/><p>Desentupimento 24 horas em São Paulo e Grande SP. Visita gratuita e orçamento antes da execução.</p></div><div><h2>Atendimento</h2><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a><Link href="/contato/">Informações de contato</Link></div><div><h2>Informações</h2><Link href="/areas-atendidas/">Áreas atendidas</Link><Link href="/politica-de-privacidade/">Política de privacidade</Link><Link href="/termos-de-uso/">Termos de uso</Link></div></div><FooterLocations/><div className="container footer-bottom"><span>© {new Date().getFullYear()} Brava Desentupidora SP</span><span>Site desenvolvido por <a href="https://midiaemarketingdigital.com.br/" target="_blank" rel="noopener noreferrer">Mídia &amp; Marketing Digital</a></span></div></footer>}

export function CTAs({message,compact=false}:{message:string;compact?:boolean}){return <div className={`ctas ${compact?"compact":""}`}><a className="button" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a><a className="button secondary" href={`tel:${site.phone}`}>Ligar {site.phoneDisplay}</a></div>}

export function Photo({name,className=""}:{name:keyof typeof images;className?:string}){const photo=images[name];return <figure className={`photo ${className}`}><img src={photo.src} alt={photo.alt} loading={name==="hero"?"eager":"lazy"}/></figure>}

export function ServiceGrid({limit}:{limit?:number}){
  const items=limit?servicePages.slice(0,limit):servicePages;
  return <div className="card-grid">{items.map(page=>(
    <Link className="service-card" href={page.path} key={page.path}>
      <img src={images[page.image].src} alt={images[page.image].alt} loading="lazy"/>
      <div>
        <h3>{page.h1.replace(" em São Paulo","")}</h3>
        <p>{page.serviceSummary}</p>
        <b>Ver detalhes do serviço</b>
      </div>
    </Link>
  ))}</div>;
}

type LocationGroup="priority"|"metro"|"santo-andre"|"sao-bernardo"|"all";
export function LocationLinks({all=false,group="priority"}:{all?:boolean;group?:LocationGroup}){const selected=all?"all":group;const items=selected==="all"?allLocationPages:selected==="metro"?featuredMetroLocations:selected==="santo-andre"?santoAndreNeighborhoodPages:selected==="sao-bernardo"?saoBernardoNeighborhoodPages:priorityLocations;return <div className="pills">{items.map(p=><Link href={p.path} key={p.path}>{p.location?.replace(", Santo André","").replace(", São Bernardo do Campo","")}</Link>)}</div>}

export function FAQList({items}:{items:FAQ[]}){return <div className="faq">{items.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>}

export function TrustSection(){
  return <section className="section pale">
    <div className="container">
      <div className="section-head">
        <h2>Quem é a Brava Desentupidora?</h2>
        <p>A Brava atende no endereço do cliente, em casas, apartamentos, condomínios e comércios de São Paulo.</p>
      </div>
      <div className="trust-grid">
        <article><h3>Atendimento a qualquer hora</h3><p>Fale com a equipe durante o dia, de madrugada, aos domingos ou em feriados para combinar a visita.</p></article>
        <article><h3>Visita gratuita</h3><p>O técnico avalia o entupimento e passa o valor antes de você autorizar o serviço.</p></article>
        <article><h3>Só paga se resolver</h3><p>Se o técnico não conseguir desentupir o ponto avaliado, você não paga pelo atendimento.</p></article>
        <article><h3>Garantia do serviço</h3><p>O desentupimento realizado tem garantia. Consulte a equipe sobre o prazo e a cobertura para o seu caso.</p></article>
        <article><h3>Equipamento para cada caso</h3><p>A equipe avalia o acesso e o tipo de tubulação para escolher como desobstruir o ponto entupido.</p></article>
      </div>
    </div>
  </section>;
}

export function MarketPriceTable(){const rows=[
  ["São Paulo capital","R$ 250–450","R$ 280–500","R$ 350–700","R$ 400–800"],
  ["Zona Sul e Santo Amaro","R$ 250–450","R$ 280–500","R$ 350–700","R$ 400–800"],
  ["ABC Paulista","R$ 280–480","R$ 300–520","R$ 350–700","R$ 400–800"],
  ["Outras cidades da Grande SP","R$ 280–500","R$ 300–550","R$ 400–750","R$ 450–900"]
];return <section className="market-prices"><h2>Faixas de preço de desentupimento por região</h2><p>Valores de referência encontrados em levantamentos de mercado publicados em 2026. Não são preços fixos da Brava: o orçamento final depende da avaliação gratuita do local.</p><div className="table-scroll"><table><thead><tr><th>Região</th><th>Pia ou ralo</th><th>Vaso sanitário</th><th>Caixa de gordura</th><th>Esgoto ou coluna</th></tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((cell,index)=>index===0?<th scope="row" key={cell}>{cell}</th>:<td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div><small>Referências consultadas: guias de preço Loqal, Vistobra e tabelas publicadas por empresas de desentupimento de São Paulo e do ABC em 2026. Serviços noturnos, acesso difícil e equipamentos especiais podem alterar os valores.</small></section>}

export function Related({paths=[]}:{paths?:string[]}){const pages=paths.map(path=>allPages.find(p=>p.path===path)).filter(Boolean) as PageData[];if(!pages.length)return null;return <aside className="related"><h2>Veja também</h2><div>{pages.slice(0,12).map(p=><Link href={p.path} key={p.path}>{p.h1}</Link>)}</div></aside>}

export function EmergencyBar({message}:{message:string}){return <div className="emergency"><div><strong>Problema urgente?</strong><span>Atendimento 24 horas em São Paulo e Grande SP</span></div><CTAs compact message={message}/></div>}

