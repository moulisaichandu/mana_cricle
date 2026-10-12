import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { serviceDetails } from "@/lib/service-details";
import { guides } from "@/lib/guides";
import { pageMetadata, breadcrumbs, absoluteUrl } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { ButtonLink, ContactBanner, FAQ, SectionLabel } from "@/components/shared";
import { Icon } from "@/components/icon";
import { ProjectArt } from "@/components/concept-art";
import { AndroidAppArt } from "@/components/android-app-art";
import { BrandIdentityArt, MenuArt, TeluguContentArt } from "@/components/service-art";
export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const s = services.find(s => s.slug === slug);
  return s ? pageMetadata(s.title + " in India", serviceDetails[slug].description, `/services/${slug}`) : {};
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const s = services.find(s => s.slug === slug); if (!s) notFound();
  const detail = serviceDetails[slug];
  const guide = guides.find(g => g.slug === detail.guide)!;
  const style = slug === "content-writing" ? "script" : ["instagram-content", "digital-marketing", "meta-ads"].includes(slug) ? "social" : slug === "website-improvement" ? "form" : "tea";
  const related = slug === "qr-digital-menus" ? ["logo-branding", "instagram-content", "website-design"] : slug === "telugu-content-voiceovers" ? ["instagram-content", "meta-ads", "content-writing"] : slug === "logo-branding" ? ["website-design", "instagram-content", "qr-digital-menus"] : ["website-design", "instagram-content", "meta-ads"].filter(v=>v!==slug).concat("telugu-content-voiceovers");
  return <>
    <StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"Services",path:"/services"},{name:s.title,path:`/services/${slug}`}])} />
    <StructuredData data={{"@context":"https://schema.org","@type":"Service","@id":absoluteUrl(`/services/${slug}#service`),name:s.title,serviceType:s.title,description:detail.intro,url:absoluteUrl(`/services/${slug}`),provider:{"@id":absoluteUrl("/#organization")},areaServed:{"@type":"Country",name:"India"}}} />
    <section className="container service-hero"><div><nav className="back-link" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{s.title}</span></nav><SectionLabel>{s.title}</SectionLabel><h1>{detail.headline}</h1><p>{detail.intro}</p><ButtonLink href={`/contact?service=${slug}`} /><div className="service-factline"><span>Businesses across India</span><span>Custom scope & quotation</span></div></div><div className="service-visual">{slug === "android-app-development" ? <AndroidAppArt /> : slug === "logo-branding" ? <BrandIdentityArt /> : slug === "qr-digital-menus" ? <MenuArt /> : slug === "telugu-content-voiceovers" ? <TeluguContentArt /> : <ProjectArt style={style} />}<span className="visual-caption">Illustrative concept · Not a client project · <Link href="/work">Explore our approach</Link></span></div></section>
    <section className="container service-fit"><h2>Is this the right<br />fit for your business?</h2><p>{detail.fit}</p></section>
    <section className="section container deliverables"><div><SectionLabel>What the work can include</SectionLabel><h2>Know what<br />you’re getting.</h2><p>The final deliverables, quantity and revisions are agreed in your quotation.</p></div><ul className="deliverable-list">{s.deliverables.map(d => <li key={d}><Icon name="check" />{d}</li>)}</ul></section>
    <section className="container scope-panel"><div><h2>What we’ll need from you</h2><ul>{s.inputs.map(i => <li key={i}>{i}</li>)}</ul></div><div><h2>What is scoped separately</h2><p>{s.boundary}</p></div></section>
    <section className="section container service-applications"><SectionLabel>Put it into context</SectionLabel><h2>What could this look<br />like for your business?</h2><p className="service-example">{detail.example}</p>{s.applications && <div className="application-grid">{s.applications.map(item => <p key={item}><Icon name="diagonal" size={22} />{item}</p>)}</div>}</section>
    <section className="section container faq-section"><div><SectionLabel>{s.title}</SectionLabel><h2>Your questions,<br />answered.</h2></div><FAQ items={[...s.faq,...detail.questions]} /></section>
    <aside className="container service-reading"><div><h2>{guide.title}</h2><p>A practical guide to help you prepare.</p></div><Link href={`/guides/${guide.slug}`} className="text-link">Read the guide <Icon name="diagonal" size={18} /></Link></aside>
    <section className="container related-services"><h2>Plan the connected pieces</h2>{related.slice(0,3).map(id=>{const r=services.find(v=>v.slug===id)!;return <Link key={id} href={`/services/${id}`}>{r.title}<Icon name="diagonal" size={18} /></Link>;})}</section><ContactBanner />
  </>;
}
