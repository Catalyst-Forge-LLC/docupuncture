---
title: Install
description: Point an agent at a Docupuncture skill file. pnpm add docupuncture, then copy a folder.
order: 1
---

Docupuncture is Markdown you point an agent at, plus a sample Apps Script skeleton. Install the package, then copy one folder from `skills/` into your agent's skill directory. Cursor expects a named folder containing `SKILL.md`.

## From npm

```bash
pnpm add docupuncture
```

The skills land at `node_modules/docupuncture/skills/`. Copy `docupuncture/`, `docupuncture-sheets/`, or `docupuncture-slides/`.

## From the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/docupuncture.git
```

Same folders, under `skills/` at the repo root.

| Skill | Path | When |
| --- | --- | --- |
| [Docs](/docs) | `skills/docupuncture/` | Edits to an existing Google Doc |
| [Sheets](/sheets) | `skills/docupuncture-sheets/` | Edits to an existing Google Sheet |
| [Slides](/slides) | `skills/docupuncture-slides/` | Content edits to an existing deck |

Say **docupuncture** and the agent goes straight to the script. Otherwise it should offer the patch, a full regeneration, or a manual checklist.

## After you install

1. Ask for changes to a live Workspace file.
2. The agent reads the file and writes a self-contained Apps Script.
3. Open the file → Extensions → Apps Script → paste → run `applyEdits`.
4. First run stays in dry-run mode. Read the Execution log, set `DRY_RUN = false`, run again.

The script runs as you, on your file. The first run shows Google's authorization screen. That is expected.

[The three skills](/skills)
