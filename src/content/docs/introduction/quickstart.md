---
title: Quickstart
description: Clone, install, run, and generate your first track.
---

## Prerequisites

- **Node 20+**
- **Docker** (Docker Desktop or OrbStack) — required only for lessons with a
  terminal; theory tracks work without it
- An AI coding assistant CLI (Claude Code, Codex, Gemini CLI, …) for
  generating content

## Install and run

```bash
git clone https://github.com/mrpolanco/Supercharger
cd Supercharger
npm install
npm run dev
```

Open **http://localhost:4401**. The bundled reference track — *SQL
Fundamentals for Support Engineers* — is ready to use: start with lesson 1
(theory) or jump to lesson 2 and hit **Start environment** for a live Postgres
sandbox.

## Generate your first track

From the repo root, in your assistant:

```text
Generate a track on SSL certificate implementation and troubleshooting.
```

The assistant reads `AGENTS.md` (quality bar) and `SPEC.md` (format), writes
`tracks/ssl-certificates/…`, and the track appears in the app on refresh.

## Prep for a job

1. In the app: **New job prep** → paste the posting → save.
2. In your assistant:

```text
Generate the prep for preps/<name>/.
```

You'll get the requirements analysis, study plan, and role-specific interview
prep as tabs in the app — plus new tracks for any skills nothing covers yet.

## Day-to-day

- **Check my work** validates sandbox exercises checkpoint-by-checkpoint and
  marks the lesson complete when everything passes.
- **Reset** recreates the sandbox from scratch — experiments are free.
- Progress lives in `progress.json`; content updates never touch it.
