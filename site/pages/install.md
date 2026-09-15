---
title: Get started
description: Choose a surface, install that skill in your agent, then run a dry-run example.
order: 1
---

Install one DocuPuncture skill in your agent, then use it. You do not need Node or npm for this path. The skill writes a reviewable Apps Script. It does not grant Google access and it does not open your files. The live Google file changes only when you paste the script and run it.

## Which skill?

Choose before you install. They are different folders.

| Skill | Zip | When |
| --- | --- | --- |
| [Docs](/docs) | [docupuncture-docs.zip](/skills/docupuncture-docs.zip) | An existing Google Doc |
| [Sheets](/sheets) | [docupuncture-sheets.zip](/skills/docupuncture-sheets.zip) | An existing Google Sheet |
| [Slides](/slides) | [docupuncture-slides.zip](/skills/docupuncture-slides.zip) | Text on an existing deck |

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project or user skills folder | Chat (script delivery) | Host listing / discovery not independently verified in this docs pass |
| Claude Code | Project or `~/.claude/skills/` | Chat | Same |
| Claude.ai | Uploaded skill zip | Chat | Same |
| Other agents that read `SKILL.md` | Manual copy | Chat | Unverified |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A plausible Apps Script alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

## Cursor

### Get it

Download the zip for the skill you chose:

- [docupuncture-docs.zip](/skills/docupuncture-docs.zip)
- [docupuncture-sheets.zip](/skills/docupuncture-sheets.zip)
- [docupuncture-slides.zip](/skills/docupuncture-slides.zip)

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project:

`.cursor/skills/docupuncture-docs/`

or the matching skill name.

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

If Cursor lists installed skills, confirm the skill name. Otherwise ask it to open that skill’s `SKILL.md` and quote the first heading.

### Try it

**Docs** (fictional planning exercise — do not run against a real file unless you intend to):

> Use DocuPuncture for Docs. Follow the installed docupuncture-docs skill. This is a fictional dry-run exercise. Write an Apps Script with DRY_RUN = true. Do not claim the Google Doc was changed.
>
> Target: a fictional Google Doc titled “Desk-stamp operator guide.”
> Current heading text (exact): `## Setup`
> Intended change: replace that heading with `## Install`
> Leave surrounding paragraphs alone.

### Find the result

The agent returns an Apps Script in chat. Success looks like this shape, not identical code from every model:

- `DRY_RUN = true` by default
- A unique anchor on `## Setup`
- A log plan for the heading swap
- Instructions to paste into Extensions → Apps Script and run `applyEdits`

That the example behaved is not the same check as discovery. The live file stays unchanged until you run the script and flip `DRY_RUN`.

## Claude Code

### Get it

Download the zip for the skill you chose:

- [docupuncture-docs.zip](/skills/docupuncture-docs.zip)
- [docupuncture-sheets.zip](/skills/docupuncture-sheets.zip)
- [docupuncture-slides.zip](/skills/docupuncture-slides.zip)

### Add it

Unzip, then put the folder in the repo:

`.claude/skills/docupuncture-docs/`

or the matching skill name.

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/<skill>/` instead.

### Confirm it

If Claude Code lists skills, confirm the skill name. Otherwise ask it to open that skill’s `SKILL.md` and quote the first heading.

### Try it

> Use DocuPuncture for Docs. Follow the installed docupuncture-docs skill. This is a fictional dry-run exercise. Write an Apps Script with DRY_RUN = true. Do not claim the Google Doc was changed.
>
> Target: a fictional Google Doc titled “Desk-stamp operator guide.”
> Current heading text (exact): `## Setup`
> Intended change: replace that heading with `## Install`
> Leave surrounding paragraphs alone.

### Find the result

The Apps Script appears in chat with `DRY_RUN = true` and a unique anchor. You paste and run it later if you want a real file changed.

## Claude.ai

### Get it

Download the zip for the skill you chose.

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

If the product shows installed skills, confirm the skill name. Otherwise ask the chat to summarize what DocuPuncture delivers before any Google paste.

### Try it

Use the same fictional Docs request as in [Cursor](#try-it).

### Find the result

The Apps Script appears in the chat. The Google file does not change until you paste and run it.

## After the script

There is no apply skill inside the agent. You paste into Extensions → Apps Script, run `applyEdits` with `DRY_RUN = true`, read the log, then set `DRY_RUN = false` and run again if the log matches.

### Update or remove

Replace the installed skill folder (or re-upload the zip) to update. Delete that folder or remove the uploaded skill to uninstall. Copied skills do not refresh when you bump the npm package.

## Other ways to ask

Once the first run works:

- DocuPuncture this heading swap.
- Write a Sheets patch for this cell.
- Slides: replace this shape text.

Those are later shortcuts. They are not the install check.

## Other installation methods

npm supplies the skill folders. It does not register a skill with the agent.

```bash
pnpm add docupuncture
```

Copy one folder from `node_modules/docupuncture/skills/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/docupuncture) and copy `skills/docupuncture-docs/` (or sheets / slides).

### Install for all projects

- Cursor: `~/.cursor/skills/<skill>/`
- Claude Code: `~/.claude/skills/<skill>/`

Same folder shape. Discovery and first-use checks are the same.

[The three skills](/skills)
