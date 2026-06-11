---
title: Generating a track
description: How to get high-quality skill tracks from your AI assistant.
---

A track is a self-contained skill curriculum: ordered lessons, optional
sandboxes, an interview question bank, tiered resources, and a closed-book
final. You don't write it — your assistant does, against the contract in
`AGENTS.md`.

## The basic ask

```text
Generate a track on Bash scripting for technical support roles.
```

In Claude Code or Gemini CLI you can use the repo's slash command instead:
`/track Bash scripting for technical support roles` (see
[Slash commands](/guides/slash-commands/)).

Useful qualifiers:

- **Target the role.** *"…for a TSE role at a SaaS company"* gets you
  log-grepping scenario tickets instead of generic syntax drills.
- **Set the level.** *"Assume I know X, skip Y."*
- **Name the interview.** *"I have a live screen that includes a debugging
  exercise"* biases the track toward timed, closed-book practice.

## What the quality bar guarantees

`AGENTS.md` requires every generated track to include:

1. **Concept lessons with real depth** — the *why* interviewers probe, ending
   with "explain it out loud" prompts.
2. **Scenario lessons** framed as realistic tickets in deliberately messy
   environments (NULLs, timezones, expired certs).
3. **`interview-prep.md`** — questions with model answers *and the follow-up
   chains* interviewers use.
4. **`resources.md`** — the one book worth buying, the best free resource,
   and what to skip.
5. **A closed-book final assessment** mirroring a real screen.

If a generated track falls short, say so — *"lesson 3 is too shallow, go
deeper on connection pooling"* — and have the assistant revise. The content is
just files; iteration is cheap.

## Sandboxed vs. theory lessons

The assistant decides per lesson. A lesson with a `sandbox/Dockerfile` gets a
terminal pane and a **Check my work** button; the check logic runs entirely
inside the container. Theory lessons render as markdown with inline quizzes
and need no Docker at all.

## Sandbox UX guarantees

The contract requires assistants to *build and run* every sandbox before
shipping it, not just write plausible files:

- The terminal opens where the exercise's files are (sandboxes declare it
  with a `supercharger.workdir` image label; `/work` is the default). The
  only exception is when navigating to the files is itself the skill being
  taught — and then the lesson says where they are.
- Every command shown in the lesson body is verified verbatim from that
  directory, including tool wrappers that shouldn't depend on the current
  directory.
- Where a correct command prints nothing (like `grep` with no match), the
  lesson warns you, so silence isn't mistaken for a broken terminal.
- The check script is verified both ways: a fresh container fails the right
  checkpoints, and the intended solution passes all of them.

If a sandbox still misbehaves, report it like a bug — the fix belongs in the
track, and `/audit-track` checks all of the above.

Use the bundled `tracks/sql-fundamentals/` as the reference for what good
output looks like.
