---
title: Docupuncture for Sheets
description: Precise in-place edits to an existing Google Sheet via paste-and-run Apps Script.
order: 4
---

The Sheets implementation. Extremely natural — a grid plus ranges is already a surgical interface.

Deliver edits as a self-contained Apps Script. Values change. Cell formatting, notes, data validation, conditional formatting, charts, and structure stay.

Skill file: [`skills/docupuncture-sheets/SKILL.md`](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-sheets/SKILL.md)

## When to use it

Whenever someone asks for edits, tweaks, or iterations to an existing Google Sheet. Prefer this over generating a new spreadsheet.

## What the script does

- Locates rows with `createTextFinder` or stable headers plus relative offsets.
- Updates values on already-formatted cells so notes and validation stay put.
- Skips a cell when the desired end state is already there.
- Never invents row or column numbers when an anchor is missing.

Complex formula dependencies can still break if the structural change is large. Prefer small, targeted needles.

**Status:** solid v1.

[Docs](/docs) · [Slides](/slides) · [Install](/install)
