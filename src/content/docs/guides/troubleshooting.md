---
title: Troubleshooting
description: Practical fixes for common Supercharger problems, written for technical support learners.
---

Supercharger is a local app with three moving parts: the web UI, the local API
server, and optional Docker sandboxes. You do not need to be an engineer to
debug most issues. Treat it like a support case: identify the symptom, check
the simplest likely cause, then gather the evidence an agent needs if you ask
for help.

## First checks

When something looks wrong, start here:

1. Confirm the app is running from the Supercharger project folder.

   ```bash
   cd Supercharger
   npm run dev
   ```

2. Open the web UI:

   ```text
   http://localhost:4401
   ```

3. If you changed server code, stopped a terminal, or pulled new changes, stop
   the old process with **Ctrl+C** and run the app again:

   ```bash
   npm run dev
   ```

4. Hard refresh the browser. A stale tab can keep showing old UI state after
   the local server has changed.

## What should be running?

This command starts two local services:

```bash
npm run dev
```

| Service | Address | What it does |
|---|---|---|
| Web UI | `http://localhost:4401` | The React app you click through. |
| API server | `http://localhost:4400` | Reads tracks, preps, progress, and starts sandboxes. |

If the web UI loads but content is missing, suspect the API server first.

## Common symptoms

### `node`, `npm`, or `git` command not found

Likely cause: a required setup tool is not installed yet, or the terminal was
opened before the installer finished.

Fix:

1. Install [Node.js LTS](https://nodejs.org/).
2. Install [Git](https://git-scm.com/downloads), or clone the project with
   [GitHub Desktop](https://desktop.github.com/).
3. Close and reopen Terminal.
4. Check again:

   ```bash
   node --version
   npm --version
   git --version
   ```
If the version commands work, return to the
[Quickstart](/Supercharger-docs/introduction/quickstart/).

### The browser says it cannot connect

Likely cause: the app is not running.

Fix:

```bash
npm run dev
```

Leave that terminal open while using Supercharger. Closing it stops the app.

### Port already in use

Likely cause: an old Supercharger process is still running.

Fix:

1. Find the terminal where `npm run dev` is already running.
2. Press **Ctrl+C**.
3. Run the app again:

   ```bash
   npm run dev
   ```

If you cannot find the old terminal, ask your agent:

```text
Find and stop the stale Supercharger processes on ports 4400 and 4401, then restart npm run dev.
```

### A prep exists, but analysis or plan tabs are missing

Likely cause: the GUI only saved the inputs. The agent has not generated the
prep files yet.

Fix:

```text
Generate the prep for preps/<prep-id>/.
```

After generation, the prep folder should contain:

```text
analysis.md
plan.md
interview-prep.md
```

If there are skill gaps, it may also contain:

```text
curriculum.json
track-requests.json
```

### The Plan mentions gap tracks, but Curriculum is empty

Likely causes:

- `curriculum.json` was not written.
- `track-requests.json` was not written.
- The browser is still connected to an old server process.

Checks:

1. In the prep folder, confirm these files exist:

   ```text
   preps/<prep-id>/curriculum.json
   preps/<prep-id>/track-requests.json
   ```

2. If they exist, restart the app:

   ```bash
   # in the terminal running Supercharger
   Ctrl+C
   npm run dev
   ```

3. Refresh:

   ```text
   http://localhost:4401/#/prep/<prep-id>/curriculum
   ```

If the files do not exist, ask your agent:

```text
Read preps/<prep-id>/plan.md and create curriculum.json and track-requests.json for the suggested gap tracks.
```

### Create shows a spinner forever

This is expected until an agent creates the actual track folder.

The **Create** button records the request in `track-requests.json`; it does
not secretly launch Codex, Claude Code, or Gemini. That is intentional:
Supercharger stays provider-neutral and inspectable.

Ask your agent:

```text
Create the requested tracks marked creating in preps/<prep-id>/track-requests.json.
Follow SPEC.md and include createdBy and sourcePrep in each track.yaml.
```

When the agent creates `tracks/<track-id>/track.yaml`, the Curriculum button
changes from waiting to **Start**.

### A track was created, but it does not appear

Likely causes:

- The track folder is missing `track.yaml`.
- `track.yaml` has invalid YAML.
- The app needs a refresh.

Ask your agent:

```text
Validate tracks/<track-id>/track.yaml against SPEC.md and fix any YAML or lesson-list problems.
```

Then refresh the app.

### Start environment fails

Likely causes:

- Docker is not running.
- The sandbox image failed to build.
- The lesson's Dockerfile or check script has a problem.

Fix:

1. Start Docker Desktop or OrbStack.
2. Try **Start environment** again.
3. If it still fails, copy the error message and ask your agent:

   ```text
   Debug the sandbox for tracks/<track-id>/<lesson-id>/. The Start environment button failed with this error: <paste error>.
   ```

### Check my work fails

This is usually the lesson doing its job. Read the checkpoint name and hint.
Support work often feels like this: you do not need to know everything, but
you do need to read the evidence carefully.

If the hint seems wrong or impossible, ask your agent:

```text
Review the check script for tracks/<track-id>/<lesson-id>/sandbox/check. Is the failure due to my work or a broken checkpoint?
```

### Progress looks wrong

Progress is stored locally in `progress.json`. If lessons appear incomplete
after you passed them, check whether you are running a different copy of the
repo or whether `progress.json` changed.

Do not delete `progress.json` unless you intentionally want to reset progress.

## What to paste when asking an agent for help

Good support reports are specific. When asking an agent to debug Supercharger,
include:

- The URL you were on.
- What you clicked.
- What you expected.
- What happened instead.
- Any visible error message.
- The prep or track id, such as `product-support-specialist` or
  `sql-fundamentals`.
- Whether `npm run dev` is currently running.

Template:

```text
I am using Supercharger at <url>.
I clicked <button/link>.
I expected <expected result>.
Instead I saw <actual result/error>.
The relevant prep/track is <id>.
Please inspect the repo and fix the issue without touching progress.json.
```

## Mental model

Most Supercharger issues fit one of four buckets:

| Bucket | Plain-English meaning |
|---|---|
| App not running | The local services are stopped or stale. |
| Content missing | The agent has not written the expected markdown/JSON files yet. |
| Content invalid | A markdown, YAML, or JSON file exists but does not match the spec. |
| Sandbox issue | Docker or the lesson's container/check script needs attention. |

That is the same troubleshooting pattern you use in technical support:
separate the surface symptom from the system underneath, gather evidence, and
fix the smallest confirmed cause first.
