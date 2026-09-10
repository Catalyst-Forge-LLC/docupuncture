---
title: DocuPuncture for Slides
description: In-place text edits to an existing Google Slides deck. Paste an Apps Script, run it once.
order: 5
---

Use this when the file is a deck you already care about, and the work is text or content on shapes that exist.

Theme, speaker notes, and the layout of unmoved objects are designed to stay. v1 does not move or resize a pile of objects. That is layout surgery. Flag it. An edit adds a revision.

Skill file: [`skills/docupuncture-slides/SKILL.md`](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-slides/SKILL.md)

## When to use it

Text swaps and content updates on an existing deck.

## What the script does

- Finds a shape by distinctive text. A single-shape edit skips when more than one shape matches.
- Prefers `replaceAllText` or a small `TextRange` so mixed styling is not flattened.
- Avoids `setText` on a mixed-style shape unless the whole run is being replaced.
- Counts matches in a dry run. `replaceAllText` has no read-only mode.
- For the showcased title update, skips when the shape already has the new text.

Never guess a slide index or object ID.

**Status:** solid v1, content-focused.

[Docs](/docs) · [Sheets](/sheets) · [Install](/install)
