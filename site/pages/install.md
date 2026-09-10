---
title: Install
description: Point an agent at a DocuPuncture skill. Add the package, then copy a folder.
order: 1
---

DocuPuncture is Markdown you point an agent at, plus a sample Apps Script. Install the package, then copy one folder from `skills/` into the agent's skills directory. Cursor wants a named folder that contains `SKILL.md`. The skill does not grant Google access. It does not open your files.

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

1. Name the target file (URL or ID) and the intended changes.
2. Give the agent exact current text for anchors, or let a host Drive connector read the file if you already have one.
3. Review the Apps Script before you paste it.
4. Open the file → Extensions → Apps Script → paste → run `applyEdits`.
5. First run is a dry run. Read the log. If it matches the intended changes, set `DRY_RUN = false`, then run again.

The script runs as you, on your file. The first run shows Google's authorization screen. Do not enable writes until the dry-run log is right.

[The three skills](/skills)
