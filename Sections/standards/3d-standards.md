# 3D Standards

## Stack
- Default: React Three Fiber + drei + Three.js.
- Vanilla Three.js for one-off cinematic experiences / no-React apps.
- WebGL2 with WebGPU consideration (`WebGPURenderer`); keep WebGL2 fallback in mind.

## Performance budget (default, adjustable per brief)
- 60fps target.
- < 100 draw calls.
- < 5 MB total page weight (3D assets included).
- Lighthouse performance ≥ 90.

## Assets
- glTF/GLB preferred.
- Geometry: Draco + meshopt compression.
- Textures: KTX2 / Basis, WebP fallback.
- LOD via drei `<Detailed>`; instancing via `<Instances>`.

## Scene
- Lighting + environment match creative-director mood.
- On-demand render (`frameloop="demand"`) for static/hero scenes.
- Canvas resize handling + device-rotation handling.
- WebGL fallback (static image or reduced scene) for unsupported devices.

## Shaders
- Document per-shader performance cost.
- Fallback standard material provided.
