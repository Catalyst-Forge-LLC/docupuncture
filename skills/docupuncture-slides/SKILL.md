---
name: docupuncture-slides
description: Precise in-place edits to an existing Google Slides presentation via paste-and-run Apps Script. Use when the user wants edits, tweaks, or iterations to a Google Slides deck (or says "docupuncture" in a slides context) — deliver a self-contained script that patches the live presentation while preserving layout, styles, and structure, instead of regenerating a new deck.
---

# Docupuncture for Slides

Docupuncture applied to Google Slides: insert precise edits without changing the theme, format, comments, or history. Layout and speaker notes stay too. Deliver edits as a self-contained Apps Script the user pastes into Extensions → Apps Script and runs.

Use the name "docupuncture" (or "docupuncture on these slides") when referring to this workflow.

## When to offer

Whenever the user asks for edits, tweaks, or iterations to an existing Google Slides presentation — especially repeated rounds — offer:

1. **Docupuncture: Apps Script patch** (recommended for content/text changes) — I generate a script; you run it once. Layout and theme preserved.
2. **New generated deck** — full regeneration (warn: loses theme, precise positioning, speaker notes, etc.).
3. **Manual edit checklist** — exact text or slide-by-slide changes.

Skip the question if the user already said "docupuncture" or established the preference.

### Edit volume / risk guidance

- **Low risk** (1–6 text replacements or simple content updates on existing shapes): pure docupuncture.
- **Medium risk** (7–12 changes or light additions of text boxes): still preferred.
- **High risk** (major layout restructuring, many new slides, complex object insertion/repositioning): recommend sequential smaller scripts or full regeneration. Positioning is fragile.

## Workflow

1. **Read / understand the presentation first**. Confirm the exact current text content and the requested changes (slide numbers or unique text anchors help).
2. **Write the script** and deliver it with clear run instructions:
   - Open the presentation → Extensions → Apps Script
   - Paste the script, run `applyEdits`
   - Authorize on first run
   - Check the Execution log
3. **Verify** after the user runs it if possible.

## Script rules

- **Container-bound**: use `SlidesApp.getActivePresentation()`. Prefer this over opening by ID.
- **Anchors**: locate shapes by their text content (`shape.getText().asString()` or `find`). Prefer unique or distinctive phrases that are unlikely to change. For multi-slide decks, iterate slides and search each page’s shapes.
- **Text edits**: prefer `TextRange` methods. **Warning**: `getText().setText()` on a shape with mixed character styling (e.g. one bolded word, an inline color) flattens it to a single run. For shapes with mixed styling, prefer `replaceAllText` on the shape, or targeted insert/delete on the sub-`TextRange` around only the changed span, so untouched runs keep their styling. Full `setText` is fine only when the shape's text is uniformly styled.
- **Idempotent**: check whether the target text or state already exists before changing it. Re-running must not duplicate shapes or text.
- **Fail loudly**: if a text anchor / shape is not found, log `✗ SKIPPED: <edit name> — anchor not found` and continue. Never guess slide indices or object IDs.
- **Dry run**: include a `DRY_RUN` flag (default `true`). When on, each edit locates its anchor/shape and logs `→ WOULD APPLY` without modifying the deck. User reads the log, flips to `false`, runs again.
- **Structure**: one `applyEdits()` entry point. Each logical change in its own named function. End with a clear summary log.
- **Scope note**: v1 focuses on text content and simple shape text updates. Complex layout surgery (moving/resizing many objects) is higher risk and should be flagged.
- **Never** hardcode credentials.

## Caveats to tell the user (once)

- First run shows Google’s authorization screen — the script runs as them.
- Heavy layout changes are more fragile than pure text edits; prefer content-focused needles.
- Suggest testing on a copy first if the presentation is important.

See `references/sample-skeleton.js` for a recommended starting template.
