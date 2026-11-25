import Link from "next/link";
import {CTAs,EmergencyBar,FAQList,LocationLinks,Photo,Related,ServiceGrid,TrustSection} from "@/components/Site";
import {JsonLd} from "@/components/JsonLd";
import {pageSchema} from "@/lib/schema";
import {homeFaq, homeRelatedPages} from "@/data/pages";

export default function Home(){
  return <>
    <JsonLd data={pageSchema()}/>
    <main id="conteudo">
      <section className="hero">
        <div className="hero-shade"/>
        <Photo name="hero" className="hero-photo"/>
        <div className="container hero-content">
          <span className="eyebrow light">SÃO PAULO • ATENDIMENTO 24 HORAS</span>
          <h1>Brava Desentupidora 24 horas em São Paulo</h1>
          <p><strong>Pia, vaso, ralo ou esgoto entupido?</strong> Conte o que aconteceu pelo WhatsApp ou por telefone. A Brava vai até o seu endereço em São Paulo, avalia o problema e passa o orçamento antes de começar.</p>
          <CTAs location="São Paulo"/>
          <div className="hero-badges"><span>✓ Atendimento 24h</span><span>✓ Visita gratuita</span><span>✓ Orçamento antes do serviço</span></div>
        </div>
      </section>
      <EmergencyBar/>

      <section className="section"><div className="container">
        <div className="section-head"><h2>O que está entupido?</h2><p>Veja como a Brava atende cada tipo de entupimento em São Paulo, da pia da cozinha à rede de esgoto.</p></div>
        <ServiceGrid limit={6}/>
        <div className="center"><Link className="text-link" href="/servicos/">Conheça todos os serviços</Link></div>
      </div></section>

      <section className="section split"><div className="container split-grid">
        <Photo name="sink"/>
        <div>
          <h2>Como pedir atendimento</h2>
          <ol className="steps">
            <li><b>Fale com a Brava</b><span>Chame no WhatsApp, ligue ou use o formulário. Diga o que entupiu e em qual bairro você está.</span></li>
            <li><b>Combine a visita</b><span>A equipe confirma a disponibilidade, informa a previsão de chegada e orienta você sobre os próximos passos.</span></li>
            <li><b>Confira o orçamento</b><span>O técnico avalia o problema no local e explica o serviço. A execução começa depois da sua aprovação.</span></li>
          </ol>
          <CTAs location="São Paulo"/>
        </div>
      </div></section>

      <TrustSection/>

      <section className="section"><div className="container">
        <div className="section-head"><h2>Quais bairros e cidades a Brava atende?</h2><p>Encontre o seu bairro em São Paulo ou consulte as cidades atendidas na região.</p></div>
        <h3>Zona Sul de São Paulo</h3><LocationLinks/>
        <h3>Cidades da Grande São Paulo</h3><LocationLinks group="metro"/>
        <div className="center"><Link className="text-link" href="/areas-atendidas/">Consultar todas as áreas atendidas</Link></div>
      </div></section>

      <section className="section dark"><div className="container two-col">
        <div><span className="eyebrow light">ATENDIMENTO 24 HORAS</span><h2>Desentupimento residencial, comercial e condominial</h2><p>Atendimento para casas, apartamentos, condomínios, restaurantes, lojas, escritórios, galpões e outros estabelecimentos em São Paulo.</p><div className="ctas"><Link className="button" href="/servicos/">Conhecer os serviços</Link></div></div>
        <Photo name="night"/>
      </div></section>

      <section className="section"><div className="container faq-home"><div className="section-head"><h2>Perguntas frequentes sobre a Brava Desentupidora</h2></div><FAQList items={homeFaq}/></div></section>

      <section className="section cta-section"><div className="container"><h2>Precisa de uma desentupidora agora?</h2><p>Se a água estiver voltando pelo ralo ou o vaso estiver transbordando, avise logo no primeiro contato.</p><CTAs location="São Paulo"/><Related paths={homeRelatedPages}/></div></section>
    </main>
  </>;
}
