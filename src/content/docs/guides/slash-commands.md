---
title: Slash commands
description: Named entry points for generating tracks and preps from your AI coding CLI.
---

Supercharger's common workflows are available as slash commands, so you don't
have to phrase a freeform request and hope the assistant finds `AGENTS.md`.
The commands are thin entry points: the actual contract still lives in
`AGENTS.md` and `SPEC.md`.

## The commands

| Command | What it does |
|---|---|
| `/track <topic> [level]` | Generate a new track. Example: `/track Go beginner` |
| `/prep <id>` | Generate a job prep from `preps/<id>/job-posting.md` (runs the resume gap analysis if `resume.md` exists) |
| `/audit-track <id>` | Check an existing track against the quality bar — read-only, reports findings without editing |
| `/next-track [prep-id]` | Pick the highest-priority pending entry in `track-requests.json` and generate that track |

## Which CLIs are supported?

The prompts themselves are tool-neutral markdown files in `prompts/` in the
Supercharger repo. Wrappers are wired up for:

- **Claude Code** — via `.claude/commands/`. Type `/` in a session to see
  them listed with descriptions.
- **Gemini CLI** — via `.gemini/commands/`. Type `/` to list.
- **Codex and other CLIs** — no per-repo slash-command convention; instead
  say: `Follow the instructions in prompts/track.md: <your topic>`.

Run commands from the Supercharger repo root so relative paths resolve.

## Listing what's available

Typing `/` in Claude Code or Gemini CLI shows the project commands alongside
built-ins. Tool-agnostically, `prompts/README.md` in the repo is the
authoritative index.
