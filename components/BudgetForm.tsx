"use client";

import {FormEvent,useState} from "react";
import {site} from "@/lib/site";

const locations=[
  "Santo Amaro","Campo Belo","Brooklin","Moema","Jabaquara","Interlagos","Socorro","Cidade Ademar","Vila Mariana","Saúde",
  "Diadema","Taboão da Serra","São Bernardo do Campo","Embu das Artes","São Caetano do Sul","Santo André","Osasco",
  "Itapecerica da Serra","Cotia","Carapicuíba","Mauá","Barueri","Embu-Guaçu","Ribeirão Pires","Santana de Parnaíba","Jandira"
];

export function BudgetForm(){
  const [error,setError]=useState("");

  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    if(data.get("consent")!=="yes"){
      setError("Marque a autorização para enviar os dados pelo WhatsApp.");
      return;
    }
    setError("");
    const nome=String(data.get("name")||"").trim();
    const servico=String(data.get("service")||"").trim();
    const local=String(data.get("location")||"").trim();
    const urgencia=String(data.get("urgency")||"").trim();
    const problema=String(data.get("problem")||"").trim();
    const message=[
      "Olá! Quero solicitar um orçamento de desentupimento.",
      `Nome: ${nome}`,
      `Serviço: ${servico}`,
      `Bairro ou cidade: ${local}`,
      `Urgência: ${urgencia}`,
      problema?`Problema informado: ${problema}`:""
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  }

  return <section className="budget-section" aria-labelledby="budget-title">
    <div className="container budget-grid">
      <div className="budget-copy">
        <span className="eyebrow">ORÇAMENTO PELO WHATSAPP</span>
        <h2 id="budget-title">Conte o que aconteceu e fale com a Brava</h2>
        <p>Preencha os dados abaixo. Ao enviar, abriremos o WhatsApp com as informações organizadas para agilizar o seu atendimento.</p>
        <div className="budget-benefits"><span>Atendimento 24 horas</span><span>Visita gratuita</span><span>Orçamento antes do serviço</span></div>
      </div>
      <form className="budget-form" onSubmit={submit}>
        <h3>Peça seu orçamento online pelo WhatsApp</h3>
        <label htmlFor="budget-name">Seu nome</label>
        <input id="budget-name" name="name" autoComplete="name" required />

        <label htmlFor="budget-service">Serviço</label>
        <select id="budget-service" name="service" defaultValue="Pia" required>
          <option>Pia</option><option>Vaso sanitário</option><option>Ralo</option><option>Esgoto</option>
          <option>Caixa de gordura</option><option>Mictório</option><option>Outro serviço</option>
        </select>

        <label htmlFor="budget-location">Bairro ou cidade</label>
        <input id="budget-location" name="location" list="budget-locations" autoComplete="address-level2" required />
        <datalist id="budget-locations">{locations.map(location=><option value={location} key={location}/>)}</datalist>

        <fieldset>
          <legend>Urgência</legend>
          <label><input type="radio" name="urgency" value="Agora (emergência)" defaultChecked/> Agora (emergência)</label>
          <label><input type="radio" name="urgency" value="Hoje"/> Hoje</label>
          <label><input type="radio" name="urgency" value="Nesta semana"/> Nesta semana</label>
        </fieldset>

        <label htmlFor="budget-problem">Conte rapidamente o problema <span>(opcional)</span></label>
        <textarea id="budget-problem" name="problem" rows={4}/>

        <label className="consent"><input type="checkbox" name="consent" value="yes"/> <span>Concordo em enviar estes dados pelo WhatsApp para receber o atendimento.</span></label>
        {error&&<p className="form-error" role="alert">{error}</p>}
        <button className="whatsapp-submit" type="submit"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.4 7.6c.3-.3.7-.3 1-.1l1.1 1.7c.2.3.1.7-.1 1l-.5.5c.7 1.4 1.8 2.5 3.2 3.2l.5-.6c.3-.3.7-.3 1-.1l1.7 1c.4.2.5.6.3 1-.4.9-1.3 1.5-2.3 1.4-4.3-.5-7.7-3.9-8.2-8.2-.1-.7.3-1.4 1-2Z"/></svg> Enviar pelo WhatsApp</button>
      </form>
    </div>
  </section>;
}
