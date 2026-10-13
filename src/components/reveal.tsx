"use client";

import { useEffect, useRef } from "react";

// Content is visible in the server HTML; motion enhances its arrival once.
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        element.animate([{ transform: "translateY(18px)" }, { transform: "translateY(0)" }], { duration: 500, easing: "cubic-bezier(0.23, 1, 0.32, 1)" });
        observer.disconnect();
      }
    }, { threshold: .08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
