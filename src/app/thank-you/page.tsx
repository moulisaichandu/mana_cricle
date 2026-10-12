import type { Metadata } from "next";
import { ButtonLink, SectionLabel } from "@/components/shared";
export const metadata: Metadata = { title: "Next steps", robots: { index: false, follow: false } };
export default function NextStepsPage() {
  return <section className="container simple-page"><SectionLabel>Your next step</SectionLabel><h1>Good work starts<br />with a conversation.</h1><p>If you sent an enquiry, check the confirmation shown on the contact form. If you downloaded a brief, it stays on your device until you share it.</p><ButtonLink href="/contact">Back to your project brief</ButtonLink></section>;
}
