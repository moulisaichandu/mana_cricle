import Link from "next/link";
import { guides } from "@/lib/guides";
import { Icon } from "./icon";
export function GuideCards() {
  return <div className="guide-grid">{guides.map(guide => <article className="guide-card" key={guide.slug}><p>{guide.category}</p><h3><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h3><div>{guide.description}</div><Link className="text-link" href={`/guides/${guide.slug}`}>Read the guide <Icon name="diagonal" size={17} /></Link></article>)}</div>;
}
