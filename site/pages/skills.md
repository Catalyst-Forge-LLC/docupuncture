---
title: Skills
description: Three skills. Docs, Sheets, and Slides. Same rules on each surface.
order: 2
---

Same rules on every surface: only the intended change lands, the script runs as you, missing anchors are logged, locations are never invented.

## [Docs](/docs)

Best fit. Comments, tabs, lists, and partial styling survive because the script finds existing text and edits next to it.

**Status:** mature v1.

## [Sheets](/sheets)

A grid is already a map of points. Values change. Formatting, notes, validation, and charts stay.

**Status:** solid v1.

## [Slides](/slides)

Good for text on shapes that already exist. Theme and speaker notes survive. Moving or resizing many objects is layout surgery; v1 flags that and prefers text.

**Status:** solid v1, content-focused.

## What every script does

- Uses the open file (`getActiveDocument()`, `getActiveSpreadsheet()`, or `getActivePresentation()`)
- Ships `DRY_RUN = true` by default
- Skips work that is already done
- Logs missing anchors and continues
- Ends with a count: applied vs skipped

## When the change is too big

- A handful of local edits: one script.
- More than that, or the file is still being edited: warn about drifting anchors, or split the work.
- Large restructuring: several smaller scripts, or regenerate the file.

[Install](/install)
