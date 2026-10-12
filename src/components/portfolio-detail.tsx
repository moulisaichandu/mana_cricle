import Image from "next/image";
import { portfolioProjects, PORTFOLIO_PAGE_SIZE, portfolioPageHref, type PortfolioProject } from "@/lib/portfolio";
import { absoluteUrl, breadcrumbs } from "@/lib/seo";
import { PortfolioVisual } from "./portfolio-gallery";
import { StructuredData } from "./structured-data";
import { ButtonLink, ContactBanner, SectionLabel } from "./shared";
import { Icon } from "./icon";

export function PortfolioDetail({ project }: { project: PortfolioProject }) {
  const galleryPage = Math.floor(Math.max(0, portfolioProjects.findIndex(item => item.slug === project.slug)) / PORTFOLIO_PAGE_SIZE) + 1;
  return <>
    <StructuredData data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Our work", path: "/work" }, { name: project.name, path: `/work/${project.slug}` }])} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "CreativeWork", name: project.name, description: project.description, url: absoluteUrl(`/work/${project.slug}`), creator: { "@id": absoluteUrl("/#organization") }, ...(project.image ? { image: absoluteUrl(project.image) } : {}) }} />
    <section className="container portfolio-detail-intro">
      <a href={`${portfolioPageHref(galleryPage)}#projects`} className="text-link back-link"><Icon name="arrow" size={16} />All projects</a>
      <div className="portfolio-detail-heading"><div><SectionLabel>{project.category}</SectionLabel><h1>{project.name}</h1></div><p>{project.description}</p></div>
      <div className="portfolio-detail-toolbar"><ul aria-label="Project areas">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>{project.liveUrl && <a className="button button-small" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit website<Icon name="diagonal" size={17} /><span className="sr-only"> (opens in a new tab)</span></a>}</div>
      <figure className={`portfolio-detail-figure ${!project.image ? "portfolio-detail-voice" : ""}`}>
        {project.image ? <Image src={project.image} alt={project.imageAlt || project.name} width={1440} height={1050} sizes="(max-width: 700px) 100vw, 1320px" loading="eager" /> : <PortfolioVisual project={project} />}
        <figcaption>{project.image ? `Website preview · ${project.displayUrl}` : "Voice workflow illustration"}</figcaption>
      </figure>
      <div className="portfolio-detail-body"><div><h2>About the project</h2><p>{project.details}</p><ButtonLink href="/contact" secondary>Discuss a similar project</ButtonLink></div><div><h2>Inside the experience</h2><ul>{project.features.map(feature => <li key={feature}><Icon name="check" size={18} />{feature}</li>)}</ul></div></div>
    </section>
    <ContactBanner />
  </>;
}
