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
[Slash commands](/Supercharger-docs/guides/slash-commands/)).

Useful qualifiers:

- **Target the role.** *"…for a TSE role at a SaaS company"* gets you
  log-grepping scenario tickets instead of generic syntax drills.
- **Set the level.** *"Assume I know X, skip Y."*
- **Name the interview.** *"I have a live screen that includes a debugging
  exercise"* biases the track toward timed, closed-book practice.

## Requesting a track from the app

You don't need an open agent session to *plan* a track. The home screen's
**Add track** button records a standalone request — title, why, confidence
level — in `track-requests.json` at the repo root, not tied to any job prep.
It appears as a dashed card among your tracks; click **Create** when you're
ready and paste the prompt it shows into your agent. The card becomes a
normal track the moment the agent writes the folder (`/next-track` also picks
these up).

The home screen also helps you navigate a growing library:

- A **sort** control orders tracks by length (shortest/longest first),
  completion (closest to finished / least started), or title — the choice
  persists across sessions.
- Tracks referenced by a job prep carry **prep tags**, so you can tell at a
  glance which tracks belong to which prep and which are standalone.

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
6. **No unexplained tools.** A tool a lesson uses but doesn't teach comes
   with a one-line survival hint at first mention (how to save and exit the
   editor, what flag includes headers); links go only to official references
   and only for concept-sized topics.

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

## Auditing and deleting tracks

`/audit-track <id>` re-checks an existing track against the quality bar
without editing it — useful after generating with a different assistant or
before sharing a track.

To remove a track, use the **✕** button on its card on the home page (it
asks for confirmation, then deletes the track folder from disk), or just
delete `tracks/<id>/` yourself. Your `progress.json` is never touched, so
regenerating the same track id later restores your completion state.
