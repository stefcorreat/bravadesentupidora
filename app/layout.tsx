import type {Metadata,Viewport} from "next";
import "./globals.css";
import {Footer,Header} from "@/components/Site";
import {absoluteUrl,site} from "@/lib/site";

export const metadata:Metadata={
  metadataBase:new URL(absoluteUrl("/")),
  title:{default:"Desentupidora em Santo Amaro 24h | Brava",template:"%s"},
  description:"Brava Desentupidora SP: atendimento 24 horas, visita gratuita e serviços para pia, vaso, ralo, esgoto e caixa de gordura.",
  alternates:{canonical:absoluteUrl("/")},
  robots:{index:site.indexing,follow:true},
  openGraph:{siteName:site.name,locale:"pt_BR",type:"website"},
  icons:{icon:"/favicon.svg"}
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#075ea8"};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><a className="skip" href="#conteudo">Ir para o conteúdo</a><Header/>{children}<Footer/></body></html>}

