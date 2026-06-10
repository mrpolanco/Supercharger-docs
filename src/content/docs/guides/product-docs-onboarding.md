---
title: Product docs onboarding
description: Turn approved product docs into support-readiness practice.
---

Product docs onboarding is for roles where product fluency matters. It helps
you turn selected docs, API references, changelogs, and support articles into
practice: product maps, glossary work, mock tickets, escalation prompts, and
targeted track suggestions.

This is not a docs chatbot. The goal is not to ask questions about a pile of
pages. The goal is to become ready to support the product.

## When to use it

Use **Add docs** when a job prep reveals that company-specific knowledge will
matter, for example:

- the role supports a developer platform
- the posting mentions APIs, SDKs, docs, integrations, or enterprise setup
- the company has public docs you can study before an interview
- you need to practice realistic customer questions about the product

For a ReadMe-style role, this can turn API docs and product help articles into
support scenarios: OpenAPI import issues, authentication setup, API reference
confusion, changelog questions, and escalation-writing practice.

## How it works

1. Open a prep's **Curriculum** tab.
2. Click **Add docs**.
3. Add a product/docs name, such as `ReadMe API docs`.
4. Paste a docs URL and/or approved markdown excerpts.
5. Choose the goal:

   | Goal | Use when |
   |---|---|
   | Support this product | You need practical support readiness. |
   | Debug common customer issues | You want support-ticket scenarios. |
   | Learn the API | You need endpoint, auth, payload, and workflow fluency. |
   | Prepare for interview | You want role-specific product talking points. |
   | Create onboarding material | You want team-ready enablement artifacts. |

6. Choose a confidence level.
7. Add notes about what matters for the role.
8. Click **Add docs to curriculum**.

Supercharger creates an item in the Curriculum tab and writes the request to
`onboarding-requests.json`. If you pasted docs, it also saves them under
`preps/<prep-id>/onboarding/<id>/source.md`.

## Generate practice

Click **Generate practice** on the docs-onboarding item. The app marks the
request as `creating`; an agent can then read the approved source files and
create the actual practice materials.

Ask your agent:

```text
Create the product docs onboarding request marked creating in
preps/<prep-id>/onboarding-requests.json.

Use only the approved docs sources. Produce a product map, glossary, relevant
workflows, common support failure modes, mock support tickets, customer reply
practice, escalation-writing practice, a final readiness assessment, and any
track requests for remaining gaps. Flag unsupported assumptions.
```

## Source discipline

Product docs can be noisy. Do not feed everything just because it exists.

Good sources:

- getting started docs
- authentication setup
- API reference examples
- integration docs
- troubleshooting pages
- changelogs relevant to the role
- support articles about common customer issues

Usually skip:

- marketing pages
- pricing pages unless the role mentions billing
- unrelated admin features
- deep engineering internals that customers never touch
- stale docs that contradict current docs

The agent should use only approved sources. If it infers behavior not directly
supported by those sources, it should mark that as an assumption.

## Output quality bar

A good docs-onboarding output should include:

- **Product map:** what the product does, who uses it, and the main workflows.
- **Glossary:** plain-English definitions before jargon is used.
- **Support scenarios:** realistic customer messages with messy details.
- **Evidence practice:** logs, requests, screenshots, settings, or docs
  excerpts the learner must inspect.
- **Customer reply prompts:** practice explaining clearly without overpromising.
- **Escalation prompts:** practice handing engineering the right evidence.
- **Final readiness assessment:** closed-book product-support scenario.
- **Track suggestions:** only for gaps that remain after considering the job
  posting, resume, and existing tracks.

## Why this stays file-based

The browser app does not crawl docs or launch an AI provider. It records the
approved docs and the learner's goal. Codex, Claude Code, Gemini CLI, or
another agent can then act on those files.

That keeps the flow inspectable, local-first, and safer for support learners:
you can see what sources were approved and what assumptions were made.

