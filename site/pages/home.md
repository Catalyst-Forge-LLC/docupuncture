---
title: "Change the document you already have."
description: "Ask for a specific edit to a Google Doc, Sheet, or Slides file. DocuPuncture prepares an Apps Script for that existing file, so a small change does not require rebuilding the whole document."
order: 0
---

<section class="value-hero" aria-label="DocuPuncture overview"><div class="value-intro"><p class="value-kind">Agent skill for targeted Google Workspace edits</p><h1>Change the document you already have.</h1><p class="value-lede">Ask for a specific edit to a Google Doc, Sheet, or Slides file. DocuPuncture prepares an Apps Script for that existing file, so a small change does not require rebuilding the whole document.</p><div class="cta-row"><a class="cta cta-primary" href="/install">Install DocuPuncture</a><a class="cta cta-secondary" href="#how-a-run-works">See the edit workflow</a></div><p class="value-limit">You review and run the script in Apps Script. Start with a dry run. The skill does not grant Google access, and preservation depends on the operation.</p></div><figure class="value-proof"><figcaption>Illustrative example</figcaption><p><strong>Starting point</strong><br>A formatted proposal needs one sentence changed at a unique text anchor.</p><div class="value-result"><p><strong>What you get</strong><br>A small script targeting that anchor in the existing document.</p></div><p>Review the dry-run log, then apply the intended edit in the same file.</p><p class="value-note">Illustrative supported edit. Missing or ambiguous anchors should be skipped.</p></figure></section>

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
