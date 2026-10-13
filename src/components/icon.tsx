import { BrandLockup, BrandSymbol } from "./brand";

const paths: Record<string, React.ReactNode> = {
  brand: <><path d="m12 3 9 9-9 9-9-9 9-9Z" /><circle cx="12" cy="12" r="4" /></>,
  qr: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="3" y="15" width="6" height="6" rx="1" /><path d="M15 15h3v3h3M15 21h3M21 12v3M12 3v3M3 12h6M12 12h3M12 18v3" /></>,
  mic: <><rect x="9" y="2" width="6" height="13" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  diagonal: <><path d="M6 18 18 6M6 6h12v12" /></>,
  window: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M13 13l-3 2 3 2" /></>,
  spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4M11 19h2M9 11l2 2 4-4" /></>,
  megaphone: <><path d="m4 10 14-5v14L4 14v-4ZM4 10H2v4h2M7 15l1 6h3l-1-5M21 8v8" /></>,
  reel: <><rect x="5" y="2" width="14" height="20" rx="3" /><path d="m10 8 5 4-5 4V8ZM10 19h4" /></>,
  pen: <><path d="m4 20 4-1 12-12a2.1 2.1 0 0 0-4-4L4 15v5ZM14 5l4 4M4 15l4 4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  chat: <><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 10 10 0 0 1-4-1L3 21l1.5-5A8.5 8.5 0 1 1 21 11.5Z" /><path d="M8 8c0 4 4 8 8 8M8 8l2-1 2 3-1 1M16 16l1-2-3-2-1 1" /></>,
  play: <path d="m9 5 10 7-10 7V5Z" />,
  download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
};
export function Icon({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}
export function BrandMark({ className = "" }: { className?: string }) {
  return <BrandSymbol className={className} />;
}
export function BrandIdentity() {
  return <BrandLockup />;
}
