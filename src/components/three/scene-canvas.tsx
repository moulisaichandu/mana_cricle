"use client";

import { Canvas, type CanvasProps, type RootState } from "@react-three/fiber";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode, type RefObject } from "react";

export type ScenePointer = { x: number; y: number };
export type SceneMotion = {
  /** prefers-reduced-motion is on: scenes must hold a static pose and skip continuous animation. */
  reducedMotion: boolean;
  /** At least 10% of the container is on screen. */
  inView: boolean;
  /** Viewport narrower than 760px: dpr is forced to 1, scenes may simplify. */
  isMobile: boolean;
  /** Normalised cursor over the container, -1..1 on both axes (y up), 0,0 when the pointer leaves. Read it in useFrame. */
  pointer: RefObject<ScenePointer>;
};

export type SceneCanvasProps = {
  children?: ReactNode;
  className?: string;
  /** Shown when WebGL is unavailable and until the canvas has mounted on the client. */
  fallback?: ReactNode;
  camera?: CanvasProps["camera"];
  /** Pixel ratio clamp; forced to 1 on mobile viewports. */
  dpr?: CanvasProps["dpr"];
  shadows?: CanvasProps["shadows"];
  style?: CSSProperties;
  /** Written to data-scene on the container; used by tests, never read by the scene. */
  label?: string;
};

const SceneMotionContext = createContext<SceneMotion | null>(null);
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const MOBILE = "(max-width: 759px)";
const defaultCamera: CanvasProps["camera"] = { position: [0, 0, 7], fov: 32 };
const defaultDpr: CanvasProps["dpr"] = [1, 1.5];
const glOptions: CanvasProps["gl"] = { antialias: true, alpha: true, powerPreference: "high-performance" };

/** Reads the motion flags and pointer of the enclosing SceneCanvas; safe defaults outside one. */
export function useSceneMotion(): SceneMotion {
  const context = useContext(SceneMotionContext);
  const pointer = useRef<ScenePointer>({ x: 0, y: 0 });
  const fallback = useMemo<SceneMotion>(() => ({ reducedMotion: false, inView: true, isMobile: false, pointer }), []);
  return context ?? fallback;
}

// The probe runs once per page; its context is released so it never counts toward the browser's context limit.
let webglSupport: boolean | null = null;
function detectWebGL(): boolean {
  if (webglSupport !== null) return webglSupport;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    webglSupport = gl !== null;
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    webglSupport = false;
  }
  return webglSupport;
}

function useMediaQuery(query: string): boolean {
  const subscribe = useCallback((onChange: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);
}

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}
function useTabVisible(): boolean {
  return useSyncExternalStore(subscribeVisibility, () => document.visibilityState !== "hidden", () => true);
}

/**
 * Lazy-mounted R3F canvas that only runs its render loop while on screen, in a visible tab and with motion allowed.
 * The caller sizes the container (it fills its parent); nothing here changes layout when the canvas appears.
 */
export function SceneCanvas({ children, className, fallback = null, camera = defaultCamera, dpr = defaultDpr, shadows, style, label }: SceneCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<ScenePointer>({ x: 0, y: 0 });
  const rootState = useRef<RootState | null>(null);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = useMediaQuery(REDUCED_MOTION);
  const isMobile = useMediaQuery(MOBILE);
  const tabVisible = useTabVisible();

  useEffect(() => setWebgl(detectWebGL()), []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.1), { threshold: [0, 0.1] });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const frameloop = inView && tabVisible && !reducedMotion ? "always" : "demand";
  // Changing the frameloop prop alone neither restarts a stopped loop nor draws the final pose: request one frame.
  useEffect(() => {
    rootState.current?.invalidate();
  }, [frameloop]);

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.current.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onPointerLeave = () => {
    pointer.current.x = 0;
    pointer.current.y = 0;
  };

  const motion = useMemo<SceneMotion>(() => ({ reducedMotion, inView, isMobile, pointer }), [reducedMotion, inView, isMobile]);

  return <div ref={containerRef} className={className} style={{ position: "relative", width: "100%", height: "100%", ...style }} aria-hidden="true" data-scene={label} data-motion={reducedMotion ? "reduced" : "full"} data-inview={inView ? "true" : "false"} data-frameloop={frameloop} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
    <SceneMotionContext.Provider value={motion}>
      {webgl ? <Canvas camera={camera} dpr={isMobile ? 1 : dpr} shadows={shadows} frameloop={frameloop} gl={glOptions} onCreated={state => { rootState.current = state; }}>{children}</Canvas> : fallback}
    </SceneMotionContext.Provider>
  </div>;
}
