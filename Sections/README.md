# /sections — Autonomous Creative Web Development Environment

A reusable, project-agnostic agentic workflow for building high-end creative websites
(Three.js, React Three Fiber, GLSL shaders, GSAP, smooth scroll, responsive design).

## Purpose

This directory holds the **agent definitions, skills, workflows, and standards** that power
an autonomous website development team. It is intentionally **project-agnostic** — it does not
contain a website. When the user provides a project goal, the orchestrator reads this directory,
delegates to specialized agents, and runs the orchestration workflow.

## How to activate

There is no build step. These are markdown definitions consumed by Claude Code agents and skills.
To run the orchestration, point the orchestrator agent at `/sections` and give it the project goal.

```
1. User states the goal (e.g. "a cinematic product site with WebGL hero").
2. Orchestrator analyzes requirements → creates an implementation plan.
3. Work decomposes to specialist agents (frontend, 3D, shaders, motion, QA, perf).
4. Independent work runs in parallel; integration follows.
5. Browser-based tests + visual review gate acceptance.
6. Iterate until criteria are met.
```

## Directory map

| Path | Purpose |
|------|---------|
| `agents/` | Specialist agent definitions (orchestrator + domain experts). |
| `skills/` | Reusable capability playbooks (design, 3D, shaders, motion, perf, …). |
| `workflows/` | End-to-end orchestration procedures (discovery → acceptance). |
| `standards/` | Coding, design, 3D, and accessibility baselines. |

## Model compatibility

Primary model: **NVIDIA Nemotron** via an OpenAI-compatible/Anthropic-compatible API proxy
(`ANTHROPIC_BASE_URL=http://homelab:20128/v1`). Agents therefore use **explicit, direct
instructions** over complex prompting tricks, keep context focused, and make every task
independently verifiable. Do not assume Claude-specific features work with the proxy.

## Missing dependencies & tools

See the Final Report section of the initialization output for the exact list and activation commands.