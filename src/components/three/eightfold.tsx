"use client";

import { RoundedBox } from "@react-three/drei";
import { useFrame, useThree, type ThreeElements } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useSceneMotion } from "./scene-canvas";

export type EightfoldVariant = "glass" | "brass" | "ceramic" | "ink" | "sage";

export type EightfoldMarkProps = Omit<ThreeElements["group"], "ref" | "children"> & {
  /** Diameter of the mark's bounding square in world units (the 48-unit SVG viewBox); bars reach 87.5% of the radius. */
  size?: number;
  variant?: EightfoldVariant;
  /** Overrides the preset's base colour. */
  color?: THREE.ColorRepresentation;
  /** 0 = assembled mark, 1 = bars pushed outward by 40%; changes ease over a few hundred ms. */
  spread?: number;
  /** Continuous rotation in radians per second; 0 under reduced motion. */
  spin?: number;
  /** Axis of the spin: "z" turns the ring in its own plane, "y" is a turntable. */
  spinAxis?: "y" | "z";
  /** Gentle bob and drift; off under reduced motion. */
  float?: boolean;
  /** 0..1 tilt toward the pointer of the enclosing SceneCanvas; off under reduced motion. */
  parallax?: number;
  /** Called once, after the first animation frame following mount. */
  onReady?: () => void;
};

// Brand geometry from src/components/brand.tsx, relative to the mark's half-size (24 of the 48 viewBox):
// bar 6x15 with rx 3, centred 13.5 above the origin, repeated every 45 degrees.
const BAR = { width: 6 / 24, length: 15 / 24, offset: 13.5 / 24 };
// Depth just over the width keeps RoundedBox's extrusion non-degenerate while the ends stay fully round.
const DEPTH_RATIO = 1.1;
const SPREAD_TRAVEL = 0.4;
const BAR_COUNT = 8;
// Resting three-quarter pose: top leans away, right side recedes, so the bars read as solid objects.
const TILT = { x: -0.36, y: 0.34 };
const PARALLAX_TILT = { x: 0.28, y: 0.36 };

const presets: Record<EightfoldVariant, THREE.MeshPhysicalMaterialParameters> = {
  glass: { color: "#dfe9dc", transmission: 0.9, thickness: 0.6, roughness: 0.08, ior: 1.45, metalness: 0, attenuationColor: "#cfe3cc", attenuationDistance: 1.2, specularIntensity: 1 },
  brass: { color: "#c9a961", metalness: 0.9, roughness: 0.25, clearcoat: 0.6, clearcoatRoughness: 0.2 },
  ceramic: { color: "#f3efe4", metalness: 0, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.2 },
  ink: { color: "#173d2e", metalness: 0, roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.15 },
  sage: { color: "#9fbf9a", metalness: 0, roughness: 0.4, clearcoat: 0.5, clearcoatRoughness: 0.25 },
};

const barAngle = (index: number) => (index * Math.PI * 2) / BAR_COUNT;

export function EightfoldMark({ size = 3, variant = "brass", color, spread = 0, spin = 0.15, spinAxis = "z", float = false, parallax = 0, onReady, ...groupProps }: EightfoldMarkProps) {
  const { reducedMotion, pointer } = useSceneMotion();
  const invalidate = useThree(state => state.invalidate);
  const floatGroup = useRef<THREE.Group>(null);
  const tiltGroup = useRef<THREE.Group>(null);
  const spinGroup = useRef<THREE.Group>(null);
  const bars = useRef<THREE.Mesh[]>([]);
  const elapsed = useRef(0);
  // The eased spread lives outside React so the bars never snap on re-render; initial placement reads it too.
  const spreadCurrent = useRef(spread);
  const onReadyRef = useRef(onReady);

  const half = size / 2;
  const width = BAR.width * half;
  const length = BAR.length * half;
  const depth = width * DEPTH_RATIO;
  const offset = BAR.offset * half;
  const radiusFor = (value: number) => offset * (1 + SPREAD_TRAVEL * value);

  const material = useMemo(() => new THREE.MeshPhysicalMaterial({ ...presets[variant], ...(color !== undefined ? { color } : {}) }), [variant, color]);
  useEffect(() => () => material.dispose(), [material]);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => onReadyRef.current?.());
    return () => cancelAnimationFrame(frame);
  }, []);

  const placeBars = (value: number) => {
    const radius = radiusFor(value);
    bars.current.forEach((bar, index) => {
      const angle = barAngle(index);
      bar.position.set(Math.sin(angle) * radius, Math.cos(angle) * radius, 0);
    });
  };

  // Reduced motion: hold the resting pose and apply spread immediately, then draw one frame (the loop is on demand).
  useLayoutEffect(() => {
    if (!reducedMotion) return;
    tiltGroup.current?.rotation.set(TILT.x, TILT.y, 0);
    spinGroup.current?.rotation.set(0, 0, 0);
    floatGroup.current?.position.set(0, 0, 0);
    spreadCurrent.current = spread;
    placeBars(spread);
    invalidate();
  });

  useFrame((_, delta) => {
    const tilt = tiltGroup.current, spinner = spinGroup.current, floater = floatGroup.current;
    if (reducedMotion || !tilt || !spinner || !floater) return;
    const dt = Math.min(delta, 0.1); // a tab switch must not fast-forward the choreography
    elapsed.current += dt;
    const t = elapsed.current;
    if (spin) spinner.rotation[spinAxis] += spin * dt;
    floater.position.y = float ? Math.sin(t * 1.1) * 0.05 * half : 0;
    const driftX = float ? Math.sin(t * 0.8) * 0.035 : 0;
    const driftY = float ? Math.cos(t * 0.6) * 0.035 : 0;
    const cursor = pointer.current;
    tilt.rotation.x = THREE.MathUtils.damp(tilt.rotation.x, TILT.x + driftX + cursor.y * PARALLAX_TILT.x * parallax, 4, dt);
    tilt.rotation.y = THREE.MathUtils.damp(tilt.rotation.y, TILT.y + driftY - cursor.x * PARALLAX_TILT.y * parallax, 4, dt);
    if (Math.abs(spreadCurrent.current - spread) > 0.0005) {
      spreadCurrent.current = THREE.MathUtils.damp(spreadCurrent.current, spread, 6, dt);
      placeBars(spreadCurrent.current);
    }
  });

  const restingRadius = radiusFor(spreadCurrent.current);
  return <group {...groupProps}>
    <group ref={floatGroup}>
      <group ref={tiltGroup} rotation={[TILT.x, TILT.y, 0]}>
        <group ref={spinGroup}>
          {Array.from({ length: BAR_COUNT }, (_, index) => {
            const angle = barAngle(index);
            return <RoundedBox key={index} ref={mesh => { if (mesh) bars.current[index] = mesh; }} args={[width, length, depth]} radius={width / 2} smoothness={6} position={[Math.sin(angle) * restingRadius, Math.cos(angle) * restingRadius, 0]} rotation={[0, 0, -angle]} material={material} castShadow receiveShadow />;
          })}
        </group>
      </group>
    </group>
  </group>;
}
