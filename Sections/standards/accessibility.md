# Accessibility Standards

## Baseline (never waived without explicit user decision)
- Semantic HTML (headings, landmarks, buttons, links).
- Focus visible and manageable (keyboard-navigable).
- Color contrast ≥ 4.5:1 normal text, ≥ 3:1 large text, ≥ 3:1 UI components.
- Touch targets ≥ 44×44px.
- `prefers-reduced-motion` respected (motion disabled or static equivalent).
- Alternative text / fallback for 3D content (canvas has fallback content, ARIA labels where meaningful).
- Skip to content / logical tab order.

## Testing
qa-engineer audits via chrome-devtools-mcp a11y snapshot + keyboard-only navigation.

## 3D-specific
- Canvas fallback content for devices without WebGL.
- Reduced-motion disables scroll jacking and 3D camera animation.
- Keyboard can reach all interactive DOM elements overlaid on canvas.
