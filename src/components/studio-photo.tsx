import Image from "next/image";
import { BrandMark } from "./icon";

export function StudioPhoto() {
  return <figure className="studio-photo">
    <div className="studio-photo-frame">
      <Image src="/images/creative-worktable.webp" alt="Illustrative creative workspace with a notebook, colour swatches and coffee in natural window light" fill sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) 45vw, 590px" />
      <span className="studio-photo-mark" aria-hidden="true"><BrandMark /></span>
    </div>
    <figcaption><span>Room for a good idea.</span><span>Illustrative studio scene</span></figcaption>
  </figure>;
}
