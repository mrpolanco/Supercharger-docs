---
title: Prepare me for this job
description: Turn a job posting into a study plan and role-specific interview prep.
---

The prep workflow is the organizing feature of Supercharger: a job posting
becomes the unit of study, and tracks become the building blocks a prep
assembles.

## Workflow

1. **Save the posting.** In the app: **New job prep** → name it (e.g.
   `acme-tse`) → paste the full posting → save. This writes
   `preps/acme-tse/job-posting.md`.
2. **Generate.** In your assistant, from the repo root:

   ```text
   Generate the prep for preps/acme-tse/.
   ```

3. **Study.** The prep appears in the app as tabs:

   | File | What it gives you |
   |---|---|
   | `analysis.md` | Each requirement broken into concrete skills. Inferred requirements are explicitly flagged (*"posting says 'identity providers' — assuming Okta/SAML; confirm if you know their stack"*) so you can correct assumptions early. |
   | `plan.md` | An ordered study plan: which tracks/lessons cover each requirement, what to skim vs. drill, and new tracks generated for genuine gaps. |
   | `interview-prep.md` | Role-specific: likely screen questions with model answers and follow-up chains, plus talking points read between the lines of the posting (their stack, their customer profile, what "log analysis" means at that company). |

## Getting better preps

- **Add context.** Tell the assistant what you know about the company, the
  recruiter call, or the interview format — the prep sharpens accordingly.
- **Correct the assumptions.** If `analysis.md` guessed SAML and the company
  uses OIDC, say so and regenerate the affected parts.
- **Mind the scope.** Gaps can mean new full tracks. The agent contract tells
  assistants to ask before generating more than one large track, so you stay
  in control of the time budget.

## Before the screen

Drill the track-level `interview-prep.md` question banks for every skill the
plan flags, then take each relevant track's closed-book final cold. Passing
those is your evidence for an honest *"yes, I can do that"* in the interview.
