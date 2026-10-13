import Image from "next/image";
import Link from "next/link";
import { services, homeFaq } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { ContactBanner, FAQ, SectionLabel } from "@/components/shared";
import { BrandLockup, BrandSymbol } from "@/components/brand";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import "./home.css";

export const metadata = pageMetadata(
  "Brand Identity, Websites & Telugu Digital Marketing",
  "ManaCircle creates brand identities, websites, Android apps and Telugu-first marketing content for businesses worldwide. Explore our services and plan your project.",
  "/",
);

const serviceGroups = [
  { id: "build", number: "01", title: "Websites & apps", description: "A business website, an Android app or a simpler way for customers to order. We design and build around what people need to do.", image: "/images/creative-studio-hero.webp", alt: "Illustrative workspace with a website displayed on a laptop", slugs: ["website-design", "website-improvement", "android-app-development", "qr-digital-menus"] },
  { id: "create", number: "02", title: "Brand & content", description: "Give your business a recognisable look and a clear voice. From your logo to the next reel, keep your message consistent.", image: "/images/terra-brand-concept.webp", alt: "Illustrative green brand packaging and printed stationery", slugs: ["logo-branding", "instagram-content", "content-writing", "telugu-content-voiceovers"] },
  { id: "grow", number: "03", title: "Marketing & ads", description: "Connect your offer with the right audience. Plan your campaigns, shape the creative and keep ad spend and service costs clear.", image: "/images/service-marketing-plan.webp", alt: "Illustrative campaign planning workspace", slugs: ["digital-marketing", "meta-ads"] },
];

const steps = [
  { title: "Share your brief", detail: "Tell us what your business does, who you want to reach and what you need. We help you choose the relevant services." },
  { title: "Agree the scope", detail: "We outline the deliverables, quotation, responsibilities and review points. You can see what is included before work starts." },
  { title: "Review the work", detail: "You review designs, content or working screens at agreed milestones. Feedback and revisions follow the project scope." },
  { title: "Launch & handover", detail: "We check the agreed deliverables and hand over the files, access and guidance. Launch responsibilities and ongoing support are confirmed separately." },
];

function BrandScene() {
  return <figure className="brand-scene">
    <div className="brand-scene-art" aria-hidden="true">
      <div className="brand-scene-sheet"><BrandSymbol /><span>Ideas with<br />a clear direction.</span><div><i /><i /><i /></div></div>
      <div className="brand-scene-browser">
        <div className="scene-browser-bar"><span><i /><i /><i /></span><span>Brand &amp; website concept</span><Icon name="globe" size={13} /></div>
        <div className="scene-site-nav"><span className="brand-lockup"><BrandLockup /></span><span>Design &amp; digital</span></div>
        <div className="scene-site-content"><div><span>MADE TO CONNECT</span><strong>A clearer<br />brand.<br />A better<br />experience.</strong><span className="scene-site-button">Discover ManaCircle <Icon name="diagonal" size={12} /></span></div><div className="scene-site-photo"><Image className="image-hero-photo" src="/images/photography/bright-workspace.webp" alt="" fill sizes="(max-width: 760px) 40vw, 280px" preload /></div></div>
      </div>
      <div className="brand-scene-card"><span className="brand-lockup"><BrandLockup /></span><div><span>Creative thinking.<br />Connected execution.</span><Icon name="diagonal" size={24} /></div></div>
    </div>
    <figcaption>ManaCircle brand &amp; website concept <span>Illustrative presentation</span></figcaption>
  </figure>;
}

export default function Home() {
  return <div className="home-page studio-home">
    <section className="home-hero" aria-labelledby="home-heading">
      <div className="container home-hero-grid">
        <div className="home-hero-copy">
          <SectionLabel>Creative &amp; digital studio · Working worldwide</SectionLabel>
          <h1 id="home-heading">Branding &amp; websites.<br /><span>Made to connect.</span></h1>
          <p>We build brands, websites and digital experiences, with Telugu-first marketing that speaks to your audience.</p>
          <div className="home-hero-actions"><Link className="button" href="#services">Explore our services <Icon name="arrow" size={19} /></Link><Link className="text-link" href="/contact">Start your project <Icon name="diagonal" size={18} /></Link></div>
          <div className="home-hero-note"><BrandSymbol /><span>Eight people. Design, development<br />and content in one team.</span></div>
        </div>
        <BrandScene />
      </div>
    </section>

    <nav className="home-service-strip" aria-label="Service categories"><div className="container"><a href="#build">Websites &amp; apps</a><BrandSymbol /><a href="#create">Brand &amp; content</a><BrandSymbol /><a href="#grow">Marketing &amp; ads</a></div></nav>

    <section className="home-services container" id="services" aria-labelledby="services-heading">
      <div className="home-section-heading"><div><SectionLabel>What we do</SectionLabel><h2 id="services-heading">Find the right service<br />for your business.</h2></div><p>Start with one service or bring a few together. Each page explains the scope, what we need and what you receive.</p></div>
      <div className="home-service-list">{serviceGroups.map(group => <Reveal key={group.id}><article className="home-service-row" id={group.id}>
        <div className="home-service-image"><Image src={group.image} alt={group.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 35vw, 340px" /></div>
        <div className="home-service-summary"><span className="service-number">{group.number}</span><h3>{group.title}</h3><p>{group.description}</p></div>
        <div className="home-service-links">{group.slugs.map(slug => <Link key={slug} href={`/services/${slug}`}><span>{services.find(service => service.slug === slug)!.title}</span><Icon name="diagonal" size={17} /></Link>)}</div>
      </article></Reveal>)}</div>
      <div className="home-services-foot"><span>Service illustrations are AI-generated.</span><Link href="/services" className="text-link">Compare all services <Icon name="arrow" size={18} /></Link></div>
    </section>

    <section className="home-telugu" aria-labelledby="telugu-heading"><div className="container home-telugu-grid">
      <figure className="home-telugu-photo"><Image src="/images/photography/recording-microphone.webp" alt="Condenser microphone in a recording setup" fill sizes="(max-width: 700px) 100vw, 40vw" /><figcaption>Editorial photo · Hrayr Movsisyan / Unsplash</figcaption></figure>
      <Reveal className="home-telugu-copy"><SectionLabel>Telugu comes naturally</SectionLabel><h2 id="telugu-heading">Your audience.<br />Their language.</h2><p className="home-telugu-native" lang="te">మీ కథ. మన భాష.</p><p>Scripts, voiceovers, reels and campaigns for Telugu audiences in Andhra Pradesh, Telangana and around the world. English content is available too.</p><Link href="/services/telugu-content-voiceovers" className="text-link">Explore Telugu content <Icon name="diagonal" size={19} /></Link></Reveal>
    </div></section>

    <section className="home-process container" id="how-it-works" aria-labelledby="process-heading"><div><SectionLabel>How it works</SectionLabel><h2 id="process-heading">A small team.<br />A clear process.</h2><p>We’re an independent team of eight. You’ll know the scope, review points and next step throughout your project.</p><Link href="/about" className="text-link">Meet ManaCircle <Icon name="diagonal" size={18} /></Link></div><div className="home-process-list">{steps.map((step, index) => <details name="project-process" key={step.title} open={index === 0}><summary><span>0{index + 1}</span><h3>{step.title}</h3><Icon name="plus" size={19} /></summary><p>{step.detail}</p></details>)}</div></section>

    <section className="home-questions"><div className="container home-questions-grid"><div><SectionLabel>Before you begin</SectionLabel><h2>A few useful<br />answers.</h2><p>Scope, pricing, languages and getting started.</p><Link href="/guides" className="text-link">Read our project guides <Icon name="diagonal" size={18} /></Link></div><FAQ items={homeFaq} /></div></section>
    <ContactBanner />
  </div>;
}
