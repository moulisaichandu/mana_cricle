import Image from "next/image";
import { BrandMark } from "./icon";

export function StudioPhoto() {
  return <figure className="studio-photo">
    <div className="studio-photo-frame">
      <Image src="/images/photography/creative-desk.webp" alt="Open notebook, pen and coffee on a wooden desk" fill sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) 45vw, 590px" />
      <span className="studio-photo-mark" aria-hidden="true"><BrandMark /></span>
    </div>
    <figcaption><span>Every project starts with a question.</span><a href="https://unsplash.com/photos/wl2qQ2JHMXA">Photo: Kelly Sikkema / Unsplash</a></figcaption>
  </figure>;
}
