import Link from "next/link";
import {PageShell} from "@/components/PageShell";
import {contactMessage} from "@/lib/whatsapp-contact";

export default function NotFound(){return <PageShell message={contactMessage()}><main id="conteudo" className="not-found"><span className="eyebrow">ERRO 404</span><h1>Página não encontrada</h1><p>O endereço pode ter mudado ou sido digitado incorretamente.</p><Link className="button" href="/">Voltar para o início</Link></main></PageShell>}

