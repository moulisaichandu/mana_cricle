import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { ContactBanner, SectionLabel } from "@/components/shared";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { PortfolioPagination } from "@/components/portfolio-pagination";
import { portfolioProjects, PORTFOLIO_PAGE_SIZE, portfolioPageCount, portfolioPageHref, resolvePortfolioPage } from "@/lib/portfolio";

type WorkPageProps = { searchParams: Promise<{ page?: string | string[] }> };

export async function generateMetadata({ searchParams }: WorkPageProps): Promise<Metadata> {
  const page = resolvePortfolioPage((await searchParams).page);
  return pageMetadata(
    page === 1 ? "Our Work — Websites, Learning Platforms & Voice AI" : `Our Work — Page ${page}`,
    page === 1
      ? "Explore our team's work in abacus education, public speaking, chess, exam preparation and voice automation. See website previews and project details from ManaCircle."
      : `Explore page ${page} of ManaCircle's team projects, with project details and previews of websites, learning platforms and voice automation.`,
    portfolioPageHref(page),
  );
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const rawPage = (await searchParams).page;
  const page = resolvePortfolioPage(rawPage);
  if (rawPage !== undefined && rawPage !== (page === 1 ? undefined : String(page))) redirect(portfolioPageHref(page));
  const start = (page - 1) * PORTFOLIO_PAGE_SIZE;
  const projects = portfolioProjects.slice(start, start + PORTFOLIO_PAGE_SIZE);
  return <>
    <section className="page-intro container"><SectionLabel>Our work</SectionLabel><h1>Explore the work.<br />Try the experience.</h1><p>From a child’s first speaking exercise to a learning platform’s daily practice. These projects show the screens, workflows and details our team has built. Open an overview or visit an available live website.</p></section>
    <section className="container portfolio-section" id="projects" tabIndex={-1} aria-label="Projects from our team">
      <div className="portfolio-browse-bar"><p>{projects.length === 1 ? <>Showing project <strong>{start + 1}</strong> of {portfolioProjects.length}</> : <>Showing <strong>{start + 1}–{start + projects.length}</strong> of {portfolioProjects.length} projects</>}</p><PortfolioPagination page={page} totalPages={portfolioPageCount} position="top" /></div>
      <PortfolioGallery projects={projects} />
      {portfolioPageCount > 1 && <div className="portfolio-browse-footer"><PortfolioPagination page={page} totalPages={portfolioPageCount} position="bottom" /></div>}
    </section>
    <ContactBanner />
  </>;
}
