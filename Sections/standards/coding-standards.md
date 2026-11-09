# Coding Standards

Applies to all implementation agents. Stack-agnostic where possible.

## General
- **No speculative code.** Don't build features "for later." Build what the brief requires.
- **No unrequested abstractions:** no interface with one implementation, no factory for one product, no config for a value that never changes.
- **Fewest files, shortest working diff.** Small change in the right place beats a large change in the wrong place.
- **Boring over clever.** Clever code is what someone decodes at 3am.
- **Mark deliberate simplifications** with a `ponytail:` comment naming the ceiling and upgrade path.

## TypeScript / JavaScript
- Strict TypeScript (`noImplicitAny`, `strictNullChecks`).
- Prefer function components + hooks (React).
- No `any` without a `// ponytail:` justification.
- Named exports preferred; default exports only for page/route components.

## CSS / Styling
- Mobile-first media queries or container queries.
- Animate transforms/opacity only — never layout properties (width/height/top/left).
- Respect `prefers-reduced-motion`.
- Touch targets ≥ 44px.

## Three.js / R3F
- `frameloop="demand"` for static scenes; continuous only for constant motion.
- `dpr={[1, 2]}` mobile cap.
- Dispose geometries/textures on unmount; no leaks.
- Instancing (`<Instances>`) for repeated meshes; LOD (`<Detailed>`) for large models.

## Shaders
- Document fragment cost (instructions, texture lookups) per shader.
- Provide a standard-material fallback.

## Error handling
- Validate input at trust boundaries (forms, APIs).
- Error handling that prevents data loss; never swallow errors silently.
- WebGL: check context availability, provide fallback.

## Accessibility (baseline)
- Semantic HTML.
- Focus visible/manageable.
- Color contrast ≥ 4.5:1 (normal text), ≥ 3:1 (large).
- Keyboard-navigable.
- `prefers-reduced-motion` respected.
