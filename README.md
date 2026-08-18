# Docupuncture

Treat the document you already have.

Insert precise edits without changing the theme, format, comments, or history.

When an AI regenerates a Google Doc, Sheet, or deck, those things usually go with it. Docupuncture writes a small Apps Script you paste and run on the live file.

## The skills

Copy a folder into Cursor, Claude Code, or anything else that reads `SKILL.md`. When someone asks for edits to an existing Workspace file, the agent writes a script instead of a new document.

| Skill | Surface | Fit |
| --- | --- | --- |
| [`docupuncture-docs`](skills/docupuncture-docs/SKILL.md) | Google Docs | Comments, tabs, lists, partial styling. |
| [`docupuncture-sheets`](skills/docupuncture-sheets/SKILL.md) | Google Sheets | Grid and ranges. Notes and validation stay. |
| [`docupuncture-slides`](skills/docupuncture-slides/SKILL.md) | Google Slides | Text and content. Layout surgery is higher risk. |

## Install

```bash
pnpm add docupuncture
```

Copy one folder from `node_modules/docupuncture/skills/` into the agent's skills directory.

```bash
git clone https://github.com/Catalyst-Forge-LLC/docupuncture.git
# then copy skills/docupuncture-docs/  (or -sheets / -slides)
```

Site: [docupuncture.dev](https://docupuncture.dev)

## How a run works

1. The agent reads the live file and confirms the edits.
2. It writes an Apps Script.
3. You open the file → Extensions → Apps Script → paste → run `applyEdits`.
4. First run is a dry run (`DRY_RUN = true`). Read the log, flip the flag, run again.

The script is safe to re-run. Missing anchors are logged. It never invents a location.

## Why the name

The other tools in the shop strike, press, or contain. A needle is still metal from the same fire, but you don't swing it. You place it.

Acupuncture treats a living body in place: insert at a point, leave the rest alone. Docupuncture does that to a document you already care about.

Closest cousin on the shelf is [TemperPass](https://temperpass.dev): a rule set you point an agent at.

## License

MIT. Built by [Catalyst Forge LLC](https://www.catalystforge.com).
