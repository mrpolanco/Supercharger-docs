---
title: Content spec
description: The format contract for tracks, lessons, quizzes, sandboxes, and preps.
---

This page summarizes `SPEC.md` — the contract between content and app.
Content is plain markdown/YAML with **zero references to the runtime**, so
everything ports unchanged to any future implementation.

## Track layout

```
tracks/<track-id>/
├── track.yaml            # title, description, ordered lesson list
├── <lesson-id>/
│   ├── lesson.md         # frontmatter (title) + GFM body
│   └── sandbox/          # optional — Dockerfile presence enables the terminal
│       ├── Dockerfile
│       └── …             # seed data, scripts
├── interview-prep.md     # recommended
└── resources.md          # recommended
```

## Quiz blocks

A fenced code block with language `quiz` containing **valid JSON**:

````markdown
```quiz
{ "questions": [
  { "q": "What does WHERE filter?",
    "options": ["Rows before grouping", "Groups after aggregation"],
    "answer": 0,
    "explain": "WHERE filters rows; HAVING filters groups." }
] }
```
````

`answer` is the zero-based index of the correct option.

## Sandboxes

The runner builds the lesson's `sandbox/` directory, runs it with 512 MB / 1
CPU limits, and attaches the terminal via `bash -l` in `/work`. Images must
include `bash`, create `/work`, and provide an executable `check` on `PATH`.

### The check contract

`check` prints JSON to stdout:

```json
{ "checkpoints": [
  { "name": "Table orders_clean exists", "pass": true },
  { "name": "Query saved to /work/answer.sql", "pass": false,
    "hint": "Save your final query in /work/answer.sql." }
] }
```

All validation logic runs inside the container; the lesson auto-completes
when every checkpoint passes.

## Preps

```
preps/<prep-id>/
├── job-posting.md        # written by the app
├── analysis.md           # requirements → skills; inferred items flagged
├── plan.md               # ordered study plan linking tracks/lessons
└── interview-prep.md     # role-specific questions and talking points
```

Any `.md` files in a prep render as tabs in the app.

## Progress

`progress.json` at the repo root holds lesson completion and quiz state. It
is personal data: content generation and app updates must never modify it.
