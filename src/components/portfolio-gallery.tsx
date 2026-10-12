import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, PORTFOLIO_PAGE_SIZE, type PortfolioProject } from "@/lib/portfolio";
import { Icon } from "./icon";
import "@/app/portfolio.css";

export function PortfolioVisual({ project, eager = false }: { project: PortfolioProject; eager?: boolean }) {
  if (!project.image) {
    return <div className="voice-project-cover" role="img" aria-label="Illustrative Voice Agent workflow: a campaign connects to a voice conversation and a transcript">
      <div className="voice-cover-heading" aria-hidden="true"><span>Voice automation</span><strong>Voice Agent</strong><p>English · Telugu · Tinglish</p></div>
      <svg className="voice-cover-wave" viewBox="0 0 480 130" fill="none" aria-hidden="true">
        {[22, 34, 52, 28, 64, 86, 44, 100, 70, 114, 88, 56, 92, 120, 76, 46, 68, 102, 82, 52, 30, 48, 24, 16].map((height, i) => <path key={i} d={`M${10 + i * 20} ${65 - height / 2}v${height}`} stroke="currentColor" strokeWidth="6" strokeLinecap="round" />)}
      </svg>
      <div className="voice-cover-flow" aria-hidden="true"><span>Campaign</span><Icon name="arrow" size={17} /><span>Conversation</span><Icon name="arrow" size={17} /><span>Transcript</span></div>
    </div>;
  }
  return <div className="portfolio-window">
    <div className="portfolio-window-bar" aria-hidden="true"><span className="portfolio-window-dots"><i /><i /><i /></span><span>{project.displayUrl}</span><Icon name="globe" size={13} /></div>
    <div className="portfolio-screenshot"><Image src={project.image} alt={project.imageAlt || project.name} fill sizes="(max-width: 700px) 100vw, 50vw" loading={eager ? "eager" : "lazy"} /></div>
  </div>;
}

export function PortfolioGallery({ compact = false, projects = portfolioProjects.slice(0, PORTFOLIO_PAGE_SIZE) }: { compact?: boolean; projects?: PortfolioProject[] }) {
  const Heading = compact ? "h3" : "h2";
  return <div className={`portfolio-grid ${compact ? "portfolio-grid-compact" : ""}`}>
    {projects.map((project, i) => <article className="portfolio-card" key={project.slug}>
      <Link className={`portfolio-visual-link portfolio-visual-${project.slug}`} href={`/work/${project.slug}`} aria-label={`Explore ${project.name}`}>
        <PortfolioVisual project={project} eager={!compact && i < 2} />
      </Link>
      <div className="portfolio-card-meta"><span>{project.category}</span><span>{project.liveUrl ? "Live website" : "Project overview"}</span></div>
      <Heading className="portfolio-card-title"><Link href={`/work/${project.slug}`}>{project.name}</Link></Heading>
      <p className="portfolio-card-summary">{project.summary}</p>
      <div className="portfolio-card-links">
        <Link href={`/work/${project.slug}`} aria-label={`View project: ${project.name}`}>View project <Icon name="arrow" size={17} /></Link>
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit website: ${project.name} (opens in a new tab)`}>Visit website<Icon name="diagonal" size={16} /></a>}
      </div>
    </article>)}
  </div>;
}
