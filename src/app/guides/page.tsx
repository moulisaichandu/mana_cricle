import { GuideCards } from "@/components/guide-cards";
import { ContactBanner, SectionLabel } from "@/components/shared";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Project Guides for Websites, QR Menus & Reels", "Practical planning guides from ManaCircle: prepare a website brief, choose a QR menu format and plan English or Telugu Instagram reels.", "/guides");
export default function GuidesPage() {
  return <><StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"Project guides",path:"/guides"}])} /><section className="page-intro container"><SectionLabel>Project guides</SectionLabel><h1>Better questions.<br />Better starting points.</h1><p>Practical notes for business owners planning a website, a digital menu or their next reel. Know what to prepare and what to include in the scope.</p></section><section className="container section" style={{paddingTop:0}}><GuideCards /></section><ContactBanner /></>;
}
