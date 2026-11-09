---
name: gsap-animation
description: Playbook for GSAP, ScrollTrigger, Lenis smooth scroll, camera choreography, and scroll-linked 3D/DOM animation.
---

# GSAP Animation Skill

## Purpose
Implement motion and interaction: entrance sequences, scroll-driven animation, camera choreography, and 3D-to-scroll linking. Used by animation-engineer.

## Stack
- GSAP core, ScrollTrigger, Flip, ScrollSmoother.
- Lenis smooth scroll (@studio-freight/lenis).
- React Three Fiber `useFrame` for per-frame scene animation.

## Output
- GSAP timelines + ScrollTrigger configs.
- Lenis setup + React/Three.js integration.
- `animation-spec.md` (what animates, when, easing, duration, trigger).
- `scroll-integration.md` (scroll → 3D/DOM state).
- `prefers-reduced-motion` fallback.

## Rules
- Animate transforms/opacity only — never width/height/top/left (layout thrash).
- Scroll-driven 3D state stays in sync with scroll position.
- Reduced motion disables scroll jacking or provides static equivalent.

## Performance
- 60fps target; verify with chrome-devtools / webgl-perf-auditor.
- Avoid GSAP on every frame for many DOM elements; use `useFrame` for 3D.

## Compatibility
Works with any frontend stack; needs a DOM and (for 3D linking) R3F/Three.js.
