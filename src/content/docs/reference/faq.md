---
title: FAQ
description: Common questions about Supercharger.
---

**Which AI assistants work?**
Any agent CLI that can read repository files and write content — Claude Code,
Codex, Gemini CLI, and similar. `AGENTS.md` is the cross-tool contract;
`CLAUDE.md` simply points to it.

**Does it cost anything to run?**
No. Supercharger has no API keys and makes no model calls — generation happens
through whatever assistant subscription you already have. The app itself is
free, MIT-licensed, and fully local.

**Do I need Docker?**
Only for lessons with a terminal. Theory tracks (and the quiz/interview-prep
portions of every track) work without Docker running.

**How good is generated content, really?**
The agent contract enforces structure (scenario tickets, interview banks,
tiered resources, closed-book finals) and the check scripts verify exercises
actually validate. Substance still varies with the model and your prompt —
iterate: tell the assistant what's shallow and have it revise. The bundled SQL
track is the calibration reference.

**Does Supercharger trust AI-generated lessons?**
No. The assistant writes content against a spec, but sandbox lessons still need
executable checks and human review. The strongest Supercharger tracks are not
"AI said this is correct" artifacts; they are structured practice environments
where the learner has to solve the ticket and pass validation.

**Is this only for interview prep?**
No. Interview prep is the sharpest first use case because job postings provide
clear requirements, but the same structure works for internal support
enablement: reusable runbooks, practice tickets, onboarding tracks, and
technical refreshers for recurring customer issues.

**What is the Curriculum tab?**
It is the ordered study view for a prep. It combines existing tracks and
requested gap tracks, shows lesson completion where a track already exists,
and lets you queue missing tracks for an agent to create. When the track folder
appears on disk, the button changes from a waiting state to **Start**.

**Does the Create button launch an AI agent?**
No. It records the request in `track-requests.json` and marks it `creating`.
Codex, Claude Code, Gemini CLI, or another agent can then read the repo and
create the track. This keeps Supercharger provider-neutral and avoids hiding
credentials or process execution behind a browser button.

**Can I write tracks by hand?**
Yes — a track is just a spec-compliant folder. Hand-written, generated, or
hybrid all render identically.

**Is my data shared anywhere?**
No. No accounts, no telemetry, no network calls from the platform. Job
postings you paste stay in `preps/` on your disk. (Content you ask an
assistant to generate is, of course, processed by that assistant's model.)

**Will updates overwrite my content or progress?**
No. `progress.json` and `preps/` are personal state; tracks you've generated
are yours. Pulling a new app version touches `server/` and `web/` only.

**Why not just ask the assistant questions directly?**
You can — but structured curricula with validated hands-on labs, spaced
drilling, and closed-book assessment is how familiarity becomes interview-
ready competence. Supercharger turns one-off answers into a course you can
finish and a claim you can defend.
