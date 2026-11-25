import {allPages} from "@/data/pages";
import {absoluteUrl,site} from "@/lib/site";
export function GET(){const paths=site.indexing?["/",...allPages.map(p=>p.path)]:[];const body=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${absoluteUrl(path)}</loc></url>`).join("")}</urlset>`;return new Response(body,{headers:{"Content-Type":"application/xml; charset=utf-8"}})}

