---
title: Working through a lesson
description: The lesson UI, sandboxes, and checkpoint validation.
---

## Theory lessons

Rendered markdown with inline quizzes. Quizzes grade instantly with
explanations, and your answers persist in `progress.json`. Concept sections
end with **"Explain it"** prompts — say the answer out loud, in a minute,
as if to an interviewer or customer. This verbal drilling is what turns
knowledge into being *conversant*.

Mark theory lessons complete manually when you're confident.

## Sandbox lessons

Lessons with a terminal pane run against a disposable Docker container built
for that exact lesson — seeded data, broken configs, whatever the scenario
needs.

- **Start environment** builds and launches the container (first run pulls
  the base image; later runs are fast). You get a real `bash` shell that
  opens where the exercise's files live, with `/work` as your scratch
  directory for notes and answers, and `nano`/`vim` available.
- **Reset** destroys the container and starts a fresh one — experiments are
  free, and a wrecked environment costs nothing.
- **Check my work** runs the lesson's validation script *inside* the
  container and reports pass/fail per checkpoint, with hints on failure.
  When every checkpoint passes, the lesson is marked complete automatically.

Sandboxes are resource-capped (512 MB / 1 CPU), removed on exit, and never
touch your host machine.

## Scenario tickets and finals

Scenario lessons are framed as support tickets: reproduce, diagnose, fix,
document — the same arc as the real job, and the source of concrete war
stories for behavioral interview questions.

The final assessment in each track is **closed book**: no hints, schema
exploration is part of the test. Treat it like a live screen — if you pass it
cold, you've earned the claim.
