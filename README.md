# DocuPuncture

Treat the document you already have.

DocuPuncture prepares an Apps Script that makes targeted changes to a Google Doc, Sheet, or Slides file you already have. You review the script and run it yourself. The first run is a dry run that only logs. The script is designed to preserve surrounding structure for supported edit types.

## Install in your agent

1. Choose a surface: Docs, Sheets, or Slides.
2. Download the matching zip from [docupuncture.dev/install](https://docupuncture.dev/install).
3. Put the folder where your agent reads skills, then ask for a fictional dry-run script with `DRY_RUN = true`.

Full host routes: [docupuncture.dev/install](https://docupuncture.dev/install).

| Skill | Surface | Fit |
| --- | --- | --- |
| [`docupuncture-docs`](skills/docupuncture-docs/SKILL.md) | Google Docs | Comments, tabs, lists, partial styling. |
| [`docupuncture-sheets`](skills/docupuncture-sheets/SKILL.md) | Google Sheets | Grid and ranges. Notes and validation stay on cells you do not rewrite. |
| [`docupuncture-slides`](skills/docupuncture-slides/SKILL.md) | Google Slides | Text and content. Layout surgery is higher risk. |

The skill does not grant Google access. Chat returns the script. The live file changes only when you paste it into Extensions → Apps Script and run it.

## Other installation methods

```bash
pnpm add docupuncture
```

Copy one folder from `node_modules/docupuncture/skills/` into the agent's skills directory.

```bash
git clone https://github.com/Catalyst-Forge-LLC/docupuncture.git
# then copy skills/docupuncture-docs/  (or -sheets / -slides)
```

Site: [docupuncture.dev](https://docupuncture.dev) · [Posts](https://docupuncture.dev/posts)

## How a run works

1. Name the target file (URL or ID) and the intended changes.
2. Give the agent exact current text for anchors, or let a host Drive connector read the file if you already have one. The skill does not grant Google access.
3. Review the Apps Script it writes.
4. Open the file → Extensions → Apps Script → paste → run `applyEdits`.
5. First run is a dry run (`DRY_RUN = true`). Read the log, flip the flag, then run again.

The script runs as you. Missing or ambiguous anchors are logged. It never invents a location. For the showcased insert and update operations, a repeat run skips work that is already there.

## Why the name

The other tools in the shop strike, press, or contain. A needle is still metal from the same fire, but you don't swing it. You place it.

Acupuncture treats a living body in place: insert at a point, leave the rest alone. DocuPuncture does that to a document you already care about.

Closest cousin on the shelf is [TemperPass](https://temperpass.dev): a rule set you point an agent at.

<!-- xfacts-label -->

## xFacts label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNpVkUFLAzEQhf_K8s5pi9dcC4JSvdibiKTZaRrNzoRkUllK_7ukVam3YeZ98yYvJxxh7wzYTQSLUXzLjb22QjDQOffuJCyFssCgqtNWYeG8xmPXpOiJa5c9PWyvCv8Je0JyHJoLffLoju7Fl5jVDNs507WGQWms8eL8LCMtPyoMDlI1coDFOkkb98kVwtlgpFxhX09gWATSfUyUC9XOZFjsSf1hKDSJ0tCHgxdWYsXZXKGv4jgkKj_ASDnJPBHroCJp2EsZ_I3lm0E9-j_Lm2sMCuzvoReuB9c3OY3CQ4165XctprGHkZ3_dIHeJ8cuUKcz5wkGPsKChS9P7CHXqFLmvl41V7tahaiHtlt6mVZrpy7NVRf3UgItNpv16t-Pnb8BxMCe5g) · [raw](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/APP_FACTS.md)
- **SkillFacts:**
  - [docupuncture-docs](https://skillfacts.dev/v#sf1.eNqdUrFuGzEM_RVBs8-OO3oLXLRLAgToGASGLNF3gnWkQFKXBkH-vdQBRj106iY9Uo_vPerTL_6w33gMM_iDTxRbbRi1MQx2Eb_xCRYoVIGtfgwayoeo-0E8ghUXYMmEVnrY7rd7Q0SDNjEgRM1L7yk5Akqnf6whTjB82z4YfM2YDIuNhXiQay7F0Nq40tr8whCzgMs41BIiOEhZxSm5gA5-Z9GMo_tJNBZw3ym6JQdXgygMAdPADd1jreJ-Rc5VOzXTAhgwGvunF2rcT35SrXLY7casUztvI827m81htTk8PR1398msMs8ly_SvUL42PqMoN_NPKCcGM71OnMAsHjwSdgoEfSe-GpDnWjIkwy65gBgVzLc-Y1Oi0mkuwGDiLbRXf7PNFrF7Pr44m5JO_fkpEiqg-reNPzdMBdIpsOaL7cPW8mowjAwiXZJCgRmUP_7KStCDDav23m4CJpqhhvE-rPs4tvZD7CGDLS4rrWT_FaplhjFod2hH-PoDAGXqTA) · [raw](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-docs/SKILL_FACTS.md)
  - [docupuncture-sheets](https://skillfacts.dev/v#sf1.eNqtk8Fu20YQhl9lwFxiwZRlH4pie0rtOgjiBAZktAfREFbkWFyY2iV2l1KFNM_Ve5-sM0NSpG0ZTYPAECzNzM7O_Pt_X5Jtos5PE6s3mKikcHlTNzaPjcc0lIgxJKdJgVusXI2eKi511NU-RLh2fo2U3KIPxllKzabn03OKhKhjEyig82i2XFOZHG3gC97VOi8xvZjOKPxobEGxvPHB-TQ8mqqiaN342knxrcfcBARj07rSOQIWJgaIDrQF_NOEaOwa3ju3rhDmPC1sjYZah4iptkXqGwvv6jrAPPemjtzcuy1abXPq_yUJrvH8LSljrIM6O1ubWDarae42Z_2iqSya3txcno3VkUFXlSGRjsjy9TQxNkTfkALOhqVHWltuLJGWVIl1lltYjDvnHylgNnVlsKDYg6kwUCvc9HXULTpXcZsH9EjDk2yLpFv8ypPI8OnyFuiWYsnHl7mzEW1M7k-TVWOLCoul9tE80IvQwywojGuPIfBIESvcYPT7YawCWVots3M5DVC6DdZ6PRZrLMeUPEIHPdLTmeik2XeJ6vWOjqZpmlkxxFJmXnYuU5CJzWZZkln2rIIjls3swbEKnr5MZp91OudOrWMVtIbNbOdXBYNdM8tuVTA2a2Y7r3KzH21WnqsXXcFrmmd2kHyo-nbFaYUDESqzAC0S39cK4IDES91f8tDex0AoYOPxzw4IBR0PHBuA6Oue0yCdUvhvIDL7Agc5u7jPbEuE_DwgMQw2RkJJ_Roteh272wv6puBidvFTOvs5vZhxrKtwpEbJL6ybWDrPS-Ve3KFGVTTTjrQelBeLyYjtQwOsGlPF5WrPdnsqLy3fH9vtdtO8Sz5wTt6O3SRQZfYNzLkzXHNrOngUoMz-BfRH_-iUfDgymVz1YE0mlH82RFfze0uYVAhifWIumEm8Ja1P3LS8SWZArs9-JPAkNWaPk5md3LGRMIzBIaSixGKJ0AT0QGQF4rL3xx9ksEC34C9QOhqenbLRe3FLZ57OLtOJCPYGblvO-dcP57y74YDha-LPhUxK_H80WyVveziPvpxM8WEEKQikr07D3FKc-Wjbf27RpVjHbhu-PtA7qpbL7phiGCjm8LdBLMd_bUmGA8kcf8s3nHQVvwnRr21w10P-ZIurEeeUaPu1Iws_k_c9rsC4wkJgEpbu3x5H9wT--ZumJXZhtYfFU-mHQ8fBPSELJl__BdwOb3U) · [raw](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-sheets/SKILL_FACTS.md)
  - [docupuncture-slides](https://skillfacts.dev/v#sf1.eNq1k8Fu20YQhl9lwFxiwZRlH4pie0rtOgjiBAZktAfREFbkWFyY2iV2l1KFNM_Ve5-sM0NSpG0ZTQMEhmBpZnZm9t__-5JsE3V-mli9wUQlhcuburF5bDymoTIFhuQ0KXCLlavRU8WljrrahwjXzq-Rklv0wThLqdn0fHpOkRB1bAIFdB7Nlmsqk6MNPOBdrfMS04vpjMKPxhYUyxsfnE_Do6kqitaNr50U33rMTUAwNq0rnSNgYWKA6EBbwD9NiMau4b1z6wphLttCgfkjbI2GWoeIqbZF6hsL7-o6wDz3po48wrstWm1zmvIlCa7x_C0pY6yDOjtbm1g2q2nuNmf9dVO5bnpzc3k21kjWXVUmlMfE-XqaGBuib0gHZ8PSI11eJpZIV1WJdZZbWIw75x8pYDZ1ZbCg2IOpMFAr3PR11C06V3GbB_RIy5N4i6S7_pUnqeHT5S3QlGLJx5e5sxFtTO5Pk1VjiwqLpfbRPNC70PMsKIxrjyHwShEr3GD0-2EtkpME1rI7l9MCpdtgrddjscZyTMkpdNAjPaCJTpp9l6he7-homqaZFVssZedl5zUFmZhtliWZZecqOGLczB58q-Dpy2T2Wadz7tT6VkFr28x2rlUwmDaz7FkFY8tmtnMsN_sxluXteukVvKZ8Zgfhh6pv150ucuBCZRagBeP7WgEcwHip_ksq2nmMhQK2H__ssFDQUcGxAYu-7jkT0imF_8Yisy-gkLOL-8y2XMjPAxjDYmMwlNSv0aLXsZte0DcFF7OLn9LZz-nFjGNdhSM1Sn5h3cTSeb5U7sUjalRFO-1I60F5MZqs2D40wKoxVVyu9my6p_LS5ftju91umnfJB87J27GbBK3MvoE5d4Zrbk0Hj2KU2b-A_ugfnZIPRyaTqx6vyYTyz5boan5vOZMKAa1PzAU2ibe89YmbljrJDOD12Y-En6TGBHIys5M7NhLxNAKHkIoSiyVCE9ADkRWIzt4ff5DBAk3BX6B0tDw7ZaP34pbOPJ1dphMR7A3ctrTzrx9EezfnAONrTzAXPinx_wFt9bztET36frLFhxGqIKi-ug3TS3GmpG3_uQWYYh3Bbfj6wPCoWobdMcswsMzhb0NZjv_a8gwHnjn-liecdBW_Cdev3eCuR_3JLa5GtFOi7deuLBRN3vfQAkMLC0FKiLp_exzgE_jnb9qWCIbVHhZPpR8OHcf3hIyYfP0XCNx1ww) · [raw](https://github.com/Catalyst-Forge-LLC/docupuncture/blob/main/skills/docupuncture-slides/SKILL_FACTS.md)


## License

MIT. Built by [Catalyst Forge LLC](https://www.catalystforge.com).
