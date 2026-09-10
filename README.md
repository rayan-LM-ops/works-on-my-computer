# Works On My Machine™

**The Developer Excuse Generator** is a deliberately small static website used for the CDA-M10 deployment workshop.

Release: **v1.0.0 — Stable-ish**

> Initial release. Management has been informed that everything is fine.

## Why this project is small

The application is intentionally simple so that the workshop can focus on deployment rather than application development.

You will use it to practise:

- preparing a release;
- deploying to a target environment;
- checking what actually happened;
- writing deployment documentation;
- making a controlled change;
- troubleshooting a failed release;
- deciding whether to fix forward or roll back;  
- verifying recovery.

## What this project uses

- HTML
- CSS
- Vanilla JavaScript
- GitLab Pages

There is no Docker, database, framework or build tool to install.

## Important security note

Anything delivered to a browser is visible to the user. Never place passwords, API keys or private secrets in a static website.

## Main files

- `public/index.html` — the web page
- `public/style.css` — visual design
- `public/app.js` — button logic
- `public/messages.js` — excuses, solutions and panic messages
- `public/config.js` — harmless visible configuration
- `.gitlab-ci.yml` — GitLab Pages deployment configuration

## Your documentation templates

The files in `docs/` are **templates, not completed deployment documents**.

You are expected to complete them from the evidence you gather during the workshop:

- `docs/deployment-guide.md`
- `docs/pre-deployment-checklist.md`
- `docs/rollback-plan.md`
- `docs/runbook.md`

Do not invent an ideal procedure after the event. Record what you actually checked, changed, deployed and verified.

## Open locally

Open `public/index.html` in a browser.

## Deploy with GitLab Pages

Use the ENKI GitLab setup guide during class. As you work, complete the documentation templates in `docs/`.

## Classroom release sequence

- `v1.0.0 — Stable-ish`: starting point.
- `v1.1.0 — Confidence Update`: make one small, controlled application change and redeploy it.
- `v1.2.0 — Definitely Tested`: teacher-triggered controlled failure used for troubleshooting and recovery practice.

For `v1.2.0`, investigate the evidence before changing anything. The fault is deliberately not documented in this starter.
