---
name: responsive-design
description: Playbook for responsive layouts: breakpoints, fluid typography, container queries, mobile-first CSS, and 3D/2D split layouts.
---

# Responsive Design Skill

## Purpose
Ensure layouts work across mobile/tablet/desktop and that 3D canvas degrades gracefully on small/low-end screens. Used by ui-ux-designer + frontend-engineer.

## Breakpoints (default, adjustable)
- Mobile: 375px
- Tablet: 768px
- Desktop: 1200px+

## Output
- Breakpoint table + responsive rules (`layout-spec.md` / `responsive-spec.md`).
- Mobile-first CSS (media queries or container queries).
- 3D canvas adaptive behavior (reduce scene complexity on mobile, static fallback).
- Touch targets ≥ 44px, safe areas.

## Rules
- Mobile-first: write base styles for narrowest, layer up.
- Canvas/DOM split: define which viewport owns the 3D vs. HTML layout.
- Reduced motion respected on all breakpoints.

## Compatibility
Pure CSS. Stack-agnostic.
