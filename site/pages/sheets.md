---
title: DocuPuncture for Sheets
description: In-place edits to an existing Google Sheet. Paste an Apps Script, run it once.
order: 4
---

Use this when the file is a spreadsheet you already care about. A grid is already a map of points.

Values change. Cell formatting, notes, validation, conditional formatting, charts, and structure stay.

Skill file: [`skills/docupuncture-sheets/SKILL.md`](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-sheets/SKILL.md)

## When to use it

Edits, tweaks, or another round on an existing Sheet. Prefer this over generating a new workbook.

## What the script does

- Finds a row with `createTextFinder` or a stable header plus an offset.
- Writes into cells that already have formatting, so notes and validation stay.
- Skips a cell that already has the new value.
- Does not invent a row or column number when the find fails.

A large structural change can still break formulas that depend on layout. Keep the script small.

**Status:** solid v1.

[Docs](/docs) · [Slides](/slides) · [Install](/install)
