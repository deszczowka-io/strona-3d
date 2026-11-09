---
name: project-discovery
description: Phase 1 of orchestration. Orchestrator clarifies the project goal, constraints, and success criteria before any planning.
---

# Project Discovery Workflow

## Objective
Turn a vague user goal into a clarified brief: what the site is about, audience, device floor, creative direction, 3D scope, and success criteria.

## Steps

### 1. Receive the goal
Orchestrator captures the user's statement. If it's a single phrase ("a portfolio site"), treat it as underspecified.

### 2. Clarify ambiguity
Ask the user (concisely):
- What is the site about? (product, portfolio, campaign, brand, portfolio)
- Who is the audience and what is the primary action?
- Device floor (mid-range phone, desktop-only, all devices)?
- 3D scope: hero only, full-site 3D, or no 3D?
- Preferred stack (or leave to architect)?
- Success criteria / launch date?
- Reference designs or brand assets?

**Do not guess subject matter.** If the user hasn't decided, propose options and let them pick.

### 3. Record the brief
Write `brief.md` (location: project root, not in /sections):
- Goal summary
- Audience + primary action
- Device floor
- 3D scope
- Stack preference
- Success criteria
- References / brand
- Open questions (if any)

### 4. Exit criteria
The brief is complete enough that the orchestrator can write a plan without further ambiguity. If not, loop back to step 2.

## Output
A `brief.md` and a go/no-go to proceed to planning.
