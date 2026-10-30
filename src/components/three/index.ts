// Scene files import from this barrel. Page-level code should import lazyScene from "./lazy" directly so the
// three/drei modules stay in the lazily loaded scene chunk.
export { SceneCanvas, useSceneMotion } from "./scene-canvas";
export type { SceneCanvasProps, SceneMotion, ScenePointer } from "./scene-canvas";
export { lazyScene } from "./lazy";
export { EightfoldMark } from "./eightfold";
export type { EightfoldMarkProps, EightfoldVariant } from "./eightfold";
export { SoftFloorShadow, StudioLights } from "./studio-lights";
export type { SoftFloorShadowProps, StudioPreset } from "./studio-lights";
