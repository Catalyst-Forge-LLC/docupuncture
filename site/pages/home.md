---
title: Treat the document you already have.
description: Targeted Apps Script edits in an existing Google Doc, Sheet, or Slides file.
order: 0
---

You ask an agent to tweak a formatted Google Doc, Sheet, or deck. It hands you a new file. Theme, format, comments, and the existing revision thread are gone.

DocuPuncture prepares a small Apps Script that makes targeted changes to the file you already have. You review the script, paste it into Extensions → Apps Script, and run it yourself. The first run is a dry run that only logs. The script is designed to preserve surrounding structure for supported edit types.

<div class="cta-row">
  <a class="cta cta-primary" href="/install">Install in your agent</a>
  <a class="cta cta-secondary" href="/skills">How it works</a>
</div>

## What you lose when the file is regenerated

- Theme and branding
- Comments and suggestion threads
- Logos, notes, data validation, and layout

## How a run works

1. Point the agent at an existing Doc, Sheet, or Slides file (URL or ID) and the intended changes.
2. Give it exact current text for anchors. If your host already has a Drive connector, it can read the file. The skill does not grant Google access by itself.
3. Review the Apps Script it writes.
4. Open the file, go to Extensions → Apps Script, paste, and run `applyEdits`.
5. First run is a dry run. Read the log, set `DRY_RUN = false`, then run again.

Before running the generated script, confirm that it starts with `DRY_RUN = true`, uses the intended active file, logs missing or ambiguous anchors, and reports applied and skipped edits. Check repeat-run behavior for the specific operation. The script running as you, on your file, is the design. Generated output is not guaranteed to do all of that until you read it. Missing or ambiguous anchors are meant to be logged and skipped. For the showcased insert and update operations, a repeat run is meant to skip work that is already there.

## Supported edits

Preservation is a design goal for the operations below. An edit adds a revision. The existing file stays the same artifact. Formatting and comment anchors are not guaranteed on every edit.

| Surface | Supported edits | Watch |
| --- | --- | --- |
| [Docs](/docs) | Text swap, insert or delete at a unique anchor, and partial span styling | Comment anchors on replaced or deleted text can orphan. Tabs cannot be deleted by script. |
| [Sheets](/sheets) | Cell or range value update at a unique finder, or a header plus offset | Structural row changes can break dependent formulas. Notes and validation stay on cells you do not rewrite. |
| [Slides](/slides) | Text on existing shapes, using `replaceAllText` or a targeted text range | `setText` flattens mixed character styling. Moving or resizing many objects is layout surgery. |

[Install in your agent](/install) · [Skills](/skills) · [Posts](/posts) · [GitHub](https://github.com/Catalyst-Forge-LLC/docupuncture)

On the [Catalyst Forge](https://www.catalystforge.com/open-source) shelf next to [TemperPass](https://temperpass.dev): a rule set you point an agent at.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
