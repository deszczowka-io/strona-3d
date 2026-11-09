---
name: 3d-development
description: Phase for building the 3D layer: stack selection, scene setup, assets, shaders, integration, and performance verification.
---

# 3D Development Workflow

## Objective
Produce a performant, visually-aligned 3D scene mounted in the site.

## Steps

### 1. Stack decision (threejs-architect)
Choose vanilla Three.js vs React Three Fiber based on the brief. Default R3F + drei for component-driven sites; vanilla Three.js for one-off cinematic experiences.

### 2. Scene setup (threejs-engineer)
- Canvas, renderer, camera, scene graph.
- Lighting + environment per creative-director mood.
- Materials (standard + custom from shader-engineer).

### 3. Assets (asset-pipeline-engineer)
- Optimize glTF/GLB (Draco/meshopt), textures (KTX2/WebP).
- Deliver web-ready assets to threejs-engineer.

### 4. Shaders (shader-engineer)
- Custom GLSL where standard materials fall short.
- Fallback standard material + perf cost documented.

### 5. Mount + integrate (frontend-engineer + threejs-engineer)
- Mount canvas, handle resize, DOM overlay, fallback content.

### 6. Verify (performance-engineer + qa-engineer)
- Draw calls, frame time, asset weight within budget.
- WebGL fallback on unsupported devices.

## Output
- Mounted 3D scene in the site.
- `scene-integration.md`.
- Performance numbers within budget.

## Exit criteria
Scene renders without errors, within draw-call/weight budget, with fallback.
