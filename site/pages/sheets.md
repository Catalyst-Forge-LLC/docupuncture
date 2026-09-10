---
title: DocuPuncture for Sheets
description: In-place edits to an existing Google Sheet. Paste an Apps Script, run it once.
order: 4
---

Use this when the file is a spreadsheet you already care about. A grid is already a map of points.

Values change on targeted cells. Cell formatting, notes, and validation are designed to stay on cells you do not rewrite. Charts and sheet structure stay when you do not insert or delete rows. An edit adds a revision.

Skill file: [`skills/docupuncture-sheets/SKILL.md`](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-sheets/SKILL.md)

## When to use it

Edits, tweaks, or another round on an existing Sheet. Prefer this over generating a new workbook.

## What the script does

- Finds a unique row with `createTextFinder` or a stable header plus an offset.
- Skips a targeted edit when that finder matches more than once.
- Writes into cells that already have formatting, so notes and validation on those cells stay.
- For the showcased status update, skips a cell that already has the new value.
- Does not invent a row or column number when the find fails.

A large structural change can still break formulas that depend on layout. Keep the script small.

**Status:** solid v1.

[Docs](/docs) · [Slides](/slides) · [Install](/install)
