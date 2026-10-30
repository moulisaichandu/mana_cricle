"use client";

import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import type * as THREE from "three";

export type StudioPreset = "cream" | "forest";

type Preset = {
  ambient: [intensity: number, color: string];
  key: [intensity: number, color: string];
  rim: [intensity: number, color: string];
  environmentIntensity: number;
  /** Base colour of the environment cube: metals reflect it everywhere the panels do not reach, so it sets their mid-tone. */
  surround: string;
  /** Lightformer strengths: warm key panel, cool fill panel, gold accent ring, top strip. */
  formers: { key: number; fill: number; gold: number; top: number };
};

// Cream pages get soft, warm product-shot light; forest pages need brighter rims and fill so dark materials separate.
const presets: Record<StudioPreset, Preset> = {
  cream: { ambient: [0.35, "#f3efe4"], key: [1.7, "#fff6e8"], rim: [0.9, "#dfe9f6"], environmentIntensity: 1, surround: "#8a847a", formers: { key: 4, fill: 2.2, gold: 2.6, top: 1.6 } },
  forest: { ambient: [0.3, "#9fbf9a"], key: [1.5, "#fff1dc"], rim: [2, "#d2e8ff"], environmentIntensity: 1.15, surround: "#7a847c", formers: { key: 4.5, fill: 3, gold: 3.4, top: 2.6 } },
};

/** Ambient, key and rim lights plus a procedural environment (no network assets) tuned for brass, ceramic and ink. */
export function StudioLights({ preset = "cream" }: { preset?: StudioPreset }) {
  const p = presets[preset];
  return <>
    <ambientLight intensity={p.ambient[0]} color={p.ambient[1]} />
    <directionalLight position={[-4, 6, 6]} intensity={p.key[0]} color={p.key[1]} />
    <directionalLight position={[5, -1, -5]} intensity={p.rim[0]} color={p.rim[1]} />
    <Environment resolution={128} frames={1} environmentIntensity={p.environmentIntensity}>
      {/* Attaches to the environment's own scene: a lit surround instead of black between the panels. */}
      <color attach="background" args={[p.surround]} />
      <Lightformer form="rect" intensity={p.formers.key} color="#fff4e6" position={[-4, 5, 4]} scale={[5, 3, 1]} target={[0, 0, 0]} />
      <Lightformer form="rect" intensity={p.formers.fill} color="#d6e6f5" position={[6, 1, 2]} scale={[3, 5, 1]} target={[0, 0, 0]} />
      <Lightformer form="ring" intensity={p.formers.gold} color="#e6c27a" position={[0, -4, -3]} scale={4} target={[0, 0, 0]} />
      <Lightformer form="rect" intensity={p.formers.top} color="#ffffff" position={[0, 6, -2]} scale={[8, 1.5, 1]} target={[0, 0, 0]} />
      {/* Dark floor card: keeps the undersides of metal darker than the tops so forms stay grounded. */}
      <Lightformer form="rect" intensity={1} color="#2e2a26" position={[0, -6, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[14, 14, 1]} />
    </Environment>
  </>;
}

export type SoftFloorShadowProps = {
  /** Height of the shadow plane; put it just under the lowest point of the object. */
  y?: number;
  opacity?: number;
  blur?: number;
  /** Side length of the shadow plane in world units. */
  scale?: number;
  /** How far above the plane objects still cast; keep it past the object's top. */
  far?: number;
  color?: THREE.ColorRepresentation;
  /** Infinity follows moving objects; 1 bakes a static shadow once. */
  frames?: number;
  resolution?: number;
};

/** Baked-look contact shadow under the scene; no shadow maps or lights needed. */
export function SoftFloorShadow({ y = -1.6, opacity = 0.35, blur = 2.4, scale = 8, far = 6, color = "#172b2a", frames = Infinity, resolution = 512 }: SoftFloorShadowProps) {
  return <ContactShadows position={[0, y, 0]} opacity={opacity} blur={blur} scale={scale} far={far} color={color} frames={frames} resolution={resolution} />;
}
