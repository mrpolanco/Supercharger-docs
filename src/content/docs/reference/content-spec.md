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
├── track.yaml            # title, description, optional provenance, ordered lesson list
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
├── resume.md             # optional, written by the app
├── analysis.md           # requirements → skills; inferred items flagged
├── plan.md               # ordered study plan linking tracks/lessons
├── interview-prep.md     # role-specific questions and talking points
├── curriculum.json       # optional ordered curriculum for the prep UI
├── onboarding-requests.json # optional product-doc onboarding requests
├── onboarding/<id>/source.md # optional pasted docs/excerpts
└── track-requests.json   # optional requested tracks for agent handoff
```

Any `.md` files in a prep render as tabs in the app. `curriculum.json` renders
as the Curriculum tab when present.

### Curriculum

`curriculum.json` defines the best study order across existing tracks and
requested gap tracks:

```json
[
  { "id": "sql-fundamentals", "kind": "existing", "level": "beginner", "order": 1 },
  { "id": "readme-product-onboarding", "kind": "docs-onboarding", "level": "beginner", "order": 2 },
  { "id": "api-debugging-ai-support", "kind": "requested", "level": "intermediate", "order": 3 }
]
```

The app treats `tracks/<id>/track.yaml` as the source of truth for whether a
track is ready. If the folder exists, the Curriculum tab shows **Start** and
lesson progress. If it does not, the item remains a request.

The app can reorder `curriculum.json` when the learner moves tracks in the
Curriculum tab. Agents should preserve intentional ordering unless asked to
optimize the sequence.

### Product docs onboarding

`onboarding-requests.json` stores approved docs sources for product-specific
practice:

```json
[
  {
    "id": "readme-product-onboarding",
    "title": "ReadMe Product Onboarding",
    "kind": "docs-onboarding",
    "goal": "support-product",
    "level": "beginner",
    "docsUrl": "https://docs.example.com",
    "sourcePath": "onboarding/readme-product-onboarding/source.md",
    "notes": "Focus on API references, auth setup, and common support issues.",
    "status": "suggested",
    "createdBy": "User"
  }
]
```

Docs onboarding should create operational fluency, not a summary. Expected
outputs include product map, glossary, relevant workflows, common failure
modes, mock support tickets, customer reply practice, escalation-writing
practice, final readiness assessment, and suggested tracks only for remaining
gaps.

Agents must use only approved source docs and flag assumptions when they infer
behavior not directly supported by those sources.

### Track requests

`track-requests.json` gives agents and the GUI a machine-readable creation
queue:

```json
[
  {
    "id": "api-debugging-ai-support",
    "title": "API Debugging for AI Product Support",
    "level": "intermediate",
    "depth": "standard",
    "priority": "high",
    "reason": "The role emphasizes customer API debugging and command-line reproduction.",
    "status": "suggested",
    "createdBy": "Codex"
  }
]
```

The app may update `status` to `creating` or `modify-requested`. An external
agent reads that state, creates or revises the track, and records provenance in
the track's `track.yaml`, for example:

```yaml
title: API Debugging for AI Product Support
description: Reproduce customer API issues with curl, request IDs, auth headers, and escalation notes.
level: intermediate
depth: standard
createdBy: Codex
sourcePrep: product-support-specialist
lessons:
  - 01-reading-api-docs
  - 02-auth-header-mistakes
```

### Learner level and depth

Tracks and requests should set `level`:

| Level | Use when |
|---|---|
| `beginner` | The learner has job context but does not yet know the tool, acronyms, or workflow. Define jargon before using it. |
| `intermediate` | The learner knows the basics and needs realistic support-ticket practice. |
| `advanced` | The learner is ready for edge cases, tradeoffs, and harder closed-book screens. |

Use `depth` to set the bar:

| Depth | Typical shape |
|---|---|
| `primer` | 4-6 lessons for a compact foundation. |
| `standard` | 6-8 lessons for most job-ready tracks. |
| `deep-dive` | 8-10 lessons for advanced or broad topics. |

Six lessons is a reference pattern, not a rule. Do not pad a narrow topic, and
do not compress a broad beginner topic so much that it starts using unexplained
jargon.

## Progress

`progress.json` at the repo root holds lesson completion and quiz state. It
is personal data: content generation and app updates must never modify it.
