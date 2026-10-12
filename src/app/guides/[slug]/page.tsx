import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/lib/guides";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { ButtonLink, ContactBanner, SectionLabel } from "@/components/shared";
export function generateStaticParams() { return guides.map(g => ({slug:g.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const g=guides.find(g=>g.slug===slug);
  return g ? pageMetadata(g.title,g.description,`/guides/${g.slug}`) : {};
}
export default async function GuidePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const g=guides.find(g=>g.slug===slug); if(!g) notFound();
  return <><StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"Project guides",path:"/guides"},{name:g.title,path:`/guides/${g.slug}`}])} /><section className="container page-intro"><nav className="back-link" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/guides">Project guides</Link></nav><SectionLabel>{g.category}</SectionLabel><h1>{g.title}</h1><div className="guide-meta"><span>ManaCircle project notes</span><span>Updated 8 October 2026</span></div></section><div className="container guide-layout"><nav className="guide-toc" aria-label="In this guide"><p>In this guide</p>{g.sections.map(s=><a key={s.id} href={`#${s.id}`}>{s.title}</a>)}</nav><article className="guide-body"><p className="guide-answer">{g.answer}</p>{g.sections.map(s=><section id={s.id} key={s.id}><h2>{s.title}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}{s.bullets&&<ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}{s.example&&<aside className="guide-example"><strong>A practical example</strong><p>{s.example}</p></aside>}</section>)}{g.slug==="business-website-brief"&&<section><h2>Further reading</h2><p>For search setup, see <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google’s SEO Starter Guide</a>. Google also explains that its <a href="https://developers.google.com/search/docs/appearance/ai-features">AI search features use the same SEO foundations</a>; inclusion and rankings are not guaranteed.</p></section>}<section><h2>Plan the right scope for your business</h2><p>Explore <Link href={`/services/${g.service}`}>{g.serviceLabel.toLowerCase()}</Link> for deliverables, what we need from you and what is scoped separately.</p><ButtonLink href={`/contact?service=${g.service}`}>Prepare your project brief</ButtonLink></section></article></div><ContactBanner /></>;
}
