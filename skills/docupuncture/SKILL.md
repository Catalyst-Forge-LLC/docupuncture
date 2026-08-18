---
name: docupuncture
description: Precise in-place edits to an existing Google Doc via paste-and-run Apps Script. Use when the user wants edits, tweaks, or iterations to a Google Doc (or says "docupuncture") — deliver a self-contained script that patches the live doc while preserving all formatting, instead of regenerating a new document. Prefer this over full regeneration for formatted docs. Part of the Docupuncture family (Docs, Sheets, Slides).
---

# Docupuncture for Docs

Docupuncture = insert precise edits without changing the theme, format, comments, or history. This skill is the **Docs** implementation.

Deliver edits as a self-contained Apps Script the user pastes into Extensions → Apps Script and runs, instead of regenerating a new document. In-place patching preserves all formatting (fonts, colors, images, tables, comments, theme) that API imports and full regenerations destroy. Use the name "docupuncture" when referring to this workflow with the user.


## When to offer

Whenever the user asks for edits, tweaks, or iterations to an existing Google Doc — especially repeated iteration rounds — use AskUserQuestion to offer:

1. **Docupuncture: Apps Script patch** (recommended for formatted docs) — I generate a script; you run it once. Formatting preserved. First run requires a one-time authorization prompt.
2. **New generated doc** — full regeneration (warn: loses theme/logo/comments).
3. **Manual edit checklist** — exact paste-ready text.

Skip the question and go straight to the script if the user says "docupuncture" or has already established this preference in the conversation.

### Edit volume / risk guidance

Before generating the script, quickly assess the size and nature of the requested changes:

- **Low risk** (1–5 discrete edits, mostly text swaps or simple inserts/deletes): proceed with pure docupuncture.
- **Medium risk** (6–10 edits or light structural work): still prefer docupuncture, but warn the user that a fresh re-read of the doc is required if they make manual changes between runs, and consider splitting into two smaller scripts if the anchors feel fragile.
- **High risk** (>10 discrete edits, major restructuring, multi-section moves, or many interdependent changes): strongly recommend breaking into multiple sequential docupuncture rounds, or switching to a full regeneration / hybrid approach. Do not force a single massive script.

If the set of changes is high-risk, surface this explicitly to the user before writing the script.

## Workflow

1. **Read the doc first** via the Google Drive MCP `read_file_content` (extract the file ID from the URL). Get the EXACT current text — anchors must match character-for-character. Confirm with the user which edits to make before writing the script.

2. **Write the script** (rules below) and deliver it in a code block with run instructions:
   - Open the doc → Extensions → Apps Script
   - Delete any existing code, paste the script, click Run (▶) on `applyEdits`
   - First run: authorize when prompted (it runs as you, on your doc)
   - Check the Execution log for the ✓/✗ summary

3. **Verify** after the user says they ran it: re-read the doc via MCP and confirm every edit landed.

## Script rules

- **Container-bound**: use `DocumentApp.getActiveDocument()` (opened from the doc's own Script editor) — minimal auth friction. Do not use `openById` unless the user wants a standalone script.

- **Tabs**: if the doc has tabs, select the right one: `doc.getTabs()[i].asDocumentTab().getBody()`. Plain `doc.getBody()` only for untabbed docs. Prefer a small helper that iterates all tabs (and child tabs) and searches each body when the target tab is not known with certainty. Apps Script cannot delete tabs — flag tab deletion as a manual step.

- **Anchors (critical)**: locate insertion / edit points with `body.findText(pattern)`.
  - Prefer a short, highly unique literal that is unlikely to change (section titles, distinctive phrases near the edit point, or rare words).
  - `findText` treats its pattern as a regex, so always route anchor literals through the `escapeRegExp` helper (see skeleton) rather than passing raw strings — a stray `(` or `?` in a section title will silently break the match otherwise.
  - Use a distinctive substring, never an entire long paragraph (text may span multiple runs).
  - For higher robustness on medium/high-risk edits: make each edit function try a primary unique anchor, then a secondary nearby unique context string if the primary is missing. Log which strategy succeeded.
  - Never invent a location if no anchor is found.

- **Inserting paragraphs**: `body.getChildIndex(anchorElement.getParent())` then `body.insertParagraph(idx + 1, text)`. Copy formatting from a sibling: `newPara.setAttributes(sibling.getAttributes())`.

- **Bullets**: use `body.insertListItem(idx, text)` and inherit list formatting: `.setListId(siblingListItem).setNestingLevel(siblingListItem.getNestingLevel()).setGlyphType(siblingListItem.getGlyphType())`, plus `setAttributes` from the sibling.

- **Deleting elements**: find the anchor, walk up to the containing `LIST_ITEM` or `PARAGRAPH`, then `removeFromParent()`.

- **Partial bolding / styling spans**: after inserting, use `para.editAsText().setBold(startOffset, endOffset, true)` (or other style methods) with carefully computed offsets.

- **Replacements**: prefer `body.replaceText(escapedPattern, replacement)` for simple text swaps; for structural changes (splitting a bullet, inserting between existing items), edit the existing element's text and insert new siblings.

- **Idempotent**: before each edit, check whether the target state already exists (`findText` for new content; absence for deletions) and skip with a log message if so. Re-running must never duplicate content.

- **Fail loudly**: if an anchor isn't found, log `✗ SKIPPED: <edit name> — anchor not found` and continue with the other edits. Never guess a location. End with a summary: `Logger.log('Done: X applied, Y skipped')`.

- **Dry run**: include a `DRY_RUN` flag (default `true`) at the top of the script. When on, each edit function locates its anchor and logs `→ WOULD APPLY: <edit name>` without modifying the document. The user reads the log, flips the flag to `false`, and runs again. This is a stronger safety story than "test on a copy" for important documents.

- **Structure**: one `applyEdits()` entry function; each edit in its own small named function (or clearly-commented block) whose name matches how you described the edit to the user. See `references/sample-skeleton.js` for a recommended starting template.

- **Never** hardcode credentials or API keys in the script.

## Caveats to tell the user (once)

- First run shows Google's authorization screen — the script runs entirely as them, on their doc.
- Apps Script can't delete tabs or edit comments; those stay manual.
- Comments are preserved in untouched regions, but an edit that deletes or replaces the exact text a comment is anchored to will orphan that comment. Flag this when an edit overlaps a commented range.
- Suggest running on a copy the first time if the doc is important.
- After several iterative rounds, anchors can drift if the surrounding text has changed. A fresh read of the current document is always recommended before generating the next script.
