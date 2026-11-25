import Link from "next/link";
import {CTAs,EmergencyBar,FAQList,LocationLinks,Photo,ServiceGrid,TrustSection} from "@/components/Site";
import {JsonLd} from "@/components/JsonLd";
import {pageSchema} from "@/lib/schema";
import {homeFaq} from "@/data/pages";

export default function Home(){
  return <>
    <JsonLd data={pageSchema()}/>
    <main id="conteudo">
      <section className="hero">
        <div className="hero-shade"/>
        <Photo name="hero" className="hero-photo"/>
        <div className="container hero-content">
          <span className="eyebrow light">SÃO PAULO • ATENDIMENTO 24 HORAS</span>
          <h1>Desentupidora em São Paulo 24 horas</h1>
          <p>Atendimento para pia, vaso sanitário, ralo, esgoto e caixa de gordura em residências, condomínios e empresas. Solicite uma visita gratuita e receba o orçamento antes do serviço.</p>
          <CTAs location="São Paulo"/>
          <div className="hero-badges"><span>✓ Atendimento 24h</span><span>✓ Visita gratuita</span><span>✓ Residencial e comercial</span></div>
        </div>
      </section>
      <EmergencyBar/>

      <section className="section"><div className="container">
        <div className="section-head"><span className="eyebrow">SERVIÇOS DE DESENTUPIMENTO</span><h2>Soluções para diferentes tipos de entupimento</h2><p>Informe o que está acontecendo para que a equipe avalie o ponto afetado e indique o atendimento adequado.</p></div>
        <ServiceGrid limit={6}/>
        <div className="center"><Link className="text-link" href="/servicos/">Conheça todos os serviços</Link></div>
      </div></section>

      <section className="section split"><div className="container split-grid">
        <Photo name="sink"/>
        <div><span className="eyebrow">COMO SOLICITAR</span><h2>Atendimento simples e transparente</h2><ol className="steps"><li><b>Explique o problema</b><span>Informe o endereço, o ponto entupido e sinais como retorno de água ou mau cheiro.</span></li><li><b>Solicite a visita</b><span>A avaliação inicial é gratuita e a previsão é confirmada durante o contato.</span></li><li><b>Confira o orçamento</b><span>O serviço começa somente depois que você conhece e autoriza o valor.</span></li></ol><CTAs location="São Paulo"/></div>
      </div></section>

      <TrustSection/>

      <section className="section"><div className="container">
        <div className="section-head"><span className="eyebrow">ÁREAS ATENDIDAS</span><h2>Atendimento em São Paulo e Grande São Paulo</h2><p>Escolha sua região para consultar os serviços disponíveis e solicitar atendimento.</p></div>
        <h3>Zona Sul de São Paulo</h3><LocationLinks/>
        <h3>Cidades da Grande São Paulo</h3><LocationLinks group="metro"/>
        <div className="center"><Link className="text-link" href="/areas-atendidas/">Consultar todas as áreas atendidas</Link></div>
      </div></section>

      <section className="section dark"><div className="container two-col">
        <div><span className="eyebrow light">ATENDIMENTO 24 HORAS</span><h2>Desentupimento residencial, comercial e condominial</h2><p>Atendimento para casas, apartamentos, condomínios, restaurantes, lojas, escritórios, galpões e outros estabelecimentos em São Paulo.</p><div className="ctas"><Link className="button" href="/servicos/">Conhecer os serviços</Link></div></div>
        <Photo name="night"/>
      </div></section>

      <section className="section"><div className="container faq-home"><div className="section-head"><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Perguntas sobre desentupimento em São Paulo</h2><p>Veja respostas sobre preço, atendimento, visita e regiões atendidas.</p></div><FAQList items={homeFaq}/></div></section>

      <section className="section cta-section"><div className="container"><span className="eyebrow">FALE COM A BRAVA</span><h2>Precisa de uma desentupidora agora?</h2><p>Envie o endereço e explique o que está acontecendo. Se preferir, ligue diretamente.</p><CTAs location="São Paulo"/></div></section>
    </main>
  </>;
}
