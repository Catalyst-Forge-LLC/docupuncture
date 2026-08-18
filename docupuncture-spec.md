# Docupuncture

**Precise, zero-damage edits for live Google Workspace documents.**

Docupuncture is the practice of inserting a change into an existing Google Doc, Sheet, or Slides file via a small, self-contained Apps Script that the user pastes and runs themselves. The rest of the document stays completely intact — formatting, comments, theme, notes, data validation, layout, and history are preserved.

---

## The Problem

When an AI or tool regenerates a Google Doc, Sheet, or Slides deck, it usually destroys:

- Theme, branding, and logos
- Comments and suggestion threads
- Fine-grained formatting and styles
- Notes and data validation (Sheets)
- Layout and positioning (Slides)
- Revision history and collaborator attribution

People who care about their documents hate starting over.

---

## The Solution

Instead of regenerating the file, Docupuncture generates a focused Apps Script that performs *only* the requested changes using robust text (or value) anchors. The user opens the live file → Extensions → Apps Script → pastes the script → runs it once.

The needle goes in. The rest of the document stays.

---

## The Name

The other tools in the shop strike, press, or contain. A needle is still metal from the same fire, but you don't swing it. You place it.

Acupuncture treats a living body in situ: insert at a point, leave the rest of the organism alone. Docupuncture does that to a document you already care about. This one just went to acupuncture school.

---

## Core Principles

1. **Zero collateral damage** — only the intended changes land.
2. **User-owned execution** — the script runs as the user, on their file. Minimal trust required.
3. **Idempotent** — safe to re-run; never duplicates content.
4. **Fail loudly** — missing anchors are logged and skipped; locations are never invented.
5. **Risk-aware** — clear guidance when the set of edits is too large or structural.
6. **Anchor-robust** — primary unique literal + secondary nearby context when helpful.

---

## The Family

| Skill | Surface | Strengths |
|-------|---------|-----------|
| **Docupuncture for Docs** | Google Docs | Best overall fit. Rich document model, comments, tabs, lists, partial styling. |
| **Docupuncture for Sheets** | Google Sheets | Extremely natural. Grid + ranges are already a map of points. Preserves formatting, notes, data validation. |
| **Docupuncture for Slides** | Google Slides | Strong for content/text edits. Layout surgery is higher risk and intentionally scoped carefully in v1. |

One brand. Same philosophy. Specialized implementations.

---

## Benefits

- **Preserves everything** that full regeneration destroys.
- **Extremely low friction** for the user (paste → authorize once → run).
- **Transparent and auditable** — the script is plain JavaScript the user can read.
- **Works on documents the user already cares about** — no need to start over.
- **Ideal for iterative collaboration** with AIs on real, formatted files.
- **Safe by design** — idempotent + fail-loudly + risk tiers.

---

## How It Works (User Flow)

1. User asks for changes to an existing Google Doc / Sheet / Slides file.
2. Agent reads the live file (or key parts of it) and confirms the exact edits.
3. Agent generates a clean, self-contained Apps Script following the skill rules.
4. User opens the file → Extensions → Apps Script → pastes → runs `applyEdits`.
5. (Optional) Agent re-reads the file afterward to verify every change landed.

---

## Risk Guidance (Shared Across Skills)

- **Low risk** (small number of discrete, local changes): pure docupuncture.
- **Medium risk**: still preferred, but warn about possible anchor drift if the user makes manual edits between runs.
- **High risk** (large structural changes, many interdependent pieces, major layout work): recommend sequential smaller scripts or full regeneration.

---

## Landing Page Copy

### Hero

**Docupuncture**  
Needles for live Google documents.  
Zero damage to the rest of the file.

Stop regenerating. Start patching.

[ Get the skills ]  ·  [ How it works ]

---

### The Problem

You ask an AI to tweak a carefully formatted Google Doc, Sheet, or deck.  
It hands you a brand-new file.

Gone:
- Your theme and branding
- Comments and suggestion threads
- Logos, notes, data validation, and precise layout

That’s not editing. That’s starting over.

---

### The Solution

Docupuncture delivers a small, self-contained Apps Script that performs *only* the changes you asked for — right on the live file.

You paste it into Extensions → Apps Script, run it once, and everything else stays exactly as it was.

Insert the change. Leave the rest.

---

### Why it feels different

- **Preserves everything** — formatting, comments, theme, history, notes, validation, layout.
- **You stay in control** — the script runs as *you*, on *your* file.
- **Idempotent & honest** — safe to re-run; missing anchors are logged, never guessed.
- **Built for iteration** — perfect for repeated back-and-forth with an AI on a real document.

---

### How it works

1. Tell the AI what to change in an existing Google Doc, Sheet, or Slides file.
2. It reads the live file and generates a clean Apps Script.
3. You open the file → Extensions → Apps Script → paste → Run.
4. Done. The needle went in. The rest of the document stays.

---

### One brand, three surfaces

Docupuncture works across Google Workspace.  
Same philosophy. Same zero-damage approach.  
Specialized needles for **Docs**, **Sheets**, and **Slides**.

Forged in the same shop as the rest of the [Catalyst Forge tools](https://catalystforge.com/open-source). A needle is still a metal instrument — you just place it instead of swinging it.

---

### Footer CTA

Stop regenerating documents you already love.  
Start doing precise, zero-damage edits.

**Docupuncture** — because your documents deserve better than a full rewrite.

---

## Technical Notes (for implementers)

- Prefer **container-bound** scripts (`getActiveDocument()`, `getActiveSpreadsheet()`, `getActivePresentation()`).
- Always make edits **idempotent**.
- Ship every script with a **`DRY_RUN` flag, default `true`** — anchors are located and logged (`→ WOULD APPLY`) without touching the file. Read the log, flip the flag, run again.
- Always **fail loudly** on missing anchors and continue with remaining edits.
- Provide a clear `Logger.log` summary at the end (`X applied, Y skipped`).
- Include a short sample skeleton with each skill so generated scripts stay consistent.
- Never hardcode credentials or API keys.

---

## Current Status

- **Docs**: Mature v1
- **Sheets**: Solid v1
- **Slides**: Solid v1 (content-focused; layout surgery flagged as higher risk)

All three skills ship with a recommended sample skeleton.
