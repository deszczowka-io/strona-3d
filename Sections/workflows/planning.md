---
name: planning
description: Phase 2 of orchestration. Orchestrator converts the brief into an ordered implementation plan with owners, acceptance criteria, and parallelization hints.
---

# Planning Workflow

## Objective
Produce a tracked implementation plan: deliverables, owners, acceptance criteria, dependencies, and what can run in parallel.

## Steps

### 1. Read the brief
Load `brief.md` from project-discovery.

### 2. Decompose into deliverables
Split the site into work packages:
- Creative direction (creative-director)
- Visual system + layout specs (ui-ux-designer)
- Frontend implementation (frontend-engineer)
- 3D scene (threejs-engineer)
- Shaders (shader-engineer)
- Motion/animation (animation-engineer)
- Backend (backend-engineer — only if required)
- Performance budget + audit (performance-engineer)
- QA + visual review (qa-engineer)

### 3. Assign owners and acceptance criteria
Each deliverable gets:
- Owner agent
- Acceptance criteria (verifiable)
- Dependencies (what must finish first)
- Parallelization flag (can it run alongside other work?)

### 4. Sequence
Order respecting dependencies:
1. project-discovery (brief)
2. creative-director → visual system
3. ui-ux-designer → layout/component specs (depends on visual system)
4. frontend-engineer + threejs-engineer (depend on specs; can run in parallel once specs exist)
5. shader-engineer (depends on threejs scene context)
6. animation-engineer (depends on mounted components + scene)
7. backend-engineer (only if required; parallel with frontend)
8. performance-engineer (budget up front; audit at end)
9. qa-engineer (browser tests + visual review; last)

### 5. Define the performance budget
performance-engineer sets targets before building begins (FPS, draw calls, weight, Lighthouse).

## Output
`plan.md` — ordered deliverables table with owner, criteria, dependencies, parallel flags.

## Exit criteria
Every deliverable has an owner and verifiable acceptance criteria; the critical path is clear.
