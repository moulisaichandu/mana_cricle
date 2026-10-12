"use client";

import { useState } from "react";
import { FormArt } from "./concept-art";

export function BeforeAfter() {
  const [before, setBefore] = useState(false);
  return <section className="preview-switcher" aria-label="Website improvement concept"><div className="preview-controls" role="group" aria-label="Choose a layout"><button onClick={() => setBefore(true)} aria-pressed={before}>Before concept</button><button onClick={() => setBefore(false)} aria-pressed={!before}>Improved concept</button></div><FormArt before={before} /><p aria-live="polite">{before ? "Competing navigation items and a generic introduction make the next step unclear." : "A specific headline, a focused work preview and one clear enquiry route give the page a purpose."}</p></section>;
}

const script = {
  en: ["Another busy day? Give yourself a little pause.", "Put the phone down. Pour your favourite tea. Let this moment be yours.", "Small rituals. A softer everyday. Find your pause with Nila."],
  te: ["రోజంతా పనులతో బిజీగా ఉన్నారా? మీ కోసం కాస్త సమయం తీసుకోండి.", "ఫోన్ పక్కన పెట్టండి. మీకిష్టమైన టీ పోసుకోండి. ఈ క్షణం మీ కోసమే.", "చిన్న అలవాటు. రోజులో ఓ ప్రశాంతమైన క్షణం. నిలాతో కాస్త విరామం తీసుకోండి."],
};
const beats = ["The opening · 0–5 sec", "The moment · 5–15 sec", "The invitation · 15–20 sec"];
export function ScriptReader() {
  const [language, setLanguage] = useState<"en" | "te">("en");
  return <section className="script-reader" aria-label="Bilingual script sample"><div className="preview-controls" role="group" aria-label="Script language"><button aria-pressed={language === "en"} onClick={() => setLanguage("en")}>English</button><button aria-pressed={language === "te"} onClick={() => setLanguage("te")}>Telugu <span lang="te">తెలుగు</span></button></div><div aria-live="polite">{script[language].map((line, index) => <div className="script-beat" key={index}><span>{beats[index]}</span><p lang={language}>{line}</p></div>)}</div><p className="script-visual-note">Visual direction: a busy desk, a phone set aside, tea being poured, then a quiet close-up of the cup. Illustrative timing; final pacing follows a read-through.</p></section>;
}
