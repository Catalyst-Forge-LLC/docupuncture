---
title: Needles for live Google documents.
description: Zero damage to the rest of the document. Stop regenerating. Start patching.
order: 0
---

Stop regenerating. Start patching.

Docupuncture delivers a small, self-contained Apps Script that performs *only* the changes you asked for — right on the live file. You paste it into Extensions → Apps Script, run it once, and everything else stays exactly as it was.

Insert the change. Leave the rest.

<div class="cta-row">
  <a class="cta cta-primary" href="/install">Get the skills</a>
  <a class="cta cta-secondary" href="/skills">How it works</a>
</div>

## The problem

You ask an AI to tweak a carefully formatted Google Doc, Sheet, or deck. It hands you a brand-new file.

Gone:

- Your theme and branding
- Comments and suggestion threads
- Logos, notes, data validation, and precise layout

That's not editing. That's starting over.

## The solution

Instead of regenerating the file, Docupuncture generates a focused Apps Script that performs only the requested changes using robust text (or value) anchors.

The user opens the live file → Extensions → Apps Script → pastes the script → runs it once.

The needle goes in. The rest of the document stays.

## Why it feels different

- **Preserves everything** — formatting, comments, theme, history, notes, validation, layout.
- **You stay in control** — the script runs as *you*, on *your* file.
- **Idempotent and honest** — safe to re-run; missing anchors are logged, never guessed.
- **Built for iteration** — perfect for repeated back-and-forth with an AI on a real document.

## How it works

1. Tell the AI what to change in an existing Google Doc, Sheet, or Slides file.
2. It reads the live file and generates a clean Apps Script.
3. You open the file → Extensions → Apps Script → paste → Run.
4. First run is a dry run. Read the log, flip `DRY_RUN` to `false`, run again.
5. Done. The needle went in. The rest of the document stays.

## One brand, three surfaces

Docupuncture works across Google Workspace. Same philosophy. Same zero-damage approach. Specialized needles for **Docs**, **Sheets**, and **Slides**.

| Skill | Surface | Fit |
| --- | --- | --- |
| [Docs](/docs) | Google Docs | Best overall. Comments, tabs, lists, partial styling. |
| [Sheets](/sheets) | Google Sheets | Extremely natural. Grid + ranges. Notes and validation stay. |
| [Slides](/slides) | Google Slides | Strong for content. Layout surgery is higher risk in v1. |

[All three skills](/skills) · [Install](/install) · [GitHub](https://github.com/Catalyst-Forge-LLC/docupuncture)

## On the Catalyst Forge shelf

Forged in the same shop as the rest of the [Catalyst Forge tools](https://www.catalystforge.com/open-source). A needle is still a metal instrument — you just place it instead of swinging it.

Closest cousin is [TemperPass](https://temperpass.dev): a rule set you point an agent at.

Stop regenerating documents you already love. Start doing precise, zero-damage edits.

**Docupuncture** — because your documents deserve better than a full rewrite.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
