---
title: Install
description: Point an agent at a DocuPuncture skill. Add the package, then copy a folder.
order: 1
---

DocuPuncture is Markdown you point an agent at, plus a sample Apps Script. Install the package, then copy one folder from `skills/` into the agent's skills directory. Cursor wants a named folder that contains `SKILL.md`.

## From npm

```bash
pnpm add docupuncture
```

The skills land at `node_modules/docupuncture/skills/`. Copy `docupuncture-docs/`, `docupuncture-sheets/`, or `docupuncture-slides/`.

## From the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/docupuncture.git
```

Same folders, under `skills/` at the repo root.

| Skill | Path | When |
| --- | --- | --- |
| [Docs](/docs) | `skills/docupuncture-docs/` | An existing Google Doc |
| [Sheets](/sheets) | `skills/docupuncture-sheets/` | An existing Google Sheet |
| [Slides](/slides) | `skills/docupuncture-slides/` | Text on an existing deck |

If you say **DocuPuncture**, the agent writes the script. Otherwise it should offer the patch, a new file, or a checklist.

## After you install

1. Ask for changes to a live Workspace file.
2. The agent reads the file and writes an Apps Script.
3. Open the file → Extensions → Apps Script → paste → run `applyEdits`.
4. First run is a dry run. Read the log, set `DRY_RUN = false`, run again.

The script runs as you, on your file. The first run shows Google's authorization screen.

[The three skills](/skills)
