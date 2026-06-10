---
title: What is Supercharger?
description: Local-first technical enablement for support engineers.
---

Supercharger is an open-source, local-first technical enablement tool for
support engineers. It helps turn skill gaps, role requirements, and recurring
support issues into structured learning tracks with realistic practice tickets,
quizzes, Docker sandboxes, and checkpoint validation.

Support teams are constantly learning: new products, new APIs, new failure
modes, new customer environments. Supercharger turns that learning into
repeatable tracks and validated practice instead of scattered notes and
passive reading.

The twist: **Supercharger doesn't come with a course catalog. It comes with a
contract.** Your AI coding assistant (Claude Code, Codex, Gemini CLI — any
agent that can read a repo) generates the curriculum on demand, following a
documented format (`SPEC.md`) and quality bar (`AGENTS.md`). The app renders
what the agent writes: guided markdown lessons with inline quizzes, an
integrated terminal into per-lesson Docker sandboxes, and automated
checkpoint validation.

## The core loop

1. **Ask for what you need.** Your assistant writes plain markdown/YAML
   content folders.

   ```text
   Generate a track on Go for technical support roles.
   ```

   ```text
   Generate the prep for preps/<prep-id>/.
   ```
2. **Learn in the app.** Concept lessons explain the *why* interviewers probe,
   end with "explain it out loud" prompts, and quiz for understanding.
   Hands-on lessons are framed as realistic support tickets in deliberately
   messy sandboxed environments.
3. **Prove it.** "Check my work" runs validation inside the sandbox. Every
   track ends with a closed-book assessment that mirrors a real screen — pass
   it cold and you can honestly claim the skill in an interview.

## "Prepare me for this job"

Paste a job posting into the app, then ask your assistant to generate the
prep. You get:

- **`analysis.md`** — requirements broken into skills, with inferred
  requirements explicitly flagged rather than silently guessed.
- **`plan.md`** — an ordered study plan mapping requirements to tracks and
  lessons, with skim-vs-drill guidance. Missing skills get new tracks.
- **`interview-prep.md`** — role-specific: likely screen questions, model
  answers, the follow-up chains interviewers chain on, and talking points
  derived from reading between the lines of the posting.

## What it is not

- **Not a SaaS.** Nothing leaves your machine. No accounts, waitlists, or
  telemetry.
- **Not a content marketplace.** Tracks are folders in your repo. Share them
  as you would any code.
- **Not a replacement for production experience.** A track gets you to solid
  practitioner depth in the common 80% — exactly what screens and onboarding
  often test. The long tail comes from doing the job.
- **Not blind trust in generated content.** Generated tracks still require
  human review, especially before sharing with a team.
- **Not a hardened untrusted-code platform.** Sandboxes are local and
  disposable, but they are intended for content you control or have reviewed.

## Why this design

Supercharger treats the LLM as a **content compiler with a verifiable output
contract**. The spec constrains the format, the quality bar constrains the
substance, and sandbox check scripts validate that exercises actually work.

The assistant can generate a lesson, but the learner still has to solve the
ticket and pass the checks. That is the important line: Supercharger emphasizes
verified practice over generated confidence.
