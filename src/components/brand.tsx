export function BrandSymbol({ className = "" }: { className?: string }) {
  return <svg className={`brand-symbol ${className}`} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    {Array.from({ length: 8 }, (_, i) => <rect key={i} x="21" y="3" width="6" height="15" rx="3" fill="currentColor" transform={`rotate(${i * 45} 24 24)`} />)}
  </svg>;
}

export function BrandLockup() {
  return <><BrandSymbol /><span className="brand-wordmark">mana<span>circle</span><span className="brand-period">.</span></span></>;
}
