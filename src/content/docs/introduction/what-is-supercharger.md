---
title: What is Supercharger?
description: An open-source learning platform where your AI coding assistant is the curriculum engine.
---

Supercharger is an open-source, local-first learning platform for building
**job-ready technical skills** — the kind tested in interview screens and used
on day one: SQL, API debugging, Bash, OAuth/SSO, SSL troubleshooting, a new
language, whatever the role demands.

The twist: **Supercharger doesn't come with a course catalog. It comes with a
contract.** Your AI coding assistant (Claude Code, Codex, Gemini CLI — any
agent that can read a repo) generates the curriculum on demand, following a
documented format (`SPEC.md`) and quality bar (`AGENTS.md`). The app renders
what the agent writes: guided markdown lessons with inline quizzes, an
integrated terminal into per-lesson Docker sandboxes, and automated
checkpoint validation.

## The core loop

1. **Ask for what you need.** *"Generate a track on Go."* *"Prep me for this
   job posting."* Your assistant writes plain markdown/YAML content folders.
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
- **Not magic.** A track gets you to solid practitioner depth in the common
  80% — exactly what screens test. The long tail comes from doing the job;
  Supercharger's goal is the foundation and vocabulary to expand fast.

## Why this design

Supercharger treats the LLM as a **content compiler with a verifiable output
contract**: the spec constrains the format, the quality bar constrains the
substance, and sandbox check scripts validate that exercises actually work.
The app stays small and frozen; the content grows. That separation is also
what makes every track portable — plain markdown that would survive a total
rewrite of the app.
