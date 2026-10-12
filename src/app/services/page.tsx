import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { serviceDetails } from "@/lib/service-details";
import { serviceImages } from "@/lib/service-images";
import { pageMetadata } from "@/lib/seo";
import { serviceFamilies } from "@/components/service-families";
import { ButtonLink, ContactBanner, Process, SectionLabel } from "@/components/shared";
import { Icon } from "@/components/icon";

export const metadata: Metadata = pageMetadata("Branding, Website, App & Marketing Services", "Explore ManaCircle’s ten services for businesses across India: brand identity, websites, Android apps, QR menus, Meta Ads, Instagram content and Telugu voiceovers.", "/services");

export default function ServicesPage() {
  return <>
    <h1 className="sr-only">ManaCircle services</h1>
    <div className="container service-catalogue">
      {serviceFamilies.map(family => <section className="catalogue-family" id={family.id} key={family.id} aria-label={family.title + " services"}>
        <div className="catalogue-family-intro"><p>{family.title}</p>{family.description && <span>{family.description}</span>}</div>
        {family.slugs.map(slug => {
          const s = services.find(item => item.slug === slug)!;
          const visual = serviceImages[slug];
          return <article key={slug}>
            <div className="catalogue-service-photo"><Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 800px) 220px, (max-width: 1100px) 200px, 250px" /></div>
            <div><h2>{s.title}</h2><p>{serviceDetails[slug].description}</p><Link href={`/services/${slug}`} className="text-link">Explore this service <Icon name="diagonal" size={17} /></Link></div>
            <ul>{s.deliverables.slice(0, 3).map(d => <li key={d}><Icon name="check" size={16} />{d}</li>)}</ul>
          </article>;
        })}
      </section>)}
    </div>
    <section className="engagement container"><div><SectionLabel>Made around your business</SectionLabel><h2>A scope that fits.<br />A quote you can understand.</h2></div><div><p>Choose a focused project, a batch of content or ongoing support. We agree the deliverables, revisions, responsibilities and costs together before the work starts.</p><ButtonLink /></div></section>
    <Process /><ContactBanner />
  </>;
}
