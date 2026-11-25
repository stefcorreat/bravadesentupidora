import {absoluteUrl,site} from "@/lib/site";
export function GET(){const body=site.indexing?`User-agent: *\nAllow: /\nSitemap: ${absoluteUrl("/sitemap.xml")}`:"User-agent: *\nDisallow: /";return new Response(body,{headers:{"Content-Type":"text/plain; charset=utf-8"}})}

