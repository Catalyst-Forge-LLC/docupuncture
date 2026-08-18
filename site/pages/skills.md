---
title: Skills
description: One brand. Three surfaces. Specialized needles for Docs, Sheets, and Slides.
order: 2
---

Docupuncture is one brand with three implementations. Same principles on every surface: zero collateral damage, user-owned execution, idempotent edits, fail loudly, never invent a location.

## [Docs](/docs)

Best overall fit. The Google Docs model is rich — comments, tabs, lists, partial styling — and a full regeneration destroys all of it. The Docs skill locates insertion points with unique text anchors, copies sibling formatting, and leaves untouched regions alone.

**Status:** mature v1.

## [Sheets](/sheets)

Extremely natural. A grid plus ranges makes surgical edits easy. Values change; formatting, notes, data validation, conditional formatting, and charts stay.

**Status:** solid v1.

## [Slides](/slides)

Strong for content and text. Theme, layout, and speaker notes survive. Moving or resizing many objects is fragile, so v1 flags layout surgery as higher risk and prefers text needles.

**Status:** solid v1, content-focused.

## Shared rules

Every generated script:

- is **container-bound** (`getActiveDocument()`, `getActiveSpreadsheet()`, `getActivePresentation()`)
- ships a **`DRY_RUN` flag, default `true`**
- is **idempotent** — safe to re-run; never duplicates content
- **fails loudly** on missing anchors and continues with the rest
- ends with a `Logger.log` summary (`X applied, Y skipped`)

## Risk guidance

- **Low risk** (a handful of discrete, local changes): pure docupuncture.
- **Medium risk**: still preferred, but warn about anchor drift if the file is edited between runs.
- **High risk** (large structural changes, many interdependent pieces, major layout work): sequential smaller scripts, or a full regeneration.

Do not force a single massive script.

[Install](/install)
