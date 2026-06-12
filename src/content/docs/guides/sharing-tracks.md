---
title: Sharing tracks
description: Export, import, and privately distribute Supercharger tracks for teams.
---

Supercharger tracks are designed to travel. A track is a folder under
`tracks/`, so an organization can create a useful curriculum once, review it,
and share it with a team from a private source.

There is no public registry required. For teams, the best first workflow is:

1. Create or refine a track locally.
2. Review it for quality, privacy, and licensing.
3. Export it as a `.supercharger-track.zip`.
4. Store the zip in a private GitHub repo, internal docs page, shared drive, or
   release artifact.
5. Teammates import the zip into their own Supercharger workspace.

## Export A Track

Open a track, then click **Export track**. Supercharger downloads a zip package
containing:

- the track folder
- lessons and optional sandboxes
- `interview-prep.md` and `resources.md` when present
- a small `supercharger-track.json` package manifest

The export validates the track before packaging it. If a lesson is missing,
`track.yaml` is invalid, or a quiz/practice block cannot parse, fix the track
and export again.

## Import A Track

On the home screen, click **Import track** and choose a
`.supercharger-track.zip`.

Supercharger validates the package before copying it into `tracks/`:

- `track.yaml` must exist and list real lesson folders.
- Each lesson must have a `lesson.md` with a title.
- `quiz` and `practice` blocks must contain valid JSON.
- Sandbox folders must include a `Dockerfile`.
- Generated or unsafe folders such as `node_modules`, `__pycache__`, `dist`,
  `build`, and `.git` are rejected.
- Packages with path traversal, symlinks, too many files, or large files are
  rejected.

If a track with the same id already exists, you can import the package as a
renamed copy or replace the existing folder.

## Recommended Metadata

Shared tracks should include this metadata in `track.yaml`:

```yaml
author: Support Enablement Team
license: Internal use only
version: 1.0.0
sourceUrl: https://github.com/acme/support-curriculum
tags:
  - api
  - support
  - onboarding
```

Use `license` to say what recipients may do with the track. For internal
company tracks, `Internal use only` may be the right label. For public tracks,
choose a real license that you have the right to grant.

## Team Hosting Options

Good private sources include:

- a private GitHub repo with exported track zips in Releases
- a private GitHub repo that stores track folders directly
- an internal docs page with reviewed downloads
- a shared drive folder controlled by your support enablement team

The current app imports local zip files. If your team stores track folders
directly in Git, export a zip from the reviewed folder or clone the repo and
copy the folder into `tracks/`.

## Privacy And Safety

Before sharing a track, remove:

- real customer names, logs, tickets, IDs, payloads, or screenshots
- proprietary product docs unless the recipients are allowed to see them
- secrets, tokens, API keys, cookies, private URLs, or internal hostnames
- copied material from paid courses or docs you do not have rights to reuse

Imported tracks may contain Dockerfiles and shell scripts. Only import tracks
from people or teams you trust, and review third-party sandboxes before running
them.
