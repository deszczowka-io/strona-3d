---
name: frontend-architecture
description: Playbook for frontend stack choice, project structure, build tooling, state, routing, and dependency discipline.
---

# Frontend Architecture Skill

## Purpose
Decide the frontend stack and structure before implementation. Used by frontend-engineer + orchestrator.

## Stack options
- **Vite + React + TypeScript** (default) — fastest for pure 3D/creative experiences, SPA.
- **Next.js (App Router)** — when SEO/SSR/marketing pages matter, 3D as islands.

## Output
- Folder structure (components, scenes, shaders, hooks, lib, assets).
- Build tooling + dev script.
- State strategy (local first; zustand only if justified).
- Routing setup.
- Dependency discipline: no new lib without justification.

## Integration points
- `<Canvas>` mounted by frontend-engineer; scene authored by threejs-engineer.
- Motion (GSAP/Lenis) wired by frontend-engineer; authored by animation-engineer.

## Compatibility
Node.js + npm/pnpm. Requires a bundler (Vite/Next.js/turbopack).
