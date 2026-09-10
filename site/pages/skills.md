---
title: Skills
description: Three skills. Docs, Sheets, and Slides. Same rules on each surface.
order: 2
---

Same rules on every surface: precise edits, the script runs as you, missing or ambiguous anchors are logged, and locations are never invented. Surrounding structure is a design goal for supported edit types. An edit adds a revision.

## [Docs](/docs)

Best fit. Comments, tabs, lists, and partial styling survive when the script finds unique text and edits next to it. A comment on replaced or deleted text can orphan.

**Status:** mature v1.

## [Sheets](/sheets)

A grid is already a map of points. Values change. Formatting, notes, and validation stay on cells you do not rewrite.

**Status:** solid v1.

## [Slides](/slides)

Good for text on shapes that already exist. Theme and speaker notes survive. Moving or resizing many objects is layout surgery. v1 flags that and prefers text.

**Status:** solid v1, content-focused.

## What every script does

- Uses the open file (`getActiveDocument()`, `getActiveSpreadsheet()`, or `getActivePresentation()`)
- Ships `DRY_RUN = true` by default, and logs without writing
- Reports a missing or ambiguous targeted anchor instead of guessing
- For the showcased insert and update operations, skips work that is already done
- Ends with a count: applied vs skipped

The [home page](/) has the supported-edit matrix. Do not treat every generated script as idempotent.

## When the change is too big

- A handful of local edits: one script.
- More than that, or the file is still being edited: warn about drifting anchors, or split the work.
- Large restructuring: several smaller scripts, or regenerate the file.

[Install](/install)
