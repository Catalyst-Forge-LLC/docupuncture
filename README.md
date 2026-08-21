# Docupuncture

Treat the document you already have.

Insert precise edits without changing the theme, format, comments, or history.

When an AI regenerates a Google Doc, Sheet, or deck, those things usually go with it. Docupuncture writes a small Apps Script you paste and run on the live file.

## The skills

Copy a folder into Cursor, Claude Code, or anything else that reads `SKILL.md`. When someone asks for edits to an existing Workspace file, the agent writes a script instead of a new document.

| Skill | Surface | Fit |
| --- | --- | --- |
| [`docupuncture-docs`](skills/docupuncture-docs/SKILL.md) | Google Docs | Comments, tabs, lists, partial styling. |
| [`docupuncture-sheets`](skills/docupuncture-sheets/SKILL.md) | Google Sheets | Grid and ranges. Notes and validation stay. |
| [`docupuncture-slides`](skills/docupuncture-slides/SKILL.md) | Google Slides | Text and content. Layout surgery is higher risk. |

## Install

```bash
pnpm add docupuncture
```

Copy one folder from `node_modules/docupuncture/skills/` into the agent's skills directory.

```bash
git clone https://github.com/Catalyst-Forge-LLC/docupuncture.git
# then copy skills/docupuncture-docs/  (or -sheets / -slides)
```

Site: [docupuncture.dev](https://docupuncture.dev)

## How a run works

1. The agent reads the live file and confirms the edits.
2. It writes an Apps Script.
3. You open the file → Extensions → Apps Script → paste → run `applyEdits`.
4. First run is a dry run (`DRY_RUN = true`). Read the log, flip the flag, run again.

The script is safe to re-run. Missing anchors are logged. It never invents a location.

## Why the name

The other tools in the shop strike, press, or contain. A needle is still metal from the same fire, but you don't swing it. You place it.

Acupuncture treats a living body in place: insert at a point, leave the rest alone. Docupuncture does that to a document you already care about.

Closest cousin on the shelf is [TemperPass](https://temperpass.dev): a rule set you point an agent at.

<!-- xfacts-nutrition-label -->

## Nutrition label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNpVkUFLAzEQhf_K8s5pi9dcC4JSvdibiKTZaRrNzoRkUllK_7ukVam3YeZ98yYvJxxh7wzYTQSLUXzLjb22QjDQOffuJCyFssCgqtNWYeG8xmPXpOiJa5c9PWyvCv8Je0JyHJoLffLoju7Fl5jVDNs507WGQWms8eL8LCMtPyoMDlI1coDFOkkb98kVwtlgpFxhX09gWATSfUyUC9XOZFjsSf1hKDSJ0tCHgxdWYsXZXKGv4jgkKj_ASDnJPBHroCJp2EsZ_I3lm0E9-j_Lm2sMCuzvoReuB9c3OY3CQ4165XctprGHkZ3_dIHeJ8cuUKcz5wkGPsKChS9P7CHXqFLmvl41V7tahaiHtlt6mVZrpy7NVRf3UgItNpv16t-Pnb8BxMCe5g) · [raw](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/APP_FACTS.md)
- **SkillFacts:** [viewer](https://skillfacts.dev/v#sf1.eNqtk1FP20gQx7_KyH0pEQ6Bh9Np-9TCUZ2OOyGBrg8xijb2EK9wdq3ddXJRj8_V936ymxnbsYGg9qoKIfDM7OzMf_-_z8kmUafHidVrTFRSuLypG5vHxmNKHyE5TgrcYOVq9JQ_11FXuxDh0vkVUnKDPhhnKTWbnk5PKRKijk2ggM6j2XBNZXK0gdu_r3VeYno2nVH4wdiCYnnjg_NpeDBVRdG68bWT4muPuQkIxqZ1pXMELEwMEB1oC_iPCdHYFXx0blUhXLgcNkZDrUPEVNsi9Y2F93Ud4Cb3po7c2rsNWm1z6v45Ca7x_F9SxlgHdXKyMrFsltPcrU_6NVNZM726Oj8ZKyNjLisTykOiPB4nxoboG9rf2bDwSEvLjSXSiiqxznILi3Hr_AMFzLquDBYUuzcVBmqF676OukXnKm5zjx5peBJtnvRre5IY_jy_BrqlWPDxRe5sRBuTu-Nk2diiwmKhfTT39B70LHMK48pjCDxSxArXGP1uGKtAFlbL7FxOA5RujbVejcUayzElh9BBj_RwJjpp9kOier2lo2maZlbssJCZF53HFGRislmWZJb9quCFXTO7d6uCp--S2Wd9TrlP61YFrVkz23lVwWDVzLJTFYyNmtnOp9zs5xqVp-oFV_Ca3pkd5B6qvl9tWmBPg8osQIvDj7UC2OPwUvWXLLT3MQwK2HT82cGgoGOBYwMMfd1zEqRTCt-GIbMvUJCz87vMtjTI5x6HYbAxDkrqV2jR69jdXtB_Cs5mZ7-ks1_TsxnHugpHapT8wrqJpfO8VO7FG2pURTNtSetBeTGYjNg-NMCyMVVcLHdstqfy0vL9se12O8275D3n5O3YTQJUZt_ADXeGS25NBw_Ak9l_gX7oD52RX45MJhc9VJMJ5Z-N0NX83dIlFYJXn7gRxCTeUtYnrlrWJDPg1mf_IOgkNeaOk5md3LKNMIyxIaCixGKJ0AT0QFwFYrJ3xyeyV6Bb8B2UjoZnn6z1TrzSWaczy3Qicr2B65Zx_vrJjHf99wi-Jv2NUEmJ_49lq-N1D-bBd5Mpfh8BCgLoq9MwsxRnNtr2f7XYUqzjtg1f7skdVctlt0wwDARz-PsAluMfWophTzHH3_INR13Fb0Lzaxvc9oA_2eJixDgl2n7tyMLO5GOPKjCqMBeQhKO7t4exPYKvX2ha4haWO5g_lX44dBjaIzJg8vgfVKhqIw) · [raw](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-docs/SKILL_FACTS.md)

## License

MIT. Built by [Catalyst Forge LLC](https://www.catalystforge.com).
