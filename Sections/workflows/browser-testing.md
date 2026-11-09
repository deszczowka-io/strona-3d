---
name: browser-testing
description: Phase for verifying real browser behavior. qa-engineer runs chrome-devtools-mcp tests against the built site.
---

# Browser Testing Workflow

## Objective
Verify the site works in real browsers: no errors, correct layout, acceptable performance.

## Steps

### 1. Serve the site
Run the dev server or build (`npm run dev` / `npm run build` + serve).

### 2. Test matrix
Target viewports/devices:
- Mobile (~375px)
- Tablet (~768px)
- Desktop (~1200px+)

### 3. Checks per page
- `take_snapshot` — a11y tree, structure.
- `take_screenshot` — visual evidence.
- `evaluate_script` — console errors, JS exceptions, WebGL context status.
- Network — failed requests, 404s.
- Lighthouse — performance, accessibility, best practices scores.

### 4. 3D-specific checks
- WebGL context available (or fallback shown).
- No shader compilation errors.
- Canvas resizes on viewport change.

### 5. Report
qa-engineer writes `qa-report.md`: pass/fail per check, screenshots, console errors, Lighthouse scores, bugs.

## Output
`qa-report.md` + `bugs.md`.

## Exit criteria
Zero critical bugs; accessibility basics pass; performance budget met; visual review approved.
