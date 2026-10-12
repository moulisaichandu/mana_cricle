"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { NilaWindow, SocialPoster } from "./concept-art";
import { AndroidAppArt } from "./android-app-art";
import { Icon } from "./icon";

const examples = [
  { id: "websites", label: "Websites", name: "A little pause. A considered website.", detail: "Nila · Website concept", href: "/work/nila", cta: "Explore the concept" },
  { id: "apps", label: "Android apps", name: "Everyday ideas, made for your pocket.", detail: "Nila · App design concept", href: "/services/android-app-development", cta: "Explore app development" },
  { id: "content", label: "Content", name: "One story. More ways to share it.", detail: "Nila · Social content concept", href: "/work/slow-social", cta: "Explore the concept" },
];

export function StudioShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = examples[active];
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % examples.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + examples.length) % examples.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = examples.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabs.current[next]?.focus();
  }
  return <div className="studio-showcase">
    <div className="showcase-tabs" role="tablist" aria-label="Explore what we create">{examples.map((item, index) => <button type="button" role="tab" id={`showcase-tab-${item.id}`} aria-controls={`showcase-panel-${item.id}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} key={item.id} ref={element => { tabs.current[index] = element; }} onClick={() => setActive(index)} onKeyDown={event => onKey(event, index)}>{item.label}</button>)}</div>
    {examples.map((item, index) => <div key={item.id} id={`showcase-panel-${item.id}`} role="tabpanel" aria-labelledby={`showcase-tab-${item.id}`} tabIndex={0} hidden={index !== active} className={`showcase-panel showcase-${item.id}`}>
      <div className="showcase-orbit" aria-hidden="true" />
      {index === 0 && <div className="showcase-browser"><NilaWindow /><div className="showcase-browser-caption"><span className="sample-dot" />Designed around the everyday.</div></div>}
      {index === 1 && <AndroidAppArt />}
      {index === 2 && <div className="showcase-social"><SocialPoster /><div className="showcase-script"><Icon name="pen" size={21} /><p>A small story.<br />A little pause.<br />A familiar voice.</p><span>English <i /> <span lang="te">తెలుగు</span></span></div></div>}
      <span className="showcase-stamp">Original<br /><strong>concept work.</strong></span>
    </div>)}
    <div className="showcase-caption"><div><span>{current.detail}</span><p>{current.name}</p></div><Link href={current.href} aria-label={current.cta}><Icon name="diagonal" size={20} /></Link></div>
  </div>;
}
