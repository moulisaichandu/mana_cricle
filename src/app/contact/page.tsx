import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";
import { SectionLabel } from "@/components/shared";
import { Icon } from "@/components/icon";
import { serviceOptions } from "@/lib/enquiry";
import { validReceiver } from "@/lib/enquiry-server";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Discuss Your Project", "Prepare a project brief for branding, websites, Android apps, digital menus, Meta Ads or English/Telugu content. Start with your goal and a custom scope.", "/contact");
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const initialService = serviceOptions.some(([id]) => id === service) ? service! : "not-sure";
  const canSend = validReceiver({ url: process.env.ENQUIRY_WEBHOOK_URL });
  const whatsapp = whatsappLink(serviceOptions.find(([id]) => id === initialService)?.[1]);
  return <><section className="page-intro container split-intro"><div><SectionLabel>It starts with an idea</SectionLabel><h1>Tell us what<br />you’re building.</h1></div><p>A new brand, a better website, an app or content for your next campaign. Start with your business and the result you want to work towards.</p></section><section className="container contact-grid"><aside className="contact-aside"><h2>A conversation.<br />Then a clear plan.</h2><p>You don’t need a perfect brief. A little context helps us understand what matters to your business.</p><div className="contact-steps">{["Share your business and your goal.", "We discuss the scope together.", "You receive a custom quotation."].map((step, i) => <div key={step}><span>0{i + 1}</span><p>{step}</p></div>)}</div>{(site.email || whatsapp) && <div className="direct-contact"><h3>Prefer a direct conversation?</h3>{whatsapp && <a className="text-link" href={whatsapp} rel="noreferrer" target="_blank"><Icon name="chat" size={18} /> Talk on WhatsApp <Icon name="diagonal" size={15} /></a>}{site.email && <a className="text-link" href={`mailto:${site.email}`}><Icon name="mail" size={18} /> Email us</a>}</div>}<p className="contact-location">Across India.<br />English & Telugu content.</p></aside><ContactForm initialService={initialService} canSend={canSend} /></section></>;
}
