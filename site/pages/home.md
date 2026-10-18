---
title: "Change the document you already have."
description: "Ask for a specific edit to a Google Doc, Sheet, or Slides file. DocuPuncture prepares an Apps Script for that existing file, so a small change does not require rebuilding the whole document."
order: 0
---

<section class="value-hero" aria-label="DocuPuncture overview"><div class="value-intro"><div class="value-headline"><p class="value-kind">Agent skill for targeted Google Workspace edits</p><h1>Change the document you already have.</h1></div><div class="value-pitch"><p class="value-lede">Ask for a specific edit to a Google Doc, Sheet, or Slides file. DocuPuncture prepares an Apps Script for that existing file, so a small change does not require rebuilding the whole document.</p><div class="cta-row"><a class="cta cta-primary" href="/install">Install DocuPuncture</a><a class="cta cta-secondary" href="#sentence-example">See the exact sentence change</a></div><p class="value-limit">You review and run the script in Apps Script. Start with a dry run. The skill does not grant Google access, and preservation depends on the operation.</p></div></div>
<figure class="value-proof worked-example" id="sentence-example" tabindex="-1">
<figcaption>Move a pilot date without rebuilding the proposal</figcaption>
<p class="example-context">Illustrative Google Docs edit. You provide the existing text and requested change; the agent prepares a script for the same document.</p>
<section class="example-step" aria-labelledby="example-step-1">
<h2 id="example-step-1"><span>1 · Existing proposal</span> One date needs to change</h2>
<blockquote><p><strong>Pilot schedule</strong><br>Pilot begins on 4 May.<br>The review meeting stays on 18 May.</p></blockquote><p>The request is to move the pilot start to 11 May. The surrounding proposal stays in place.</p>
</section>
<section class="example-step example-report" aria-labelledby="example-step-2">
<h2 id="example-step-2"><span>2 · Script to review</span> Target that sentence and dry-run first</h2>
<p>Excerpt of the generated Apps Script settings:</p><pre><code>const DRY_RUN = true;
const before = "Pilot begins on 4 May.";
const after = "Pilot begins on 11 May.";</code></pre><p>The script must find that text exactly once. The dry run reports the planned replacement; a missing or repeated anchor is skipped.</p>
</section>
<section class="example-step" aria-labelledby="example-step-3">
<h2 id="example-step-3"><span>3 · You apply the edit</span> The existing document gets the new date</h2>
<p>After reviewing the script and dry-run log, you set <code>DRY_RUN = false</code> and run <code>applyEdits</code>.</p><blockquote><p><strong>Pilot schedule</strong><br>Pilot begins on 11 May.<br>The review meeting stays on 18 May.</p></blockquote><p class="example-payoff">The second sentence and the rest of the proposal are outside this edit.</p>
</section>
<p class="value-note">The excerpt is not a complete runnable script. Inspect the full script before use. Formatting and comment anchors on replaced text need checking; preservation is not guaranteed.</p>
<p class="example-links"><a href="#how-a-run-works">Follow the review and apply workflow</a> · <a href="/docs">See supported Google Docs edits</a></p>
</figure></section>

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
