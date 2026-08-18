---
title: Treat the document you already have.
description: In-place edits for live Google Docs, Sheets, and Slides. Insert only the change; theme, comments, and history stay.
order: 0
---

You ask an AI to tweak a formatted Google Doc, Sheet, or deck. It hands you a new file. Theme, comments, logos, notes, and layout are gone.

Docupuncture writes a small Apps Script that changes only what you asked for, on the live file. You paste it into Extensions → Apps Script and run it. The rest of the document stays.

<div class="cta-row">
  <a class="cta cta-primary" href="/install">Get the skills</a>
  <a class="cta cta-secondary" href="/skills">How it works</a>
</div>

## What you lose when the file is regenerated

- Theme and branding
- Comments and suggestion threads
- Logos, notes, data validation, and layout

## How a run works

1. Tell the agent what to change in an existing Doc, Sheet, or Slides file.
2. It reads the live file and writes an Apps Script.
3. You open the file → Extensions → Apps Script → paste → run `applyEdits`.
4. First run is a dry run. Read the log, set `DRY_RUN = false`, run again.

The script runs as you, on your file. Missing anchors are logged and skipped. Re-running does not duplicate work.

## Docs, Sheets, Slides

| Skill | Surface | Fit |
| --- | --- | --- |
| [Docs](/docs) | Google Docs | Comments, tabs, lists, partial styling. |
| [Sheets](/sheets) | Google Sheets | Grid and ranges. Notes and validation stay. |
| [Slides](/slides) | Google Slides | Text and content. Layout surgery is higher risk. |

The needle goes in. The rest of the document stays.

[Install](/install) · [Skills](/skills) · [GitHub](https://github.com/Catalyst-Forge-LLC/docupuncture)

On the [Catalyst Forge](https://www.catalystforge.com/open-source) shelf next to [TemperPass](https://temperpass.dev): a rule set you point an agent at.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
