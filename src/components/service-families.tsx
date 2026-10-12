import Link from "next/link";
import { services } from "@/lib/content";
import { Icon } from "./icon";
export const serviceFamilies = [
  { id: "build", title: "Websites & apps", description: "", icon: "window", slugs: ["website-design", "website-improvement", "android-app-development", "qr-digital-menus"] },
  { id: "grow", title: "Marketing & ads", description: "Connect your offer, creative and landing page with a focused campaign plan.", icon: "target", slugs: ["digital-marketing", "meta-ads"] },
  { id: "create", title: "Brand & content", description: "Give your business a recognisable identity and a voice people understand.", icon: "pen", slugs: ["logo-branding", "instagram-content", "content-writing", "telugu-content-voiceovers"] },
];
export function ServiceFamilies() {
  return <div className="service-families">{serviceFamilies.map(family => <article className={`service-family family-${family.id}`} key={family.id}><div className="family-heading"><Icon name={family.icon} size={28} /><h3>{family.title}</h3></div>{family.description && <p>{family.description}</p>}<div className="family-links">{family.slugs.map(slug => { const service = services.find(s => s.slug === slug)!; return <Link key={slug} href={`/services/${slug}`}><span>{service.title}</span><Icon name="diagonal" size={17} /></Link>; })}</div></article>)}</div>;
}
