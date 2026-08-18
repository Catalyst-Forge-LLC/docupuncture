# Docupuncture

Precise, zero-damage edits for live Google Workspace documents.

When an AI regenerates a Google Doc, Sheet, or Slides deck, it usually destroys the theme, comments, logos, notes, validation, layout, and history. People who care about their documents hate starting over.

Docupuncture is the practice of inserting a change into a live file via a small, self-contained Apps Script the user pastes and runs themselves. The needle goes in. The rest of the document stays.

Written **Docupuncture**. Treat the document. Don't replace it.

## The skills

Expert skills for Cursor, Claude Code, and anything else that reads a `SKILL.md` file. Copy a folder into the skills directory. When the user asks for edits to an existing Workspace file, the agent writes a script instead of a new document.

| Skill | Surface | Strengths |
| --- | --- | --- |
| [`docupuncture`](skills/docupuncture/SKILL.md) | Google Docs | Best overall fit. Rich document model, comments, tabs, lists, partial styling. |
| [`docupuncture-sheets`](skills/docupuncture-sheets/SKILL.md) | Google Sheets | Grid + ranges. Preserves formatting, notes, data validation. |
| [`docupuncture-slides`](skills/docupuncture-slides/SKILL.md) | Google Slides | Content and text edits. Layout surgery is higher risk and scoped carefully. |

One brand. Same philosophy. Specialized needles.

## Install

```bash
pnpm add docupuncture
```

Copy one folder from `node_modules/docupuncture/skills/` into your agent's skill directory. Cursor looks for `SKILL.md` in a named folder.

```bash
# or clone and copy from the repo
git clone https://github.com/Catalyst-Forge-LLC/docupuncture.git
# then copy skills/docupuncture/  (or -sheets / -slides) into your agent skills path
```

Site: [docupuncture.com](https://docupuncture.com)

## How a run works

1. The agent reads the live file and confirms the exact edits.
2. It generates a clean, self-contained Apps Script.
3. You open the file → Extensions → Apps Script → paste → run `applyEdits`.
4. First run is a dry run (`DRY_RUN = true`). Read the log, flip the flag, run again.

Every script is idempotent, fails loudly on missing anchors, and never invents a location.

## Why the name

The other tools in the shop strike, press, or contain. A needle is still metal from the same fire, but you don't swing it. You place it.

Acupuncture treats a living body in situ: insert at a point, leave the rest of the organism alone. Docupuncture does that to a document you already care about.

## On the Catalyst Forge shelf

Lives next to FilePress, IngotVault, and the rest of the forge tools. Closest cousin is TemperPass: a rule set you point an agent at.

## License

MIT. Built by [Catalyst Forge LLC](https://www.catalystforge.com).
