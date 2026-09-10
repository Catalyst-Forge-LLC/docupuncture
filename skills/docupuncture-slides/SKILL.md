---
name: docupuncture-slides
description: Precise in-place edits to an existing Google Slides presentation via paste-and-run Apps Script. Use when the user wants edits, tweaks, or iterations to a Google Slides deck (or says "DocuPuncture" in a slides context) — deliver a self-contained script that patches the live presentation while preserving surrounding structure for supported edit types, instead of regenerating a new deck.
---

# DocuPuncture for Slides

DocuPuncture writes a reviewable Apps Script that patches an existing Google Slides deck in place. Surrounding structure is a design goal for supported text edits. An edit adds a revision. Theme, speaker notes, and the layout of unmoved objects are designed to stay. Deliver edits as a self-contained Apps Script the user pastes into Extensions → Apps Script and runs.

Use the name "DocuPuncture" (or "DocuPuncture on these slides") when referring to this workflow.

## When to offer

Whenever the user asks for edits, tweaks, or iterations to an existing Google Slides presentation — especially repeated rounds — offer:

1. **DocuPuncture: Apps Script patch** (recommended for content/text changes) — I generate a script; you run it once. Theme and unmoved layout stay for supported text edits.
2. **New generated deck** — full regeneration (warn: loses theme, precise positioning, speaker notes, etc.).
3. **Manual edit checklist** — exact text or slide-by-slide changes.

Skip the question if the user already said "DocuPuncture" or established the preference.

### Edit volume / risk guidance

- **Low risk** (1–6 text replacements or simple content updates on existing shapes): pure DocuPuncture.
- **Medium risk** (7–12 changes or light additions of text boxes): still preferred.
- **High risk** (major layout restructuring, many new slides, complex object insertion/repositioning): recommend sequential smaller scripts or full regeneration. Positioning is fragile.

## Workflow

1. **Identify the file and the exact current text.** Ask for the presentation URL or ID and the intended changes. If the host already has a Drive connector, use it. Otherwise require the user to paste the relevant slide text. This skill does not grant Google access.
2. **Write the script** and deliver it with clear run instructions:
   - Open the presentation → Extensions → Apps Script
   - Paste the script, run `applyEdits`
   - Authorize on first run
   - Check the Execution log. Keep `DRY_RUN = true` until that log matches the intended changes.
3. **Verify** after the user runs it if a connector is available, or ask the user to confirm.

## Script rules

- **Container-bound**: use `SlidesApp.getActivePresentation()`. Prefer this over opening by ID.
- **Anchors**: locate shapes by their text content (`shape.getText().asString()` or `find`). Prefer unique or distinctive phrases that are unlikely to change. For multi-slide decks, iterate slides and search each page’s shapes. If a single-shape edit matches more than one shape, log `✗ SKIPPED: <edit name> — anchor is ambiguous` and skip. Do not take the first match. `replaceAllText` may apply to every match when that is the requested operation.
- **Text edits**: prefer `TextRange` methods. **Warning**: `getText().setText()` on a shape with mixed character styling (e.g. one bolded word, an inline color) flattens it to a single run. For shapes with mixed styling, prefer `replaceAllText` on the shape, or targeted insert/delete on the sub-`TextRange` around only the changed span, so untouched runs keep their styling. Full `setText` is fine only when the shape's text is uniformly styled.
- **Repeat-run (showcased title update)**: check whether the target text already exists before changing it. The sample `edit_UpdateTitleOnSlide1` skips when the shape already has the new title. Do not claim that guarantee for every script.
- **Fail loudly**: if a text anchor or shape is not found, or a single-shape edit matches more than one shape, log `✗ SKIPPED` with `anchor not found` or `anchor is ambiguous` and continue. Never guess slide indices or object IDs.
- **Dry run**: include a `DRY_RUN` flag (default `true`). When on, each edit locates its anchor or shape and logs `→ WOULD APPLY` without modifying the deck. Do not call `replaceAllText` or `setText` in this mode. Count matches by hand instead. User reads the log, flips to `false`, runs again.
- **Structure**: one `applyEdits()` entry point. Each logical change in its own named function. End with a clear summary log.
- **Scope note**: v1 focuses on text content and simple shape text updates. Complex layout surgery (moving/resizing many objects) is higher risk and should be flagged.
- **Never** hardcode credentials.

## Caveats to tell the user (once)

- First run shows Google’s authorization screen — the script runs as them.
- This skill does not grant Google access. Live reads depend on a host connector or user-provided text.
- An edit adds a revision. The existing deck stays the same artifact.
- Heavy layout changes are more fragile than pure text edits; prefer content-focused needles.
- Suggest testing on a copy first if the presentation is important.

See `references/sample-skeleton.js` for a recommended starting template.
