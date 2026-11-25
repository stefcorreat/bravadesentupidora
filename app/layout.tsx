import type {Metadata,Viewport} from "next";
import "./globals.css";
import {Footer,Header} from "@/components/Site";
import {BudgetForm} from "@/components/BudgetForm";
import {CustomerReviews} from "@/components/CustomerReviews";
import {absoluteUrl,site} from "@/lib/site";

export const metadata:Metadata={
  metadataBase:new URL(absoluteUrl("/")),
  title:{default:"Desentupidora em São Paulo 24h | Brava",template:"%s"},
  description:"Desentupidora em São Paulo com atendimento 24 horas para pia, vaso, ralo, esgoto e caixa de gordura. Visita gratuita e orçamento antes do serviço.",
  alternates:{canonical:absoluteUrl("/")},
  robots:{index:site.indexing,follow:true},
  openGraph:{siteName:site.name,locale:"pt_BR",type:"website"},
  icons:{icon:"/favicon.svg"}
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#003b78"};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip" href="#conteudo">Ir para o conteúdo</a>
        <Header/>
        {children}
        <CustomerReviews/>
        <BudgetForm/>
        <Footer/>
      </body>
    </html>
  );
}

