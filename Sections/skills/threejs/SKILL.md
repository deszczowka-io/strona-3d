---
name: threejs
description: Playbook for vanilla Three.js scene setup, rendering, cameras, lights, materials, models, and WebGL/WebGPU runtime.
---

# Three.js Skill

## Purpose
Implement and optimize vanilla Three.js 3D scenes. Used by threejs-engineer when not using React Three Fiber.

## Stack
- Three.js (r160+), WebGL2 with WebGPU consideration (`WebGPURenderer`).
- glTF/GLB loading via `GLTFLoader`.
- drei not applicable (R3F only).

## Output
- Scene, camera, renderer, lights, environment.
- Material setup (standard + custom ShaderMaterial from shader-engineer).
- Model loading + disposal.
- `scene-integration.md` for frontend mounting.

## Performance
- Draw-call ceiling, geometry instancing, texture compression (KTX2), LOD.
- On-demand vs. continuous render loop.

## Compatibility
Vanilla JS/TS. Works with Vite, Next.js, or plain HTML. No React required.
