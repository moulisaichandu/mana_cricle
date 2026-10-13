import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { StudioPhoto } from "@/components/studio-photo";
import { ButtonLink, ContactBanner, SectionLabel } from "@/components/shared";
import { Icon } from "@/components/icon";

export const metadata: Metadata = pageMetadata("About Our Creative & Digital Team", "Meet ManaCircle, an independent team of eight serving businesses worldwide with brand identity, websites, Android apps, marketing and English/Telugu content.", "/about");

export default function AboutPage() {
  return <>
    <section className="page-intro container split-intro"><div><SectionLabel>About ManaCircle</SectionLabel><h1>Eight people.<br />One creative team.</h1></div><p>Design, development, marketing and English/Telugu content for businesses worldwide.</p></section>
    <section className="container about-lead"><div className="about-story"><h2>Different skills.<br />Working together.</h2><p>A brand identity influences the website. A campaign needs the right content and a useful destination. We bring those decisions into the same conversation, so each part supports your business.</p><p>We work remotely with businesses worldwide. For regional marketing, Telugu audiences come first: in Andhra Pradesh, Telangana and Telugu-speaking communities overseas.</p><div className="about-story-foot"><Icon name="globe" size={20} /><span>Worldwide collaboration. English &amp; Telugu content.</span></div></div><StudioPhoto /></section>
    <section className="container values-grid">{[{ icon: "chat", title: "The scope comes first.", text: "A practical conversation, a written scope and a custom quotation. You know what you’re getting and when we’ll review it together." }, { icon: "spark", title: "One project, connected decisions.", text: "Your brand, website, app and content should make sense together. Your business and audience guide the decisions." }, { icon: "pen", title: "The audience shapes the language.", text: "Your business has its own personality. From a first impression to an English or Telugu script, we help it come through." }].map(value => <article key={value.title}><Icon name={value.icon} size={28} /><h2>{value.title}</h2><p>{value.text}</p></article>)}</section>
    <section className="container about-scope"><div><SectionLabel>See the work behind the words</SectionLabel><h2>Open the project.<br />Explore the experience.</h2></div><div><p>Explore websites, learning platforms and voice automation built by our team. Our portfolio includes website previews and project details, so you can explore the experience and the work behind it.</p><ButtonLink href="/work" secondary>Explore our work</ButtonLink></div></section>
    <ContactBanner />
  </>;
}
