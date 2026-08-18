---
title: Docupuncture for Slides
description: Precise in-place text and content edits to an existing Google Slides deck.
order: 5
---

The Slides implementation. Strong for content. Cautious about layout.

Deliver edits as a self-contained Apps Script. Theme, layout, speaker notes, and most styling survive. v1 focuses on text and simple shape updates. Moving or resizing many objects is higher risk and should be flagged.

Skill file: [`skills/docupuncture-slides/SKILL.md`](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-slides/SKILL.md)

## When to use it

Whenever someone asks for edits, tweaks, or iterations to an existing deck — especially text swaps and content updates on shapes that already exist.

## What the script does

- Locates shapes by distinctive text across slides.
- Prefers `replaceAllText` or a targeted `TextRange` so mixed character styling is not flattened.
- Avoids `setText` on a mixed-style shape unless the whole run is being replaced.
- Counts matches in a dry run instead of calling `replaceAllText`, which has no read-only mode.

Never guess slide indices or object IDs.

**Status:** solid v1, content-focused.

[Docs](/docs) · [Sheets](/sheets) · [Install](/install)
