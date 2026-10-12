import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { StudioPhoto } from "@/components/studio-photo";
import { ButtonLink, ContactBanner, SectionLabel } from "@/components/shared";
import { Icon } from "@/components/icon";

export const metadata: Metadata = pageMetadata("About Our Creative & Digital Team", "Meet ManaCircle, an independent team of eight serving businesses across India with brand identity, websites, Android apps, marketing and English/Telugu content.", "/about");

export default function AboutPage() {
  return <>
    <section className="page-intro container split-intro"><div><SectionLabel>The people behind the work</SectionLabel><h1>Eight minds.<br />On your side.</h1></div><p>ManaCircle is an independent team of eight bringing design, development, marketing and English/Telugu content together for businesses across India.</p></section>
    <section className="container about-lead"><div className="about-story"><h2>From the first idea<br />to the finished detail.</h2><p>ManaCircle is an independent team of eight. We bring design, development, marketing and content into the same conversation, so every part of your presence feels connected.</p><p>We work with businesses across India, including Andhra Pradesh and Telangana. We can help you start something new or make what you already have work better.</p><div className="about-story-foot"><Icon name="globe" size={20} /><span>Based in India. Built around your business.</span></div></div><StudioPhoto /></section>
    <section className="container values-grid">{[{ icon: "chat", title: "A scope you can follow.", text: "A practical conversation, a written scope and a custom quotation. You know what you’re getting and when we’ll review it together." }, { icon: "spark", title: "Work that belongs together.", text: "Your brand, website, app and content should make sense together. Your business and audience guide the decisions." }, { icon: "pen", title: "Language your audience knows.", text: "Your business has its own personality. From a first impression to an English or Telugu script, we help it come through." }].map(value => <article key={value.title}><Icon name={value.icon} size={28} /><h2>{value.title}</h2><p>{value.text}</p></article>)}</section>
    <section className="container about-scope"><div><SectionLabel>A first look at our approach</SectionLabel><h2>Our thinking,<br />made visible.</h2></div><div><p>Explore websites, learning platforms and voice automation built by our team. Our portfolio includes website previews and project details, so you can explore the experience and the work behind it.</p><ButtonLink href="/work" secondary>Explore our work</ButtonLink></div></section>
    <ContactBanner />
  </>;
}
