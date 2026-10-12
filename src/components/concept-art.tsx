import Image from "next/image";
import { Icon } from "./icon";

export function NilaWindow({ small = false }: { small?: boolean }) {
  return <div className={`nila-window ${small ? "small-window" : ""}`} role="img" aria-label="Concept website for fictional tea brand Nila, with an editorial product image and a simple shop layout">
    <div className="window-bar"><span /><span /><span /><i>nila — a little pause</i></div>
    <div className="nila-nav"><b>nila<span>·</span></b><span>Our teas &nbsp; Our story</span><span className="nila-bag">Bag (0)</span></div>
    <div className="nila-content"><div className="nila-copy"><span>Rooted in the everyday.</span><h3>A little pause.<br />A better day.</h3><p>Good tea. Small rituals.<br />A moment, just for you.</p><span className="nila-fake-button">Find your daily ritual <Icon name="arrow" size={12} /></span></div><div className="nila-image"><Image src="/images/nila-product-v2.webp" alt="" fill sizes="(max-width: 600px) 200px, 400px" loading={small ? "lazy" : "eager"} /></div></div>
    <div className="nila-bottom"><span>Thoughtfully sourced.</span><span>Made for slow moments.</span><span>Simply, naturally good.</span></div>
  </div>;
}

export function SocialPoster({ compact = false }: { compact?: boolean }) {
  return <div className={`social-poster ${compact ? "compact-poster" : ""}`} role="img" aria-label="Nila social post concept: make room for a little pause, with a tea still life">
    <span className="poster-brand">nila·</span><h3>Make room<br />for a little<br /><em>pause.</em></h3><div className="poster-photo"><Image src="/images/botanical-tea.png" alt="" fill sizes="(max-width: 600px) 280px, 460px" loading={compact ? "eager" : "lazy"} /></div><span className="poster-bottom">Your everyday, a little softer.</span>
  </div>;
}

export function HeroArt() {
  return <div className="hero-art"><div className="hero-art-backdrop" aria-hidden="true"><span /></div><div className="hero-browser"><NilaWindow /></div><div className="hero-phone"><div className="phone-island" /><SocialPoster compact /></div><div className="hero-note"><span className="note-icon"><Icon name="spark" size={17} /></span><span>One idea.<br /><strong>Many possibilities.</strong></span></div><p className="art-caption">An original ManaCircle concept, from web to social.</p></div>;
}

export function FormArt({ before = false }: { before?: boolean }) {
  return <div className={`form-art ${before ? "before-art" : ""}`} role="img" aria-label={before ? "Before concept: competing headings and unclear navigation" : "Improved concept for Studio Form: focused headline, work preview and enquiry action"}>
    <div className="form-art-nav"><b>studio form.</b><span>{before ? "Home / Gallery / Links / More / About / News" : "Spaces  /  Approach  /  Get in touch"}</span></div>
    <div className="form-art-body"><div><span>Spaces to be yourself.</span><h3>{before ? "WELCOME TO OUR WEBSITE" : <>A considered<br />way of living.</>}</h3><p>{before ? "We offer many different services. Find out more below." : "Thoughtful interiors. Everyday living."}</p><span className="form-art-cta">{before ? "Click here • Learn more • Discover" : "Explore our spaces"}</span></div><div className="interior-art"><Image src="/images/studio-interior.webp" alt="" fill sizes="(max-width: 600px) 220px, 480px" /></div></div>
  </div>;
}

export function ScriptArt() {
  return <div className="script-art" role="img" aria-label="Writing concept: a video starts with the right words, available in English and Telugu"><div className="script-paper"><span>Every good story starts somewhere.</span><p>“What if your<br />next good idea<br />starts with<br /><em>a pause?</em>”</p><div><span>English</span><span lang="te">తెలుగు</span></div></div><div className="script-pencil" aria-hidden="true" /></div>;
}

export function ProjectArt({ style }: { style: string }) {
  if (style === "tea") return <div className="project-art tea-art"><NilaWindow small /></div>;
  if (style === "social") return <div className="project-art social-art"><SocialPoster /><div className="social-side-note">A story worth<br />slowing down for.<span>Content concept<br />English + Telugu</span></div></div>;
  if (style === "form") return <div className="project-art studio-art"><FormArt /></div>;
  return <div className="project-art writing-art"><ScriptArt /></div>;
}
