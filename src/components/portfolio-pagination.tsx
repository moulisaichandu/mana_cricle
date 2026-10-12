import { portfolioPageHref } from "@/lib/portfolio";
import { Icon } from "./icon";

export function PortfolioPagination({ page, totalPages, position }: { page: number; totalPages: number; position: "top" | "bottom" }) {
  if (totalPages < 2) return null;
  return <nav className="portfolio-pagination" aria-label={`Project pages, ${position}`}>
    {page > 1
      ? <a href={`${portfolioPageHref(page - 1)}#projects`} rel="prev" aria-label={`Previous page, page ${page - 1}`}><Icon name="arrow" size={16} className="pagination-back" /><span>Previous</span></a>
      : <span className="pagination-unavailable" aria-disabled="true"><Icon name="arrow" size={16} className="pagination-back" /><span>Previous</span></span>}
    <span className="pagination-current" aria-current="page">Page {page} of {totalPages}</span>
    {page < totalPages
      ? <a href={`${portfolioPageHref(page + 1)}#projects`} rel="next" aria-label={`Next page, page ${page + 1}`}><span>Next</span><Icon name="arrow" size={16} /></a>
      : <span className="pagination-unavailable" aria-disabled="true"><span>Next</span><Icon name="arrow" size={16} /></span>}
  </nav>;
}
