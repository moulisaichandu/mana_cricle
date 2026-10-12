import Link from "next/link";
import { BrandIdentity, Icon } from "./icon";
import { site, whatsappLink } from "@/lib/site";
import { processSteps, services } from "@/lib/content";

export function ButtonLink({ href = "/contact", children = "Discuss your project", secondary = false, className = "" }: { href?: string; children?: React.ReactNode; secondary?: boolean; className?: string }) {
  return <Link href={href} className={`button ${secondary ? "button-secondary" : ""} ${className}`}>{children}<Icon name="diagonal" size={18} /></Link>;
}
export function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="section-label"><span />{children}</p>; }

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="faq-list">{items.map(item => <details key={item.question}><summary>{item.question}<Icon name="plus" /></summary><p>{item.answer}</p></details>)}</div>;
}

export function Process() {
  return <section className="section process-section"><div className="container"><div className="section-heading"><div><SectionLabel>How we work</SectionLabel><h2>A good project starts<br />with a clear plan.</h2></div><p>Know the scope, the review points<br />and what happens next.</p></div><div className="process-grid">{processSteps.map((step, i) => <article key={step.title}><span className="step-number"><span>0{i + 1}</span><Icon name={["chat", "pen", "spark", "check"][i]} size={22} /></span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>;
}

export function ContactBanner() {
  return <section className="contact-banner container"><div className="banner-art" aria-hidden="true"><span /><span /><span /></div><div className="banner-copy"><p>Have a business to build? Let’s give it a direction.</p><h2>Bring your idea.<br />We’ll bring the circle.</h2></div><div className="banner-action"><ButtonLink>Discuss your project</ButtonLink><span>Custom scope. Clear deliverables. A practical next step.</span></div></section>;
}

export function Footer() {
  const whatsapp = whatsappLink();
  return <footer className="site-footer"><div className="container"><div className="footer-grid"><div className="footer-intro"><Link className="brand-lockup" href="/" aria-label="ManaCircle home"><BrandIdentity /></Link><p>Branding, websites and content.<br />Made to work together.</p><span className="location"><Icon name="globe" size={16} /> Working with businesses across India.</span></div><div><h2>Explore</h2><Link href="/services">Our services</Link><Link href="/work">Our work</Link><Link href="/about">About us</Link><Link href="/guides">Project guides</Link><Link href="/contact">Start a conversation</Link></div><div className="footer-services"><h2>What we do</h2>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</div><div><h2>Let’s connect</h2>{site.email && <a href={`mailto:${site.email}`}>Email us</a>}{whatsapp && <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <Icon name="diagonal" size={14} /></a>}{site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer">Instagram <Icon name="diagonal" size={14} /></a>}<Link href="/contact">Prepare a project brief <Icon name="diagonal" size={14} /></Link><p className="footer-small">Eight people.<br />One creative & digital team.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ManaCircle.</span><Link href="/privacy">Privacy policy</Link><span>English website. English & Telugu content.</span><a href="#top">Back to top <Icon name="arrow" size={15} /></a></div></div></footer>;
}
