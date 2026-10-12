"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/content";
import { Icon } from "./icon";
import { ProjectArt, NilaWindow } from "./concept-art";
export function WorkGallery({ featured = false }: { featured?: boolean }) {
  const [filter,setFilter]=useState("All concepts");
  const visible=(featured?[projects[0],projects[2]]:projects).filter(p=>filter==="All concepts"||p.category===filter);
  return <>{!featured&&<div className="work-filters" role="group" aria-label="Filter concept work">{["All concepts","Websites","Content"].map(f=><button key={f} aria-pressed={f===filter} onClick={()=>setFilter(f)}>{f}</button>)}</div>}<div className={`work-grid ${featured?"featured-work-grid":""}`}>{visible.map(p=><article key={p.slug} className="work-card"><Link href={`/work/${p.slug}`} className="work-art-link" aria-label={`Explore ${p.name} concept`}>{p.style==="tea"?<div className="project-cover cover-tea"><div className="cover-browser"><NilaWindow small /></div></div>:p.style==="form"?<div className="project-cover cover-form"><Image src="/images/studio-interior.webp" alt="Illustrative warm interior with a curved wall and olive seating, for the Studio Form website concept" fill sizes="(max-width:600px) 100vw, 50vw" /></div>:<ProjectArt style={p.style}/>}<span className="concept-tag">Concept project</span><span className="project-open"><Icon name="diagonal"/></span></Link><div className="work-card-title"><h3><Link href={`/work/${p.slug}`}>{p.name}</Link></h3><span>{p.type}</span></div><p>{p.description}</p></article>)}</div>{!featured&&<p className="gallery-disclosure">Self-initiated work for fictional businesses, with illustrative AI-generated imagery. No client relationship or campaign results are implied.</p>}</>;
}
