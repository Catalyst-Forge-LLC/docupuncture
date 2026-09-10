# DocuPuncture

Treat the document you already have.

The user pastes a small Apps Script into an existing Google Doc, Sheet, or Slides file and runs it. Surrounding structure is a design goal for supported edit types. An edit adds a revision. The existing file stays the same artifact.

Marketing copy lives on the site (`site/pages/`). This file is for implementers.

---

## The problem

Regenerating a Workspace file usually destroys:

- Theme, branding, and logos
- Comments and suggestion threads
- Fine-grained formatting
- Notes and data validation (Sheets)
- Layout and positioning (Slides)
- The existing revision thread and collaborator attribution on that file

---

## The solution

The agent needs the file identity and exact current text. If the host already has a Drive connector, it can read the live file. The skill does not grant Google access. The agent writes a container-bound Apps Script that finds existing text or values (anchors) and changes only those spots. The user reviews the script, pastes it into Extensions → Apps Script, and runs `applyEdits`.

---

## The name

The other tools in the shop strike, press, or contain. A needle is still metal from the same fire, but you don't swing it. You place it.

Acupuncture treats a living body in place: insert at a point, leave the rest alone. DocuPuncture does that to a document you already care about.

---

## Principles

1. **Only the intended change lands.**
2. **The script runs as the user, on their file.**
3. **Dry run first.** `DRY_RUN` defaults to `true`. Locate and log. Do not mutate.
4. **Fail loudly.** Missing or ambiguous targeted anchors are logged and skipped. Locations are never invented.
5. **Repeat-run for showcased ops.** Targeted insert and update samples skip when the end state is already present. Do not treat that as a property of every script.
6. **Risk-aware.** Split or regenerate when the change is large or structural.
7. **Anchors hold.** Unique literal first, nearby context second, and only when that backup is also unique.

---

## The family

| Skill | Surface | Fit |
|-------|---------|-----|
| **docupuncture-docs** | Google Docs | Comments, tabs, lists, partial styling. |
| **docupuncture-sheets** | Google Sheets | Grid and ranges. Notes and validation stay on cells you do not rewrite. |
| **docupuncture-slides** | Google Slides | Text and content. Layout surgery is higher risk. |

---

## Supported operations

| Surface | Supported edits | Watch |
|---------|-----------------|-------|
| Docs | Text swap, insert or delete at a unique anchor, and partial span styling | Comment anchors on replaced or deleted text can orphan. Tabs cannot be deleted by script. |
| Sheets | Cell or range value update at a unique finder, or a header plus offset | Structural row changes can break dependent formulas. |
| Slides | Text on existing shapes, using `replaceAllText` or a targeted text range | `setText` flattens mixed styling. Moving or resizing many objects is layout surgery. |

---

## User flow

1. User asks for changes to an existing file and identifies it (URL or ID).
2. Agent obtains exact current text from a host Drive connector, or from user-provided passages.
3. Agent confirms the edits and writes an Apps Script from the skill rules.
4. User reviews the script, pastes it, and runs `applyEdits` as a dry run.
5. User reads the log, sets `DRY_RUN = false`, and runs again.
6. Optional: agent re-reads the file and checks the result, if a connector is available.

---

## Risk

- **Low** (a handful of local edits): one script.
- **Medium**: still preferred, warn if the file will be edited between runs.
- **High** (large restructuring, interdependent pieces, major layout work): sequential smaller scripts, or regenerate.

---

## Script rules

- Container-bound: `getActiveDocument()`, `getActiveSpreadsheet()`, `getActivePresentation()`.
- `DRY_RUN` defaults to `true`. Log `→ WOULD APPLY` without writing. Flip the flag and run again.
- Fail loudly on missing or ambiguous targeted anchors, then continue with the rest.
- End with `Logger.log` (`X applied, Y skipped`).
- Ship a sample skeleton with each skill.
- Never hardcode credentials.

---

## Status

**v0.1.7**.

- **Docs:** mature v1
- **Sheets:** solid v1
- **Slides:** solid v1, content-focused, layout surgery flagged

Each skill ships a sample skeleton.
