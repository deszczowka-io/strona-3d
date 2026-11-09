---
name: webgl-shaders
description: Playbook for GLSL shaders, custom materials, ShaderMaterial, drei shaderMaterial, and post-processing shaders.
---

# WebGL Shaders Skill

## Purpose
Write GLSL vertex/fragment shaders for visual effects beyond standard materials. Used by shader-engineer.

## Stack
- GLSL ES 1.00 / 3.00 (WebGL1/WebGL2).
- Three.js ShaderMaterial, drei `shaderMaterial`, `onBeforeCompile`.
- TSL / node materials (WebGPU) when stack targets WebGPU.

## Output
- Shader files (vertex.glsl, fragment.glsl) or inline shaderMaterial.
- Uniform definitions + update logic from JS.
- Fallback standard material for low-end devices.
- `shader-integration.md` (mounting, uniforms, perf cost).

## Techniques
- Noise/FBM, fresnel, iridescence, dissolve, displacement, gradients/aurora.
- Custom post-processing passes (bloom, DOF, color grading, grain).

## Performance
- Fragment instruction budget, precision qualifiers, texture lookup count.
- Document cost per shader; provide fallback.

## Compatibility
WebGL/WebGPU. Shaders are stack-agnostic once material is mounted.
