---
title: DocuPuncture for Docs
description: In-place edits to an existing Google Doc. Paste an Apps Script, run it once.
order: 3
---

Use this when the file is a Google Doc you already care about.

The script finds unique existing text, edits next to it, and can copy formatting from the neighboring paragraph or list. Theme, images, tables, and comments on untouched text are designed to stay. A comment on replaced or deleted text can orphan. An edit adds a revision.

Skill file: [`skills/docupuncture-docs/SKILL.md`](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-docs/SKILL.md)

## When to use it

Edits, tweaks, or another round on an existing Doc. If someone says "DocuPuncture," skip the menu and write the script.

## What the script does

- Finds a unique phrase with `body.findText`, then a nearby backup phrase if the primary is missing.
- Skips a targeted edit when that phrase matches more than once.
- Escapes the phrase. `findText` treats it as a regex.
- Inserts paragraphs and list items by sibling index, then copies formatting.
- Uses `replaceText` for a simple swap. That form applies to every match.
- For the showcased insert, skips the edit if the new text is already there.

Apps Script cannot delete tabs or edit comments. Comments on untouched text stay.

**Status:** mature v1.

[Sheets](/sheets) · [Slides](/slides) · [Install](/install)
