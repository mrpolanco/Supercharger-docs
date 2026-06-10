---
title: Prepare me for this job
description: Turn a job posting into a study plan and role-specific interview prep.
---

The prep workflow is the organizing feature of Supercharger: a job posting
becomes the unit of study, and tracks become the building blocks a prep
assembles.

This is also where Supercharger works as a support-team enablement tool. A
posting is just one input; the same workflow can map a new product surface,
customer segment, or recurring support issue into concrete practice.

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
   | `curriculum` | The suggested learning order across existing tracks and requested gap tracks. Existing tracks show progress and can be started immediately; requested tracks can be queued for an agent to create. |
   | `analysis.md` | Each requirement broken into concrete skills. Inferred requirements are explicitly flagged (*"posting says 'identity providers' — assuming Okta/SAML; confirm if you know their stack"*) so you can correct assumptions early. |
   | `plan.md` | An ordered study plan: which tracks/lessons cover each requirement, what to skim vs. drill, and new tracks generated for genuine gaps. |
   | `interview-prep.md` | Role-specific: likely screen questions with model answers and follow-up chains, plus talking points read between the lines of the posting (their stack, their customer profile, what "log analysis" means at that company). |

## Curriculum tab

The **Curriculum** tab is the operational view of a prep. It turns the written
study plan into a sequenced checklist:

- **Existing tracks** show lesson progress and a **Start** button. When every
  lesson in the track is complete, the curriculum marks it complete.
- **Suggested gap tracks** show a **Create** button. Clicking it marks the
  request as `creating`, changes the button to **Queued for agent**, and
  shows a copyable prompt. Paste that prompt into Codex, Claude Code, Gemini
  CLI, or another assistant from the Supercharger project folder. The GUI does
  not choose or launch an AI client for you.
- **Ready tracks** switch to **Start** as soon as the track exists on disk.
- **Modify** records an optimization request for an existing track, useful when
  a learner wants a revised version before retaking.
- **Add track** lets the learner suggest a new topic, such as "how to use
  curl." Supercharger inserts that request into the curriculum so an agent can
  place it in the right study order.
- **Reorder** lets the learner move tracks up or down when the sequence needs
  a human nudge. For example, "How to use curl" should usually come before an
  API debugging track because it teaches the command-line tool used in later
  exercises.
- **Add docs** lets the learner attach approved product docs or excerpts when
  company-specific fluency matters. Supercharger queues a docs-onboarding item
  so an agent can create a product map, glossary, support scenarios, and
  product-specific practice from those sources.
- **Confidence level** lets the learner choose beginner, intermediate, or
  advanced before requesting a track. Beginner tracks define jargon before
  using it; advanced tracks skip basics and focus on edge cases.
- **Go deeper** appears after a non-advanced track is complete. It queues an
  advanced follow-up based on the completed track. Advanced tracks do not get
  another deeper suggestion, because the goal is mastery without endless track
  sprawl.

Supercharger does not secretly launch Codex, Claude Code, or Gemini from the
browser. The app writes a file-based handoff (`curriculum.json` and
`track-requests.json`, plus `onboarding-requests.json` for product docs) that
any agent can read and act on. That keeps the platform provider-neutral and
makes the state inspectable in Git.

The normal handoff looks like this:

```text
Create the requested tracks marked creating in preps/<prep-id>/track-requests.json.
Follow SPEC.md and include createdBy and sourcePrep in each track.yaml.
```

After the assistant creates the track folder, refresh the Curriculum tab. The
button changes from **Queued for agent** to **Start**.

## Getting better preps

- **Add context.** Tell the assistant what you know about the company, the
  recruiter call, or the interview format — the prep sharpens accordingly.
- **Correct the assumptions.** If `analysis.md` guessed SAML and the company
  uses OIDC, say so and regenerate the affected parts.
- **Mind the scope.** Gaps can mean new full tracks. The agent contract tells
  assistants to ask before generating more than one large track, so you stay
  in control of the time budget.
- **Use the curriculum as the source of truth.** If the written plan and the
  Curriculum tab drift, ask the assistant to reconcile `plan.md`,
  `curriculum.json`, and `track-requests.json`.
- **Reorder for scaffolding.** If a prerequisite track lands too late, move it
  earlier. If the whole sequence feels wrong, ask the assistant to optimize
  the curriculum order instead of manually guessing every dependency.
- **Approve docs intentionally.** Product docs can be large and uneven. Add the
  pages or excerpts that matter for the role, then ask the assistant to skip
  irrelevant docs and flag assumptions.
- **Set the learner level honestly.** If a topic is new, choose beginner even
  if the role is senior. Beginner does not mean easy; it means the lesson
  should teach vocabulary before expecting it.

## Before the screen

Drill the track-level `interview-prep.md` question banks for every skill the
plan flags, then take each relevant track's closed-book final cold. Passing
those is your evidence for an honest *"yes, I can do that"* in the interview.

For a fuller example, see the [Product Support Specialist case study](/Supercharger-docs/case-studies/product-support-specialist/).

For a deeper walkthrough of the docs flow, see
[Product docs onboarding](/Supercharger-docs/guides/product-docs-onboarding/).
