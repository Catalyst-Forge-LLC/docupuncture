---
name: docupuncture-sheets
description: Precise in-place edits to an existing Google Sheet via paste-and-run Apps Script. Use when the user wants edits, tweaks, or iterations to a Google Sheet (or says "DocuPuncture" in a sheets context) — deliver a self-contained script that patches the live spreadsheet while preserving surrounding structure for supported edit types, instead of regenerating a new sheet.
---

# DocuPuncture for Sheets

DocuPuncture writes a reviewable Apps Script that patches an existing Google Sheet in place. Surrounding structure is a design goal for supported edit types. An edit adds a revision. Notes, data validation, charts, and structure are designed to stay when you update values on existing cells. Deliver edits as a self-contained Apps Script the user pastes into Extensions → Apps Script and runs.

Use the name "DocuPuncture" (or "DocuPuncture on this sheet") when referring to this workflow.

## When to offer

Whenever the user asks for edits, tweaks, or iterations to an existing Google Sheet — especially repeated rounds — offer:

1. **DocuPuncture: Apps Script patch** (recommended) — I generate a script; you run it once. Formatting, notes, and validation stay on cells you do not rewrite.
2. **New generated sheet** — full regeneration (warn: loses most formatting, notes, validation, charts).
3. **Manual edit checklist** — exact values/ranges to change.

Skip the question if the user already said "DocuPuncture" or established the preference.

### Edit volume / risk guidance

- **Low risk** (1–6 discrete cell/range updates): pure DocuPuncture.
- **Medium risk** (7–12 updates or light structural work such as inserting a few rows): still preferred, but warn about anchor drift.
- **High risk** (large structural changes, many interdependent formulas, or wholesale table rewrites): recommend sequential smaller scripts or full regeneration.

## Workflow

1. **Identify the file and the exact current values.** Ask for the spreadsheet URL or ID and the intended changes. If the host already has a Drive connector, use it. Otherwise require the user to paste the relevant ranges or values. This skill does not grant Google access.
2. **Write the script** and deliver it with clear run instructions:
   - Open the spreadsheet → Extensions → Apps Script
   - Paste the script, run `applyEdits`
   - Authorize on first run
   - Check the Execution log. Keep `DRY_RUN = true` until that log matches the intended changes.
3. **Verify** after the user runs it by re-checking key cells or ranges if a connector is available, or ask the user to confirm.

## Script rules

- **Container-bound**: use `SpreadsheetApp.getActiveSpreadsheet()` (and `getActiveSheet()` or named sheets). Prefer this over `openById` for minimal friction.
- **Anchors**: locate targets with `sheet.createTextFinder(text).findNext()` or by stable headers + relative offsets. Prefer unique header values or distinctive cell content as anchors. Escape regex when needed. If a targeted edit's finder matches more than once, log `✗ SKIPPED: <edit name> — anchor is ambiguous` and skip. Do not take the first match.
- **Preserve formatting**: when updating values, prefer patterns that keep existing formatting (e.g. `setValue` on already-formatted cells, or capture/re-apply RichTextValue / `copyTo` with format options when necessary). Explicitly preserve notes and data validation where the edit should not touch them. Notes and validation on a rewritten range are not guaranteed.
- **Repeat-run (showcased cell update)**: before changing a cell, check whether the desired end state already exists and skip if so. The sample `edit_UpdateStatusColumn` skips when the status cell is already `Completed`. Do not claim that guarantee for every script.
- **Fail loudly**: if an anchor or header is missing, or a targeted finder matches more than once, log `✗ SKIPPED` with `anchor not found` or `anchor is ambiguous` and continue. Never invent row or column numbers.
- **Dry run**: include a `DRY_RUN` flag (default `true`). When on, each edit locates its anchor and logs `→ WOULD APPLY` without writing anything. No `setValue`, `setValues`, insert, or delete in this mode. User reads the log, flips to `false`, runs again.
- **Structure**: one `applyEdits()` entry point. Each logical change in its own named function that returns success/failure. End with a clear `Logger.log` summary.
- **Never** hardcode credentials.

## Caveats to tell the user (once)

- First run shows Google’s authorization screen — the script runs as them.
- This skill does not grant Google access. Live reads depend on a host connector or user-provided ranges.
- An edit adds a revision. The existing spreadsheet stays the same artifact.
- Complex formula dependencies can still break if the structural change is large; prefer small, targeted needles.
- Suggest testing on a copy first if the sheet is critical.

See `references/sample-skeleton.js` for a recommended starting template.
