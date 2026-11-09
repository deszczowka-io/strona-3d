---
name: iterative-improvement
description: Phase for fixing bugs and iterating until acceptance criteria are met.
---

# Iterative Improvement Workflow

## Objective
Close the gap between current state and acceptance criteria through fix → verify loops.

## Steps

### 1. Triage bugs
qa-engineer lists bugs with severity, repro steps, and owner.

### 2. Assign fixes
Each bug goes to the responsible agent:
- Visual/layout → frontend-engineer or ui-ux-designer
- 3D/WebGL → threejs-engineer or shader-engineer
- Motion → animation-engineer
- Performance → performance-engineer
- Accessibility → frontend-engineer

### 3. Fix + re-test
Owner fixes; qa-engineer re-tests only the affected area (plus regression on related areas).

### 4. Re-review visuals
If visual output changed, loop back to visual-review workflow.

### 5. Acceptance
Orchestrator declares done when:
- All acceptance criteria pass.
- Zero critical bugs.
- Visual review approved (or waived).
- Performance budget met.

## Output
Fixed code, updated `bugs.md` (resolved), final `qa-report.md`.

## Exit criteria
All acceptance criteria satisfied; orchestrator declares "done".
