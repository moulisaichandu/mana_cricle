"use client";

import dynamic from "next/dynamic";
import type { ComponentType, ReactNode } from "react";

/**
 * Builds a client-only lazy scene: three/R3F never load on the server and the scene ships as its own chunk.
 *
 * Rules for callers (enforced by webpack and Next, not by this helper):
 * - Pass a literal `() => import("./hero-scene")`: webpack needs the static specifier to split the chunk.
 * - Call it at module scope of a "use client" file. A server component cannot call a client-module function,
 *   and calling it inside a component body re-creates the lazy component on every render.
 * - Import from "@/components/three/lazy", not the barrel, so three is not pulled into the page's chunk.
 * - `fallback` renders on the server and stays until the chunk and canvas mount: give it the scene's footprint
 *   (poster image or a sized block) so nothing shifts.
 */
export function lazyScene<P>(loader: () => Promise<{ default: ComponentType<P> }>, fallback?: ReactNode): ComponentType<P> {
  return dynamic<P>(loader, { ssr: false, loading: () => fallback ?? null });
}
