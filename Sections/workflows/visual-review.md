---
name: visual-review
description: Phase for creative sign-off. QA requests review from creative-director; orchestrator does not integrate unreviewed creative work.
---

# Visual Review Workflow

## Objective
Get creative-director approval on the visual output before the site is considered complete.

## Steps

### 1. QA captures evidence
qa-engineer takes screenshots/snapshots of built pages (chrome-devtools-mcp) and notes deviations from the design spec.

### 2. Request review
qa-engineer sends evidence to creative-director with:
- Screenshots of each page/state.
- Comparison against `visual-system.md` and `layout-spec.md`.
- Specific questions where alignment is ambiguous.

### 3. Creative-director decides
- Approve: visual output matches the direction.
- Request changes: specific, actionable feedback (color, composition, lighting, motion).
- Reject: direction needs rework; loop back to creative-director.

### 4. Apply changes
Responsible agent (frontend/threejs/shader/animation) implements feedback.

### 5. Re-review
Loop until creative-director approves or the user explicitly waives review.

## Output
- `visual-review.md` — approval record or change log.
- Screenshots as evidence.

## Exit criteria
Creative-director sign-off recorded, or explicit user waiver.
