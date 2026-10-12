import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { ButtonLink, FAQ } from "@/components/shared";
import { Icon } from "@/components/icon";
import { services } from "@/lib/content";
import { portfolioProjects } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";
import "./home.css";

export const metadata: Metadata = pageMetadata(
  "Website Design, Branding & Digital Marketing in India",
  "ManaCircle creates websites, Android apps, brand identities, Meta Ads and English/Telugu content. Explore our services and plan your project with our team of eight.",
  "/",
);

const serviceGroups = [
  {
    title: "Websites & apps",
    description: "Give customers a clear place to find you, explore your business and get in touch.",
    image: "/images/creative-studio-hero.webp",
    imageClass: "home-service-web",
    slugs: ["website-design", "website-improvement", "android-app-development", "qr-digital-menus"],
  },
  {
    title: "Marketing & ads",
    description: "Plan your campaigns, create the ads and reach people on Facebook and Instagram.",
    image: "/images/creative-worktable.webp",
    imageClass: "home-service-marketing",
    slugs: ["digital-marketing", "meta-ads"],
  },
  {
    title: "Branding & content",
    description: "Build a recognisable brand and create the posts, reels and words that go with it.",
    image: "/images/terra-brand-concept.webp",
    imageClass: "home-service-brand",
    slugs: ["logo-branding", "instagram-content", "content-writing", "telugu-content-voiceovers"],
  },
];

const questions = [
  { question: "Can I book just one service?", answer: "Yes. Start with a logo, website, app, a set of reels or another service. You can also combine services in one project. We agree exactly what is included before work starts." },
  { question: "How much will my project cost?", answer: "We prepare a custom quotation after discussing your requirements. It sets out the deliverables, timeline, revisions and separate costs such as ad spend, hosting or third-party fees. You approve the scope before we begin." },
  { question: "Can you improve my existing website?", answer: "Yes. We review your current website, its content and the enquiry process, then agree the changes it needs. You may only need improvements to a few pages, rather than a complete rebuild." },
  { question: "Who records the footage for Instagram reels?", answer: "You provide the footage. We can write the script, edit the video, add captions and design the posts. Posting to your account is available when agreed. On-location filming is outside our current offer." },
  { question: "Do you work with businesses across India?", answer: "Yes. We work remotely with businesses across India, including Andhra Pradesh and Telangana. Scripts and content are available in English and Telugu; the languages and formats are agreed for each project." },
];

export default function Home() {
  return <div className="home-page">
    <section className="home-hero" aria-labelledby="home-heading">
      <Image className="image-hero-photo" src="/images/creative-studio-hero.webp" alt="" fill sizes="(max-width: 600px) 1400px, (max-width: 900px) 1300px, 100vw" preload />
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="container home-hero-inner">
        <div className="home-hero-copy">
          <p className="home-hero-label">Creative & digital services for businesses</p>
          <h1 id="home-heading">Websites, branding<br />& marketing for<br />your business.</h1>
          <p className="home-hero-description">We’re ManaCircle. A team of eight creating websites, Android apps, brand identities and content for businesses across India.</p>
          <div className="home-hero-actions">
            <ButtonLink>Start your project</ButtonLink>
            <a href="#services" className="home-hero-link">Explore services <Icon name="arrow" size={19} /></a>
          </div>
        </div>
        <small className="home-image-credit">Illustrative studio scene · AI-generated</small>
      </div>
    </section>

    <div className="home-facts"><ul className="container">
      <li><Icon name="check" size={18} />One service or a complete project</li>
      <li><Icon name="globe" size={18} />English & Telugu content</li>
      <li><Icon name="check" size={18} />Custom quote before we begin</li>
    </ul></div>

    <section className="home-section container home-services" id="services" aria-labelledby="services-heading">
      <div className="home-section-heading">
        <div><p className="home-label">Our services</p><h2 id="services-heading">What does your<br />business need?</h2></div>
        <p>Choose a service below to see what’s included.<br />Need a few things? We can plan them together.</p>
      </div>
      <div className="home-service-grid">
        {serviceGroups.map(group => <article className="home-service-card" key={group.title}>
          <div className={`home-service-image ${group.imageClass}`}>
            <Image src={group.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            <span>Illustrative visual</span>
          </div>
          <div className="home-service-content">
            <h3>{group.title}</h3><p>{group.description}</p>
            <div className="home-service-links">{group.slugs.map(slug => {
              const service = services.find(item => item.slug === slug)!;
              return <Link href={`/services/${slug}`} key={slug}><span>{service.title}</span><Icon name="arrow" size={17} /></Link>;
            })}</div>
            {group.title === "Marketing & ads" && <p className="home-ad-note">Campaign planning, ad creatives and management are scoped to your needs. Advertising spend is separate.</p>}
          </div>
        </article>)}
      </div>
      <div className="home-service-help"><p><strong>Not sure which service to choose?</strong> Tell us what you want to improve.</p><Link href="/contact">Help me plan my project <Icon name="arrow" size={18} /></Link></div>
    </section>

    <section className="home-samples home-section home-portfolio" id="sample-work" aria-labelledby="samples-heading">
      <div className="container">
        <div className="home-section-heading">
          <div><p className="home-label">Our work</p><h2 id="samples-heading">Projects from<br />our team.</h2></div>
          <p>Learning platforms, interactive websites and voice automation. A closer look at what we build.</p>
        </div>
        <PortfolioGallery compact />
        <div className="home-samples-footer"><span>Explore the project. Try the experience.</span><Link href="/work">View all {portfolioProjects.length} projects <Icon name="arrow" size={18} /></Link></div>
      </div>
    </section>

    <section className="home-local home-section" aria-labelledby="local-heading">
      <div className="container home-local-grid">
        <div className="home-local-copy"><p className="home-label">English & Telugu content</p><h2 id="local-heading">Speak your<br />customers’ language.</h2><p>Scripts, voiceovers, subtitles, captions and regional ad creatives for Telugu-speaking audiences in Andhra Pradesh, Telangana and across India.</p><Link href="/services/telugu-content-voiceovers" className="text-link">Explore Telugu content services <Icon name="arrow" size={18} /></Link></div>
        <div className="home-local-visual"><Image src="/images/voiceover-studio.webp" alt="Illustrative recording setup with a microphone and headphones" fill sizes="(max-width: 700px) 100vw, 45vw" /><span>Voiceovers · Subtitles · Regional ads</span></div>
      </div>
    </section>

    <section className="home-section container home-how" id="how-it-works" aria-labelledby="how-heading">
      <div className="home-how-intro"><p className="home-label">How it works</p><h2 id="how-heading">A clear plan.<br />From start to finish.</h2><p>Our eight-person team brings design, development, marketing and writing into one project. You know what’s included before we start.</p><Link href="/about" className="text-link">Meet ManaCircle <Icon name="arrow" size={18} /></Link></div>
      <ol className="home-steps">
        <li><span>1</span><div><h3>Tell us what you need</h3><p>Share your business, the service you’re interested in and your target timeline. It’s okay if you’re still figuring things out.</p></div></li>
        <li><span>2</span><div><h3>Agree the scope & quotation</h3><p>We discuss the deliverables, cost, revisions and schedule. Work begins after you approve the plan.</p></div></li>
        <li><span>3</span><div><h3>Review the work. Get ready to launch.</h3><p>We create the agreed work, get your feedback and hand over the website, app, designs or content.</p></div></li>
      </ol>
    </section>

    <section className="home-section home-questions" aria-labelledby="questions-heading">
      <div className="container home-questions-grid">
        <div><p className="home-label">Before you start</p><h2 id="questions-heading">A few things<br />you might ask.</h2><p className="home-question-intro">Scope, pricing and what you’ll need to provide.</p><Link href="/guides" className="text-link">Read our project guides <Icon name="arrow" size={18} /></Link></div>
        <FAQ items={questions} />
      </div>
    </section>

    <section className="home-final" aria-labelledby="final-heading"><div className="container home-final-inner"><div><h2 id="final-heading">Let’s plan your next project.</h2><p>Tell us about your business. We’ll help you choose the right services.</p></div><ButtonLink>Start your project</ButtonLink></div></section>
  </div>;
}
