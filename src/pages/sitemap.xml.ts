import { services } from '../data/site';
export const prerender = true;
export function GET(){
 const base='https://roofriva.keydiv.workers.dev';
 const routes=['/','/about/','/services/','/projects/','/contact/','/faq/','/privacy-policy/','/terms/','/cookie-policy/','/accessibility/','/website-disclaimer/','/thank-you/',...services.map(s=>`/services/${s.slug}/`)];
 const body=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r=>`<url><loc>${base}${r}</loc></url>`).join('')}</urlset>`;
 return new Response(body,{headers:{'Content-Type':'application/xml'}});
}