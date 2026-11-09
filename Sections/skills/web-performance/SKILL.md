---
name: web-performance
description: Playbook for performance budget, measurement, and optimization across frontend, 3D, and asset loading.
---

# Web Performance Skill

## Purpose
Define, measure, and enforce the performance budget. Used by performance-engineer.

## Default budget (adjust per brief)
- 60fps target frame rate.
- < 100 draw calls (3D).
- < 5 MB total page weight.
- Lighthouse performance ≥ 90.
- LCP < 2.5s, INP < 200ms, CLS < 0.1.

## Measurement
- Lighthouse (chrome-devtools-mcp).
- Chrome DevTools Performance trace (frame time, jank).
- WebGL draw calls, texture memory.
- Bundle size analysis.

## Optimization levers
- 3D: Draco/meshopt geometry, KTX2/WebP textures, instancing, LOD (`<Detailed>`), on-demand render.
- Frontend: code splitting, lazy imports, font loading, tree shaking.
- Loading: preloader, progressive assets, Suspense boundaries.
- Memory: dispose geometries/textures, cleanup on unmount.

## Output
- `performance-budget.md` — targets.
- `performance-audit.md` — measured values + owners for gaps.
- `mobile-performance.md` — low-end fallback.

## Compatibility
Requires a browser (chrome-devtools-mcp) and a built/servable site.
