import { ButtonLink, SectionLabel } from "@/components/shared";
export default function NotFound() {
  return <section className="container simple-page"><SectionLabel>404 · A small detour</SectionLabel><h1>Let’s get you<br />back in the circle.</h1><p>We couldn’t find that page. Explore our services or return to the homepage.</p><ButtonLink href="/">Back to home</ButtonLink> <ButtonLink href="/services" secondary>Explore services</ButtonLink></section>;
}
