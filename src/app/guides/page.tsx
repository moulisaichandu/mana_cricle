import { GuideCards } from "@/components/guide-cards";
import { ContactBanner, SectionLabel } from "@/components/shared";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Guides for Websites, Budgets & Telugu Marketing", "Prepare a website brief, compare project quotes, choose a digital menu and plan Telugu campaigns. Practical guides for business owners from ManaCircle.", "/guides");
export default function GuidesPage() {
  return <><StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"Project guides",path:"/guides"}])} /><section className="page-intro container"><SectionLabel>Project guides</SectionLabel><h1>Plan your website,<br />content or campaign.</h1><p>Practical answers about project briefs, website costs, digital menus and Telugu marketing. Use these guides to prepare and compare your options.</p></section><section className="container section" style={{paddingTop:0}}><GuideCards /></section><ContactBanner /></>;
}
