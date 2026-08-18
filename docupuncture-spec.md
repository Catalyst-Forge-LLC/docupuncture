# Docupuncture

Treat the document you already have.

Insert a change into an existing Google Doc, Sheet, or Slides file with a small Apps Script the user pastes and runs. Theme, comments, notes, validation, layout, and history stay.

The needle goes in. The rest of the document stays.

Marketing copy lives on the site (`site/pages/`). This file is for implementers.

---

## The problem

Regenerating a Workspace file usually destroys:

- Theme, branding, and logos
- Comments and suggestion threads
- Fine-grained formatting
- Notes and data validation (Sheets)
- Layout and positioning (Slides)
- Revision history and collaborator attribution

---

## The solution

The agent reads the live file, confirms the edits, and writes a container-bound Apps Script that finds existing text or values (anchors) and changes only those spots. The user pastes it into Extensions → Apps Script and runs `applyEdits`.

---

## The name

The other tools in the shop strike, press, or contain. A needle is still metal from the same fire, but you don't swing it. You place it.

Acupuncture treats a living body in place: insert at a point, leave the rest alone. Docupuncture does that to a document you already care about.

---

## Principles

1. **Only the intended change lands.**
2. **The script runs as the user, on their file.**
3. **Idempotent.** Safe to re-run; never duplicates content.
4. **Fail loudly.** Missing anchors are logged and skipped. Locations are never invented.
5. **Risk-aware.** Split or regenerate when the change is large or structural.
6. **Anchors hold.** Unique literal first, nearby context second.

---

## The family

| Skill | Surface | Fit |
|-------|---------|-----|
| **Docs** | Google Docs | Comments, tabs, lists, partial styling. |
| **Sheets** | Google Sheets | Grid and ranges. Notes and validation stay. |
| **Slides** | Google Slides | Text and content. Layout surgery is higher risk. |

---

## User flow

1. User asks for changes to an existing file.
2. Agent reads the live file and confirms the edits.
3. Agent writes an Apps Script from the skill rules.
4. User pastes it and runs `applyEdits`.
5. Optional: agent re-reads the file and checks the result.

---

## Risk

- **Low** (a handful of local edits): one script.
- **Medium**: still preferred; warn if the file will be edited between runs.
- **High** (large restructuring, interdependent pieces, major layout work): sequential smaller scripts, or regenerate.

---

## Script rules

- Container-bound: `getActiveDocument()`, `getActiveSpreadsheet()`, `getActivePresentation()`.
- Idempotent.
- `DRY_RUN` defaults to `true`. Log `→ WOULD APPLY` without writing. Flip the flag and run again.
- Fail loudly on missing anchors; continue with the rest.
- End with `Logger.log` (`X applied, Y skipped`).
- Ship a sample skeleton with each skill.
- Never hardcode credentials.

---

## Status

- **Docs:** mature v1
- **Sheets:** solid v1
- **Slides:** solid v1, content-focused; layout surgery flagged

Each skill ships a sample skeleton.
