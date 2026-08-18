---
title: Docupuncture for Docs
description: In-place edits to an existing Google Doc. Paste an Apps Script, run it once.
order: 3
---

Use this when the file is a Google Doc you already care about.

The script finds existing text, edits next to it, and copies formatting from the neighboring paragraph or list. Fonts, colors, images, tables, comments, and theme stay unless the edit deletes the exact text a comment is attached to.

Skill file: [`skills/docupuncture-docs/SKILL.md`](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-docs/SKILL.md)

## When to use it

Edits, tweaks, or another round on an existing Doc. If someone says "docupuncture," skip the menu and write the script.

## What the script does

- Finds a unique phrase with `body.findText`, then a nearby backup phrase if needed.
- Escapes the phrase. `findText` treats it as a regex.
- Inserts paragraphs and list items by sibling index, then copies formatting.
- Uses `replaceText` for a simple swap.
- Skips the edit if the new text is already there.

Apps Script cannot delete tabs or edit comments. Comments on untouched text stay.

**Status:** mature v1.

[Sheets](/sheets) · [Slides](/slides) · [Install](/install)
