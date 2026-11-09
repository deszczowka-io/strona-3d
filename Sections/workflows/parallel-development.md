---
name: parallel-development
description: Phase 3 of orchestration. Run independent agent work in parallel, then integrate.
---

# Parallel Development Workflow

## Objective
Execute independent deliverables concurrently to save wall-clock time, then integrate without conflicts.

## Parallelization matrix

| Can run in parallel | Depends on |
|---------------------|------------|
| creative-director | brief |
| ui-ux-designer | creative-director visual system |
| frontend-engineer | layout specs + visual system |
| threejs-engineer | layout specs + visual system + budget |
| backend-engineer | brief (only if needed) |

## Rules

1. **Sync barrier:** frontend-engineer and threejs-engineer must not build against each other's assumptions. Agree on the canvas/DOM split (mount point, size, z-index) before either writes code.
2. **Shader dependency:** shader-engineer waits on threejs-engineer's scene context.
3. **Animation dependency:** animation-engineer waits on mounted components + scene.
4. **No silent merges:** orchestrator integrates all parallel output and resolves conflicts (e.g. two agents touching the same component file).

## Output
Integrated codebase with all parallel work merged; `integration-notes.md` documenting conflicts and resolutions.

## Exit criteria
All parallel deliverables complete, integrated, and conflict-free.
