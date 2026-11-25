import {absoluteUrl, site} from "./site";
import {getPageFaq,type PageData} from "@/data/pages";

export function pageSchema(page?:PageData) {
  const path=page?.path||"/";
  const url=absoluteUrl(path);
  const title=page?.h1||"Brava Desentupidora SP";
  const graph:Record<string,unknown>[]=[
    {"@type":"WebSite","@id":absoluteUrl("/#website"),url:absoluteUrl("/"),name:site.name,inLanguage:"pt-BR"},
    {"@type":["LocalBusiness","Plumber"],"@id":absoluteUrl("/#business"),name:site.name,url:absoluteUrl("/"),telephone:site.phone,priceRange:"$$",openingHours:"Mo-Su 00:00-23:59",areaServed:[{"@type":"City",name:"São Paulo"},{"@type":"AdministrativeArea",name:"Grande São Paulo"}]},
    {"@type":"WebPage","@id":url+"#page",url,name:title,inLanguage:"pt-BR",isPartOf:{"@id":absoluteUrl("/#website")},about:{"@id":absoluteUrl("/#business")}}
  ];
  if(path!=="/") graph.push({"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Início",item:absoluteUrl("/")},{"@type":"ListItem",position:2,name:title,item:url}]});
  if(page && ["service","location","intent"].includes(page.kind)) graph.push({"@type":"Service","@id":url+"#service",name:page.h1,description:page.description,provider:{"@id":absoluteUrl("/#business")},areaServed:{"@type":page.location?"Place":"AdministrativeArea",name:page.location||"São Paulo e Grande São Paulo"},url});
  if(page?.kind==="article") graph.push({"@type":"Article",headline:page.h1,description:page.description,mainEntityOfPage:{"@id":url+"#page"},author:{"@id":absoluteUrl("/#business")},inLanguage:"pt-BR"});
  const faq=getPageFaq(page);
  graph.push({"@type":"FAQPage",mainEntity:faq.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))});
  return {"@context":"https://schema.org","@graph":graph};
}

