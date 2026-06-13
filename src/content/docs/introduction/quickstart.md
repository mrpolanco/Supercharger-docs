---
title: Quickstart
description: Clone, install, run, and generate your first track.
---

## Prerequisites

Install these first:

| Component | Why you need it | Easiest install link |
|---|---|---|
| Node.js 20 or newer | Runs the local Supercharger app. | [Download Node.js LTS](https://nodejs.org/) |
| Git | Downloads the Supercharger project. | [Download Git](https://git-scm.com/downloads) or use [GitHub Desktop](https://desktop.github.com/) |
| Docker Desktop or OrbStack | Runs hands-on terminal lessons. Theory lessons work without it. | [Docker Desktop](https://www.docker.com/products/docker-desktop/) or [OrbStack for Mac](https://orbstack.dev/) |
| AI coding assistant CLI | Generates tracks and job-prep files. | Use the assistant you already have, such as Codex, Claude Code, or Gemini CLI. |

If you are new to this, install **Node.js LTS**, **GitHub Desktop**, and
**Docker Desktop**. Open Docker Desktop once before starting any lesson with a
terminal.

### What counts as an "AI coding assistant"?

The assistant must be **agentic**: able to read and write files on your
machine. Tracks and preps are folders of markdown/YAML that the assistant
creates directly in the cloned project - so a chat website (chatgpt.com,
claude.ai, gemini.google.com) **will not work** by itself, because it can't
see or edit your files. The prompts Supercharger shows you are meant to be
pasted into an agent, not a chat box.

What works:

- **Agent CLIs** - Claude Code, Codex CLI, Gemini CLI, and similar. Open a
  terminal **in the cloned Supercharger folder**, launch the agent, and paste
  the prompt. The agent finds `AGENTS.md` and `SPEC.md` on its own.
- **IDE agents** (Cursor, VS Code with an agent mode, etc.) - open the
  Supercharger folder as the workspace first.
- **Desktop apps with file access** (e.g. Claude Desktop pointed at the
  folder) - only if the app can actually create and edit files there.

Whatever you use, the rule is the same: the assistant must be *running in or
pointed at the Supercharger project folder* before you paste the prompt. If
your assistant can't access the folder, the generated content has nowhere to
land.

Check that Node is installed:

```bash
node --version
npm --version
```

If those commands print version numbers, you are ready to continue.

## Install and run

Download the project:

```bash
git clone https://github.com/mrpolanco/Supercharger
cd Supercharger
```

If you used GitHub Desktop instead, clone `mrpolanco/Supercharger`, then open
the cloned folder in Terminal.

Install dependencies and start Supercharger:

```bash
npm install
npm run dev
```

Leave that terminal open while using Supercharger. Closing it stops the app.

Open:

```text
http://localhost:4401
```

The bundled reference track - *SQL
Fundamentals for Support Engineers* - is ready to use: start with lesson 1
(theory) or jump to lesson 2 and hit **Start environment** for a live Postgres
sandbox.

## If the app will not start

Supercharger uses two local ports:

| Port | Used by |
|---|---|
| `4401` | The page you open in the browser. |
| `4400` | The local API the page talks to. |

If you see **port already in use**, an old copy of Supercharger is probably
still running.

Try this first:

1. Look for the old Terminal window running `npm run dev`.
2. Press **Ctrl+C** in that terminal.
3. Start again:

   ```bash
   npm run dev
   ```

If you cannot find the old terminal, ask your assistant:

```text
Find and stop the stale Supercharger processes on ports 4400 and 4401, then restart npm run dev.
```

For more symptoms, use the
[Troubleshooting guide](/guides/troubleshooting/).

## Generate your first track

From the repo root, in your assistant:

```text
Generate a track on SSL certificate implementation and troubleshooting.
```

The assistant reads `AGENTS.md` (quality bar) and `SPEC.md` (format), writes
`tracks/ssl-certificates/…`, and the track appears in the app on refresh.

## Prep for a job

1. In the app: **New job prep** → paste the posting → optionally attach a
   resume (saved or pasted) to enable the gap analysis → save.
2. In your assistant:

```text
Generate the prep for preps/<name>/.
```

You'll get the requirements analysis, study plan, and role-specific interview
prep as tabs in the app - plus new tracks for any skills nothing covers yet.

## Day-to-day

- **Check my work** validates sandbox exercises checkpoint-by-checkpoint and
  marks the lesson complete when everything passes.
- **Reset** recreates the sandbox from scratch - experiments are free.
- The **Files** tab next to the terminal lets you browse and edit the
  sandbox's `/work` files in the browser - no `vim` required unless the
  lesson is teaching it.
- The top bar has a **light/dark mode** toggle, an **Other devices** access
  toggle, and a **Stop server** button that shuts everything down and removes
  all sandbox containers.
- **Other devices** is off by default. Turn it on only on a trusted local
  network, then restart Supercharger. Anyone who can reach the app can view
  local tracks and preps, import tracks, and start sandbox exercises.
- Progress lives in `progress.json`; content updates never touch it.

If something does not appear, a button waits forever, or a sandbox fails to
start, use the [Troubleshooting guide](/guides/troubleshooting/).
