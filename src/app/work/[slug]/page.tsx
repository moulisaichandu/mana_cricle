import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { portfolioProjects } from "@/lib/portfolio";
import { PortfolioDetail } from "@/components/portfolio-detail";
import { pageMetadata } from "@/lib/seo";
import { ProjectArt } from "@/components/concept-art";
import { BeforeAfter, ScriptReader } from "@/components/project-demos";
import { ButtonLink, ContactBanner, SectionLabel } from "@/components/shared";
import { Icon } from "@/components/icon";

export function generateStaticParams() { return [...portfolioProjects, ...projects].map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = portfolioProjects.find(p => p.slug === slug);
  if (portfolio) return pageMetadata(`${portfolio.name} — Our Work`, portfolio.description, `/work/${portfolio.slug}`);
  const p = projects.find(p => p.slug === slug);
  return p ? pageMetadata(`${p.name} — concept project`, p.detail, `/work/${p.slug}`) : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const portfolio = portfolioProjects.find(p => p.slug === slug);
  if (portfolio) return <PortfolioDetail project={portfolio} />;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <><section className="container page-intro"><Link className="text-link back-link" href="/work">← All concepts</Link><div className="project-intro"><div><SectionLabel>{project.type} · Concept project</SectionLabel><h1>{project.name}</h1></div><p>{project.description}</p></div><div className="project-stage"><ProjectArt style={project.style} /></div><div className="project-description"><div><h2>The thinking behind it.</h2><p>{project.detail}</p><p className="concept-disclosure">Self-initiated work for a fictional business. No client relationship or measured results are implied.</p></div><div className="project-deliverables"><h3>What this explores</h3><ul>{project.deliverables.map(d => <li key={d}><Icon name="check" size={17} /> {d}</li>)}</ul><Link className="text-link" href={`/services/${project.service}`}>Explore the service <Icon name="arrow" size={17} /></Link></div></div>{slug === "studio-form" && <BeforeAfter />}{slug === "words-in-motion" && <ScriptReader />}{slug === "slow-social" && <section className="motion-demo"><video controls playsInline preload="none" poster="/images/reel-poster.jpg" aria-label="Nila concept reel, a silent eight-second motion study"><source src="/media/nila-motion.webm" type="video/webm" /><track kind="captions" src="/media/nila-motion.vtt" srcLang="en" label="English" default />Your browser does not support this video.</video><div><SectionLabel>One idea, in motion</SectionLabel><h2>A little room<br />to slow down.</h2><p>An eight-second silent motion study, made from the AI-generated product still used in this concept. Use the player controls to watch.</p><p><strong>Caption concept:</strong> A cup of tea. A moment to yourself. Make room for a little pause.</p><p>For client reels, you provide the footage. We develop the script, edit the story and prepare the agreed content.</p><ButtonLink href="/contact?service=instagram-content">Plan your content</ButtonLink></div></section>}{slug === "nila" && <div className="about-scope"><h2>Calm design, clear decisions.</h2><p>The concept uses a short product story, generous space and a recognisable product image to make the offer easy to read. A real project would extend this direction into approved pages and the business’s actual buying or enquiry journey.</p></div>}</section><ContactBanner /></>;
}
