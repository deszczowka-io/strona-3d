---
name: react-three-fiber
description: Playbook for React Three Fiber (R3F) + drei: Canvas setup, components, hooks, Suspense, Html overlay, and 3D-in-React integration.
---

# React Three Fiber Skill

## Purpose
Implement 3D scenes as React components using @react-three/fiber and @react-three/drei. Used by threejs-engineer + frontend-engineer.

## Stack
- React, TypeScript.
- @react-three/fiber, @react-three/drei.
- drei helpers: Environment, OrbitControls, Loader, Html, Text, Detailed, useGLTF.

## Output
- `<Canvas>` wrapper + scene components.
- `useFrame` animation loops.
- Suspense boundaries + fallback.
- DOM overlay via `<Html>` / `<Text>`.
- Integration with Lenis/GSAP (animation-engineer).

## Performance
- `frameloop="demand"` for static scenes, continuous for motion.
- Instancing via `<Instances>`, LOD via `<Detailed>`.
- `dpr={[1, 2]}` mobile cap.

## Compatibility
Requires React + Vite/Next.js. Not for vanilla JS.
