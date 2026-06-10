---
title: Architecture
description: How the app, sandbox runner, and content fit together.
---

Supercharger is deliberately small. The design principle: **the content format
and the sandbox runner are the product; the app shell is disposable.**

## Components

```
supercharger/
├── server/    # Node/Express — content APIs + Docker sandbox runner
├── web/       # Vite + React — lesson UI, quizzes, xterm.js terminal
├── tracks/    # content: skill curricula (markdown/YAML)
├── preps/     # content: job preparation packs
├── SPEC.md    # content format contract
└── AGENTS.md  # agent contract: how assistants generate content
```

- **Server (port 4400)** serves tracks/preps/progress as JSON and runs
  sandboxes: `docker build` per lesson, `docker run` with resource caps, a
  pty over WebSocket (`/term`) for the terminal, and `docker exec check` for
  validation.
- **Web (port 4401)** renders markdown lessons, parses `quiz` blocks, and
  embeds xterm.js for sandbox lessons. It proxies all API and WebSocket
  traffic to the server.
- **Content** never references either. An agent generates folders; the app
  picks them up on refresh.

## Boundaries that matter

1. **Content ↔ app:** `SPEC.md` is the only coupling. Any renderer that
   implements the spec can serve the same tracks.
2. **App ↔ runner:** the frontend talks to sandboxes only through the
   server's HTTP/WebSocket API. The runner could be swapped for a remote
   fleet (or hardened multi-tenant infrastructure) without touching content
   or UI.
3. **Validation inside the container:** check scripts run in the sandbox and
   emit structured JSON. Nothing on the host is trusted or modified.

## Security posture

Sandboxes are short-lived containers with memory/CPU limits, removed on
session end. Generated check scripts execute only inside their own
container. The platform itself makes no network calls beyond what your
lessons' containers do.
