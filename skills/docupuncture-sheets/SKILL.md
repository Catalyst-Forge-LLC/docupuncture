---
name: docupuncture-sheets
description: Precise in-place edits to an existing Google Sheet via paste-and-run Apps Script. Use when the user wants edits, tweaks, or iterations to a Google Sheet (or says "docupuncture" in a sheets context) — deliver a self-contained script that patches the live spreadsheet while preserving formatting, notes, data validation, and structure, instead of regenerating a new sheet.
---

# Docupuncture for Sheets

Docupuncture applied to Google Sheets: insert a change into a live spreadsheet and leave the rest of the workbook alone. Deliver edits as a self-contained Apps Script the user pastes into Extensions → Apps Script and runs. In-place patching preserves cell formatting, notes, data validation, conditional formatting, charts, and structure that full regenerations destroy.

Use the name "docupuncture" (or "docupuncture on this sheet") when referring to this workflow.

## When to offer

Whenever the user asks for edits, tweaks, or iterations to an existing Google Sheet — especially repeated rounds — offer:

1. **Docupuncture: Apps Script patch** (recommended) — I generate a script; you run it once. Formatting, notes, and validation preserved.
2. **New generated sheet** — full regeneration (warn: loses most formatting, notes, validation, charts).
3. **Manual edit checklist** — exact values/ranges to change.

Skip the question if the user already said "docupuncture" or established the preference.

### Edit volume / risk guidance

- **Low risk** (1–6 discrete cell/range updates): pure docupuncture.
- **Medium risk** (7–12 updates or light structural work such as inserting a few rows): still preferred, but warn about anchor drift.
- **High risk** (large structural changes, many interdependent formulas, or wholesale table rewrites): recommend sequential smaller scripts or full regeneration.

## Workflow

1. **Read the sheet first** (via available tools or user-provided ranges/values). Confirm the exact current state and the requested changes.
2. **Write the script** and deliver it with clear run instructions:
   - Open the spreadsheet → Extensions → Apps Script
   - Paste the script, run `applyEdits`
   - Authorize on first run
   - Check the Execution log for the summary
3. **Verify** after the user runs it by re-checking key cells/ranges if possible.

## Script rules

- **Container-bound**: use `SpreadsheetApp.getActiveSpreadsheet()` (and `getActiveSheet()` or named sheets). Prefer this over `openById` for minimal friction.
- **Anchors**: locate targets with `sheet.createTextFinder(text).findNext()` or by stable headers + relative offsets. Prefer unique header values or distinctive cell content as anchors. Escape regex when needed.
- **Preserve formatting**: when updating values, prefer patterns that keep existing formatting (e.g. `setValue` on already-formatted cells, or capture/re-apply RichTextValue / `copyTo` with format options when necessary). Explicitly preserve notes and data validation where the edit should not touch them.
- **Idempotent**: before changing a cell or range, check whether the desired end state already exists and skip if so. Re-running must never create duplicate rows or overwrite correct data unnecessarily.
- **Fail loudly**: if an anchor/header is missing, log `✗ SKIPPED: <edit name> — anchor not found` and continue. Never invent row/column numbers.
- **Dry run**: include a `DRY_RUN` flag (default `true`). When on, each edit locates its anchor and logs `→ WOULD APPLY` without writing anything. User reads the log, flips to `false`, runs again.
- **Structure**: one `applyEdits()` entry point. Each logical change in its own named function that returns success/failure. End with a clear `Logger.log` summary.
- **Never** hardcode credentials.

## Caveats to tell the user (once)

- First run shows Google’s authorization screen — the script runs as them.
- Complex formula dependencies can still break if the structural change is large; prefer small, targeted needles.
- Suggest testing on a copy first if the sheet is critical.

See `references/sample-skeleton.js` for a recommended starting template.
