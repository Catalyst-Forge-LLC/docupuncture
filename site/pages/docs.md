---
title: Docupuncture for Docs
description: Precise in-place edits to an existing Google Doc via paste-and-run Apps Script.
order: 3
---

The Docs implementation. Best overall fit in the family.

Deliver edits as a self-contained Apps Script the user pastes into Extensions → Apps Script and runs, instead of regenerating a new document. In-place patching preserves fonts, colors, images, tables, comments, and theme that API imports and full regenerations destroy.

Skill file: [`skills/docupuncture/SKILL.md`](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture/SKILL.md)

## When to use it

Whenever someone asks for edits, tweaks, or iterations to an existing Google Doc — especially repeated rounds. Skip the offer and go straight to the script if they say "docupuncture."

## What the script does

- Locates edit points with `body.findText`, using a unique literal plus a secondary nearby context string when helpful.
- Escapes every anchor — `findText` treats its pattern as a regex.
- Inserts paragraphs and list items by sibling index, then copies formatting.
- Replaces simple text with `replaceText`; does structural work on the existing element.
- Checks whether the end state already exists before writing anything.

Apps Script cannot delete tabs or edit comments. Comments in untouched regions stay. An edit that deletes the exact text a comment is anchored to will orphan that comment — the skill flags that when it applies.

**Status:** mature v1.

[Sheets](/sheets) · [Slides](/slides) · [Install](/install)
